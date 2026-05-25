import React from 'react'
import './CtaComponent.css'
import {Link} from 'react-router-dom'
import { assets } from '../../assets/assets'

const CtaComponent = () => {
  return (
    <>
    <div className="cta">
        <img src={assets.hero_banner} alt="" />
        <div className="cta-main">
          <h2>WHAT ARE YOU WAITING FOR?</h2>
          <Link to={'/beats'}><button>LISTEN FOR FREE</button></Link> 
        </div>
    </div>
    </>
  )
}

export default CtaComponent