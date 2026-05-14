import React, { useContext } from "react";
import "./SingleMerchandisePage.css";
import { Link, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { assets } from "../../assets/assets";
import { ShopContext } from "../../Context/ShopContext";

const SingleMerchandisePage = () => {
  const { id } = useParams();
  const { currency,addToCart,merchandise} = useContext(ShopContext);
  
  const product=merchandise.find(prod=>prod._id===id);

  const navigateTo=(id)=>{
        document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
    }

 
  return (
    <>
      <div className="single-merchandise-container">
        <div className="single-merchandise" id="single-merchandise">
          <div className="single-merchandise-image">
            <img id="single-merchandise-image" src={product?.image[0]} alt="image" />
          </div>
          <hr />
          <div className="single-merchandise-details">
            <h1>{product?.title}</h1>
            <h3>
              {currency} {product?.price}
            </h3>
            <p style={{ color: product?.quantity >= 150 ? "green" : "red" }}>
              {product?.quantity >= 100
                ? `In Stock (${product?.quantity})`
                : `Stock Alert (${product?.quantity})`}
            </p>
            <div className="single-merch-image">
              <img onClick={()=>(addToCart(product?._id),toast.success(`${product?.title} added to cart`))} id="single-merch-cart" src={assets.cartPurple} alt="cart" />
            </div>
          </div>
        </div>
        
        <div className="single-merch-related">
          <div className="single-merch-related-header">
            <h1>Related Merchandise</h1>
          </div>
          <div className="single-merch">
            {merchandise.map((p) => (
              p._id!==id
              ?
              <div key={p._id} className="single-m">
                <div className="single-m-img">
                  <Link to={`/merchandise/${p._id}`}><img id="single-m-img" src={p.image[0]} alt="image" onClick={()=>(navigateTo("single-merchandise"))}/></Link>
                </div>
                <div className="single-m-details">
                    <h3 style={{color:"#BF40BF"}}>{p.title}</h3>
                    <p style={{color:"#800080"}}>{currency} {p.price}</p>
                </div>
              </div>
              :
              <></>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMerchandisePage;
