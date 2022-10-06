import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../Styles/Home.scss';
import bed from '../Images/bed.png';
import stars from '../Images/stars.png';

function ProductDetail() {
    const [reviews, setReviews] = useState([]);

    const getReviews = () => {
        // use axios to get data from json file
        axios.get('http://localhost:3004/reviews')
        .then(res => {
            console.log(res);
            setReviews(res.data);
        })
    }

    useEffect(() => {
        getReviews();
    },[])

    return (
        <div className="ProductDetail">
            <div className="product-individual">
                <div className="product-image">
                    <img src={bed} alt="bed" />
                </div>
                <div className="product-details">
                    <img src={stars} alt="stars" />
                    <h1>Lafayette Bed Frame</h1>
                </div>
            </div>
            <div className="reviews-header">
                <h2>What Our Customers Had to Say</h2>
                <div>
                    <img src={stars} alt="stars" />
                    <h4>Star Rating 4.5  |  48 Reviews</h4>
                </div>
            </div>
            <div className="reviews-wrapper">
                {reviews.map((review) => {
                    return (
                        <div className="review">
                            <div className="review-author">
                                <div className="star-rating"><img src={stars} alt="stars" /> {review.star_rating}</div>
                                <div className="author">{review.author}</div>
                                <div className="location">{review.location}</div>
                            </div>
                            <div key={review.id} className="review-body">
                                {review.body}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="leave-review">
                <h2>Leave a Review</h2>
            </div>
        </div>
    );
}

export default ProductDetail;
