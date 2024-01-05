import React from 'react'
import './Intro.css'


function Intro() {
  return (
    <div className='intro' >
      <div className='intro-left'>
        <div className='intro__right-p'>
          <span className="intro__right-p1">
            <span style={{color: "rgb(186, 239, 224)"}}>Hi</span > There 
          </span>
          <pre/>
          <span className="intro__right-p2">
          Lathika_Dilshan 
          </span>
          <pre/>
          <span className="intro__right-p3">
            I'm computer science undergraduate in University of Kelaniya.I'm hard worker and quicker learner.Love to work with new communitos
          </span>
        </div>
      
      </div>
      <img src='./images/intro__image.jpg' className='intro__image'/>
    </div>
  )
}

export default Intro
