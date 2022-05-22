import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PlaceOrder = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`).then(res => res.json()).then(data => setProduct(data));
    }, []);

    return (
        <div class="hero m-5">
            <div class="hero-content flex-col lg:flex-row-reverse shadow-xl rounded-box mt-5 w-3/4">
                <div class="lg:text-left mr-10">
                    <h2 className='text-primary text-3xl mb-2'>{product.name}</h2>
                    <p><small>{product.description}</small></p>
                    <div className="divider"></div>
                    <p>Available Items: {product.stock}<small> units</small></p>
                    <p><small>Minimum Order Quantity: {product.min} units</small></p>
                    <p className='font-bold'>Price: ${product.price}<small> (per unit)</small></p>
                    <button className="btn btn-primary w-1/2 text-white font-bold mt-10">Place Order Now</button>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm">
                    <div class="card-body">
                        <img className='rounded-box' src={product?.img} alt={product?.name} />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PlaceOrder;