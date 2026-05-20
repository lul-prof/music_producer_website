import React, { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./SingleBeatPage.css";
import { ShopContext } from "../../Context/ShopContext";

const SingleBeatPage = () => {
  const { id } = useParams();
  const navigate=useNavigate();
  

  const { currency, addToCart,token,beats } = useContext(ShopContext);

  const navigateTo=(id)=>{
        document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
    }

  const beat=beats.find(b=>b._id===id);

  useEffect(() => {
  
  }, [id])
  

  return (
    <>
      <div className="single-beat-container">
        <div id={beat?._id} className="single-beat">
          {/*----------------------*/}
          <div className="single-beat-left" id="single-beat-left">
            <div className="single-beat-left-image">
              <h2 id="b-title" style={{marginLeft:"5px"}}>{beat?.title}</h2>
              <img id="single-beat-left-img" src={beat?.thumbnail} alt="" />
             
              <div className="single-beat-preview">
                <audio
                id={beat?._id}
                    controls
                    preload="auto"
                    controlsList="nodownload"
                    onContextMenu={(e) => e.preventDefault()}
                  >
                    <source src={beat?.audio} type="audio/mpeg" />
                    <source src={beat?.audio} type="audio/ogg"/>
                    Your browser does not support the audio element.
                  </audio>
                <figure>
                  <div className="link" style={{justifySelf:"left",marginLeft:"10px",marginTop:"5px"}}>
                    <Link style={{color:"#BF40BF"}} to={`/download?src=${beat?.audio}&title=${beat?.title}&image=${beat?.thumbnail}`} target="_blank">Click here to play Audio</Link>
                  </div>
                </figure>
              </div>
              <div className="single-beat-left-details" style={{padding:"0 10px"}}>
            
               <h3 id="b-price"><span>
                  {currency} {beat?beat.price?.toLocaleString('en-US'):beat?.price} {/*toLocaleString('en-US')*/}
                </span>
                </h3>
                <div className="cart-img">
                  <img
                  onMouseOver={()=>(document.getElementById("c-img").style.display="block")}
                  onMouseOut={()=>(document.getElementById("c-img").style.display="none")}
                    onClick={() => (token?addToCart(beat._id):navigate('/login')
                    )}
                    id="single-beat-left-cart"
                    src={assets.cartPurple}
                    alt=""
                  />
                  <p id="c-img" style={{display:"none"}}>Add to cart</p>
                </div>
              </div>
            </div>
          </div>
          {/*----------------------*/}
          <div className="single-beat-right">
            <div className="single-beat-right-header">
              <h1>Similar Beats</h1>
            </div>
            <div className="similar-beat-right">
              {beats.map((beat) => (
                beat._id!==id?
                <div key={beat._id} className="similar">
                  <Link to={`/beat/${beat._id}`}>
                    <img src={beat.thumbnail} alt="image" onClick={()=>(navigateTo("single-beat-left"))} />
                  </Link>
                  <p style={{marginLeft:"5px",color:"#BF40BF",fontWeight:"500"}}>{beat.title}</p>
                </div>
                :
                
                <></>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBeatPage;
