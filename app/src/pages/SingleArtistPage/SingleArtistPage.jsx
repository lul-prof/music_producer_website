import React, { useEffect, useState } from "react";
import "./SingleArtistPage.css";
import { Link, useParams, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { assets } from "../../assets/assets";
import axios from 'axios'
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const SingleArtistPage = () => {
  const { username } = useParams();
  const [artist, setArtist] = useState(false);

  const defaultFollowers={1:"default"};

  const {backend_url,token}=useContext(ShopContext)

  const [searchParams,setSearchParams]=useSearchParams();
  
  const artistId=searchParams.get("id");

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


  useEffect(() => {
    const fetchArtist = async () => {
    try {
      const response=await axios.post(`${backend_url}/api/user/artist/${username}`);      
      if(response.data.success){
        setArtist(response.data.artist);
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error);
    }
  }
    fetchArtist();
  }, [username, artist,backend_url]);
  return (
    <>
      <div className="single-artist-container">
        {/*----------------------------*/}
        <div className="single-artist-left">
          <div className="single-artist-image">
            <img id="single-artist-image" src={artist.avatar} alt="" />
          </div>
          <div className="single-artist-details">
            <h4>
              {artist.username}{" "}
              <img
                id="single-artist-verify"
                src={assets.blueCheckMark}
                alt=""
              />{" "}
            </h4>

            <h6 style={{margin:"20px 0"}}>Followers {artist?artist.followers.length:""} Following {artist?artist.following.length:""}</h6>
            {
              artist?
            artist.followers.find(follower=>follower===userId)?
              <div id="single-artist-unfollow-button" className="single-artist-button">
                <button onClick={unfollow}>UnFollow</button>    
            </div>
            :
            <div id="single-artist-button" className="single-artist-button">
                <button onClick={follow}>Follow</button>
            </div>
            :""
            }
            
            
          </div>
        </div>
        {/*----------------------------*/}
        <div className="single-artist-right">
          <div className="single-artist-right-bio">
            <h1 style={{color:"#BF40BF"}}>BIO</h1>
            <p>{artist.bio}</p>
          </div>

          <div className="single-artist-right-Links">
            <div className="single-artist-right-Links-header">
              <h1>Social Links</h1>
            </div>
            <div className="single-artist-right-Links-details">
              <Link to={`${artist.instagram}`} target="_blank">
                <p> <img id="social-link-icon" src={assets.instagramIcon} alt="" /> Instagram</p>
              </Link>
              <Link  to={`${artist.spotify}`} target="_blank">
                <p><img id="social-link-icon" src={assets.spotifyIcon} alt="" />Spotify</p>
              </Link>
              <Link to={`${artist.itunes}`} target="_blank">
                <p><img id="social-link-icon" src={assets.itunesIcon} alt="" />Itunes</p>
              </Link>
              <Link to={`${artist.youtube}`} target="_blank">
                <p><img id="social-link-icon" src={assets.youtubeIcon} alt="" />Youtube</p>
              </Link>
              <Link to={`${artist.whatsapp}`} target="_blank">
                <p><img id="social-link-icon" src={assets.whatsappIcon} alt="" />Whatsapp</p>
              </Link>
            </div>
          </div>

          <div className="single-artist-right-frame">
            <h1 style={{color:"#BF40BF"}}>LATEST PROJECT</h1>
            <iframe
              src={artist.latest_project}
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

export default SingleArtistPage;
