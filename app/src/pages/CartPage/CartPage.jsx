import React, { useContext, useEffect, useState } from "react";
import "./CartPage.css";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import axios from 'axios'

const CartPage = () => {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);
 
  const {
    currency,
    updateQuantity,
    cartItems,
    addToCart,
    getCartAmount,
    products
  } = useContext(ShopContext);
  

  useEffect(() => {    
    if (products.merchandise && Object.keys(cartItems).length > 0) {
      const tempData = [];

      for (const productId in cartItems) {
        if (cartItems[productId] > 0) {
          tempData.push({
            _id: productId,
            quantity: cartItems[productId],
          });
          
        }
      }
      setCartData(tempData);
    }

    
  }, [cartItems, products]);
  return (
    <>
        <div className="cart">
          <div className="cart-top">
            <div className="cart-top-item">
              <p>Item</p>
            </div>
            <div className="cart-top-price">
              <p>Price</p>
            </div>
            <div className="cart-top-quantity">
              <p>Quantity</p>
            </div>
            <div className="cart-top-total">
              <p>SubTotal</p>
            </div>
          </div>
          {/*----------------------------------*/}
          {
          cartData.map((item) => {
            const product =
              products.merchandise.find(
                (product) => product._id === item._id,
              ) || products.beats.find((product) => product._id === item._id);              

            return (
              <>
                <div key={product._id} className="cart-center">
                  <div className="cart-center-item">
                    <div className="cart-center-item-image">
                      <img
                        id="cart-center-item-image"
                        src={product.image || product.thumbnail}
                        alt="Image"
                      />
                    </div>
                    <div className="cart-center-item-details">
                      <h6>{product.title}</h6>
                    </div>
                  </div>
                  <div className="cart-center-price">
                    <p>{currency} {product.price}</p>
                  </div>
                  <div className="cart-center-quantity">
                    <div className="cart-center-quantity-left">
                      <p onClick={()=>addToCart(item._id)}>+</p>
                    </div>
                    <div className="cart-center-quantity-center">
                      <p>{item.quantity}</p>
                    </div>
                    <div className="cart-center-quantity-right">
                      <p onClick={()=>updateQuantity(item._id,(item.quantity-1))}>-</p>
                    </div>
                  </div>
                  <div className="cart-center-total">
                    <p>{(item.quantity*product.price).toLocaleString()}</p>
                  </div>
                </div>
              </>
            );
          })}
          <div className="cart-bottom">
            <div className="cart-bottom-subtotal">
              <p>Subtotal:</p>
              <p>{currency} {getCartAmount().toLocaleString()}</p>
            </div>
            <div className="cart-bottom-vat">
              <p>VAT Tax:</p>
              <p>Kes 0.00</p>
            </div>
            <div className="cart-bottom-delivery">
              <p>Delivery:</p>
              <p>Kes 0.00</p>
            </div>
            <div className="cart-bottom-btn">
              <button onClick={() => navigate("/checkout")}>Checkout</button>
            </div>
          </div>
        </div>
    </>
  );
};

export default CartPage;
