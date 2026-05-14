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
            {/*--------------------------*/}
            <div className="profile-top-left">
                <div className="profile-top-img">
                    <img src={user?.avatar} alt="avatar" />
                </div>
                
                <div className="profile-top-followers">
                    <h4>Followers <span>{user?.followers.length}</span></h4>
                    <h4>Following <span>{user?.following.length}</span></h4>
                </div>
    
                <div className="profile-top-names">
                    <p>{user?.username} aka {user?.first_name} {user?.last_name}</p>
                </div>
                <div className="profile-top-email">
                    <label htmlFor="email">
                        <p>{user?.email}</p>
                    </label>
                </div>
                <div className="profile-top-phone">
                    <label htmlFor="email">
                        <p>{user?.phone}</p>
                    </label>
                </div>
                <div className="profile-top-role">
                    <p>Role: {user?.role}</p>
                </div>

                <div className="profile-top-verified">
                    <p>{user?.isVerified?"verified":"Not Verified"} and {user?.isFeatured?"Featured":"Not Featured"}</p>
                </div>
                
            </div>
            {/*--------------------------*/}
            <div className="profile-top-right">
                <div className="profile-top-bio">
                    <h3>YOUR BIO</h3>
                    <p>{user?.bio}</p>
                </div>
                <div className="profile-top-handles">
                    <div className="profile-top-handles-project">
                        <iframe 
                        width="100%"
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
                        allowFullScreen>
                        </iframe>
                    </div>
                    <div className="profile-top-handles-links">
                        <Link to={user?.instagram}> 
                            <p><img src={assets.instagramIcon} alt="ig" id='handle' />Instagram</p>
                        </Link>
                        <Link to={user?.whatsapp}> 
                            <p><img src={assets.whatsappIcon} alt="ig" id='handle' />Whats App</p>
                        </Link>

                         <Link to={user?.spotify}> 
                            <p><img src={assets.spotifyIcon} alt="ig" id='handle' />Spotify</p>
                        </Link>
                        <Link to={user?.itunes}> 
                            <p><img src={assets.itunesIcon} alt="ig" id='handle' />Itunes</p>
                        </Link>

                        <Link to={user?.youtube}> 
                            <p><img src={assets.youtubeIcon} alt="ig" id='handle' />YouTube</p>
                        </Link>
                    </div>
                    <div className="profile-bottom">
                    <div className="profile-bottom-btn">
                            <Link to={'/updateProfile'}>
                            <button>
                                Update Profile
                            </button>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
        {/*---------------PROFILE BOTTOM--------------*/}
        
    </div>
    </>
  )
}

export default ProfilePage