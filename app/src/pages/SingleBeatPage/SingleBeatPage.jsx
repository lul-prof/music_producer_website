import React, { useContext } from 'react'
import './SingleBeatPage.css'
import { ShopContext } from '../../Context/ShopContext'
import { useParams } from 'react-router-dom';
import {assets} from '../../assets/assets.js'


const SingleBeatPage = () => {
  const { currency, addToCart,beats } = useContext(ShopContext);

  const {id}=useParams();

  const beat=beats.find(b=>b._id===id);

  return (
    <>
    <div className="single-beat">
      {/*--------------------------*/}
      <div className="single-beat-top">
          <div className="single-beat-top-left">
            <img src={beat?.thumbnail} alt="thumbnail" />
          </div>
          <div className="single-beat-top-right">
            <div className="single-beat-top-right-top">
              <h3>{beat?.title}</h3>
            </div>
            
            <div className="single-beat-top-right-rating">
              <img src={assets.star2} alt="star" />
              <img src={assets.star2} alt="star" />
              <img src={assets.star2} alt="star" />
              <img src={assets.star2} alt="star" />
              <img src={assets.star2} alt="star" />
            </div>
            <div className="single-beat-top-right-price">
              <p>{currency} {beat?.price.toLocaleString()}</p>
            </div>
            <div className="single-beat-top-right-mid">
              <p>This is a beat preview with reduced quality. Purchase to get the original version.</p>
            </div>
            <div className="single-beat-top-right-audio">
              <audio
                    controls
                    preload="auto"
                    controlsList="nodownload"
                    onContextMenu={(e) => e.preventDefault()}
                  >
                    <source src={beat?.audio} type="audio/mpeg" />
                    <source src={beat?.audio} type="audio/ogg"/>
                    Your browser does not support the audio element.
                  </audio>
            </div>
            <div className="single-beat-top-right-cart">
              <button onClick={()=>(addToCart(beat?._id))}>ADD TO CART</button>
            </div>
          </div>
      </div>
      {/*--------------------------*/}
      <div className="single-beat-bottom">

      </div>
    </div>
    </>
  )
}

export default SingleBeatPage


/*

*/