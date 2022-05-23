import React from 'react';

const MyOrder = ({ order, index }) => {
    console.log(order)
    const { product, quantity, price } = order
    return (
        <tr class="hover">
            <th>{index + 1}</th>
            <td>{product}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{quantity * price}</td>
            <td>
                <button className='btn btn-xs btn-success mr-2'>Pay</button>
                <button className='btn btn-xs btn-error'>Cancel</button>
            </td>
        </tr>
    );
};

export default MyOrder;