import React from 'react'
import './DownloadPage.css'
import { useSearchParams } from 'react-router-dom'

const DownloadPage = () => {
    const [searchParams,setSearchParams]=useSearchParams();

    const audioSrc=searchParams.get("src");
    const audioTitle=searchParams.get("title");
    const image=searchParams.get("image");
    
  return (
    <>
    <div className="download-container">
        <div className="download-class">
            <div className="download-header">
                <h2 style={{color:"#BF40BF"}}>{audioTitle}</h2>
            </div>
            <div className="download-audio">
                <audio
                    controls
                    preload="auto"
                    controlsList="nodownload"
                    onContextMenu={(e) => e.preventDefault()}
                  >
                    <source src={audioSrc} type="audio/mpeg" />
                    <source src={audioSrc} type="audio/ogg"/>
                    Your browser does not support the audio element.
                  </audio>
            </div>
            <div className="download-image">
                <img src={image} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default DownloadPage