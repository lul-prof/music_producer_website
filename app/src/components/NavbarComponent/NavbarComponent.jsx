import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { ShopContext } from '../../Context/ShopContext'
import './NavbarComponent.css'
import {Link, useNavigate} from 'react-router-dom';

const NavbarComponent = () => {
    const {getCartCount,token}=useContext(ShopContext);
    const navigate=useNavigate();
  return (
    <>
    <section className="navbar">
        <div className="nav-container">
            {/*---------------------*/}
            <div className="navbar-left">
                <img src={assets.menuPurple} alt="menu_icon" onClick={()=>(document.getElementById("sidemenu").style.display="flex")}/>
            </div>
            {/*---------------------*/}
            <div className="navbar-mid">
                <Link to={'/'}><h1>THE DON</h1></Link>
            </div>
            {/*---------------------*/}
            <div className="navbar-right">
                <div className="navbar-right-left">
                   <Link to={token===""?'/login':'/profile'}><img src={assets.userPurple} alt="avatar" /></Link> 
                </div>
                <div className="navbar-right-right">
                     <Link to={token===""?'/login':'/cart'}><img src={assets.cartPurple} alt="your cart" /></Link>
                    {
                        getCartCount()>0 
                        ?
                    <p>{getCartCount()}</p>
                    :
                    ""
                    }   
                </div>
            </div>
        </div>
        </section>
        {/*---------SIDEMENU---------*/}
        <div id='sidemenu' className="sidemenu">
            <div className="sidemenu-header">
                <h1 onClick={()=>(document.getElementById("sidemenu").style.display="none")}>WELCOME</h1>
            </div>
            <div className="sidemenu-content">
                <ul>
                    <Link to={'/'}><li onClick={()=>(document.getElementById("sidemenu").style.display="none")}>HOME</li></Link>  
                    <Link to={'/beats'}><li onClick={()=>(document.getElementById("sidemenu").style.display="none")}>BEATS</li></Link>
                    <Link to={'/merchandise'} onClick={()=>(document.getElementById("sidemenu").style.display="none")}><li>MERCHANDISE</li></Link>
                    <Link to={'/about'}><li onClick={()=>(document.getElementById("sidemenu").style.display="none")}>ABOUT US</li></Link>
                    <Link to={'/contactUs'}><li onClick={()=>(document.getElementById("sidemenu").style.display="none")}>CONTACT US</li></Link>
                    <Link to={'/'}><li onClick={()=>(document.getElementById("sidemenu").style.display="none")}>FAQS</li></Link>
                </ul>
            </div>
            <div className="sidemenu-logout">
                <p onClick={()=>(token!==""?localStorage.removeItem("token"):navigate('/login'),document.getElementById("sidemenu").style.display="none")}>{token===""?"LOGIN":"LOGOUT"}</p>
            </div>
            <div className="sidemenu-footer">
                <button onClick={()=>(document.getElementById("sidemenu").style.display="none")} >CLOSE</button>
            </div>
        </div>
    </>
  )
}

export default NavbarComponent