import React, { useState } from 'react'
import Logo from '../Images/Logo.svg'
import hamburger from '../Images/hamburger.svg'
import cross from '../Images/Cross.svg'
import {Link} from "react-router-dom";

const Navbar = () => {

  const [toggle, settoggle] = useState(false)
    

    return (
      <div className="NavBar">
        <div className="row">
          <div className="nav-items">
          <div className="head">
            <div className="hammenu">
            <div className={`sidenav ${toggle ? 'sidenav-active':''}`}>
            <img src={cross} alt="cross" id="cross" onClick={()=> settoggle(!toggle)}/>
            <div className="menu">
            <a href=".">About Us</a>
              <a href=".">Live Charts</a>
              <a href=".">Transit Records</a>
              <a href=".">NFT</a>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
            
            </div>
            <div className={`overlay ${toggle ? 'overlay-active':''}`}></div>
              <img src={hamburger} alt="menu"  onClick={()=> settoggle(!toggle)}/>
            </div>
            
            <div className="title">
            <Link to="/">
              <img src={Logo} alt="logo" /></Link>
              <h1>Tracify</h1>
            </div>
            </div>
            <div className="register">
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>     
        
    )

    }
export default Navbar
