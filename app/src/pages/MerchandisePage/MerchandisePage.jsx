import React, { useContext } from 'react'
import './MerchandisePage.css'
import {Link} from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const MerchandisePage = () => {
  const {merchandise,currency,addToCart}=useContext(ShopContext);
  return (
    <>
    <div className="merch-page">
      {/*-----------------------*/}
      <div className="merch-header">
        <div className="merch-header-left">
            <h1>SHOP ALL</h1>
        </div>
        <div className="merch-header-right">
           <Link to={'/beats'}><button>BEATS</button></Link>
        </div>
      </div>
      {/*-----------------------*/}
      <div className="merch-container">
        {
          merchandise.map((merch)=>(
            <div key={merch?._id} className="merch">
              <div className="merch-image">
               <Link to={`/merchandise/${merch?._id}`}><img src={merch?.image[0]} alt="picture" /></Link> 
              </div>
              <div className="merch-title">
                <p>{merch?.title}</p>
              </div>
              <div className="merch-price">
                <p>{currency} {merch?.price.toLocaleString()}</p>
              </div>
              <div className="merch-btn">
                <button onClick={()=>(addToCart(merch?._id))}>ADD TO CART</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default MerchandisePage