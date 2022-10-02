import React from 'react'
import {useState, useEffect} from 'react';
import './About.css'

const About = () => {
  const [visible,setVisible] = useState(false);

  useEffect(()=>{
    setVisible(true);
  })
  
  return (
    <div className="About" > 
      <div id="pageTitle" >
          <p>OUR TEAM</p>
      </div>
      <div className="columns" className={visible?'fadeIn':'fadeOut'}>
        <div id="team">
          <div>
            <p id="teamTitle">Andre Cox</p>
            <p id="teamPos">Developer</p>
          </div>
          <img alt="Dev" />
        </div>
        <div id="team">
          <div>
            <p id="teamTitle">Johnathan Johnson</p>
            <p id="teamPos">Developer</p>
          </div>
          <img  alt="Dev" />
        </div>
        <div id="team">
          <div>
            <p id="teamTitle">Jaden Stanton</p>
            <p id="teamPos">Developer</p>
          </div>
          <img  alt="Dev" />
        </div>
      </div>
      <div className="columns" id="middleColumn" className={visible?'fadeIn':'fadeOut'}>
        <div id="pageTitle1">
          <p>OUR TEAM</p>
        </div>
        <div id="pageData">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
      <div className="columns" id="rightColumn" className={visible?'fadeIn':'fadeOut'}>
        <div id="team">
          <img  alt="Developer" />
          <div>
            <p id="teamTitle">Team member</p>
            <p id="teamPos">Dev</p>
          </div>
        </div>
        <div id="team">
          <img  alt="Dev" />
          <div>
            <p id="teamTitle">Team member</p>
            <p id="teamPos">Dev</p>
          </div>
        </div>
        <div id="team" >
          <img  alt="Dev" />
          <div>
            <p id="teamTitle">Team Mem</p>
            <p id="teamPos">Dev</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;