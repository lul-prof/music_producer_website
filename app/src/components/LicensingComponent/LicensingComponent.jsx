import React from 'react'
import './LicensingComponent.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const LicensingComponent = () => {
  return (
    <>
    <section className="licensing">
        <div className="licensing-circle">

        </div>
        {/*---------------------------*/}
        <div className="licensing-header">
            <div className="licensing-header-left">
                <img className='licensing-bullet' src={assets.bullet} alt="bullet" />
                <h1>LICENSING</h1>
            </div>
            <div className="licensing-header-right">
               <Link to={'/beats'}><button>BEAT STORE</button></Link> 
            </div>
        </div>
        {/*---------------------------*/}
        <div className="licensing-terms">
            <div className="basic">
                <div className="basic-top">
                    <h1>BASIC</h1>
                </div>
                <div className="basic-mid">
                    <div className="basic-mid-top">
                        <h1>Untagged MP3</h1>
                    </div>
                    <div className="basic-mid-bottom">
                        <h2>KES 3,000</h2>
                    </div>
                </div>
                <div className="basic-terms">
                    <ol>
                        <li>Untagged MP3</li>
                        <li>2,000 digital copies</li>
                        <li>50,000 audio streams</li>
                        <li>1 music video</li>
                        <li>50% publishing rights</li>
                        <li>Must credit "The Don"</li>
                        <li>Producer still owns rights</li>
                    </ol>
                </div>
                <div className="basic-deal">
                    <p>BUY 3 TRACKS GET 1 FREE</p>
                </div>
            </div>
            <div className="standard">
                <div className="standard-top">
                    <h1>STANDARD</h1>
                </div>
                <div className="standard-mid">
                    <div className="standard-mid-top">
                        <h1>Untagged MP3 & WAV</h1>
                    </div>
                     <div className="standard-mid-bottom">
                        <h2>KES 6,000</h2>
                    </div>
                </div>
                <div className="standard-terms">
                    <ol>
                        <li>Untagged Mp3 & WAV</li>
                        <li>2,000 digital copies</li>
                        <li>55% Publishing rights</li>
                        <li>100,000 audio streams</li>
                        <li>1 music video</li>
                        <li>Must credit "The Don"</li>
                        <li>Producer still owns rights</li>
                    </ol>
                </div>
                <div className="standard-deal">
                    <p>BUY 2 TRACKS GET 1 FREE</p>
                </div>
            </div>
            <div className="premium">
                <div className="premium-top">
                    <h1>PREMIUM</h1>
                </div>
                <div className="premium-mid">
                    <div className="standard-mid-top">
                        <h1>Untagged MP3,WAV & Stems</h1>
                    </div>
                     <div className="standard-mid-bottom">
                        <h2>KES 10,000</h2>
                    </div> 
                </div>
                <div className="premium-terms">
                    <ol>
                        <li>Track Stems</li>
                        <li>2,000 digital copies</li>
                        <li>250,000 audio streams</li>
                        <li>1 music video</li>
                        <li>Radio airplay</li>
                        <li>Live for profit performance</li>
                        <li>Must Credit "The Don"</li>
                        <li>Producer still owns rights</li>
                    </ol>
                </div>

                <div className="premium-deal">
                    <p>BUY 2 TRACKS GET 1 FREE</p>
                </div>
            </div>
            <div className="unlimited">
                <div className="unlimited-top">
                    <h1>UNLIMITED</h1>
                </div>
                <div className="unlimited-mid">
                    <div className="standard-mid-top">
                        <h1>Everything & Unlimited</h1>
                    </div>
                     <div className="standard-mid-bottom">
                        <h2>KES 15,000</h2>
                    </div> 
                </div>
                <div className="unlimited-terms">
                    <ol>
                        <li>Track Stems</li>
                        <li>Unlimited audio streams</li>
                        <li>Unlimited music videos</li>
                        <li>Radio airplay</li>
                        <li>Live for profit performance</li>
                        <li>Must credit "The Don"</li>
                        <li>70% publishing rights</li>
                    </ol>
                </div>
                <div className="unlimited-deal">
                    <p>BUY 1 TRACK GET 1 FREE SESSION</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default LicensingComponent