import React, { useContext } from "react";
import "./SingleBlogPage.css";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext.jsx";

const SingleBlogPage = () => {
  const { id } = useParams();

  const { blogs } = useContext(ShopContext);

  const blog=blogs.find(b=>b._id===id);

  const navigateTo=(id)=>{
        document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
  }
  
  return (
    <>
      <div key={blog?._id} className="single-blog-container">
        {/*--------------------------*/}
        <div id="single-blog-top" className="single-blog-top">
          <div className="single-blog-top-left">
            <img src={blog?.image} alt="blog"/>
          </div>
          <div className="single-blog-top-right">
            <div className="single-blog-top-right-date">
              <p>
                 Created On {new Date(blog?.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
              </p>
            </div>
            <div className="single-blog-top-right-title">
              <h2>{blog?.title}</h2>
            </div>
            <div className="single-blog-top-right-description">
              <p>{blog?.description}</p>
            </div>
          </div>
        </div>
        {/*--------------------------*/}
        <div className="single-blog-mid-header">
            <h3>RELATED BLOGS</h3>
        </div>
        <div className="single-blog-mid">
            {
              blogs.map((blog)=>(
                blog?._id!==id
                ?
                <div key={blog?._id} className="related-blog">
                    <div className="related-blog-img">
                      <Link to={`/blog/${blog?._id}`}><img onClick={()=>(navigateTo("single-blog-top"))} src={blog?.image} alt="image" /></Link> 
                    </div>
                    <div className="related-blog-details">
                      <div className="related-blog-date">
                        <p>
                          Created On {new Date(blog?.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                      <div className="related-blog-title">
                        <p>{blog?.title}</p>
                      </div>
                    </div>
                </div>
                :
                <></>
              ))
            }
        </div>
        {/*--------------------------*/}
        <div className="single-blog-bottom">
            <Link to={'/beats'}> <button>SHOP NOW</button> </Link>
        </div>
      </div>
    </>
  );
};

export default SingleBlogPage;
