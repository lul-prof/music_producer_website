import React, { useContext } from 'react'
import './FeaturedBlogsComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const FeaturedBlogsComponent = () => {
    const {blogs}=useContext(ShopContext);
    
  if(blogs.length>0){
    return (
    <>
    <div className="featured-blogs-container">
        <div className="featured-blogs-header">
            <h2>BLOGS AND UPDATES</h2>
            <h4>LATEST NEWS ABOUT THE MUSIC INDUSTRY</h4>
            <hr />
        </div>
        <div className="featured-blogs">
            {
                blogs.map((blog)=>(
                    blog.isFeatured ?
                    <>
                    <div key={blog._id} className="featured-blog">
                        <div className="featured-blog-image">
                           <Link to={`/blog/${blog._id}`}> <img src={blog.image} alt="" /></Link>
                        </div>
                        <div className="blog-title">
                            <h3>{blog.title}</h3>
                        </div>
                        <div className="blog-description">
                            <p>{blog.description}</p>
                        </div>
                    </div>
                    </>
                    :
                    <></>
                ))
            }
        </div>
    </div>
    </>
  )
  }else{
    return(
        <>
        <div id="glitter-class" className="glitter-class">
        <div className="featured-blogs-header">
            <h2>BLOGS AND UPDATES</h2>
            <h4>LATEST NEWS ABOUT THE MUSIC INDUSTRY</h4>
            <hr />
        </div>
        <div className="glitter">
          <div className="glitter-box">
            <div className="glitter-main"></div>
            <div className="glitter-tag"></div>
          </div>
          <div className="glitter-box">
            <div className="glitter-main"></div>
            <div className="glitter-tag"></div>
          </div>
          <div className="glitter-box">
            <div className="glitter-main"></div>
            <div className="glitter-tag"></div>
          </div>
          <div className="glitter-box">
            <div className="glitter-main"></div>
            <div className="glitter-tag"></div>
          </div>
          
        </div>
        </div>
      </>
    )
  }
}

export default FeaturedBlogsComponent