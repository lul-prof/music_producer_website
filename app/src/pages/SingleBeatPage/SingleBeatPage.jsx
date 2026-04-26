import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import toast from "react-hot-toast";
import "./SingleBeatPage.css";
import { ShopContext } from "../../Context/ShopContext";
import axios from "axios";

const SingleBeatPage = () => {
  const { id } = useParams();
  const navigate=useNavigate();

  const { currency, addToCart, backend_url,token } = useContext(ShopContext);

  const [beat, setBeat] = useState({});

  const [beats, setBeats] = useState([]);

  useEffect(()=>{
    const fetchBeats=async()=>{
      try {
        const response=await axios.get(`${backend_url}/api/user/beats`);
        if(response.data.success){
          setBeats(response.data.beats);
        }else{
          console.log(response.data.message);
          
        }
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchBeats()
  },[beats,backend_url])


  useEffect(() => {
    const fetchBeat = async () => {
      try {
        const response = await axios.post(`${backend_url}/api/user/beat/${id}`);
        if(response.data.success){
          setBeat(response.data.beat);
        }else{
          toast(response.data.message);
          console.log(response.data.message);
          
        }
      } catch (error) {
        toast.error(error);
        console.log(error);
      }
    };
    fetchBeat();
  }, [id, beat,backend_url]);
  return (
    <>
      <div className="single-beat-container">
        <div className="single-beat">
          {/*----------------------*/}
          <div className="single-beat-left">
            <div className="single-beat-left-image">
              <img id="single-beat-left-img" src={beat.thumbnail} alt="" />
              <div className="single-beat-preview">
                <figure>
                  <figcaption style={{marginLeft:"10px"}}>Listen to {beat.title}</figcaption>
                  <div className="link" style={{justifySelf:"left",marginLeft:"10px",marginTop:"5px"}}>
                    <Link style={{color:"#BF40BF"}} to={`/download?src=${beat.audio}&title=${beat.title}&image=${beat.thumbnail}`} target="_blank">Click here to play Audio</Link>
                  </div>
                </figure>
              </div>
              <div className="single-beat-left-details" style={{padding:"0 10px"}}>
            
               <p> <b>
                  {currency} {beat.price}
                </b>
                </p>
                <div className="cart-img">
                  <img
                    onClick={() => (token?addToCart(beat._id):navigate('/login')
                    )}
                    id="single-beat-left-cart"
                    src={assets.cartPurple}
                    alt=""
                  />
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
                <div key={beat._id} className="similar">
                  <Link to={`/beat/${beat._id}`}>
                    <img src={beat.thumbnail} alt="" />
                  </Link>
                  <p style={{marginLeft:"5px",color:"#BF40BF",fontWeight:"500"}}>{beat.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBeatPage;
