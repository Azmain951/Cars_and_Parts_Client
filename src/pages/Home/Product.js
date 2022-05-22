import React from 'react';

const Product = ({ product }) => {
    const { _id, name, img, description, min, stock, price } = product
    return (
        <div class="card shadow-xl">
            <figure class="px-5 pt-5">
                <img src={img} alt="Shoes" class="rounded-xl max-h-80" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-primary">{name}</h2>
                <p><small>{description}</small></p>
                <div class="divider"></div>
                <p>Available Items: {stock}<small> units</small></p>
                <p><small>Minimum Order Quantity: {min} units</small></p>
                <p className='font-bold'>Price: ${price}<small> (per unit)</small></p>
            </div>
            <div class="w-full m-0 p-0">
                <button class="btn btn-white w-full text-white rounded-t-none">Order Now</button>
            </div>
        </div>
    );
};

export default Product;