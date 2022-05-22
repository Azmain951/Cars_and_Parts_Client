import React from 'react';

const OrderModal = ({ order }) => {
    const { _id, name, min, stock, price } = order;
    const handleOrder = e => {
        e.preventDefault();
        const newOrder = {

        }
    }
    return (
        <div>
            <input type="checkbox" id="order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-2xl text-center">Place order for <span className='text-primary'>{name}</span></h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-4 justify-items-center mt-6'>
                        <input disabled type="text" value={name} className="input input-bordered w-full max-w-xs" />
                        <input disabled type="text" name='name' value={'Name'} className="input input-bordered w-full max-w-xs" />
                        <input disabled type="email" name='email' value={'Email'} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='quantity' placeholder={`enter order quantity(min ${min} units)`} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <textarea class="textarea textarea-bordered w-full max-w-xs" name='address' placeholder="Delivery Address"></textarea>
                        <input type="submit" value='Submit' className="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;