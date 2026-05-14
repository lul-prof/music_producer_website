import React, { useEffect, useState } from "react";
import "./SingleProducerPage.css";
import { Link, useParams, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { assets } from "../../assets/assets.js";
import axios from "axios";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext.jsx";

const SingleProducerPage = () => {
  const { username } = useParams();

  const [producer, setproducer] = useState(false);

  const { backend_url, token } = useContext(ShopContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const producerId = searchParams.get("id");

  const userId = localStorage.getItem("user");

  const follow = async () => {
    try {
      const userId = localStorage.getItem("user");
      if (!userId) {
        toast.error("Login and try again");
      }
      console.log(token);

      const response = await axios.post(`${backend_url}/api/user/follow`, {
        userId,
        artistId:producerId,
      });
      console.log(response);
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const unfollow = async () => {
    try {
      const userId = localStorage.getItem("user");
      if (!userId) {
        toast.error("Login and try again");
      }
      console.log(token);

      const response = await axios.post(`${backend_url}/api/user/unfollow`, {
        userId,
        artistId:producerId,
      });
      console.log(response);
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchproducer = async () => {
      try {
        const response = await axios.post(
          `${backend_url}/api/user/producer/${username}`,
        );
        if (response.data.success) {
          setproducer(response.data.producer);
          console.log(response);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchproducer();
  }, [username, producer, backend_url]);
  return (
    <>
      <div className="single-producer-container">
        {/*----------------------------*/}
        <div className="single-producer-left">
          <div className="single-producer-image">
            <img id="single-producer-image" src={producer.avatar} alt="" />
          </div>
          <div className="single-producer-details">
            <h4>
              {producer.username}{" "}
              <img
                id="single-producer-verify"
                src={assets.goldCheckMark}
                alt=""
              />{" "}
            </h4>
            <h6 style={{ margin: "20px 0" }}>
              Followers {producer ? producer.followers.length : 0} Following{" "}
              {producer ? producer.following.length : 0}
            </h6>
            {producer ? (
              producer.followers.find((follower) => follower === userId) ? (
                <div
                  id="single-producer-unfollow-button"
                  className="single-producer-button"
                >
                  <button onClick={unfollow}>UnFollow</button>
                </div>
              ) : (
                <div
                  id="single-producer-button"
                  className="single-producer-button"
                >
                  <button onClick={follow}>Follow</button>
                </div>
              )
            ) : (
              ""
            )}
          </div>
        </div>
        {/*----------------------------*/}
        <div className="single-producer-right">
          <div className="single-producer-right-bio">
            <h1 style={{ color: "#BF40BF" }}>BIO</h1>
            <p>{producer.bio}</p>
          </div>

          <div className="single-producer-right-Links">
            <div className="single-producer-right-Links-header">
              <h1>Social Links</h1>
            </div>
            <div className="single-producer-right-Links-details">
              <Link to={`${producer.instagram}`} target="_blank">
                <p>
                  {" "}
                  <img
                    id="social-link-icon"
                    src={assets.instagramIcon}
                    alt=""
                  />{" "}
                  Instagram
                </p>
              </Link>
              <Link to={`${producer.spotify}`} target="_blank">
                <p>
                  <img id="social-link-icon" src={assets.spotifyIcon} alt="" />
                  Spotify
                </p>
              </Link>
              <Link to={`${producer.itunes}`} target="_blank">
                <p>
                  <img id="social-link-icon" src={assets.itunesIcon} alt="" />
                  Itunes
                </p>
              </Link>
              <Link to={`${producer.youtube}`} target="_blank">
                <p>
                  <img id="social-link-icon" src={assets.youtubeIcon} alt="" />
                  Youtube
                </p>
              </Link>
              <Link to={`${producer.whatsapp}`} target="_blank">
                <p>
                  <img id="social-link-icon" src={assets.whatsappIcon} alt="" />
                  Whatsapp
                </p>
              </Link>
            </div>
          </div>

          <div className="single-producer-right-frame">
            <h2 style={{ color: "#BF40BF" }}>LATEST PROJECT</h2>
            <iframe
              src={producer.latest_project}
              frameBorder="0"
              title="Latest Song"
              width="100%"
              height="400"
              loading="lazy"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProducerPage;
