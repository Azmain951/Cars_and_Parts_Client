import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, description, min, stock, price } = product;
    const navigate = useNavigate();
    const handleOrderNow = () => {
        navigate(`/place-order/${_id}`)
    }
    return (
        <div className="card shadow-xl">
            <figure className="px-5 pt-5">
                <img src={img} alt={name} className="rounded-xl max-h-80" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-primary">{name}</h2>
                <p><small>{description}</small></p>
                <div className="divider"></div>
                <p>Available Items: {stock}<small> units</small></p>
                <p><small>Minimum Order Quantity: {min} units</small></p>
                <p className='font-bold'>Price: ${price}<small> (per unit)</small></p>
            </div>
            <div className="w-full m-0 p-0">
                <button onClick={handleOrderNow} className="btn btn-white w-full text-white rounded-t-none">Order Now</button>
            </div>
        </div>
    );
};

export default Product;