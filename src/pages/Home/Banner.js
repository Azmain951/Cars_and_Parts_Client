import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-max" style={{ backgroundImage: 'url(https://i.ibb.co/dbnD3j9/bg.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-6xl py-12">
                    <h3 className='text-white uppercase text-5xl'>Car's Hub</h3>
                    <h1 className="mb-5 text-8xl uppercase"><span className='text-primary'>Committed</span><br />
                        To Super Quality</h1>
                    <p className="italic text-2xl font-normal mb-8">We are a manufacturer of high quality products, reaching and even outperforming European standards, proven by international quality certificates.</p>
                    <Link className="btn btn-primary btn-lg text-white" to='allProducts'>Purshase Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;