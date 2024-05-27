import React from 'react'
import "./Technology.css"
import { useState } from 'react'
function Tech() {
  const [Toggle, setToggle] = useState(1)
  const Updatetoggle = (id) => {
    console.log(id)
    setToggle(id)
  }
  return (
    <>
      <section className='technology-section'>
        <div className="tech-allT">
          <div className="nav-headingT">
            <h3 >03 SPACE LAUNCH 101</h3>
            <div className="nav-contentT">
              <div className="tech-navT">
                <div className={"nav-optionT"} onClick={() => { Updatetoggle(1) }}>1</div>
                <div className={"nav-optionT"} onClick={() => { Updatetoggle(2) }}>2</div>
                <div className={"nav-optionT"} onClick={() => { Updatetoggle(3) }}>3</div>
              </div>
              <div className={Toggle === 1 ? "show-contentT" : "contentT"}>
                <div className="all-contentT">
                  <h4>THE TERMINOLOGY...</h4>
                  <h1>LAUNCH VEHICLE</h1>
                  <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                </div>
              </div>
              <div className={Toggle === 2 ? "show-contentT" : "contentT"}>
                <div className="all-contentT">
                  <h4>THE TERMINOLOGY...</h4>
                  <h1> SPACEPORT </h1>
                  <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
                </div>
              </div>
              <div className={Toggle === 3 ? "show-contentT" : "contentT"}>
                <div className="all-contentT">
                  <h4>THE TERMINOLOGY...</h4>
                  <h1>SPACE CAPSULE</h1>
                  <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={Toggle === 1 ? "show-contentT" : "contentT"}>
          <img src="tech1D.jpg" alt="" id='imgT' />
          </div>
          <div className={Toggle === 2 ? "show-contentT" : "contentT"}>
          <img src="techD.jpg" alt="" id='imgT' />
          </div>
          <div className={Toggle === 3 ? "show-contentT" : "contentT"}>
          <img src="tech2D.jpg" alt="" id='imgT' />
          </div>
         
        </div>
      </section>
    </>
  )
}

export default Tech
