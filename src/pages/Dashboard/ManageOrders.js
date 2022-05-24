import React, { useEffect, useState } from 'react';
import ManageOrder from './ManageOrder';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://obscure-wave-68553.herokuapp.com/orders`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json()).then(data => setOrders(data));
    }, [orders])
    return (
        <div className='m-5 p-5 shadow-2xl rounded-box'>
            <h2 className='text-3xl text-center mb-3'>All Orders</h2>
            <div class="overflow-x-auto">
                <table class="table w-full text-center">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Order Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <ManageOrder
                                index={index}
                                key={order._id}
                                order={order}
                            ></ManageOrder>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;