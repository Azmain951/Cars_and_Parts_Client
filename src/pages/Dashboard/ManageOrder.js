import React, { useState } from 'react';
import DeleteModal from '../Shared/DeleteModal';
import DeleteOrder from '../Shared/DeleteOrder';
import { toast } from 'react-toastify';
import DeleverModal from './DeleverModal';

const ManageOrder = ({ index, order }) => {
    const [selected, setSelected] = useState(null);
    const [deliver, setDeliver] = useState(null);
    const { _id, name, email, quantity, product, status, address, transactionId } = order;
    const handleDelete = () => {
        fetch(`https://obscure-wave-68553.herokuapp.com/orders/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`The Order of ${quantity} units of ${product} is cancelled successfully!!!`);
            })
        setSelected(null);
    }

    const handleDeliver = () => {

        const payment = {
            transactionId,
            status: 'shipped'
        }

        fetch(`https://obscure-wave-68553.herokuapp.com/orders/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(payment)

        }).then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success(`Order of ${quantity} units of ${product} is shipped to ${name}, ${address} successfully`);
            })
        setDeliver(null);
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
                {(status === 'not paid' || !status) && <label htmlFor="delete-order" onClick={() => setSelected(order)} className="btn btn-xs btn-error">Cancel</label>}
                {status === 'pending' && <label htmlFor="deliver-modal" onClick={() => setDeliver(order)} className="btn btn-xs btn-warning">Deliver</label>}
                {status === 'shipped' && <span className='text text-warning'>Delivered</span>}
            </td>
            {
                selected && <DeleteOrder
                    key={selected._id}
                    selected={selected}
                    handleDelete={handleDelete}
                ></DeleteOrder>
            }
            {
                deliver && <DeleverModal
                    key={deliver._id}
                    selected={deliver}
                    handleDeliver={handleDeliver}
                ></DeleverModal>
            }
        </tr>
    );
};

export default ManageOrder;