import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({ order, index }) => {
    const { _id, product, quantity, price, paid, transactionId } = order
    return (
        <tr class="hover">
            <th>{index + 1}</th>
            <td>{product}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{quantity * price}</td>
            <td>
                {(price && !paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                {(price && paid) && <span className='text-success'>paid</span>}
                {paid ? <p><small>Transaction ID: {transactionId}</small></p> : <button className='btn btn-xs btn-error ml-3'>Cancel</button>}
            </td>
        </tr>
    );
};

export default MyOrder;