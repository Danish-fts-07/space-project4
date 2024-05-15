import React, { useState } from 'react'
import "./Destination.css"
// import { useState } from 'react'
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import Destinationbar from './Destinationbar'
// import { BrowserRouter } from 'react-router-dom'
function Destination() {
  const [Toggle, setToggle] = useState(1)
  const Updatetoggle = (id) => {
    console.log(id)
    setToggle(id)
  }
  return (
    <>
      <section className='destination-section'>
        {/* <div className="desti-h3">Pick up Your Destination</div> */}
        <div className="destination-main">
        <div className="nav-content">
            <div className="destination-nav">
              <div className={"navD-option"}onClick={() => { Updatetoggle(1) }}>MOON</div>
              <div className={(e) => { return e.isActive ? "navD-option" : "" }} onClick={() => { Updatetoggle(2) }} >MARS</div>
              <div className={(e) => { return e.isActive ? "navD-option" : "" }} onClick={() => { Updatetoggle(3) }}>EUROPA</div>
              <div className={(e) => { return e.isActive ? "navD-option" : "" }} onClick={() => { Updatetoggle(4) }}>TITAN</div>
            </div>
            <div className={Toggle === 1 ? "show-contentD" : "contentD"}>
              <div className="all-contentD">
                <h2>MOON</h2>
                <p> See our planet as you’ve never seen it before. A perfect relaxing <br /> trip awayto  help regain perspective and come back refreshed. While <br />you’re there, take in some history by visiting the Luna 2 and Apollo <br /> 11 landing sites.</p>
              </div>
            
            <div className="destination-time"><div className="d1st"><p>Avg. distance</p><h3> 384,400 km</h3></div><div className="d1st"><p>Est. travel time</p><h3>3 days</h3></div></div>
            </div>
            <div className={Toggle === 2 ? "show-contentD" : "contentD"}>
              <div className="all-contentD">
                <h2>MARS</h2>
                <p> See our planet as you’ve never seen it before. A perfect relaxing <br /> trip awayto  help regain perspective and come back refreshed. While <br />you’re there, take in some history by visiting the Luna 2 and Apollo <br /> 11 landing sites.</p>
              </div>
            
            <div className="destination-time"><div className="d1st"><p>Avg. distance</p><h3> 384,400 km</h3></div><div className="d1st"><p>Est. travel time</p><h3>3 days</h3></div></div>
            </div>
            <div className={Toggle === 3 ? "show-contentD" : "contentD"}>
              <div className="all-contentD">
                <h2>EUROPA</h2>
                <p> See our planet as you’ve never seen it before. A perfect relaxing <br /> trip awayto  help regain perspective and come back refreshed. While <br />you’re there, take in some history by visiting the Luna 2 and Apollo <br /> 11 landing sites.</p>
              </div>
            
            <div className="destination-time"><div className="d1st"><p>Avg. distance</p><h3> 384,400 km</h3></div><div className="d1st"><p>Est. travel time</p><h3>3 days</h3></div></div>
            </div>
            <div className={Toggle === 4 ? "show-contentD" : "contentD"}>
              <div className="all-contentD">
                <h2>TITAN</h2>
                <p> See our planet as you’ve never seen it before. A perfect relaxing <br /> trip awayto  help regain perspective and come back refreshed. While <br />you’re there, take in some history by visiting the Luna 2 and Apollo <br /> 11 landing sites.</p>
              </div>
            
            <div className="destination-time"><div className="d1st"><p>Avg. distance</p><h3> 384,400 km</h3></div><div className="d1st"><p>Est. travel time</p><h3>3 days</h3></div></div>
            </div>
          </div>
          <div className={Toggle === 1 ? "show-contentD" : "contentD"}>
            <div className="imge-content">
              <h3> 01 PICK UP YOUR DESTINATION</h3>
            <img src="moonD.webp" alt="" id='destination-img' />
            </div>
          </div>
          <div className={Toggle === 2 ? "show-contentD" : "contentD"}>
          <div className="imge-content">
              <h3>01 PICK UP YOUR DESTINATION</h3>
            <img src="marsD.png" alt="" id='destination-img' />
            </div>
          </div>
          <div className={Toggle === 3 ? "show-contentD" : "contentD"}>
          <div className="imge-content">
              <h3>01 PICK UP YOUR DESTINATION</h3>
            <img src="europaD.png" alt="" id='destination-img' />
            </div>
          </div>
          <div className={Toggle === 4 ? "show-contentD" : "contentD"}>
          <div className="imge-content">
              <h3>01 PICK UP YOUR DESTINATION</h3>
            <img src="titanD.png" alt="" id='destination-img' />
            </div>
          </div>
        </div>
      </section>
    </>


  )
}

export default Destination
