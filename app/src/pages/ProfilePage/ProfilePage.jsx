import React, { useContext } from 'react'
import './ProfilePage.css'
import { ShopContext } from '../../Context/ShopContext'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    const {users}=useContext(ShopContext);
    
    const id=localStorage.getItem('user')
    const user=users.find(user=>user._id===id);
    console.log(user);
    
  return (
    <>
    <div className="profile">
        {/*---------------PROFILE TOP--------------*/}
        <div className="profile-top">
            <div className="profile-top-left">
                <div className="profile-top-left-img">
                    <img src={user?.avatar} alt="avatar" />
                </div>
                <div className="profile-top-left-date">
                    <p>
                        {new Date(user?.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                </div>
                <div className="profile-top-left-bottom">
                    <p>Date Joined</p>
                </div>
            </div>
            <div className="profile-top-mid">
                <div className="profile-top-mid-username">
                    <p>{user?.username}</p>
                </div>
                <div className="profile-top-mid-name">
                    <p>{user?.first_name} {user?.last_name}</p>
                </div>
                <div className="profile-top-mid-phone">
                    <p>{user?.phone}</p>
                </div>
                <div className="profile-top-mid-email">
                    <p>{user?.email}</p>
                </div>
                
            </div>
            <div className="profile-top-right">
                <div className="profile-top-right-left">
                    <div className="profile-top-right-left-left">
                        <p className='followers'>{user?.followers.length}</p>
                        <p>Followers</p>
                    </div>
                    <div className="profile-top-right-left-right">
                        <p className='following'>{user?.following.length}</p>
                        <p>Following</p>
                    </div>
                </div>
                
                <div className="profile-top-right-right">
                    <p>{user?.bio}</p>
                </div>
            </div>
        </div>
        {/*---------------PROFILE MID--------------*/}
        <div className="profile-mid">
            <div className="profile-mid-left">
                <iframe
                    src={user?.latest_project}
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
            <div className="profile-mid-right">
                <div className="profile-mid-right-class">
                    <div className="profile-mid-right-class-left">
                        <img src={assets.instagramIcon} alt="instagram" />
                    </div>
                    <div className="profile-mid-right-class-right">
                        <Link to={user?.instagram} target='_blank'><p>Instagram</p></Link>
                    </div>
                </div>
                <div className="profile-mid-right-class">
                    <div className="profile-mid-right-class-left">
                        <img src={assets.whatsappIcon} alt="whatsapp" />
                    </div>
                    <div className="profile-mid-right-class-right">
                        <Link to={user?.whatsapp} target='_blank'><p>Whats App</p></Link>
                    </div>
                </div>
                <div className="profile-mid-right-class">
                    <div className="profile-mid-right-class-left">
                        <img src={assets.spotifyIcon} alt="spotify" />
                    </div>
                    <div className="profile-mid-right-class-right">
                        <Link to={user?.spotify} target='_blank'><p>Spotify</p></Link>
                    </div>
                </div>
                <div className="profile-mid-right-class">
                    <div className="profile-mid-right-class-left">
                        <img src={assets.itunesIcon} alt="itunes" />
                    </div>
                    <div className="profile-mid-right-class-right">
                        <Link to={user?.itunes} target='_blank'><p>Itunes</p></Link>
                    </div>
                </div>
                <div className="profile-mid-right-class">
                    <div className="profile-mid-right-class-left">
                        <img src={assets.youtubeIcon} alt="youtube" />
                    </div>
                    <div className="profile-mid-right-class-right">
                        <Link to={user?.youtube} target='_blank'><p>Youtube</p></Link>
                    </div>
                </div>
            </div>
        </div>
        {/*---------------PROFILE BOTTOM--------------*/}
        <div className="profile-bottom">
           <Link to={'/updateProfile'}><button>UPDATE PROFILE</button></Link>
        </div>
           
    </div>
    </>
  )
}

export default ProfilePage