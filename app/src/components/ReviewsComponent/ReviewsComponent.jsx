import React from 'react'
import './ReviewsComponent.css'
import { assets, reviews } from '../../assets/assets'

const ReviewsComponent = () => {
  return (
    <>
    <section className="reviews">
        {/*------------------------*/}
        <div className="reviews-circle">

        </div>
        {/*------------------------*/}
        <div className="reviews-header">
            <div className="reviews-header-left">
                <header>
                    <h1>TESTIMONIALS</h1>
                </header>
            </div>
            <div className="reviews-header-right">
                <button>BUY NOW</button>
            </div>
        </div>
        <div className="reviews-mid">
            <h2>GET TO SEE WHAT CLIENTS SAY ABOUT THE DON. THE AIM IS TO ACHIEVE QUALITY WHILE PUTTING OUT QUANTITY.</h2>
        </div>
        {/*------------------------*/}
        <div className="reviews-container">
            {
                reviews.map((review,index)=>(
                    <div key={index} className="review">
                        <div className="review-top">
                            <img src={assets.star} alt="rating" />
                            <img src={assets.star} alt="rating" />
                            <img src={assets.star} alt="rating" />
                            <img src={assets.star} alt="rating" />
                            <img src={assets.star} alt="rating" />
                        </div>
                        <div className="review-mid">
                            <p>{review.review}</p>
                        </div>
                        <div className="review-bottom">
                            <div className="review-bottom-left">
                                <img src={review.images[0]} alt="avatar" />
                            </div>
                            <div className="review-bottom-right">
                                <h2>{review.name}</h2>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
    </>
  )
}

export default ReviewsComponent