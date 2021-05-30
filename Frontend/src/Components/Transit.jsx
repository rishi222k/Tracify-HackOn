import React from 'react'
import IndiaMap from '../Images/IndiaMap.png'
import {Link} from "react-router-dom";

const Transit = () => {
    return (
        <div className="Transit">
        <div className="india">
              <img src={IndiaMap} alt="." />
        </div>
        <div className="desc">
        <h1>Transit Records</h1>
        <br/>
        <br/>
        <p>The humanitarian cost of the coronavirus outbreak continues to rise. Hundreds of thousands of cases & thousands of virus-related deaths have been reported. Drawing on real-time data, we made live charts available to track the spread of the pandemic around the world.</p>   
        
        <Link to="/transit">Learn more</Link>
        </div>
        </div>
    )
}

export default Transit
