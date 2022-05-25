import React, { useState } from 'react';
import DeleteModal from '../Shared/DeleteModal';

const ManageProduct = ({ index, product }) => {
    const { _id, name, img, price, stock } = product;
    const [selected, setSelected] = useState(null);
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
                <label for="delete-modal" onClick={() => setSelected(product)} class="btn btn-xs btn-error">Remove</label>
            </td>
            {
                selected && <DeleteModal
                    key={selected._id}
                    selected={selected}
                    handleDelete={handleDelete}
                ></DeleteModal>
            }
        </tr>


    );
};

export default ManageProduct;