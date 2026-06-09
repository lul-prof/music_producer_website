import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import './NavbarComponent.css'
import { ManagementContext } from '../../Context/ManagementContext'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  const {frontend_url}=useContext(ManagementContext);
  const logout=()=>{
    localStorage.clear();
    window.location.reload()
  }
  return (
    <>
    <div className="navbar">
      {/*----------------------*/}
      <div className="navbar-left">
        <img onClick={()=>(document.getElementById("sidemenu").style.display="flex")} onMouseOver={()=>(document.getElementById("sidemenu").style.display="flex")} src={assets.sideIcon} alt="menu" />
      </div>
      {/*----------------------*/}
      <div className="navbar-center">
          <Link to={'/'}><h1>ADMIN PANEL</h1></Link>
      </div>
      {/*----------------------*/}
      <div className="navbar-right">
       <Link to={frontend_url} target='_blank'><img src={assets.theDon} alt="The Don" /></Link> 
      </div>
    </div>
    /*------------------SIDEMENU------------------------*/
    <div onMouseLeave={()=>(document.getElementById("sidemenu").style.display="none")} id='sidemenu' className="sidemenu">
      <div className="sidemenu-header">
        <h2 onClick={()=>(document.getElementById("sidemenu").style.display="none")}>THE DON</h2>
      </div>
      <div className="sidemenu-mid">
        <ul>
          <Link to={'/'}><li>Home</li></Link>
         <Link to={'/users'}><li>Users</li></Link> 
          <Link to={'/blogs'}><li>Blogs</li></Link>
          <Link to={'/beats'}><li>Beats</li></Link>
          <Link to={'/merchandise'}><li>Merchandise</li></Link>
          <Link to={'/subscribers'}><li>Subscribers</li></Link>
          <Link to={'/'}><li>Revenue</li></Link>
        </ul>
      </div>
      <div className="sidemenu-bottom">
        <button onClick={()=>(logout())}>LOGOUT</button>
      </div>
    </div>
    </>
  )
}

export default NavbarComponent