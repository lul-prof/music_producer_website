import React from 'react'
import {assets} from '../../assets/assets.js'
import './AboutComponent.css'
import { Link } from 'react-router-dom'


const AboutComponent = () => {
  return (
    <>
    <section className='about' id='about'>
      {/*---------------------*/}
      <div className="about-top">
        <div className="about-top-left">
          <div className="about-top-left-header">
            <h1>ABOUT THE DON</h1>
          </div>
          <div className="about-top-left-content">
                <p><span>The Don</span> is a visionary music producer/sound engineer. Growing up in a christian background, he quickly developed a strong interest in music through instruments like the piano and Guitar. At the early phases of his sky-rocketing career, he was a freestyle rapper who took every chance and opportunity to showcase his skills to his peers.<span>The Don</span> admired and strived to emulate veteran artists like J Cole, Nyashinki and Alkaline. Interestingly, he  always wanted to be a vocalist/singer more than a rapper. 1 year down the down <span>The Don</span> needed more than rapping, he wanted to be his own "music". <span>The Don</span>, set up his first music studio at the heart of Embakasi, pipeline. Every track he produced, sounded different from what other kenyan producers were producing and artists started flooding the studio. With this successful venture into the music industry, <span>The Don</span> has become a household name in Kenya.</p>
          </div>
          <div className="about-top-left-btn">
            <Link to={'/projects'}><button>VIEW PORTFOLIO</button></Link>
          </div>
        </div>
        <div className="about-top-right">
          <div className="about-top-right-header">
            <h2>ABOUT THE DON</h2>
          </div>
          <div className="about-top-right-img">
            <img src={assets.theDon} alt="The Don" />
          </div>
        </div>
      </div>
      {/*----------------------*/}
      <div className="about-bottom">
        <img src={assets.bullet4} alt="" />
      </div>
    </section>
    </>
  )
}

export default AboutComponent



/*
<div className="about-left-content">
        
        </div>
*/