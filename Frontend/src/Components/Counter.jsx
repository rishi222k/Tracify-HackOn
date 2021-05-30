import React from 'react'
import nonvac from '../Images/non-vaccine.svg'
import vac from '../Images/syringe.svg'
import infect from '../Images/virus.svg'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const Counter = () => {
  
    return (
        <div className="Counter">
            <div className="container">
            <div className="row">
                <div className="col-xl-4 col-xxl-4 col-lg-4 col-md-4 col-sm-12 col-12 card">
                <img src={infect} alt="infect" />
                <div className="content">

                <CountUp 
                start={500} 
                end={567890} 
                duration={4}
                redraw={true}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
                </CountUp>
                    <p className="subtitle">Infected</p>
                </div>
                </div>

                <div className="col-xl-4 col-xxl-4 col-lg-4 col-md-4 col-sm-12 col-12 card">
                <img src={vac} alt="vac" />
                <div className="content">
                    <CountUp 
                    start={2340} 
                    end={23444657} 
                    duration={4}
                    redraw={true}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
                </CountUp>
                    <p className="subtitle">Vaccinated</p>
                </div>
                </div>

                <div className="col-xl-4 col-xxl-4 col-lg-4 col-md-4 col-sm-12 col-12 card">
                <img src={nonvac} alt="nonvac" />
                <div className="content">
                <CountUp 
                start={500} 
                end={567890} 
                duration={4}
                redraw={true}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
                </CountUp>
                    <p className="subtitle">Non-Vaccinated</p>
                </div>
                </div>
            </div>
            </div>
            <br /><br /><br /><br />
        </div>
    )
}

export default Counter
