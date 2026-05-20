import "./HeroComponent.css";
import { assets } from "../../assets/assets";
import { ShopContext } from "../../Context/ShopContext";
import LoaderComponent from "../../components/LoaderComponent/LoaderComponent.jsx";
import { Link } from "react-router-dom";

const HeroComponent = () => {
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          {/*----------------------------*/}
          <div className="hero-content-left">
            <div className="hero-content-left-top">
              <div className="hero-content-left-top-img">
                <img
                  className="img-1"
                  src={assets.stunnaPic}
                  alt="Metro Stunna"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="hero-content-left-top-img">
                <img
                  className="img-2"
                  src={assets.zienPic}
                  alt="Kapitani"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="hero-content-left-top-img">
                <img
                  className="img-3"
                  src={assets.toxicPic}
                  alt="Lyrikali"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="hero-content-left-top-img">
                <img
                  className="img-4"
                  src={assets.kusuPic}
                  alt="Kusu"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="hero-content-left-bottom">
              <h2>TRUSTED BY MAINSTREAM KENYAN ARTISTS</h2>
            </div>
            <div className="hero-content-left-bottom-2">
              <p>WELCOME</p>
            </div>
          </div>
          {/*----------------------------*/}
          <div className="hero-content-right">
            <div className="hero-content-right-text">
              <h1>TIRED OF MEDIOCRE BEATS</h1>
              <p>STRESS NO MORE<span> THE DON </span>GOT YOU COVERED</p>
            </div>
            <div className="hero-content-right-btn">
            <Link to={'/beats'}> <button>SHOP NOW</button></Link> 
            </div>
          </div>
        </div>
        <div className="hero-img">
          <img
            src={assets.hero}
            alt="THE DON"
            fetchPriority="high"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/*---------------MOBILE BANNER---------------*/}
      <section className="hero-mobile">
        <div className="mobile-content">
          <div className="mobile-content-top">
            <div className="mobile-content-top-text">
              <h2>LOOKING FOR BEATS?</h2>
              <p>STRESS NO MORE<span> THE DON </span>GOT YOU COVERED DEAR ARTIST</p>
            </div>
            <div className="mobile-content-top-btn">
             <Link to={'/beats'}><button>SHOP NOW</button></Link> 
            </div>
          </div>
          <div className="hero-mid">
            <div className="hero-mid-text">
              <p>TRUSTED BY MAINSTREAM KENYAN ARTISTS</p>
              <div className="hero-mid-images">
                <div className="hero-mid-img">
                  <img
                    className="img-1"
                    src={assets.stunnaPic}
                    alt="Metro Stunna"
                    fetchPriority="high"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="hero-mid-img">
                  <img
                    className="img-2"
                    src={assets.zienPic}
                    alt="Kapitani"
                    fetchPriority="high"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="hero-mid-img">
                  <img
                    className="img-3"
                    src={assets.toxicPic}
                    alt="Lrikali"
                    fetchPriority="high"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="hero-mid-img">
                  <img
                    className="img-4"
                    src={assets.kusuPic}
                    alt="Kusu"
                    fetchPriority="high"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
          {/*------------------------------*/}
        </div>
        <div className="mobile-img">
          <img
            src={assets.hero_mobile}
            alt="THE DON"
            fetchPriority="high"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>
      {/*-----------------------------*/}
      <div className="social-proof">
        <div className="social-proof-content">
          <div className="artist-1">
            <p>METRO STUNNA</p>
          </div>
          <div className="artist-2">
            <p>TOP BOYZ</p>
          </div>
          <div className="artist-3">
            <p>ESS THE ARTIST</p>
          </div>
          <div className="artist-4">
            <p>KIRRK</p>
          </div>
          <div className="artist-5">
            <p>UNCOJINGJONG</p>
          </div>
          <div className="artist-6">
            <p>LOST BOYZ</p>
          </div>
          <div className="artist-7">
            <p>KITHONGI</p>
          </div>
          <div className="artist-8">
            <p>KAPITANI</p>
          </div>
          <div className="artist-7">
            <p>LUL PROF</p>
          </div>
          <div className="artist-7">
            <p>METRO STUNNA</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroComponent;
