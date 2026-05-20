import React from 'react'
import './ServicesComponent.css'
import { assets } from '../../assets/assets'

const ServicesComponent = () => {
  return (
    <>
    
    <section className="services">
        
        <div className="services-header">
            <div className="services-header-left">
                <h1 className='header'>OUR SERVICES</h1>
            </div>
            <div className="services-header-right">
                <img src={assets.time} alt="Image" />
            </div>
        </div>
        
        <div className="services-container">
            {/*------------------------*/}
            <div className="services-left">
                <img className='service-img' src={assets.beatsIcon} alt="image" />
                <h1>BEAT MAKING</h1>
                <p>The Don is a leading kenyan beat maker who is currently working with house-hold names like Metro Stunna and UncoJingJong. Any genre, anytime, anyday.  Welcome</p>
            </div>
            {/*------------------------*/}
            <div className="services-mid">
                <img className='service-img' src={assets.recording} alt="image" />
                <h1>RECORDING</h1>
                <p>Equiped with top not recording devices, the studio is always open to artists who wish to showcase their talent to the world. Trust the Don to develop your unique industry sound.</p>
            </div>
            {/*------------------------*/}
            <div className="services-right">
                <img className='service-img' src={assets.mixing} alt="image" />
                <h1>MIXING & MASTERING</h1>
                <p>If you are tired of your tracks sounding muddy and dusty, you are at the right place. The Don has a proven track record of producing industry standard hits like "Cash-Metro Stunna"</p>
            </div>
        </div>
        <div className="brochure-btn">
            <a href={assets.brochure} download="brochure.jpeg" ><button>BROCHURE</button></a>
        </div>
    </section>
    </>
  )
}

export default ServicesComponent