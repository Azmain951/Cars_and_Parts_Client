import React, { useState } from 'react';
import DeleteModal from '../Shared/DeleteModal';
import DeleteOrder from '../Shared/DeleteOrder';

const ManageOrder = ({ index, order }) => {
    const [selected, setSelected] = useState(null);
    const { _id, name, email, quantity, product, status } = order;
    const handleDelete = () => {
        fetch(`http://localhost:5000/orders/${_id}`, {
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
                {(status === 'not paid' || !status) && <label for="delete-order" onClick={() => setSelected(order)} class="btn btn-xs btn-error">Cancel</label>}
                {status === 'paid' && <button className='btn btn-xs btn-warning'>Deliver</button>}
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

export default ManageOrder;