import React, { useContext } from 'react'
import './BeatsComponent.css'
import { ShopContext } from '../../Context/ShopContext'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'


const BeatsComponent = () => {
  const {beats,currency}=useContext(ShopContext)
  return (
    <>
    <section className="beats">
      <div className="beats-circle">

      </div>
      {/*-----------------------------*/}
      <div className="featured-beats-container">
        <div className="featured-beats-header">
          <div className="featured-beats-header-left">
            <h1>FEATURED BEATS</h1>
            <img src={assets.bullet} alt="bullet" /> 
          </div>
          <div className="featured-beats-header-right">
           <Link to={'/beats'}><button>ALL BEATS</button></Link>
          </div>
        </div>
        {/*-----------------------------*/}
        <div className="featured-beats">
          {
            beats.map((beat)=>(
              beat?.isFeatured?
              <div className="featured-beat">
                <div className="featured-beat-img">
                 <Link to={`/beat/${beat._id}`}><img src={beat?.thumbnail} alt="thumbnail" /></Link> 
                </div>
                <hr />
                <div className="featured-beat-details">
                    <div className="featured-beat-details-left">
                      <h2>{beat?.title}</h2>
                    </div>
                    <div className="featured-beat-details-right">
                      <h2>{currency} {beat?.price.toLocaleString()}</h2>
                    </div>
                </div>
              </div>
              :<></>
            ))
          }
        </div>
      </div>
    </section>
    </>
  )
}

export default BeatsComponent