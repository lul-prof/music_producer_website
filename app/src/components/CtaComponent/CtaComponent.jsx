import React from 'react'
import './CtaComponent.css'
import {Link} from 'react-router-dom'
import { assets } from '../../assets/assets'

const CtaComponent = () => {
  return (
    <>
    <div className="cta">
      {/*---------------------*/}
      <div className="cta-header">
        <div className="cta-header-img">
          <img src={assets.bullet2} alt="image" />
        </div>
        <div className="cta-header-top">
          <h2>LETS CONNECT</h2>
        </div>
      </div>
      {/*---------------------*/}
      <div className="cta-mid">
        {/*---*/}
        <div className="cta-mid-class">
          <div className="cta-mid-class-in">
            <Link to={'https://www.instagram.com/the._.don._/'} target='_blank'><img src={assets.metaI} alt="image" /></Link>
          </div>
          <div className="cta-mid-text">
            <h5>Facebook</h5>
            <p>thedon254</p>
          </div>
        </div>
        {/*---*/}
        <div className="cta-mid-class">
          <div className="cta-mid-class-in">
            <Link to={'https://www.instagram.com/the._.don._/'} target='_blank'><img src={assets.insta_dark} alt="image" /></Link> 
          </div>
          <div className="cta-mid-text">
            <h5>Instagram</h5>
            <p>thedon254</p>
          </div>
        </div>
        {/*---*/}
        <div className="cta-mid-class">
          <div className="cta-mid-class-in">
            <Link to={'https://wa.me/0793909678'} target='_blank'><img src={assets.whastapp_dark} alt="image" /></Link> 
          </div>
          <div className="cta-mid-text">
            <h5>WhatsApp</h5>
            <p>thedon254</p>
          </div>
        </div>
        {/*---*/}
        <div className="cta-mid-class">
          <div className="cta-mid-class-in">
            <Link to={'https://www.instagram.com/the._.don._/'} target='_blank'><img src={assets.youtube_dark} alt="image" /></Link>
          </div>
          <div className="cta-mid-text">
            <h5>Youtube</h5>
            <p>thedon254</p>
          </div>
        </div>
        {/*---*/}
        <div className="cta-mid-class">
          <div className="cta-mid-class-in">
           <Link to={'https://www.instagram.com/the._.don._/'} target='_blank'><img src={assets.twitter_dark} alt="image" /></Link> 
          </div>
          <div className="cta-mid-text">
            <h5>Twitter</h5>
            <p>thedon254</p>
          </div>
        </div>
        {/*---*/}
        <div style={{borderRight:"0"}} className="cta-mid-class">
          <div className="cta-mid-class-in">
          <Link to={'https://www.instagram.com/the._.don._/'} target='_blank'><img src={assets.linkedIn} alt="image" /></Link>  
          </div>
          <div className="cta-mid-text">
            <h5>LinkedIn</h5>
            <p>thedon254</p>
          </div>
        </div>
      </div>
      <div className="cta-bottom">
        <div className="cta-bottom-top">
          <h3>What are you waiting for?</h3>
        </div>
        <div className="cta-bottom-mid">
           <Link to={'/beats'}><button>LISTEN FOR FREE</button></Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default CtaComponent