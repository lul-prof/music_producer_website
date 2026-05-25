import React from 'react'
import './ReviewsComponent.css'
import { assets, reviews } from '../../assets/assets'
import { Link } from 'react-router-dom'

const ReviewsComponent = () => {
  return (
    <>
    <section className="reviews">
        {/*-------------------------*/}
        <div className="reviews-header">
            <div className="reviews-header-top">
                <img src={assets.bullet2} alt="music" />
                <h2>TESTIMONIALS</h2>
            </div>
             <div className="reviews-header-mid">
              <h3>WHAT EVERYBODY SAYS ABOUT THE DON</h3>
            </div>
        </div>
        {/*-------------------------*/}
        <div className="reviews-container">
          {
            reviews.map((review)=>(
              <div className="review">
                {/*--------------------*/}
                <div className="review-top">
                  <p>{review.review}</p>
                </div>
                {/*--------------------*/}
                <div className="review-bottom">
                  <div className="review-bottom-left">
                    <div className="review-bottom-left-left">
                      <img src={review.images[0]} alt="Avatar" />
                    </div>
                    <div className="review-bottom-left-right">
                      <p>{review.name}</p>
                    </div>
                  </div>
                  <div className="review-bottom-right">
                      <img src={assets.star2} alt="rating" />
                      <img src={assets.star2} alt="rating" />
                      <img src={assets.star2} alt="rating" />
                      <img src={assets.star2} alt="rating" />
                      <img src={assets.star2} alt="rating" />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="reviews-btn">
          <Link to={'/beats'}><button>SHOP NOW</button></Link> 
        </div>
    </section>
    </>
  )
}

export default ReviewsComponent