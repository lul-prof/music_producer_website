import React, { useContext, useEffect, useState } from 'react'
import './CheckoutPage.css'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from "../../Context/ShopContext";
import axios from 'axios'
import { assets } from '../../assets/assets';

const CheckoutPage = () => {
    const [mpesa,setMpesa]=useState(false);
    const [paypal,setPaypal]=useState(false);
    const [cod,setCod]=useState(true);
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [county,setCounty]=useState("");
    const [postal,setPostal]=useState("");
    const [ward,setWard]=useState("");
    const [street,setStreet]=useState("");
    const [note,setNote]=useState("");
    const navigate=useNavigate();
    const [cartData, setCartData] = useState([]);
    const [item,setItem]=useState([]);
    const [success,setSuccess]=useState(false);
  const {
    currency,
    cartItems,
    getCartAmount,
    token,
    backend_url,
    products
  } = useContext(ShopContext);

  const getTimestamp = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `TDE${year}${month}${day}${hours}${minutes}${seconds}`;
  };

  const reference=getTimestamp();

  //Cash On Delivery
  const placeOrderCod=async(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append("fname",fname);
    formData.append("email",email);
    formData.append("phone",phone);
    formData.append("county",county);
    formData.append("postal",postal);
    formData.append("ward",ward);
    formData.append("street",street);
    formData.append("note",note);
    try {
      const response=await axios.post(`${backend_url}/api/user/order`,{items:cartData,amount:getCartAmount(),address:formData,reference:reference},{headers:{token}});
      console.log(response);
      if(response.data.success){
        toast.success(response.data.message);
        setSuccess(true)
      }else{
        console.log(response.data.message);
        toast.error(response.data.message);
        setSuccess(false);
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }


  //Paypal
  const placeOrderPaypal=async(e)=>{
    e.preventDefault();
    const address={fname,lname,email,phone,county,postal,ward,street,note};
    console.log(address);
    
    try {
      const response=await axios.post(`${backend_url}/api/user/paypal`,{items:item,total:(getCartAmount()/129).toFixed(2),address:address,reference:reference},{headers:{token}});
      console.log(response);  
      if(response.data.payment.links){
        for(let i=0;i<response.data.payment.links.length;i++){
          if(response.data.payment.links[i].rel==="approval_url"){
            toast.success("Redirecting you to paypal.")
            window.open(response.data.payment.links[i].href,'_blank');
            //console.log(response.data.payment.links[i].href); 
          }else{
            setSuccess(false);
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  //Mpesa
  const placeOrderMpesa=async(e)=>{
    e.preventDefault();
    const address={fname,lname,email,phone,county,postal,ward,street,note};
    try {
      const response=await axios.post(`${backend_url}/api/user/lipa`,{phone:address.phone,amount:getCartAmount(),items:cartData,address:address},{headers:{token}});
      console.log(response.data);
      if(response.data.data.ResponseCode===0){
        toast.success(response.data.data.ResponseDescription);
        setSuccess(true)
      }else{
        toast.error(response.data.data.ResponseDescription);
        setSuccess(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    const fetchItem=async()=>{
      try {
      const tempData = [];
      for (const productId in cartItems) {
          const itemInfo=(products.merchandise?.find((product)=>product._id===productId) || products.beats?.find((product)=>product._id===productId));
          if (cartItems[productId] > 0) {
            tempData.push({
              name:itemInfo.title,
              price:(itemInfo.price/129).toFixed(2),
              sku: productId,
              currency: "USD",
              quantity: cartItems[productId],

      })    
      }
      }
      setItem(tempData);      
        
      } catch (error) {
        console.log(error);
        
      }
    }
    
    fetchItem()
  },[products,cartItems])


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

  const handleSubmit=(e)=>{
    e.preventDefault()
  }
if(success){
  return(
  <div className="checkout-container">
    {
      mpesa
      ?
      <>
      <div className="order-class">
        <p>A prompt has been sent to the phone number you provided at the Delivery details section. Check your Phone and Confirm Payment.</p>
        <Link to={'/order'}> <button>View Orders</button> </Link>
      </div>
      </>
      :
      <>
      <div className="order-class">
        <h2>Your Order is Currently being Processed.</h2>
        <Link to={'/order'}> <button>View Orders</button> </Link>
      </div>
      </>
    }
  </div>
  )
}
else{
   return (
    <>
    <div className="checkout-container">
      <form method='post' onSubmit={paypal?placeOrderPaypal:cod?placeOrderCod:mpesa?placeOrderMpesa:handleSubmit}>
        {/*----------------------*/}
        <div className="checkout-left">
          <div className="checkout-left-header">
            <h2>DELIVERY ADDRESS</h2>
          </div>
          <div className="checkout-left-form">
            <div className="form-class-small">
              <input type="text" value={fname} onChange={(e)=>setFname(e.target.value)} name="fname" id="" placeholder='First Name' required />
              <input type="text" value={lname} onChange={(e)=>setLname(e.target.value)} name="lname" id=""  placeholder='Last Name' required/>
            </div>
            <div className="form-class-small-large">
              <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} id=""  placeholder='Email Address' required/>
            </div>    
            <div className="form-class-small-large">
              <input type="text" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} id="" placeholder='Phone Number'  required/>
            </div> 
            <div className="form-class-small">
              <input type="text" name="county" value={county} onChange={(e)=>setCounty(e.target.value)} id="" placeholder='County'  required/>
              <input type="text" name="code" value={postal} onChange={(e)=>setPostal(e.target.value)} id="" placeholder='Postal Code' required/>
            </div>  
             <div className="form-class-small">
                <input type="text" name="ward" value={ward} onChange={(e)=>setWard(e.target.value)} id="" placeholder='Ward'/>
                <input type="text" name="street" value={street} onChange={(e)=>setStreet(e.target.value)} id="" placeholder='Street' required/>
              </div>   
              <div className="form-class-small-large">
                <textarea name="notes" value={note} onChange={(e)=>setNote(e.target.value)} id="" rows={3} placeholder='Order Notes(Sizes for merchandise & length for beats)'></textarea>
              </div>              
          </div>
        </div>
        {/*----------------------*/}
        <div className="checkout-right">
          <div className="checkout-right-header">
            <h2>YOUR ORDERS</h2>
          </div>
          <div className="checkout-right-orders">
            {
            cartData.map((item, index) => {
              const product =
              products.merchandise.find(
                (product) => product._id === item._id,
              ) || products.beats.find((product) => product._id === item._id);              

              return (
                <>
                <div key={index} className="checkout-right-order">
                  <div className="checkout-right-order-img">
                      <img id='checkout-right-order-img' src={product.image || product.thumbnail} alt="product" />
                  </div>
                  <div  className="checkout-right-order-details">
                    <p className='title'>{product.title}</p>
                    <p>{currency} {product.price?.toLocaleString()}</p>
                  </div>
                </div>   
                </>
                )
                    
              }  
            )} 
          </div>
          <div className="checkout-right-mid">
            <img src={assets.bullet2} alt="image" />
            <p>SubTotal:</p>
            <p className='subtotal'>{currency} {getCartAmount().toLocaleString()}</p>
          </div>
          <div className="checkout-right-options">
            <div className="checkout-right-options-header">
              <h2>Payment Options</h2>
            </div>
            <div className="mpesa">
              <div style={{border:mpesa?"0":"2px solid #E9E9E9",background:mpesa?"#4CBB17":"transparent"}} onClick={()=>(setMpesa(!mpesa),setPaypal(false),setCod(false))} className="mpesa-box">

              </div>
              <div className="mpesa-text">
                <p>Mpesa</p>
              </div>
            </div>
            <div className="paypal">
              <div style={{border:paypal?"0":"2px solid #E9E9E9",background:paypal?"#1F51FF":"transparent"}} onClick={()=>(setMpesa(false),setPaypal(!paypal),setCod(false))} className="paypal-box">

              </div>
              <div className="paypal-text">
                <p>PayPal</p>
              </div>
            </div>
            <div className="cod">
              <div style={{border:cod?"0":"2px solid #E9E9E9",background:cod?"#FFD900":"transparent"}}  onClick={()=>(setMpesa(false),setPaypal(false),setCod(!cod))} className="cod-box">

              </div>
              <div className="cod-text">
                <p>COD</p>
              </div>
            </div>
          </div>
          <div className="checkout-right-btn">
            {
              mpesa
              ?
              <div className="mpesa-btn">
                <button type='submit'>Lipa Na Mpesa</button>
              </div>
              :
              paypal
              ?
              <div className="paypal-btn">
                <button type='submit'>PayPal</button>
              </div>
              :
              cod
              ?
              <div className="cod-btn">
                <button type='submit'>Cash On Delivery</button>
              </div>
              :
              <></>
            }
          </div>
        </div>
      </form>
    </div>
    </>
  )
}
}

export default CheckoutPage
