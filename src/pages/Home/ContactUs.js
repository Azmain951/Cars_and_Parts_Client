import React from 'react';

const ContactUs = () => {
    return (
        <div class="m-10 py-10 shadow-2xl rounded-lg">
            <div class="hero-content flex-col lg:flex-row-reverse bg-base-100 w-3/4 mx-auto justify-between">
                <div class="text-center ml-10">
                    <h1 class="text-5xl font-bold text-primary">Contact Us!</h1>
                    <p class="py-6">Contact us to get the best quality products. We provide the best deal in this field. Get the best products in the cheapest deal now!</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Message</span>
                            </label>
                            <textarea type="text" placeholder="password" class="textarea textarea-bordered" />
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;