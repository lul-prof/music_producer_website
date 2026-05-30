import React, { useContext } from 'react'
import './MerchandiseComponent.css'
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom'
import {assets} from '../../assets/assets.js'
import { products } from '../../assets/assets.js'
import toast from 'react-hot-toast'

const MerchandiseComponent = () => {
  const {merchandise,currency}=useContext(ShopContext);
  
  if(merchandise.length>0){
    return (
    <>
    <div className="merch-component">
      {/*---------------------------------*/}
      <div className="merch-component-header">
        <div className="merch-component-header-left">
            <h2>THE AFRICAN BABA</h2>
        </div>
        <div className="merch-component-header-right">
         <Link to={'/merchandise'}><button>BUY NOW</button></Link> 
        </div>
      </div>
      {/*---------------------------------*/}
      <div className="merch-container">
        {
          merchandise.map((merch)=>(
            merch?.isFeatured
            ?
            <div className="merch">
              <div className="merch-img">
                <Link to={`/merchandise/${merch._id}`}><img src={merch?.image[0]} alt="apparel image" /></Link>  
              </div>
              <div className="merch-title">
                <p>{merch?.title}</p>
              </div>
              <div className="merch-price">
                <p>{currency} {merch?.price.toLocaleString()}</p>
              </div>
             </div>
            :
            <></>
          ))
        }
      </div>
      {/*---------------------------------*/}
      <div className="merch-footer">
        <h3>THE DON ALSO BRINGS MUSIC RELATED APPAREL TO YOUR DOOR STEP</h3>
        <h4>WE ALSO HELP ARTISTS BRAND THEIR MERCHANDISE</h4>
        <img src={assets.bullet3} alt="Music" />
      </div>
    </div>
    </>
  )
  }
  else{
    return (
    <>
    <div className="merch-component">
      {/*---------------------------------*/}
      <div className="merch-component-header">
        <div className="merch-component-header-left">
            <h2>THE AFRICAN BABA</h2>
        </div>
        <div className="merch-component-header-right">
         <Link to={'/merchandise'}><button>BUY NOW</button></Link> 
        </div>
      </div>
      {/*---------------------------------*/}
      <div className="merch-container">
        {
          products.map((merch)=>(
            merch?.bestseller
            ?
            <div className="merch">
              <div className="merch-img">
                <img onClick={()=>(toast.error('Loading please wait...'))} src={merch?.images[0]} alt="apparel image" />
              </div>
              <div className="merch-title">
                <p>{merch?.title}</p>
              </div>
              <div className="merch-price">
                <p>{currency} {merch?.price.toLocaleString()}</p>
              </div>
             </div>
            :
            <></>
          ))
        }
      </div>
      {/*---------------------------------*/}
      <div className="merch-footer">
        <h3>THE DON ALSO BRINGS MUSIC RELATED APPAREL TO YOUR DOOR STEP</h3>
        <h4>WE ALSO HELP ARTISTS BRAND THEIR MERCHANDISE</h4>
        <img src={assets.bullet3} alt="Music" />
      </div>
    </div>
    </>
  )
  }
}

export default MerchandiseComponent