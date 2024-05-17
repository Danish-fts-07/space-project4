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
            <div className={crewToggle === 1 ? "crew-content" : "content"}>
              <div className="all-contentC">
              <div className="name-head">
                <h4>COMMANDER </h4>
                <h1>DOUGLAS HURLEY</h1>
                </div>
                <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
              </div>
              </div>
              <div className="crewNav">
                <div className="crew-option" onClick={() => { updatecrewToggle(1) }}></div>
                <div className="crew-option" onClick={() => { updatecrewToggle(2) }}></div>
                <div className="crew-option" onClick={() => { updatecrewToggle(3) }}></div>
                <div className="crew-option" onClick={() => { updatecrewToggle(4) }}></div>
              </div>
          </div>
          <div className={crewToggle === 1 ? "crew-content" : "content"}>

            <img src="camanderC.webp" alt="" className="crew-img" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Crew

