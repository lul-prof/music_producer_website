import React, { useContext } from "react";
import "./MerchandiseComponent.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

const MerchandiseComponent = () => {
  const { currency,merchandise } = useContext(ShopContext);
  
  if (merchandise.length > 0) {
    return (
      <>
        <div
          id="featured-merchandise-container"
          className="featured-merchandise-container"
        >
          <div className="featured-merchandise-header">
            <h2>THE AFRICAN BABA</h2>
            <h4>GET MUSIC RELATED MERCH</h4>
            <h4>WELCOME TO THE ULTIMATE FASHION STORE</h4>
            <hr />
        </div>
          <div className="featured-merchandise">
            {merchandise.map((product) =>
              product.isFeatured ? (
                <div key={product._id} className="featured-merch">
                  <div className="featured-merch-image">
                    <Link to={`/merchandise/${product._id}`}>
                      <img src={product.image[0]} alt="" />
                    </Link>
                  </div>
                  <div className="featured-merch-details">
                    <div className="featured-merch-detail1">
                      <h4>{product.title}</h4>
                      <p>
                        {currency}
                        {product.price}
                      </p>
                    </div>

                  </div>
                </div>
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
          <div className="featured-merchandise-header">
            <h2>THE AFRICAN BABA</h2>
            <h4>GET MUSIC RELATED MERCH</h4>
            <h4>WELCOME TO THE ULTIMATE FASHION STORE</h4>
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

export default MerchandiseComponent;
