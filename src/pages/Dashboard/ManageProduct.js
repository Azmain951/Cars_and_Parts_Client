import React, { useState } from 'react';
import DeleteModal from '../Shared/DeleteModal';
import { toast } from 'react-toastify';


const ManageProduct = ({ index, product }) => {
    const { _id, name, img, price, stock } = product;
    const [selected, setSelected] = useState(null);
    const handleDelete = () => {
        fetch(`https://obscure-wave-68553.herokuapp.com/products/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`The Product ${name} with ${stock} units of stock is removed successfully!!!`);
            })
        setSelected(null);
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-16 rounded-xl">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{stock}</td>
            <td>{price}</td>
            <td>
                <label htmlFor="delete-modal" onClick={() => setSelected(product)} className="btn btn-xs btn-error">Remove</label>
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