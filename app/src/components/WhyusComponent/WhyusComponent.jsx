import React from "react";
import "./WhyusComponent.css";
import { assets } from "../../assets/assets";

const WhyusComponent = () => {
  return (
    <>
      <div className="why-component">
        {/*------------------------------*/}
        <div className="why-component-left">
            <iframe
            src="https://www.youtube.com/embed/7BmgOWhZ0rA?si=DCoHHBVfctYDxUF7"
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
            allowFullScreen
          ></iframe>
        </div>
        {/*------------------------------*/}
        <div className="why-component-right">
          <div className="why-component-right-header">
            <img src={assets.bullet2} alt="Music image" />
            <h2>WHY CHOOSE US</h2>
          </div>
          {/*-----------------------------------*/}
          <div className="why-component-right-top">
            <div className="why-component-right-top-1">
              <div className="why-component-right-top-1-top">
                <p>1000+</p>
              </div>
              <div className="why-component-right-top-1-bottom">
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="why-component-right-top-2">
              <div className="why-component-right-top-2-top">
                <p>100,000+</p>
              </div>
              <div className="why-component-right-top-2-bottom">
                <p>Monthly listeners</p>
              </div>
            </div>
            <div className="why-component-right-top-3">
              <div className="why-component-right-top-3-top">
                <p>10+</p>
              </div>
              <div className="why-component-right-top-3-bottom">
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>

          {/*-----------------------------------*/}
          <div className="why-component-right-mid">

          <div className="why-component-right-mid-top">
            <div className="why-component-right-mid-top-1">
                <img src={assets.bullet2} alt="music" />
                <h3>Mainstream Reach</h3>
            </div>
            <div className="why-component-right-mid-top-2">
                <p>The studio is always housing mainstream artists like <span> Metro Stunna</span> and UncoJingJong.</p>
            </div>
          </div>

          <div className="why-component-right-mid-top">
            <div className="why-component-right-mid-top-1">
                <img src={assets.bullet2} alt="music" />
                <h3>Affordable Prices</h3>
            </div>
            <div className="why-component-right-mid-top-2">
                <p>After years of working with artists from all corners of life,<span>The Don's</span> rate card is convinient for you.</p>
            </div>
          </div>

          <div className="why-component-right-mid-top">
            <div className="why-component-right-mid-top-1">
                <img src={assets.bullet2} alt="music" />
                <h3>Quality beats & Mixes</h3>
            </div>
            <div className="why-component-right-mid-top-2">
                <p><span>The Don</span> is already a certified name amongst the kenyan music elites. All songs are mixed with intentionality not improvisation</p>
            </div>
          </div>


          </div>
          {/*-----------------------------------*/}
        </div>
      </div>
    </>
  );
};

export default WhyusComponent;
