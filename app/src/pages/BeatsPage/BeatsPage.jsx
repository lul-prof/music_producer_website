import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import "./BeatsPage.css";
import axios from "axios";
import toast from "react-hot-toast";

const BeatsPage = () => {
  const { beats, currency, addToCart, backend_url, setSearched, setLoading } =
    useContext(ShopContext);

  const navigate = useNavigate();

  const [query, setQuery] = useState("dancehall");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        `${backend_url}/api/user/search?query=${query}`,
      );
      if (response.data.success) {
        setSearched(response.data.beat);
        setLoading(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    navigate(`/searchResults/${query}`);
  };
  return (
    <>
      <section className="beats-page">
        {/*----------------------------*/}
        <div className="beats-page-header">
          <div className="beats-page-header-left">
            <h1>SHOP ALL</h1>
          </div>
          <div className="beats-page-header-right">
            <Link to={"/merchandise"}>
              <button>MERCHANDISE</button>
            </Link>
          </div>
        </div>
        {/*----------------------------*/}
        <div className="beats-page-mid">
          <form method="post" onSubmit={handleSubmit}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Use mood, genre or artist name..."
            />
          </form>
        </div>
        {/*----------------------------*/}
        <div className="beats-page-beats">
          {beats.map((beat) => (
            <div key={beat?._id} className="beat-container">
              <div className="beat-thumbnail">
                <Link to={`/beat/${beat?._id}`}>
                  <img src={beat?.thumbnail} alt="beat thumbnail" />
                </Link>
              </div>
              <div className="beat-title">
                <p>{beat?.title}</p>
              </div>
              <div className="beat-price">
                <p>
                  {currency} {beat?.price.toLocaleString()}
                </p>
              </div>
              <div className="beat-btn">
                <button onClick={() => addToCart(beat?._id)}>
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BeatsPage;
