import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-2xl uppercase">{review.name}</h2>
                <div className="divider"></div>
                <p className='font-bold'>Ratings: {review.rating} stars</p>
                <p><small>{review.comment}</small></p>
            </div>
        </div>
    );
};

export default Review;