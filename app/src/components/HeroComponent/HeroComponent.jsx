import "./HeroComponent.css";
import { assets } from "../../assets/assets";
import { ShopContext } from "../../Context/ShopContext";
import LoaderComponent from '../../components/LoaderComponent/LoaderComponent.jsx'


const HeroComponent = () => {
  return (
    <>
      <div id="hero-container" className="hero-container">
        {/*------------------------------*/}
         <div className="hero-desk">
            <div className="hero-left">
              <img src={assets.hero4} alt="image" />
            </div>
            <div className="hero-center">
             <div className="hero-center-text">
                <h5>TheAfricanBaba</h5>
                <h1>PREMIUM BEATS AND APPAREL</h1>
                <button>SHOP NOW</button>
             </div>
            </div>
            <div className="hero-right">
              <img src={assets.piano1} alt="image" />
            </div>
         </div>
         {/*------------------------------*/}   
      </div>
    </>
  );
};

export default HeroComponent;
