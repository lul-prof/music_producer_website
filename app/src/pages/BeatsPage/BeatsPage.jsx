import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import './BeatsPage.css'

const BeatsPage = () => {
  const {beats,currency,addToCart}=useContext(ShopContext)
  return (
    <>
    <section className="beats-page">
      {/*----------------------------*/}
      <div className="beats-page-header">
          <div className="beats-page-header-left">
            <h1>SHOP ALL</h1>
          </div>
          <div className="beats-page-header-right">
            <Link to={'/merchandise'}><button>MERCHANDISE</button></Link>
          </div>
      </div>
      {/*----------------------------*/}
      <div className="beats-page-mid">
        <form>
          <input type="text"  placeholder='Use mood, genre or artist name...'/>
        </form>
      </div>
      {/*----------------------------*/}
      <div className="beats-page-beats">
          {
            beats.map((beat)=>(
              <div key={beat?._id} className="beat-container">
                  <div className="beat-thumbnail">
                  <Link to={`/beat/${beat?._id}`}><img src={beat?.thumbnail} alt="beat thumbnail"/></Link>  
                  </div>
                  <div className="beat-title">
                    <p>{beat?.title}</p>
                  </div>
                  <div className="beat-price">
                    <p>{currency} {beat?.price.toLocaleString()}</p>
                  </div>
                  <div className="beat-btn">
                     <button onClick={()=>(addToCart(beat?._id))}>ADD TO CART</button>
                  </div>
              </div>
            ))
          }
      </div>
    </section>
    </>
  )
}

export default BeatsPage