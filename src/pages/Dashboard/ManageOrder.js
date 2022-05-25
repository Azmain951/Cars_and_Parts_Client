import React, { useState } from 'react';
import DeleteModal from '../Shared/DeleteModal';

const ManageOrder = ({ index, order }) => {
    const [selected, setSelected] = useState(null);
    const { order, name, email, quantity, product, status } = order;
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
            <td>{name}</td>
            <td>{email}</td>
            <td>{product}</td>
            <td>{quantity}</td>
            <td>{status || ''}</td>
            <td>
                {(status === 'not paid' || !status) && <label for="delete-modal" onClick={() => setSelected(product)} class="btn btn-xs btn-error">Cancel</label>}
                {status === 'paid' && <button className='btn btn-xs btn-warning'>Deliver</button>}
            </td>
            {
                selected && <DeleteModal
                    key={selected._id}
                    selected={selected}
                ></DeleteModal>
            }
        </tr>
    );
};

export default ManageOrder;