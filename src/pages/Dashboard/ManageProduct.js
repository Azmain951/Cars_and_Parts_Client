import React from 'react';

const ManageProduct = ({ index, product }) => {
    const { _id, name, img, price, stock } = product;
    const handleDelete = () => {
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
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
                <button onClick={handleDelete} className='btn btn-xs btn-error'>Remove</button>
            </td>
        </tr>
    );
};

export default ManageProduct;