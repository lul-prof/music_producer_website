import React from "react";
import "./WhyusComponent.css";
import { assets } from "../../assets/assets";

const WhyusComponent = () => {
  return (
    <>
      <div className="why">
        {/*----------------------*/}
        <div className="why-header">
          <div className="why-header-left">
            <h2>WHY CHOOSE US</h2>
          </div>
          <div className="why-header-right">
            <div className="why-header-right-class">
              <div className="why-header-right-class-top">
                <h3>1K+</h3>
              </div>
              <div className="why-header-right-class-mid">
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="why-header-right-class">
              <div className="why-header-right-class-top">
                  <h3>100K+</h3>
              </div>
              <div className="why-header-right-class-mid">
                  <p>Monthly Views</p>
              </div>
            </div>
            <div className="why-header-right-class">
              <div className="why-header-right-class-top">
                <h3>10+</h3>
              </div>
              <div className="why-header-right-class-mid">
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>
        </div>
        {/*----------------------*/}
        <div className="why-mid">
          <div className="why-mid-left">
              <iframe
                  src="https://www.youtube.com/embed/7BmgOWhZ0rA?si=ZY7b0Ve4N7R4ZT7r"
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
          <div className="why-mid-right">
            {/**********************/}
              <div className="why-mid-right-class">
                <div className="why-mid-right-class-left">
                  <img src={assets.bullet2} alt="image" />
                </div>
                <div className="why-mid-right-class-right">
                  <div className="why-mid-right-class-right-top">
                    <h3>Mainstream reach</h3>
                  </div>
                  <div className="why-mid-right-class-right-mid">
                    <p>The studio is always housing mainstream artists and this alone could help ypu career sky rocket if you are good at what you do</p>
                  </div>
                </div>
              </div>
              {/**********************/}
              <div className="why-mid-right-class">
                <div className="why-mid-right-class-left">
                  <img src={assets.bullet2} alt="image" />
                </div>
                <div className="why-mid-right-class-right">
                  <div className="why-mid-right-class-right-top">
                    <h3>Affordable Prices</h3>
                  </div>
                  <div className="why-mid-right-class-right-mid">
                    <p>After years of working with artists from all corners of life,The Don's rate card is convinient for you</p>
                  </div>
                </div>
              </div>
              {/**********************/}
              <div className="why-mid-right-class">
                <div className="why-mid-right-class-left">
                  <img src={assets.bullet2} alt="image" />
                </div>
                <div className="why-mid-right-class-right">
                  <div className="why-mid-right-class-right-top">
                    <h3>Quality beats & Mixes</h3>
                  </div>
                  <div className="why-mid-right-class-right-mid">
                    <p>The Don is already a certified name amongst the kenyan music elites. All songs are mixed with intentionality not improvisation</p>
                  </div>
                </div>
              </div>
              {/**********************/}
              <div className="why-mid-right-class">
                <div className="why-mid-right-class-left">
                  <img src={assets.bullet2} alt="image" />
                </div>
                <div className="why-mid-right-class-right">
                  <div className="why-mid-right-class-right-top">
                    <h3>Top notch equipment</h3>
                  </div>
                  <div className="why-mid-right-class-right-mid">
                    <p>The Studio is equipped with world class recording facilities to ensure you get what your money pays for</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default WhyusComponent;
