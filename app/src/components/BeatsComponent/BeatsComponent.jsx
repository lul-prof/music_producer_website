import React, { useContext } from 'react'
import './BeatsComponent.css'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { assets } from '../../assets/assets'

const BeatsComponent = () => {
  const {beats,currency,addToCart,token}=useContext(ShopContext);
  const navigate=useNavigate();
  return (
    <>
    <section className="beats-component">
      {/*--------------------------------*/}
      <div className="beats-component-header">
        <h2>FEATURED BEATS & INSTRUMENTALS</h2>
      </div>
      {/*--------------------------------*/}
      <div className="featured-beats">
        {
          beats.map((beat)=>(
            beat?.isFeatured?
            <div key={beat?._id} className="featured-beat">
                <div className="featured-beat-thumbnail">
                 <Link to={`/beat/${beat?._id}`}><img src={beat?.thumbnail} alt="beat thumbnail" /></Link> 
                </div>
                <div className="featured-beat-rating">
                  <img src={assets.star2} alt="rating" />
                  <img src={assets.star2} alt="rating" />
                  <img src={assets.star2} alt="rating" />
                  <img src={assets.star2} alt="rating" />
                  <img src={assets.star2} alt="rating" />
                </div>
                <div className="featured-beat-title">
                  <h5>{beat?.title}</h5>
                </div>
                <div className="featured-beat-price">
                  <h5>{currency} {beat?.price.toLocaleString()}</h5>
                </div>
                <div className="featured-beat-button">
                <button onClick={()=>(token===""?navigate('/login'):addToCart(beat?._id))}>ADD TO CART</button> 
                </div>
            </div>
            :
            <></>
          ))
        }
      </div>
      <div className="featured-beats-btn">
       <Link to={'/beats'}><button>ALL BEATS</button></Link> 
      </div>
    </section>
    </>
  )
}

export default BeatsComponent