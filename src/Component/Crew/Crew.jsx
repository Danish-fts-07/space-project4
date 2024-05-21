import React, { useState } from 'react'
import "./Crew.css"
function Crew() {
  const [crewToggle, setcrewToggle] = useState(1)
  const updatecrewToggle = (id) => {
    setcrewToggle(id)
  }
  return (
    <>
      <section className='crew-section'>
        <div className="crew-all">
          <div className="content-nav">
          <h3>02 MEET YOUR CREW</h3>
          <div className={crewToggle === 1 ? "crew-content" : "contentC"}>
              <div className="all-contentC">
              <div className="name-head">
                <h4>COMMANDER </h4>
                <h1>DOUGLAS HURLEY</h1>
                </div>
                <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
              </div>
              </div>
          <div className={crewToggle === 2 ? "crew-content" : "contentC"}>
              <div className="all-contentC">
              <div className="name-head">
                <h4> PILOT</h4>
                <h1>VICTOR GLOVER</h1>
                </div>
                <p>Victor Glover Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
              </div>
              </div>
          <div className={crewToggle === 3 ? "crew-content" : "contentC"}>
              <div className="all-contentC">
              <div className="name-head">
                <h4> MISSION SPECIALIST </h4>
                <h1>MARK SHUTTLEWORTH </h1>
                </div>
                <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
              </div>
              </div>
            <div className={crewToggle === 4 ? "crew-content" : "contentC"}>
              <div className="all-contentC">
              <div className="name-head">
                <h4> FLIGHT ENGINEER</h4>
                <h1>ANOUSHEH ANSARI</h1>
                </div>
                <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
              </div>
              </div>
              <div className="crewNav">
                <div className="crew-option" onClick={() => { updatecrewToggle(1) }}></div>
                <div className="crew-option" onClick={() => { updatecrewToggle(2) }}></div>
                <div className="crew-option" onClick={() => { updatecrewToggle(3) }}></div>
                <div className="crew-option" onClick={() => { updatecrewToggle(4) }}></div>
              </div>
          </div>
          <div className={crewToggle === 1 ? "crew-content" : "contentC"}>
            <img src="camanderC.webp" alt="" className="crew-img" />
          </div>
          <div className={crewToggle === 2 ? "crew-content" : "contentC"}>
            <img src="pilotC.webp" alt="" className="crew-img" />
          </div>
          <div className={crewToggle === 3 ? "crew-content" : "contentC"}>
            <img src="spC.webp" alt="" className="crew-img" />
          </div>
          <div className={crewToggle === 4 ? "crew-content" : "contentC"}>
            <img src="enC.webp" alt="" className="crew-img" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Crew

