import React from "react";
import "./SingleProducerPage.css";
import { Link, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { assets } from "../../assets/assets.js";
import axios from "axios";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext.jsx";

const SingleProducerPage = () => {

  const { backend_url, token,producers } = useContext(ShopContext);

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
        producerId:producerId,
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

  const producer=producers.find(producer=>producer._id===producerId)

  const unfollow = async () => {
    try {
      const userId = localStorage.getItem("user");
      if (!userId) {
        toast.error("Login and try again");
      }
      console.log(token);

      const response = await axios.post(`${backend_url}/api/user/unfollow`, {
        userId,
        producerId:producerId,
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

   return (
      <>
        <div key={producer?._id} className="single-producer">
          {/*----------------------------*/}
          <div className="single-producer-top">
            <div className="single-producer-top-left">
              <div className="single-producer-top-left-top">
                <img src={producer?.avatar} alt="avatar"/>
              </div>
              <div className="single-producer-top-left-bottom">
                <div className="single-producer-top-left-bottom-top">
                    <div className="single-producer-top-left-bottom-top-1">
                      <p>{producer?.followers.length}</p>
                      <p>Followers</p>
                    </div>
                    <div className="single-producer-top-left-bottom-top-2">
                      <p>{producer?.following.length}</p>
                      <p>Following</p>
                    </div>
                </div>
                {
                  token!==""
                  ?
                <div className="single-producer-top-left-bottom-mid">
                  {
                    producer?.followers.find(follower=>follower===userId)
                    ?
                    <button onClick={()=>(unfollow())}>Unfollow</button>
                    :
                    <button onClick={()=>(follow())}>Follow</button>
                  }
                </div>
                :
                <>
                <Link to={'/login'}><button>Login</button></Link>
                </>
              }
              </div>
            </div>
            <div className="single-producer-top-mid">
              <div className="single-producer-top-mid-username">
                <p>{producer?.username}</p>
              </div>
              <div className="single-producer-top-mid-name">
                <p>{producer?.first_name} {producer?.last_name}</p>
              </div>
              <div className="single-producer-top-mid-email">
                <p>{producer?.email}</p>
              </div>
              <div className="single-producer-top-mid-phone">
                <p>{producer?.phone}</p>
              </div>
            </div>
            <div className="single-producer-top-right">
                <div className="single-producer-top-right-date">
                  <p>
                   Joined {new Date(producer?.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div className="single-producer-top-right-bio">
                  <p>{producer?.bio}</p>
                </div>
            </div>
          </div>
          {/*----------------------------*/}
          <div className="single-producer-mid">
            <div className="single-producer-mid-left">
              <iframe
                      src={producer?.latest_project}
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
            <div className="single-producer-mid-right">
               <Link to={producer?.instagram} target="_blank"><div className="single-producer-mid-right-class">
                  <div className="single-producer-mid-right-class-left">
                    <img src={assets.instagramIcon} alt="Instagram" />
                  </div>
                  <div className="single-producer-mid-right-class-right">
                    <h3>Instagram</h3>
                  </div> 
                </div></Link>
                <Link to={producer?.whatsapp} target="_blank"><div className="single-producer-mid-right-class">
                  <div className="single-producer-mid-right-class-left">
                    <img src={assets.whatsappIcon} alt="Whats app" />
                  </div>
                  <div className="single-producer-mid-right-class-right">
                    <h3>WhatsApp</h3>
                  </div>
                </div></Link>
                <Link to={producer?.itunes} target="_blank"><div className="single-producer-mid-right-class">
                  <div className="single-producer-mid-right-class-left">
                    <img src={assets.itunesIcon} alt="Itunes" />
                  </div>
                  <div className="single-producer-mid-right-class-right">
                    <h3>Itunes</h3>
                  </div>
                </div></Link>
                <Link to={producer?.youtube} target="_blank"><div className="single-producer-mid-right-class">
                  <div className="single-producer-mid-right-class-left">
                    <img src={assets.youtubeIcon} alt="youtube" />
                  </div>
                  <div className="single-producer-mid-right-class-right">
                    <h3>YouTube</h3>
                  </div>
                </div></Link>
                <Link to={producer?.spotify} target="_blank"><div className="single-producer-mid-right-class">
                  <div className="single-producer-mid-right-class-left">
                    <img src={assets.spotifyIcon} alt="spotify" />
                  </div>
                  <div className="single-producer-mid-right-class-right">
                    <h3>Spotify</h3>
                  </div>
                </div></Link>
            </div>
          </div>
          {/*----------------------------*/}
          <div className="single-producer-bottom">
              <Link to={'/beats'}> <button>SHOP NOW</button> </Link>
          </div>
        </div>
      </>
  );
};

export default SingleProducerPage;
