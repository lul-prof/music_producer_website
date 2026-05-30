import React from "react";
import "./SingleArtistPage.css";
import { Link, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { assets } from "../../assets/assets";
import axios from 'axios'
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const SingleArtistPage = () => {

  const {backend_url,token,artists}=useContext(ShopContext)

  const [searchParams,setSearchParams]=useSearchParams();
  
  const artistId=searchParams.get("id");

  const artist=artists.find(artist=>artist._id===artistId)

  const userId=localStorage.getItem("user");


  const follow=async()=>{
    try {
      const userId=localStorage.getItem("user");
      if(!userId){
        toast.error("Login and try again");
      }
      console.log(token);
      
      const response=await axios.post(`${backend_url}/api/user/follow`,{userId,artistId});
      console.log(response);
      if(response.data.success){
        toast.success(response.data.message);
      }else{
        toast.error(response.data.message)
      }
      
    } catch (error) {
      console.log(error); 
    }
  }

  const unfollow=async()=>{
    try {
      const userId=localStorage.getItem("user");
      if(!userId){
        toast.error("Login and try again");
      }
      console.log(token);
      
      const response=await axios.post(`${backend_url}/api/user/unfollow`,{userId,artistId});
      console.log(response);
      if(response.data.success){
        toast.success(response.data.message);
      }else{
        toast.error(response.data.message)
      }
      
    } catch (error) {
      console.log(error); 
    }
  }

  return (
    <>
      <div key={artist?._id} className="single-artist">
        {/*----------------------------*/}
        <div className="single-artist-top">
          <div className="single-artist-top-left">
            <div className="single-artist-top-left-top">
              <img src={artist?.avatar} alt="avatar"/>
            </div>
            <div className="single-artist-top-left-bottom">
              <div className="single-artist-top-left-bottom-top">
                  <div className="single-artist-top-left-bottom-top-1">
                    <p>{artist?.followers.length}</p>
                    <p>Followers</p>
                  </div>
                  <div className="single-artist-top-left-bottom-top-2">
                    <p>{artist?.following.length}</p>
                    <p>Following</p>
                  </div>
              </div>
              {
                token!==""
                ?
              <div className="single-artist-top-left-bottom-mid">
                {
                  artist?.followers.find(follower=>follower===userId)
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
          <div className="single-artist-top-mid">
            <div className="single-artist-top-mid-username">
              <p>{artist?.username}</p>
            </div>
            <div className="single-artist-top-mid-name">
              <p>{artist?.first_name} {artist?.last_name}</p>
            </div>
            <div className="single-artist-top-mid-email">
              <p>{artist?.email}</p>
            </div>
            <div className="single-artist-top-mid-phone">
              <p>{artist?.phone}</p>
            </div>
          </div>
          <div className="single-artist-top-right">
              <div className="single-artist-top-right-date">
                <p>
                 Joined {new Date(artist?.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="single-artist-top-right-bio">
                <p>{artist?.bio}</p>
              </div>
          </div>
        </div>
        {/*----------------------------*/}
        <div className="single-artist-mid">
          <div className="single-artist-mid-left">
            <iframe
                    src={artist?.latest_project}
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
          <div className="single-artist-mid-right">
             <Link to={artist?.instagram} target="_blank"><div className="single-artist-mid-right-class">
                <div className="single-artist-mid-right-class-left">
                  <img src={assets.instagramIcon} alt="Instagram" />
                </div>
                <div className="single-artist-mid-right-class-right">
                  <h3>Instagram</h3>
                </div> 
              </div></Link>
              <Link to={artist?.whatsapp} target="_blank"><div className="single-artist-mid-right-class">
                <div className="single-artist-mid-right-class-left">
                  <img src={assets.whatsappIcon} alt="Whats app" />
                </div>
                <div className="single-artist-mid-right-class-right">
                  <h3>WhatsApp</h3>
                </div>
              </div></Link>
              <Link to={artist?.itunes} target="_blank"><div className="single-artist-mid-right-class">
                <div className="single-artist-mid-right-class-left">
                  <img src={assets.itunesIcon} alt="Itunes" />
                </div>
                <div className="single-artist-mid-right-class-right">
                  <h3>Itunes</h3>
                </div>
              </div></Link>
              <Link to={artist?.youtube} target="_blank"><div className="single-artist-mid-right-class">
                <div className="single-artist-mid-right-class-left">
                  <img src={assets.youtubeIcon} alt="youtube" />
                </div>
                <div className="single-artist-mid-right-class-right">
                  <h3>YouTube</h3>
                </div>
              </div></Link>
              <Link to={artist?.spotify} target="_blank"><div className="single-artist-mid-right-class">
                <div className="single-artist-mid-right-class-left">
                  <img src={assets.spotifyIcon} alt="spotify" />
                </div>
                <div className="single-artist-mid-right-class-right">
                  <h3>Spotify</h3>
                </div>
              </div></Link>
          </div>
        </div>
        {/*----------------------------*/}
        <div className="single-artist-bottom">
            <Link to={'/beats'}> <button>SHOP NOW</button> </Link>
        </div>
      </div>
    </>
  );
};

export default SingleArtistPage;
