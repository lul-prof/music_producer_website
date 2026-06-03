import React from 'react'
import './ServicesComponent.css'
import { assets } from '../../assets/assets'
import {toast} from 'react-hot-toast'

const ServicesComponent = () => {
  return (
    <>
    <div className="services">
        {/*---------------------------*/}
        <div className="services-header">
            <div className="services-header-img">
                <img src={assets.bullet2} alt="bullet" />
            </div>
            <div className="services-header-top">
                <h2>OUR SERVICES</h2>
            </div>
            <div className="services-header-mid">
                <h4>Feel free to reach out for inquiries</h4>
            </div>
            <div className="services-header-bottom">
                <p>The Don deals with a wide range of services with the ones below being the main sought after</p>
            </div>
        </div>
        {/*---------------------------*/}
        <div className="services-mid">
            <div className="service-1">   
                <div className="service-1-top">
                    <img src={assets.recording} alt="mic image" />
                </div>
                <div className="service-1-mid">
                    <h3>Vocal Recording</h3>
                </div>
                <div className="service-1-bottom">
                    <p>The Don offers all vocal recording services charged on per hour basis</p>
                </div>
            </div>
            <div className="service-2">
                <div className="service-2-top">
                    <img src={assets.mixing} alt="image" />
                </div>
                <div className="service-2-mid">
                    <h3>Mixing</h3>
                </div>
                <div className="service-2-bottom">
                    <p>Tired of rusty mixes? The Don got you covered with industry best plugins</p>
                </div>
            </div>
            <div className="service-3">
                <div className="service-3-top">
                    <img src={assets.beatsIcon} alt="" />
                </div>
                <div className="service-3-mid">
                    <h3>Mastering</h3>
                </div>
                <div className="service-3-bottom">
                    <p>The Don specializes in optimizing your music to sound good accross all platforms</p>
                </div>
            </div>
            <div className="service-4">
                <div className="service-4-top">
                    <img src={assets.podcast} alt="image" />
                </div>
                <div className="service-4-mid">
                    <h3>Podcasts and V.O</h3>
                </div>
                <div className="service-4-bottom">
                    <p>The Don specializes in real time podcast sound design and dynamic voice overs</p>
                </div>
            </div>
        </div>
        {/*---------------------------*/}
        <div className="services-bottom">
            <div className="services-bottom-top">
                <h2>For all the services offered</h2>
            </div>
            <div className="services-bottom-mid">
                <button onClick={()=>(toast.success('Feature under development.'))}>VIEW SERVICES</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ServicesComponent