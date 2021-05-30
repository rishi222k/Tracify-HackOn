import React from 'react'
import statistics from '../Images/statistics.svg'
import pointer from '../Images/pointer.svg'
import blockchain from '../Images/blockchain.svg'

const Features = () => {
    return (
        <div className="Features">
            <h1>Features</h1>
            <div className="row cards">
                 <div className="col-xl-4 col-xxl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="card">
                    <img src={statistics} alt="." />
                    <br/>
                    <br/>
                     <h2>Live Charts</h2>
                     <br/>
                     <p>The humanitarian cost of the coronavirus outbreak continues to rise. Hundreds of thousands of cases & thousands of virus-related deaths have been reported. Drawing on real-time data, we made live charts available to track the spread of the pandemic around the world.</p>                 
                    </div>
                </div>
                <div className="col-xl-4 col-xxl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="card">
                    <img src={pointer} alt="." />
                    <br/>
                    <br/>
                     <h2>Transit Records</h2>
                     <br/>
                     <p>The humanitarian cost of the coronavirus outbreak continues to rise. Hundreds of thousands of cases & thousands of virus-related deaths have been reported. Drawing on real-time data, we made live charts available to track the spread of the pandemic around the world. </p>                 
                    </div>
                </div>
                <div className="col-xl-4 col-xxl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="card">
                    <img src={blockchain} alt="blockchain" />
                    <br/>
                    <br/>
                     <h2>Blockchain Enabled</h2>
                     <br/>
                     <p>Using blockchain, you can implement a system that collects location data from many interconnected systems and deliver exact location details to the customers. The application of this project can be extended to other areas like airlines to find lost baggage, car rentals for tracking rented car etc.</p>               
                    </div>
                </div>

            </div>  
            </div>       
            
        
    )
}

export default Features
