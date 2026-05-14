import React from 'react'
import './ReviewsComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import { assets, reviews } from '../../assets/assets'

const ReviewsComponent = () => {
  return (
    <>
    <div className="reviews">
        <div className="reviews-header">
            <h2>CUSTOMER REVIEWS</h2>
            <h4>WHAT CLIENTS SAY ABOUT US</h4>
            <h4>YOUR VIEWS AND OPINIONS MATTER</h4>
            <hr />
        </div>
        
        <div className="reviews-class"> 
                {
                reviews.map((review)=>(
                    <>
                    <div className="review-class">
                        <div className="review-class-top">
                            <div className="review-class-top-left">
                                <img src={review.images[0]} alt="" />
                            </div>
                            <div className="review-class-top-right">
                                <p>{review.name}</p>
                            </div>
                        </div>
                        <div className="review-class-center">
                            <img src={assets.star} alt="image" />
                            <img src={assets.star} alt="image" />
                            <img src={assets.star} alt="image" />
                            <img src={assets.star} alt="image" />
                        </div>
                        <div className="review-class-bottom">
                            <p>{review.review}</p>
                        </div>
                    </div>
                    </>
                    ))
                }  
        </div>
       
    </div>
    </>
  )
}

export default ReviewsComponent