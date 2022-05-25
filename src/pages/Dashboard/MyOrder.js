import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteOrder from '../Shared/DeleteOrder';
import { toast } from 'react-toastify';

const MyOrder = ({ order, index }) => {
    const [selected, setSelected] = useState(null);
    const { _id, product, quantity, price, paid, transactionId, status } = order;
    const handleDelete = () => {
        fetch(`http://localhost:5000/orders/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`Your Order of ${quantity} units of ${product} is cancelled successfully!!!`);
            })
        setSelected(null);
    }
    return (
        <tr class="hover">
            <th>{index + 1}</th>
            <td>{product}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{quantity * price}</td>
            <td><small className='text-orange-500 uppercase'>{status || ''}</small></td>
            <td>
                {(price && !paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                {(price && paid) && <span className='text-success'>paid</span>}
                {paid ? <p><small>Transaction ID:<br /><span className='text-success font-bold'>{transactionId}</span></small></p> : <label for="delete-order" onClick={() => setSelected(order)} class="btn btn-xs btn-error ml-2">Cancel</label>}
            </td>
            {
                selected && <DeleteOrder
                    key={selected._id}
                    selected={selected}
                    handleDelete={handleDelete}
                ></DeleteOrder>
            }
        </tr>
    );
};

export default MyOrder;