import React, { useContext } from 'react'
import './SingleBeatPage.css'
import { ShopContext } from '../../Context/ShopContext'
import { Link, useParams } from 'react-router-dom';
import {assets} from '../../assets/assets.js'


const SingleBeatPage = () => {
  const { currency, addToCart,beats,frontend_url } = useContext(ShopContext);

  const {id}=useParams();

  const beat=beats.find(b=>b._id===id);

  return (
    <>
    <div className="single-beat">
        {/*--------------------------*/}
        <div className="single-beat-left">
          <div className="single-beat-left-top">
            <img src={beat?.thumbnail} alt="beat thumbnail" />
          </div>
        </div>
        {/*--------------------------*/}
        <div className="single-beat-mid">
          <div className="single-beat-mid-top">
              <div className="single-beat-mid-top-name">
                <h3>{beat?.title}</h3>
              </div>
              <div className="single-beat-mid-top-description">
                <p>This a preview of the original beat with reduced quallity.</p>
              </div>
              <div className="single-beat-mid-top-ratings">
                <img src={assets.star2} alt="rating" />
                <img src={assets.star2} alt="rating" />
                <img src={assets.star2} alt="rating" />
                <img src={assets.star2} alt="rating" />
                <img src={assets.star2} alt="rating" />
                <p>(122)</p>
              </div>
          </div>
          <div className="single-beat-mid-bottom">
            <p>{currency} {beat?.price.toLocaleString()}</p>
          </div>
        </div>
        {/*--------------------------*/}
        <div className="single-beat-right">
          <div className="single-beat-right-audio">
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
          <div className="single-beat-right-mid">
            <div className="single-beat-right-mid-left">
              <button onClick={()=>(addToCart(beat?._id))}>ADD TO CART</button>
            </div>
            <div className="single-beat-right-mid-right">
              <Link to={`https://wa.me/254793909678?text=I%20need%20${frontend_url}/beat/${id}`} target='_blank'><button>BUY NOW</button></Link> 
            </div>
          </div>

            <div className="single-beat-right-bottom">
              <div className="single-beat-right-bottom-class">
                <div className="single-beat-right-bottom-class-left">
                  <img src={assets.truck} alt="icon" />
                </div>
                <div className="single-beat-right-bottom-class-right">
                  <div className="single-beat-right-bottom-class-right-top">
                    <h3>Free Delivery</h3>
                  </div>
                  <div className="single-beat-right-bottom-class-right-bottom">
                    <p>Free delivery within CBD and kes 200 for nearby towns</p>
                  </div>
                </div>
              </div>

              <div className="single-beat-right-bottom-class">
                <div className="single-beat-right-bottom-class-left">
                  <img src={assets.returnP} alt="icon" />
                </div>
                <div className="single-beat-right-bottom-class-right">
                  <div className="single-beat-right-bottom-class-right-top">
                    <h3>Return Policy</h3>
                  </div>
                  <div className="single-beat-right-bottom-class-right-bottom">
                    <p>7 Days return policy for all goods except beats.</p>
                  </div>
                </div>
              </div>

            
          </div>
        </div>
    </div>
    </>
  )
}

export default SingleBeatPage
