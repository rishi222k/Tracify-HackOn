#!/usr/bin/python3
import os
import requests
import json
from brownie import AdvancedCollectible, network
from metadata import sample_metadata
from scripts.helpful_scripts import get_breed
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

breed_to_image_uri = {
    "PUG": "https://ipfs.io/ipfs/QmcwzPofuAL56VZuCTbov5Vi3x5SM6sfFWFKMG1uy7wTVP?filename=pug.png",
    "SHIBA_INU": "https://ipfs.io/ipfs/QmTgoawGorhnRWe4ooEZ8iHnB4AjNDrQiHRAxSf4m422CQ?filename=shiba-inu.png",
    "ST_BERNARD": "https://ipfs.io/ipfs/QmNpXDerZdbnHM4vrcuG1o6vs9Czf9umhRoF8Gn5fvX1VR?filename=st-bernard.png",
}


def main():
    print("Working on " + network.show_active())
    advanced_collectible = AdvancedCollectible[len(AdvancedCollectible) - 1]
    number_of_advanced_collectibles = advanced_collectible.tokenCounter()
    print(
        "The number of tokens you've deployed is: "
        + str(number_of_advanced_collectibles)
    )
    write_metadata(number_of_advanced_collectibles, advanced_collectible)


def write_metadata(token_ids, nft_contract):
    for token_id in range(token_ids):
        collectible_metadata = sample_metadata.metadata_template
        breed = get_breed(nft_contract.tokenIdToBreed(token_id))
        metadata_file_name = (
            "./metadata/{}/".format(network.show_active())
            + str(token_id)
            + "-"
            + breed
            + ".json"
        )
        if Path(metadata_file_name).exists():
            print(
                "{} already found, delete it to overwrite!".format(
                    metadata_file_name)
            )
        else:
            print("Creating Metadata file: " + metadata_file_name)
            collectible_metadata["name"] = get_breed(
                nft_contract.tokenIdToBreed(token_id)
            )
            collectible_metadata["description"] = "You've been vaccinated and have received {}!".format(
                collectible_metadata["name"]
            )
            image_to_upload = None
            if os.getenv("UPLOAD_IPFS") == "true":
                image_path = "./img/{}.png".format(
                    breed.lower().replace('_', '-'))
                image_to_upload = upload_to_ipfs(image_path)
            image_to_upload = (
                breed_to_image_uri[breed] if not image_to_upload else image_to_upload
            )
            collectible_metadata["image"] = image_to_upload
            with open(metadata_file_name, "w") as file:
                json.dump(collectible_metadata, file)
            if os.getenv("UPLOAD_IPFS") == "true":
                upload_to_ipfs(metadata_file_name)

# curl -X POST -F file=@metadata/rinkeby/0-SHIBA_INU.json http://localhost:5001/api/v0/add


def upload_to_ipfs(filepath):
    with Path(filepath).open("rb") as fp:
        image_binary = fp.read()
        ipfs_url = (
            os.getenv("IPFS_URL")
            if os.getenv("IPFS_URL")
            else "http://localhost:5001"
        )
        response = requests.post(ipfs_url + "/api/v0/add",
                                 files={"file": image_binary})
        ipfs_hash = response.json()["Hash"]
        filename = filepath.split("/")[-1:][0]
        image_uri = "https://ipfs.io/ipfs/{}?filename={}".format(
            ipfs_hash, filename)
        print(image_uri)
    return image_uri
