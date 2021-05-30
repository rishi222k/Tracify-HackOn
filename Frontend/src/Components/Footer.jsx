import React from 'react'
import Logo from '../Images/Logo.svg'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="title">
              <img src={Logo} alt="logo" />
              <h1>Tracify</h1>
            </div>
              <p>Copyright © 2021 Tracify. | All Rights Reserved</p>
        </div>
    )
}

export default Footer
