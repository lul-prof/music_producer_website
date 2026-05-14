import React, { useContext,useState } from "react";
import "./SearchedItemPage.css";
import { assets } from "../../assets/assets";
import { ShopContext } from "../../Context/ShopContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const SearchedItemPage = () => {
  const { addToCart,currency,beats, setSearched, searched, backend_url } =
    useContext(ShopContext);
  const { search } = useParams();
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${backend_url}/api/user/search?query=${term}`,
      );
      if (response.data.success) {
        setSearched(response.data.beat);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
    navigate(`/searchResults/${term}`);
  };

  return (
    <>
      <div className="searched-container">
        <div className="searched-results">
          <div className="searched-bar">
            <form onSubmit={handleSubmit} method="post">
              <input
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                type="text"
                placeholder={search}
              />
            </form>
          </div>
          <div className="searched-header">
            <h3>Search results for {search} </h3>
          </div>
          <div className="searched-items">
          {searched.length > 1 ? (
            searched.map((beat) => (
              <div className="searched-item">
                <div className="searched-item-image">
                  <img id="searched-item-image" src={beat.thumbnail} alt="" />
                </div>
                <div className="searched-item-details">
                  <p>{beat.title}</p>
                  <Link to={`/producer/${beat.producer}?id=${beat.producer._id}`}><p>@{beat.producer}</p></Link> 
                  <b>
                    {currency} {beat.price}
                  </b>
                  <br />
                  <img onClick={()=>(addToCart(beat._id))} id="searched-cart" src={assets.cartPurple} alt="image" />
                </div>

                <div className="searched-item-preview">
                  <p style={{ textAlign: "center", margin: "20px 0" }}>
                    Beat Preview with reduced quality
                  </p>
                  <audio
                    controls
                    preload="auto"
                    controlsList="nodownload"
                    onContextMenu={(e) => e.preventDefault()}
                  >
                    <source src={beat.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            ))
          ) : (
            <>
              <p>No Beats Found</p>
            </>
          )}
          </div>

          <div className="searched-related">
            <div className="searched-related-header">
              <h3>Related Beats</h3>
            </div>
            <div className="searched-related-container">
              {beats.map((beat) => (
                <div key={beat._id} className="beat-related">
                  <div className="beat-related-thumbnail">
                    <Link to={`/beat/${beat._id}`}>
                      {" "}
                      <img src={beat.thumbnail} alt="" />
                    </Link>
                  </div>
                  <div className="beat-related-title">
                    <p>{beat.title}</p>
                  </div>
                  <div className="beat-related-producer">
                    <Link to={`/producer/${beat.producer}`}>
                      <p>
                        @{beat.producer}{" "}
                        <img
                          id="verified-mark"
                          src={assets.goldCheckMark}
                          alt=""
                        />{" "}
                      </p>
                    </Link>
                  </div>
                  <div className="beat-related-price">
                    <p>
                      {currency} {beat.price}
                    </p>
                  </div>
                  <div className="beat-related-cart">
                    <img onClick={()=>(addToCart(beat._id))} id="beat-related-cart" src={assets.cartPurple} alt="cart" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchedItemPage;
