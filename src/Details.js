import React from 'react'
import './Details.css'


function Details() {
  return (
    <div className='details'>
      <div className='details-aboutme' id='about'>
        <h1 className='details-aboutme-headline' >About me</h1>
        <p className='details-aboutme-easy'>hi fellas!,My name Lathika Dilshan.I am a computer science undergraduate student in University of Kelaniya.I am very good at starting new projects and learning things step by step.I  always try to be my best version and be friendly with everyone.I am very good at working as a team and always willing to share my knowledge with my team members.</p>
      </div>
      <div className='details-education'>
        <h1>Education Journey</h1>
        <hr />
        <dl>
          <dt style={{
            fontWeight: "900",
            fontSize:"20px",
          }}>Primary education</dt>
          <dd style={{
            fontWeight: "700",
            opacity:0.7
          }}>Batemulla National School-galle</dd>
          <dd style={{
            fontWeight: "700",
            opacity:0.7
          }}>2008-2012</dd>

          <p></p>

          <dt style={{
            fontWeight: "900",
            fontSize:"20px",
          }}>Secondary Education</dt>
          <dd style={{
            fontWeight: "700",
            opacity:0.7
          }}>Saint Aloysius' College-Galle</dd>
          <dd style={{
            fontWeight: "700",
            opacity:0.7
          }}>2013-2022</dd>

          <p></p>

          <dt style={{
            fontWeight: "900",
            fontSize:"20px",
          }}>higher education</dt>
          <dd style={{
            fontWeight: "700",
            opacity:0.7
          }}>B.Sc. Honours in Computer Science(Undergraduate)</dd>
          <dd style={{
            fontWeight: "700",
            opacity:0.7
          }}>University of Kelaniya</dd>
        </dl>
        <h1>IT related experience</h1>
        <hr />
        <dl>
        <dt style={{
            fontWeight: "900",
            fontSize:"20px",
          }}>Computer Science Student Associantion (University of Kelaniya)</dt>
          <dd style={{
            fontWeight: "700",
            opacity:0.7
          }}>joined as a member - Sep 11,2023</dd>
          <pre/>
          <dd style={{
            fontWeight: "700",
            opacity:0.7
          }}>IdeaForge compitation</dd>
          <dd style={{
            fontWeight: "700",
            opacity:0.7
          }}>work as organising committee vice president in external relation team</dd>


        </dl>
        <h1>Other experience</h1>
        <hr />
        <dl>
        <dt style={{
            fontWeight: "900",
            fontSize:"20px",
          }}>Leo club (University of Kelaniya)</dt>
          <dd style={{
            fontWeight: "700",
            opacity:0.7
          }}>joined as a member - oct 10,2023</dd>
          <pre/>
          <dd style={{
            fontWeight: "700",
            opacity:0.7
          }}>thuru project</dd>
          <dd style={{
            fontWeight: "700",
            opacity:0.7
          }}>work as organising committee PR coordinator</dd>



        </dl>
      </div>
    </div>
  )
}

export default Details
