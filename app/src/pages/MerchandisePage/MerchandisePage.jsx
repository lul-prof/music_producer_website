import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./MerchandisePage.css";
import { Link } from "react-router-dom";

const MerchandisePage = () => {
  const { currency,merchandise } = useContext(ShopContext);
  return (
    <>
      <div className="apparel">
        <div className="apparel-header">
          <h1>All Apparel</h1>
        </div>
        <div className="apparel-mid"></div>

        <div className="apparel-class">
          {merchandise.map((merch) => (
            <div key={merch._id} className="apparel-div">
              <div className="apparel-img">
                <Link to={`/merchandise/${merch._id}`}>
                  {" "}
                  <img src={merch.image[0]} alt="" />
                </Link>
              </div>
              <div className="apparel-title">
                <p>{merch.title}</p>
              </div>
              <div className="apparel-price">
                <p>
                  {currency} {merch.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MerchandisePage;
