import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderModal from './OrderModal';

const PlaceOrder = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [order, setOrder] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`).then(res => res.json()).then(data => setProduct(data));
    }, [product]);

    return (
        <div className="hero m-5">
            <div className="hero-content flex-col lg:flex-row-reverse shadow-xl rounded-box mt-5 w-3/4">
                <div className="lg:text-left mr-10">
                    <h2 className='text-primary text-3xl mb-2'>{product.name}</h2>
                    <p><small>{product.description}</small></p>
                    <div className="divider"></div>
                    <p>Available Items: {product.stock}<small> units</small></p>
                    <p><small className='text-primary font-bold'>Minimum Order Quantity: {product.min} units</small></p>
                    <p className='font-bold'>Price: ${product.price}<small> (per unit)</small></p>
                    <label htmlFor='order-modal' onClick={() => setOrder(product)} className="btn btn-primary w-1/2 text-white font-bold mt-10">Place Order Now</label>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <div className="card-body">
                        <img className='rounded-box' src={product.img} alt={product.name} />
                    </div>
                </div>
            </div>
            {
                order && <OrderModal
                    key={order._id}
                    order={order}
                ></OrderModal>
            }
        </div >
    );
};

export default PlaceOrder;