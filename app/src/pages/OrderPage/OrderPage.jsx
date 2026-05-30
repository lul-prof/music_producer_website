import React, { useContext } from 'react'
import './OrderPage.css'
import { ShopContext } from "../../Context/ShopContext";

const OrderPage = () => {

  const {products,myOrders}=useContext(ShopContext);
  
  if(myOrders.length<=0){
    return(
      <>
      <div className="order-container">
        <h1>NO ORDERS FOUND</h1>
        <h6>Check again later</h6>
      </div>
      </>
    )
  }
  return (
    <>
    <div className="order-container">
        <div className="order-container-header">
          <h2>Your Orders</h2>
        </div>
        {
          myOrders.map((order)=>(
            
        <div key={order._id} className="order-box">
          <div className="order-box-header">
            <p><b>Order:</b>{order.reference}</p>
            <p><b>Date</b> {new Date(order.createdAt).toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric", })}{" "}</p>
          </div>
          <hr style={{marginBottom:"10px"}}/>
          {
            order.items.map((item)=>{
              
              const orderInfo=(products.merchandise?.find((product)=>product._id===(item._id || item.sku )) || products.beats?.find((product)=>product._id===(item._id || item.sku )));   
               
              return(
               <div key={item?._id} className="order-item" id='order-item'>
                <div className="order-item-img">
                  <img id='order-item-img' src={orderInfo?.image || orderInfo?.thumbnail} alt="image" />
                </div>
                <div className="order-item-title">
                  <p>{orderInfo?.title}</p>
                </div>
                <div className="order-item-status">
                  <p>{order?.status}</p>
                </div>
                <div className="order-item-expected">
                  <p>Expceted by <b>{new Date(order?.createdAt).toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric", })}{" "}</b></p>
                </div>
            </div>
              )
            })
          } 
        </div>
          ))
        }
    </div>
    </>
  )
}

export default OrderPage