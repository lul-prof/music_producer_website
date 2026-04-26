import React from 'react'
import './ReviewsComponent.css'
import TitleComponent from '../TitleComponent/TitleComponent'
import { assets, reviews } from '../../assets/assets'

const ReviewsComponent = () => {
  return (
    <>
    <div className="reviews">
        <TitleComponent title="Ratings & Reviews" />
        
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