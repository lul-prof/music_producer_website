import React, {  } from 'react'
import './FeaturedArtistsComponents.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import {  assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'


const FeaturedArtistsComponents = () => {
    const {artists}=useContext(ShopContext);
    
  if(artists.length>0){
    return (
    <>
    <div id='featured-artists-container' className="featured-artists-container">
        <div className="featured-artists-header">
            <h2>FEATURED ARTISTS</h2>
        </div>
        <div className="featured-artists-profile">
            {
                artists.map((artist)=>(
                    artist.role==="artist" && artist.isFeatured?
                    <>
                    <div key={artist._id} className="featured-artist">
                        <div className="featured-artist-image">
                           <Link to={`/artist/${artist.username}?id=${artist._id}`}> <img src={artist.avatar} alt="avatar" /></Link>
                        </div>
                        <div className="featured-artist-detail">
                            <p>@{artist.username}<img src={artist.isVerified?assets.blueCheckMark:""} alt="verification mark" /> </p>
                        </div>
                    </div>
                    </>
                    :
                    <></>
                ))
            }
        </div>
    </div>
    </>
  )
  }else{
    return(
        <>
        <div id="glitter-class-artist" className="glitter-class-artist">
          <TitleComponent title="Featured Artists"/>
          <div className="glitter">
            <div className="glitter-box">
              <div className="glitter-main"></div>
              <div className="glitter-tag"></div>
            </div>
            <div className="glitter-box">
              <div className="glitter-main"></div>
              <div className="glitter-tag"></div>
            </div>
            <div className="glitter-box">
              <div className="glitter-main"></div>
              <div className="glitter-tag"></div>
            </div>
            <div className="glitter-box">
              <div className="glitter-main"></div>
              <div className="glitter-tag"></div>
            </div>
            <div className="glitter-box">
              <div className="glitter-main"></div>
              <div className="glitter-tag"></div>
            </div>
            <div className="glitter-box">
              <div className="glitter-main"></div>
              <div className="glitter-tag"></div>
            </div>
            <div className="glitter-box">
              <div className="glitter-main"></div>
              <div className="glitter-tag"></div>
            </div>
            <div className="glitter-box">
              <div className="glitter-main"></div>
              <div className="glitter-tag"></div>
            </div>
            <div className="glitter-box">
              <div className="glitter-main"></div>
              <div className="glitter-tag"></div>
            </div>
            <div className="glitter-box">
              <div className="glitter-main"></div>
              <div className="glitter-tag"></div>
            </div>
            <div className="glitter-box">
              <div className="glitter-main"></div>
              <div className="glitter-tag"></div>
            </div>
            <div className="glitter-box">
              <div className="glitter-main"></div>
              <div className="glitter-tag"></div>
            </div>
            <div className="glitter-box">
              <div className="glitter-main"></div>
              <div className="glitter-tag"></div>
            </div>
            <div className="glitter-box">
              <div className="glitter-main"></div>
              <div className="glitter-tag"></div>
            </div>
            <div className="glitter-box">
              <div className="glitter-main"></div>
              <div className="glitter-tag"></div>
            </div>
            <div className="glitter-box">
              <div className="glitter-main"></div>
              <div className="glitter-tag"></div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default FeaturedArtistsComponents