import React from 'react'
import crypto from '../Images/Group 98.svg'

const Crypto = () => {
    return (
        <div className="Crypto">
        <h1>Our Very Own</h1>
        <h1><span> Tracify </span>Currency</h1>
        <div className="content">
            <div className="desc">
                <h1>VAX MOON( $VAX )</h1>
                <p>Each Bitcoin is basically a computer file which is stored in a 'digital wallet' app on a smartphone or computer. People can send Bitcoins (or part of one) to your digital wallet, and you can send Bitcoins to other people. Every single transaction is recorded in a public list called the blockchain.</p>
            </div>
            <img src={crypto} alt="Crypto" />
        </div>
        <a href=".">Buy Now</a>
        </div>
    )
}

export default Crypto
