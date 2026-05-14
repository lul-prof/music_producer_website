import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import './BeatsPage.css'
import { Link } from "react-router-dom";

const BeatsPage = () => {
  const {currency,beats}=useContext(ShopContext);
  return (
    <>
    <div className="beatspage">
      <div className="beatspage-header">
        <h1>All Beats</h1>
      </div>
      <div className="beatspage-mid">

      </div>
      <div className="beatspage-class">
        {
          beats.map((beat)=>(
            <div key={beat._id} className="beat-class">
              <div className="beat-img">
                <Link to={`/beat/${beat._id}`}> <img src={beat.thumbnail} alt="image" /></Link>
              </div>
              <div className="beat-sample">
                  <audio
                      controls
                      preload="auto"
                      controlsList="nodownload"
                      onContextMenu={(e) => e.preventDefault()}
                    >
                      <source src={beat.audio} type="audio/mpeg" />
                      <source src={beat.audio} type="audio/ogg"/>
                      Your browser does not support the audio element.
                  </audio>
              </div>
              <div className="beat-title">
                <p>{beat.title}</p>
              </div>
              <div className="beat-price">
                <p>{currency} {beat.price}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default BeatsPage