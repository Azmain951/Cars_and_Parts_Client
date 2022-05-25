import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`https://obscure-wave-68553.herokuapp.com/orders/${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user.email, myOrders]);
    return (
        <div className='shadow-2xl m-5 p-5 rounded-box'>
            <h2 className='text-2xl text-center mb-5'>Your Orders {myOrders?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full text-center">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Ordered Quantity (units)</th>
                            <th>Price ($ per unit)</th>
                            <th>Total Cost ($)</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders?.map((order, index) => <MyOrder
                                index={index}
                                key={order._id}
                                order={order}
                            ></MyOrder>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;