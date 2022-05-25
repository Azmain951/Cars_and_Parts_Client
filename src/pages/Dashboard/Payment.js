import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutFrom from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1tQ7B0jIQ4nJIJr0k6aystmySzqHG6hgMWjjxkO00KzB3SzUb01jI7SYotbevBMOSqrix9XDeMYwFlOTXhruMp0039rPNl1B');

const Payment = () => {
    const { id } = useParams();
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(`http://localhost:5000/order/${id}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(order);
    return (
        <div className='w-3/4 mx-auto'>
            <div class="card w-full mx-auto max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {order?.name}</p>
                    <h2 class="card-title">Please Pay for {order.product}</h2>
                    <p>Your Order is {order?.quantity} units of {order?.product}</p>
                    <p>Please pay: ${order?.price * order?.quantity}</p>
                </div>
            </div>
            <div class="card w-full mx-auto max-w-md shadow-2xl bg-base-100 py-4">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutFrom
                            order={order}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;