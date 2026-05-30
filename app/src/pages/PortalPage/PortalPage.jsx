import React, { useContext } from 'react'
import './PortalPage.css'
import {ShopContext} from '../../Context/ShopContext'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'

const PortalPage = () => {
    const {users,producers,artists,blogs}=useContext(ShopContext);

    const id=localStorage.getItem("user")

    const user=users.find(user=>user._id===id);

  return (
    <>
    <div className="portal">
        <div className="portal-header">
            <h2>Welcome back {user?.username}</h2>
        </div>
        <div className="portal-artists">
            <div className="portal-artists-header">
                <h2>{user?.role==="artist"?"Other Artists":"Available Artists"}</h2>
            </div>
            <div className="portal-artists-all">
                {
                    artists.map((artist)=>(
                        artist?.isVerified && artist?._id !==id
                        ?
                        <div key={artist?._id} className="artist">
                            <div className="artist-img">
                               <Link to={`/artist/${artist?.username}?id=${artist?._id}`}> <img src={artist?.avatar} alt="avatar" /></Link>
                            </div>
                            <div className="artist-details">
                                <div className="artist-name">
                                    <p>{artist?.username}</p>
                                </div>
                                <div className="artist-verify">
                                    <img src={assets.blueCheckMark} alt="verified" />
                                </div>
                            </div>
                        </div>
                        :
                        <></>
                    ))
                }
            </div>
        </div>
        <div className="portal-producers">
            <div className="portal-producers-header">
                <h2>{user?.role==="producer"?"Other Producers":"Available Producers"}</h2>
            </div>
            <div className="portal-producers-all">
                {
                    producers.map((producer)=>(
                        producer?.isVerified && producer?._id !==id
                        ?
                        <div key={producer?._id} className="producer">
                            <div className="producer-img">
                               <Link to={`/producer/${producer?.username}?id=${producer?._id}`}> <img src={producer?.avatar} alt="producer avatar" /></Link>
                            </div>
                            <div className="producer-details">
                                <div className="producer-name">
                                    <p>{producer?.username}</p>
                                </div>
                                <div className="producer-verify">
                                    <img src={assets.goldCheckMark} alt="verified" />
                                </div>
                            </div>
                        </div>
                        :
                        <></>
                    ))
                }
            </div>
        </div>
        <div className="portal-blogs">
            <div className="portal-blogs-header">
                <h2>Latest Blogs</h2>
            </div>
            <div className="portal-blogs-all">
                {
                    blogs.map((blog)=>(
                        blog.isFeatured 
                        ?
                        <div key={blog?._id} className="blog">
                            <div className="blog-image">
                               <Link to={`/blog/${blog?._id}`}><img src={blog?.image} alt="blog"/></Link>
                            </div>
                            <div className="blog-details">
                                <div className="blog-title">
                                    <p>{blog?.title}</p>
                                </div>
                            </div>
                        </div>
                        :
                        <></>
                    ))
                }
            </div>
        </div>
        <div className="portal-btn">
            <Link to={'https://wa.me/254793909678?text=I%20want%20to%20book%20a%20session'} target='_blank'><button>BOOK SESSION</button></Link> 
        </div>
    </div>
    </>
  )
}

export default PortalPage