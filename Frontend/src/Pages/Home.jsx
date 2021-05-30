import React from 'react'
import Nav from '../Components/Navbar'
import '../Styles/Home.scss'
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.css"
import Main from '../Components/Main'
import Features from '../Components/Features'
import Transit from '../Components/Transit'
import Charts from '../Components/Charts'
import Footer from '../Components/Footer'
import Counter from '../Components/Counter'
import Crypto from '../Components/Crypto'

const Home = () => {
    
    return (
        <div>
           <Nav/>
           <Main/>
           <Features/>
           <Counter/>
           <Transit/>
           <Charts/>
           <Crypto/>
           <Footer/>
        </div>
    )
}

export default Home
