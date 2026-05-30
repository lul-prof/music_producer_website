import React, { useContext, useState } from 'react'
import './FooterComponent.css'
import {Link, useNavigate} from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import axios from 'axios'
import toast from 'react-hot-toast'


const FooterComponent = () => {
  const year=new Date().getFullYear();
  const {admin_url,backend_url}=useContext(ShopContext);
  const [email,setEmail]=useState("");

  const navigate=useNavigate();

  const navigateTo=(id)=>{
        document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
  }

  const handleSubmit=async(e)=>{
      e.preventDefault();
      try {
        const response=await axios.post(`${backend_url}/api/user/subscribe`,{email},);
        if(response.data.success){
          toast.success(response.data.message);
        }else{
          toast.error("You are already a subscriber.");
        } 
      } catch (error) {
        toast.error(error)
      }
    }
  return (
    <>
    <section className="footer-container">
      <div className="footer">
        {/*----------------------*/}
        <div className="footer-left">
          <div className="footer-left-header">
              <h2>THE DON</h2>
          </div>
          <div className="footer-left-mid">
            <h3>NON AI INSRUMENTALS ONLY</h3>
          </div>
          <div className="footer-left-bottom">
              <p>DEVELOPED BY <span><a href="https://portofolio-two-rosy-31.vercel.app/" target='_blank'>CAPIOF</a></span></p>
          </div>
        </div>
        {/*----------------------*/}
        <div className="footer-center">
          <div className="footer-center-header">
            <h2>QUICK LINKS</h2>
          </div>
          <div className="footer-center-mid">
            <ul>
              <Link to={'/'}><li>HOME</li></Link> 
              <Link to={'/login'}><li>LOGIN</li></Link>
              <li onClick={()=>(navigate('/'),navigateTo('about'))}>ABOUT</li> 
              <Link to={admin_url} target='_blank'><li>ADMIN</li></Link>
              <Link to={'/order'}><li>ORDERS</li></Link>
              <Link to={'/contactUs'}><li>CONTACT</li></Link>
            </ul>
          </div>
        </div>
        {/*----------------------*/}
        <div className="footer-right">
          <div className="footer-right-header">
            <h2>CATEGORIES</h2>
          </div>
          <div className="footer-right-mid">
            <ul>
              <Link to={'/beats'}><li>BEATS</li></Link>
              <Link to={'/merchandise'}><li>APPAREL</li></Link>
            </ul>
          </div>
        </div>
        {/*----------------------*/}
        <div className="footer-newsletter">
          <div className="footer-newsletter-header">
            <h2>NEWSLETTER</h2>
          </div>
          <div className="footer-newsletter-form">
            <form method='post' onSubmit={handleSubmit}>
              <div className="footer-form-class">
                  <input type="text" value={email} onChange={(e)=>(setEmail(e.target.value))} placeholder='EMAIL ADDRESS' />
                </div>
              <div className="footer-form-class">
                <button type='submit'>SUBSCRIBE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-year">
        <h5>&copy;{year} THE DON. ALL RIGHTS RESERVED</h5>
      </div>
    </section>
    </>
  )
}

export default FooterComponent