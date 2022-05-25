import React from 'react';

const Summary = () => {
    return (
        <div className='my-28 mx-10 shadow-2xl py-10 rounded-box'>
            <h2 className='text-center text-4xl text-primary uppercase mb-2'>Business Summary</h2>
            <p className='text-center text-xl italic w-3/4 mx-auto'>We offer top quality products at reasonable prices, provide unparalleled technical assistance, and back it all up with outstanding customer support.</p>
            <div class="stats w-full p-6 mt-12 text-center">
                <div class="stat">
                    <div class="stat-title">Annual Revenue</div>
                    <div class="stat-value text-primary">100M+</div>
                    <div class="stat-desc">28% more than last year</div>
                </div>

                <div class="stat">
                    <div class="stat-title">Served</div>
                    <div class="stat-value text-secondary">60k+</div>
                    <div class="stat-desc">21% more customers than last year</div>
                </div>

                <div class="stat">
                    <div class="stat-value">86%</div>
                    <div class="stat-title">Orders completed</div>
                    <div class="stat-desc text-secondary">31 orders remaining</div>
                </div>
                <div class="stat">
                    <div class="stat-title">Reviews</div>
                    <div class="stat-value text-accent">10k+</div>
                    <div class="stat-desc">Ratings Average 4.9</div>
                </div>

            </div>
        </div>
    );
};

export default Summary;