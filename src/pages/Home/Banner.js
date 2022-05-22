import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-max" style={{ backgroundImage: 'url(https://i.ibb.co/dbnD3j9/bg.jpg)' }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-6xl py-16">
                    <h3 className='text-white uppercase text-5xl'>Car's Hub</h3>
                    <h1 class="mb-5 text-8xl uppercase"><span className='text-primary'>Committed</span><br />
                        To Super Quality</h1>
                    <p class="italic text-2xl font-normal mb-8">We are a manufacturer of high quality products, reaching and even outperforming European standards, proven by international quality certificates.</p>
                    <button class="btn btn-primary btn-lg text-white">Purshase Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;