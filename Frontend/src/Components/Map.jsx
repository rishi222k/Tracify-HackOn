import React from 'react'
import {MapContainer as LeafletMap,TileLayer,CircleMarker,Popup} from "react-leaflet"
import numeral from "numeral"


const Map = (props) => {

    const casesTypeColors = {
        0: {
          hex: "#fb4443",
          multiplier: 5,
          type:"cases"
        },
        1: {
          hex: "#0054FF",
          multiplier: 0.7,
          type:"partiallyvaccinated"
        },
        2: {
          hex: "#33FF5A",
          multiplier: 0.8,
          type:"fullyvaccinated"
        },
        3: {
            hex: "#7E33FF",
            multiplier: 0.8,
            type:"passengertravel"
        },
      };
      const maptype=casesTypeColors[props.type].type
      console.log(casesTypeColors[props.type].hex)
      
    return (
        <div className="Map">
            <LeafletMap center={props.center} zoom={props.zoom}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            {props.states.map((state)=>(
            <CircleMarker
            center={[state.lat,state.long]}
            fillOpacity={0.5}   
            pathOptions={{ color: casesTypeColors[props.type].hex }}
            radius={(state[maptype])/1000*casesTypeColors[props.type].multiplier}
            >
            <Popup>
                <div className="Popup">
                    <div className="title">{state.State}</div>
                    <div className="cases">
                    Cases: {numeral(state.cases).format("0,0")}
                    </div>
                    <div className="vaccinated">
                    Vaccinated: {numeral(state.fullyvaccinated).format("0,0")}
                    </div>
                    <div className="travel">
                    Travel/day: {numeral(state.passengertravel).format("0,0")}
                    </div>
                </div>
            </Popup>
            </CircleMarker>
            ))}
                
            </LeafletMap>
        </div>  
    )
}

export default Map
