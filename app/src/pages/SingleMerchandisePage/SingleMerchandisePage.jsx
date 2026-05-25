import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './SingleMerchandisePage.css'
import { assets } from '../../assets/assets';


const SingleMerchandisePage = () => {
  const { id } = useParams();

  const { currency,addToCart,merchandise} = useContext(ShopContext);
  
  const product=merchandise.find(prod=>prod._id===id);

  return (
    <>
    <div className="smerch-page">
      {/*----------------------*/}
      <div className="smerch-top">
        <div className="smerch-top-left">
            <div className="smerch-top-left-left">
              <img src={product?.image[0]} alt="image" />
            </div>
            <div className="smerch-top-left-right">
              <img src={product?.image[0]} alt="image" />
            </div>
        </div>
        <div className="smerch-top-right">
            <div className="smerch-top-right-title">
              <h3>{product?.title}</h3>
            </div>
            <div className="smerch-top-right-rating">
              <img src={assets.star2} alt="star" />
              <img src={assets.star2} alt="star" />
              <img src={assets.star2} alt="star" />
              <img src={assets.star2} alt="star" />
              <img src={assets.star2} alt="star" />
            </div>
            <div className="smerch-top-right-description">
              <p>Deliveries within Nairobi usually take less than 48 hours.</p>
            </div>
            <div className="smerch-top-right-price">
              <h3>{currency} {product?.price.toLocaleString()}</h3>
            </div>
            <div className="smerch-top-right-btn">
              <button onClick={()=>(addToCart(product?._id))}>ADD TO CART</button>
            </div>
        </div>
      </div>
      {/*----------------------*/}
      <div className="smerch-bottom">
          
      </div>
    </div>
    </>
  )
}

export default SingleMerchandisePage