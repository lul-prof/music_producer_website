import React, { useContext, useState } from 'react'
import './HeroSearch.css'
import { assets } from '../../assets/assets'
import TitleComponent from '../TitleComponent/TitleComponent'
import { ShopContext } from '../../Context/ShopContext'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const HeroSearch = () => {
    const navigate = useNavigate();
    const { backend_url, setSearched, setLoading } =useContext(ShopContext);
    const [query, setQuery] = useState("");
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
    <div className="hero-mid">
        <div className="hero-mid-top">
            <div className="hero-mid-top-1">
                
            </div>
            <div className="hero-mid-top-2">
                <form method='post' onSubmit={handleSubmit}>
                    <input type="text" value={query} onChange={(e)=>(setQuery(e.target.value))} placeholder='Use mood,emotion & artist names to search for beats'/>
                </form>
            </div>
        </div>
        <div className="hero-center">
           <div className="hero-center-1">
                <iframe 
                    width="100%" 
                    height="315" 
                    src="https://www.youtube.com/embed/7BmgOWhZ0rA?si=icNoadWbPxmrurVs" 
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
           <div className="hero-center-2">
            <iframe 
                width="100%"
                height="315" 
                src="https://www.youtube.com/embed/ZBQ4Q-Hthmo?si=FF3xW9xgGM8DFHpp" 
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
        </div> 
        <div className="hero-search-header">
            <h2>LICENCING TERMS</h2>
            <h4>BUY LEASE OR PURCHASE FULLY</h4>
            <h4>YOU MUST CREDIT THE PRODUCER </h4>
            <hr />
        </div>
        <div className="hero-bottom">
            {/*------------------------------*/}
            <div className="hero-bottom-class">
                <div className="hero-bottom-class-header">
                    <h2>BASIC</h2>
                    <h5>Untagged MP3</h5>
                </div>
                <div className="hero-spacer" id='hero-spacer'>

                </div>
                <div className="hero-bottom-class-body">
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>Untagged MP3</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.notChecked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3 style={{textDecoration:"line-through"}}>Track Stems</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>2,000 digital copies</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>50,000 audio streams</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>1 Music video</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>50% publishing rights</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.notChecked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3 style={{textDecoration:"line-through"}}>Radio airplay</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.notChecked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3 style={{textDecoration:"line-through"}}>Live for profit performance</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>Must Credit "The Don"</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>Producer still owns rights</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-button">
                       <Link to={'/beats'}> <button>Beat Store</button> </Link>
                    </div>
                </div>
            </div>
            {/*------------------------------*/}
            <div className="hero-bottom-class">
                <div className="hero-bottom-class-header">
                    <h2>STANDARD</h2>
                    <h5>Untagged MP3&WAV</h5>
                </div>
                <div className="hero-spacer" id='hero-spacer'>

                </div>
                <div className="hero-bottom-class-body">
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>Untagged MP3/WAV</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.notChecked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3 style={{textDecoration:"line-through"}}>Track Stems</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>2,000 digital copies</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>100,000 audio streams</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>1 Music video</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>50% publishing rights</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.notChecked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3 style={{textDecoration:"line-through"}}>Radio airplay</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.notChecked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3 style={{textDecoration:"line-through"}}>Live for profit performance</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>Must Credit "The Don"</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>Producer still owns rights</h3>
                        </div>
                    </div>
                </div>
                <div className="hero-bottom-class-button">
                        <Link to={'/beats'}> <button>Beat Store</button> </Link>
                </div>
            </div>
            {/*------------------------------*/}
            <div className="hero-bottom-class">
                <div className="hero-bottom-class-header">
                    <h2>PREMIUM</h2>
                    <h5>Untagged MP3,WAV&Stems</h5>
                </div>
                <div className="hero-spacer" id='hero-spacer'>

                </div>
                <div className="hero-bottom-class-body">
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>Untagged MP3/WAV/Stems</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>Track Stems</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>2,000 digital copies</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>250,000 audio streams</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>1 Music video</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>50% publishing rights</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>Radio airplay</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>Live for profit performance</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>Must Credit "The Don"</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>Producer still owns rights</h3>
                        </div>
                    </div>
                </div>
                <div className="hero-bottom-class-button">
                        <Link to={'/beats'}> <button>Beat Store</button> </Link>
                </div>
            </div>
            {/*------------------------------*/}
            <div className="hero-bottom-class">
                <div className="hero-bottom-class-header">
                    <h2>UNLIMITED</h2>
                    <h5>Everything&Unlimited</h5>
                </div>
                <div className="hero-spacer" id='hero-spacer'>

                </div>
                <div className="hero-bottom-class-body">
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>Untagged MP3/WAV/Stems</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>Track Stems</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>2,000 digital copies</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>Unlimited audio streams</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>1 Music video</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>50% publishing rights</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>Radio airplay</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>Live for profit performance</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>Must Credit "The Don"</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-body-item">
                        <div className="hero-bottom-class-body-item-left">
                            <img src={assets.checked} alt="image" />
                        </div>
                        <div className="hero-bottom-class-body-item-right">
                            <h3>Producer still owns rights</h3>
                        </div>
                    </div>
                    <div className="hero-bottom-class-button">
                        <Link to={'/beats'}> <button>Beat Store</button> </Link>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default HeroSearch