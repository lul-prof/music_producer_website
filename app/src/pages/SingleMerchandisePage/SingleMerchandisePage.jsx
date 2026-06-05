import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './SingleMerchandisePage.css'
import { assets } from '../../assets/assets';


const SingleMerchandisePage = () => {
  const { id } = useParams();

  const { currency,addToCart,merchandise,frontend_url} = useContext(ShopContext);
  
  const product=merchandise.find(prod=>prod._id===id);

  return (
    <>
    <div className="smerch-page">
      {/*---------------------------*/}
      <div className="smerch-page-left">
        <div className="smerch-page-left-top">
          <img src={product?.image[0]} alt="product image" />
        </div>
        <div className="smerch-page-left-mid">
            <div className="smerch-page-left-mid-1">
              <img src={product?.image[0]} alt="product image" />
            </div>
            <div className="smerch-page-left-mid-2">
              <img src={product?.image[0]} alt="product image" />
            </div>
        </div>
      </div>
      {/*---------------------------*/}
      <div className="smerch-page-right">
        <div className="smerch-page-right-top">
          <div className="smerch-page-right-top-title">
            <h4>{product?.title}</h4>
          </div>
          <div className="smerch-page-right-top-description">
            <p>{product?.description}</p>
          </div>
          <div className="smerch-page-right-top-description">
            <p>Our clothes are top notch for the purpose of giving you that high end feeling you deserve.</p>
          </div>
          <div className="smerch-page-right-top-rating">
            <img src={assets.star2} alt="rating" />
            <img src={assets.star2} alt="rating" />
            <img src={assets.star2} alt="rating" />
            <img src={assets.star2} alt="rating" />
            <img src={assets.star2} alt="rating" />
            <p>(122)</p>
          </div>
          <div className="smerch-page-right-top-price">
            <h4>{currency} {product?.price.toLocaleString()}</h4>
          </div>


        </div>
        <div className="smerch-page-right-bottom">
          <div className="smerch-page-right-bottom-btns">
            <div className="smerch-page-right-bottom-btn-1">
              <button onClick={()=>(addToCart(product?._id))}>ADD TO CART</button>
            </div>
            <div className="smerch-page-right-bottom-btn-2">
             <Link to={`https://wa.me/254742169773?text=I%20need%20${frontend_url}/merchandise/${id}`} target='_blank'><button>WhatsApp</button></Link> 
            </div>
          </div>

          <div className="smerch-page-right-bottom-items">
            <div className="smerch-page-right-bottom-items-item">
              <div className="smerch-page-right-bottom-items-item-left">
                <img src={assets.truck} alt="truck" />
              </div>
              <div className="smerch-page-right-bottom-items-item-right">
                <div className="smerch-page-right-bottom-items-item-right-top">
                  <h4>Free Delivery</h4>
                </div>
                <div className="smerch-page-right-bottom-items-item-right-bottom">
                  <p>Free Delivery within Nairobi for orders above kes 2,000</p>
                </div>
              </div>
            </div>

            <div className="smerch-page-right-bottom-items-item">
              <div className="smerch-page-right-bottom-items-item-left">
                <img src={assets.returnP} alt="policy" />
              </div>
              <div className="smerch-page-right-bottom-items-item-right">
                <div className="smerch-page-right-bottom-items-item-right-top">
                  <h4>Return Policy</h4>
                </div>
                <div className="smerch-page-right-bottom-items-item-right-bottom">
                  <p>7 Days return policy on all orders except beats</p>
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>
    </div>
    </>
  )
}

export default SingleMerchandisePage