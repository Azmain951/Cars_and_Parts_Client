import React from 'react';

const ManageOrder = ({ index, order }) => {
    const { name, email, quantity, product } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{product}</td>
            <td>{quantity}</td>
            <td>
                <button className='btn btn-xs btn-error'>Remove</button>
            </td>
        </tr>
    );
};

export default ManageOrder;