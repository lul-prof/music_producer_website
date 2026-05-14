import React, { useContext } from "react";
import "./BeatsComponent.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

const BeatsComponent = () => {
  const { currency,beats } = useContext(ShopContext);
  
  if (beats.length > 0) {
    return (
      <>
        <div
          id="beats-component-container"
          className="beats-component-container">
          <div className="beats-component-header">
            <h2>THE DON</h2>
            <h4>NUMBER 1 BEAT MAKER</h4>
            <h4>NON AI RELATED INSTRUMENTALS ONLY</h4>
            <hr />
          </div>

          <div className="featured-beats-container">
            {
            beats.map((beat) =>
              beat.isFeatured ? (
                <>
                  <div key={beat._id} className="featured-beat">
                    <div className="featured-beat-container">
                      <div className="featured-beat-thumbnail">
                        <Link to={`/beat/${beat._id}`}>
                          <img src={beat.thumbnail} alt="thumbnail" />
                        </Link>
                      </div>

                      <div className="featured-beat-details">
                        <div className="featured-beat-detail">
                          <h3>{beat.title}</h3>
                          <h5>
                            {currency} {beat.price}
                          </h5>
                        </div>                        
                      </div>
                    </div>
                   
                  </div>
                </>
              ) : (
                <></>
              ),
            )}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div id="glitter-class" className="glitter-class">
        <div className="beats-component-header">
            <h2>THE DON</h2>
            <h4>NUMBER 1 BEAT MAKER</h4>
            <h4>NON AI RELATED INSTRUMENTALS ONLY</h4>
            <hr />
          </div>
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
          
        </div>
        </div>
      </>
    );
  }
};

export default BeatsComponent;
