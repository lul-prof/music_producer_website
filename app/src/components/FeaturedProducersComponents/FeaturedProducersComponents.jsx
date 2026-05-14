import React from 'react'
import './FeaturedProducersComponents.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

const FeaturedProducersComponents = () => {
    const {producers}=useContext(ShopContext);
        
  if(producers.length>0){
    return (
    <>
    <div  id='featured-producers-container' className="featured-producers-container">
        <div className="featured-producers-header">
            <h2>FEATURED PRODUCERS</h2>
        </div>
        <div className="featured-producers">
            {
                producers.map((producer)=>(
                    producer.role==="producer" && producer.isFeatured ?
                    <>
                    <div key={producer._id} className="featured-producer">
                        <div className="featured-producer-image">
                           <Link to={`/producer/${producer.username}?id=${producer._id}`}><img src={producer.avatar} alt="producer-image" /></Link> 
                        </div>
                        <div className="featured-producer-details">
                            <p>@{producer.username}<img src={producer.isVerified?assets.goldCheckMark:""} alt="verified mark" /></p>
                        </div>
                    </div>
                    </>
                    :
                    <></>
                ))
            }
        </div>
        <div className="producer-frame">
          <iframe 
             width="100%" 
            height="500" 
            src="https://www.youtube.com/embed/h2WkSepEtFs?si=cD6Tr68s0vpStFHx" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; 
            autoplay;
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture; 
            web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
          </iframe>
        </div>

    </div>
    </>
  )
  }else{
    return(
        <>
        <div id="glitter-class-producer" className="glitter-class-producer">
          <TitleComponent title="Featured Producers"/>
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

export default FeaturedProducersComponents