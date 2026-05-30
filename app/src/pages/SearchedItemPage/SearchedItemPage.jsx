import React, { useContext,useState } from "react";
import "./SearchedItemPage.css";
import { assets } from "../../assets/assets";
import { ShopContext } from "../../Context/ShopContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const SearchedItemPage = () => {
  const { addToCart,currency,beats, setSearched, searched, backend_url } =
    useContext(ShopContext);
  const { search } = useParams();
  const [term, setTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${backend_url}/api/user/search?query=${term}`,
      );
      if (response.data.success) {
        setSearched(response.data.beat);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
    navigate(`/searchResults/${term}`);
  };
  if(searched.length<=0){
    return(
      <div className="searched">
        <p>Could not find {search}</p>
      </div>
    )
  }
  else{
  return (
    <>
      <div className="searched">
        {/*-----------------------*/}
        <div className="searched-top">
          <div className="searched-top-form">
            <form method="post" onSubmit={handleSubmit}>
              <input type="text" id="searched" value={term} onChange={(e)=>(setTerm(e.target.value))} placeholder={search} />
            </form>
          </div>
          <div className="searched-top-header">
            <h2>search results for {search}</h2>
          </div>
          <div className="searched-top-results">
            {
              searched.map((item)=>(
                <div key={item?._id} className="result">
                    <div className="result-image">
                      <img src={item?.thumbnail} alt="image" />
                    </div>
                    <div className="result-details">
                      <div className="result-left">
                        <p className="title">{item?.title}</p>
                        <p>{currency} {item?.price}</p>
                      </div>
                      <div className="result-right">
                        <audio
                          controls
                          preload="auto"
                          controlsList="nodownload"
                          onContextMenu={(e) => e.preventDefault()}
                          >
                          <source src={item?.audio} type="audio/mpeg" />
                          <source src={item?.audio} type="audio/ogg"/>
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    </div>
                    <div className="result-btn">
                      <button onClick={()=>(addToCart(item?._id))}>ADD TO CART</button>
                    </div>
                </div>
              ))
            }
          </div>
        </div>
        {/*-----------------------*/}
        <div className="searched-mid">
          <div className="searched-mid-header">
            <h2>RELATED BEATS</h2>
          </div>
            {
              beats.map((beat)=>(
                <div key={beat?._id} className="searched-mid-result">
                  <div className="searched-mid-result-img">
                   <Link to={`/beat/${beat?._id}`}><img src={beat?.thumbnail} alt="image" /></Link> 
                  </div>
                  <div className="searched-mid-result-details">
                    <p>{beat?.title}</p>
                    <p>{currency} {beat?.price}</p>
                  </div>
                  <div className="searched-mid-result-btn">
                    <button onClick={()=>(addToCart(beat?._id))}>ADD TO CART</button>
                  </div>
                </div>
              ))
            }
        </div>
        {/*-----------------------*/}
        <div className="searched-bottom">
           <Link to={'/beats'}><button>BEAT STORE</button></Link> 
        </div>
      </div>
    </>
  );
}
};

export default SearchedItemPage;
