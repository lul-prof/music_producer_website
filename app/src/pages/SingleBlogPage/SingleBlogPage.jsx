import React, { useContext } from "react";
import "./SingleBlogPage.css";
import { Link, useParams } from "react-router-dom";
import { assets } from "../../assets/assets.js";
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
      <div className="single-blog-container">
        <div className="single-blog">
          <div className="single-blog-header">
            <p>
              Created on {new Date(blog?.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
            </p>
            <Link to={`/producer/the_don`}>
              <p>
                @the_don{" "}
                <img
                  id="verified"
                  src={blog?.isFeatured ? assets.goldCheckMark : assets.goldCheckMark }
                  alt="image"
                />{" "}
              </p>
            </Link>
          </div>

          <div id="single-blog-image" className="single-blog-image">
            <img src={blog?.image} alt="" />
          </div>
          <div className="single-blog-title">
            <h3>{blog?.title}</h3>
          </div>
          <div className="single-blog-description">
            <p>{blog?.description}</p>
          </div>
        </div>
        {/*--------------Related Blogs---------------*/}
        <hr style={{ marginBottom: "10px" }} />
        <div className="single-blog-related">
          <div className="related-blogs-header">
            <h1>You Might Like</h1>
          </div>
          <div className="related-blogs">
            {blogs.map((blo) => (
              blo?._id!==id
              ?
              <div key={blo?._id} className="related-blog">
                <div className="related-blog-image">
                  <Link to={`/blog/${blo?._id}`}>
                    {" "}
                    <img
                      id="related-blog-image"
                      src={blo?.image}
                      alt="image"
                      onClick={()=>(navigateTo("single-blog-image"))}
                    />
                  </Link>
                </div>
                <div className="related-blog-details">
                  <h6>{blo?.title}</h6>
                </div>
                <div className="related-blog-description">
                  <h6>{blo?.description}</h6>
                </div>
               
              </div>
              :
              <></>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogPage;
