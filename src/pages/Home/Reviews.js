import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://obscure-wave-68553.herokuapp.com/review').then(res => res.json()).then(data => setReviews(data))
    }, [reviews])
    return (
        <div>
            <h2 className='text-center text-4xl text-primary'>Customer Reviews</h2>
            <div className="divider px-10"></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;