import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';

const OrderModal = ({ order, setOrder }) => {
    const { _id, name, min, stock, price } = order;
    const [status, setStatus] = useState(false);
    const [user, loading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        fetch(`https://obscure-wave-68553.herokuapp.com/user/${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [userInfo]);

    if (loading) {
        return <Loading></Loading>
    }

    const handleOrder = data => {
        const newOrder = {
            name: user.displayName,
            email: user.email,
            quantity: parseInt(data.quantity),
            contact: data.contact,
            address: data.address,
            productId: _id,
            product: name,
            price,
            status: 'not paid'
        }

        fetch('https://obscure-wave-68553.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`
                }
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success(`Your order is placed successfully`);
            })
        setOrder(null)
    }
    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-2xl text-center">Place order for <span className='text-primary'>{name}</span></h3>
                    <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit(handleOrder)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input disabled readOnly type="text" value={name} className="input input-bordered w-full max-w-xs"
                                {...register("name")}
                            />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input disabled readOnly type="text" value={user.displayName} className="input input-bordered w-full max-w-xs"
                                {...register("userName")}
                            />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input disabled readOnly type="email" value={user.email} className="input input-bordered w-full max-w-xs"
                                {...register("email")}
                            />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Quantity</span>
                            </label>
                            <input type="number" placeholder={`enter product quantity (min ${min} units)`} className="input input-bordered w-full max-w-xs"
                                {...register("quantity",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Quantity is required'
                                        },
                                        min: {
                                            value: min,
                                            message: `Quantity Must be ${min} or higher`
                                        },
                                        max: {
                                            value: stock,
                                            message: `Quantity Must be lower than ${stock} `
                                        }
                                    })}
                            />
                            <label className="label">
                                {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                                {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" defaultValue={userInfo?.phone || ''} placeholder='phone number' className="input input-bordered w-full max-w-xs"
                                {...register("contact", {
                                    required: {
                                        value: true,
                                        message: 'Phone Number is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.contact?.type === 'required' && <span className="label-text-alt text-red-500">{errors.contact.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <textarea type="text" defaultValue={userInfo?.address || ''} placeholder='delivery address' className="textarea textarea-bordered w-full max-w-xs"
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                            </label>
                        </div>

                        <input disabled={status} className='btn btn-primary w-full max-w-xs text-white mt-3' type="submit" value='Confirm Order' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;