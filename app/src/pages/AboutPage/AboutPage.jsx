import React from 'react'
import './AboutPage.css'
import {Link} from 'react-router-dom'
import {assets, collaborations} from '../../assets/assets.js'

const AboutPage = () => {
  return (
    <>
    <div className="about">     
        {/*------------------------*/}
        <div className="about-mid">
          <div className="about-mid-left">
            <img src={assets.theDon} alt="image" />
          </div>
          <div className="about-mid-right">
            <div className="about-mid-right-header">
              <h2>ABOUT THE DON</h2>
          </div>
            <div className="about-mid-right-top">
              <p>The Don is one of Kenya's youngest promising producers with an extensive discography featuring Metro Stunna, UncoJingJong, Toxic Lyrikali, Top Boyz and TWXN.
             </p>
             <p>The producer, equipped with skills and vision, has already made a name for himself in the Kenyan mainstream scene after featuring several notable names.</p>
             <p>The producer skill and talent when it comes to mixing and mastering music with a special touch, puts him in apposition where he can tremendously amplify the quality of a track to a groovy sound that will be positively received and consumed by the market
             </p>
             <p>The Don is skilled and full of talent. His mixing and mastering skills will ensure your track sounds professional across all platforms and devices </p>
            </div>
            <div className="about-mid-right-mid">
              <div className="about-mid-right-mid-class">
                <div className="about-mid-right-mid-class-top">
                  <h3>95%</h3>
                </div>
                <div className="about-mid-right-mid-class-mid">
                  <p>Customer Satisfaction</p>
                </div>
              </div>

              <div className="about-mid-right-mid-class">
                <div className="about-mid-right-mid-class-top">
                  <h3>10K+</h3>
                </div>
                <div className="about-mid-right-mid-class-mid">
                  <p>Monthly Listeners</p>
                </div>
              </div>

              <div className="about-mid-right-mid-class">
                <div className="about-mid-right-mid-class-top">
                  <h3>1K+</h3>
                </div>
                <div className="about-mid-right-mid-class-mid">
                  <p>Completed Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*------------------------*/}
        <div className="about-bottom">
          <div className="about-bottom-header">
            <h2>COLLABORATIONS</h2>
            <p>Clients we work with or have collaborated with</p>
          </div>
          <div className="about-collaborations">
            {
              collaborations.map((collab)=>(
                <div key={collab._id} className="collaboration">
                    <div className="collab-artist">
                      <img  src={collab.pic[0]} alt="" />
                    </div>
                    <div className="collab-name">
                      <p>{collab.name}</p>
                    </div>
                    <div id='hover-img' className="hover-img">
                    <Link to={collab.url} target='_blank'><img src={assets.insta_dark} alt="ig" /></Link> 
                    </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
    </>
  )
}

export default AboutPage