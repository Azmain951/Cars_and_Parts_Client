import React from 'react';

const ManageProduct = ({ index, product }) => {
    const { name, img, price, stock } = product;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded-xl">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{stock}</td>
            <td>{price}</td>
            <td>
                <button className='btn btn-xs btn-error'>Remove</button>
            </td>
        </tr>
    );
};

export default ManageProduct;