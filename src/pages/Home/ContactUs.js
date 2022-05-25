import React from 'react';

const ContactUs = () => {
    return (
        <div className="m-10 py-10 shadow-2xl rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse bg-base-100 w-3/4 mx-auto justify-between">
                <div className="flex-1 text-center ml-10">
                    <h1 className="text-5xl font-bold text-primary">Contact Us!</h1>
                    <p className="py-6">Contact us to get the best quality products. We provide the best deal in this field. Get the best products in the cheapest deal now!</p>
                </div>
                <div className="card flex-1 w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea type="text" placeholder="password" className="textarea textarea-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;