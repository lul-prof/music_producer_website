import React, { useContext } from 'react'
import './FooterComponent.css'
import {Link} from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


const FooterComponent = () => {
  const year=new Date().getFullYear();
  const {admin_url}=useContext(ShopContext)
  
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
              <Link to={'/about'}><li>ABOUT</li></Link>
              <Link to={'/contactUs'}><li>CONTACT</li></Link>
              <Link to={'/order'}><li>ORDERS</li></Link>
              <Link to={'/login'}><li>LOGIN</li></Link>
              <Link to={admin_url} target='_blank'><li>ADMIN</li></Link>
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
            <form>
              <div className="footer-form-class">
                <input type="text" placeholder='EMAIL ADDRESS' />
              </div>
              <div className="footer-form-class">
                <button>SUBSCRIBE</button>
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