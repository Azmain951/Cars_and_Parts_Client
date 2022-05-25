import React from 'react';
import shipping from '../../images/shipped.png';
import user from '../../images/user.png';
import sale from '../../images/sale.png';

const Services = () => {
    return (
        <div className='m-10 py-10 mb-20'>
            <h2 className='text-3xl uppercase text-primary text-center mb-6'>What We Provides</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div class="card card-side bg-base-100 shadow-xl py-5">
                    <figure><img src={shipping} alt="Movie" className='ml-4' /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shipping Worldwide</h2>
                    </div>
                </div>
                <div class="card card-side bg-base-100 shadow-xl py-5">
                    <figure><img src={user} alt="Movie" className='ml-4' /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Partnership Program</h2>
                    </div>
                </div>
                <div class="card card-side bg-base-100 shadow-xl py-5">
                    <figure><img src={sale} alt="Movie" className='ml-4' /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Discounts & Sales</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;