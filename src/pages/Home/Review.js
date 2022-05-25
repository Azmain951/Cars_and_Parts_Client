import React from 'react';

const Review = ({ review }) => {
    const { name, rating } = review;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl uppercase text-primary">{review.name}</h2>
                <div className="divider"></div>
                <p className='font-bold text-warning'>Ratings: {review.rating} stars</p>
                <p><small>{review.comment}</small></p>
            </div>
        </div>
    );
};

export default Review;