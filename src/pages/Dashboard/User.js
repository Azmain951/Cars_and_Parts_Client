import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://obscure-wave-68553.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success(`${email} is made Admin successfully`);
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <th>{email}</th>
            <th>
                {role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}
            </th>
            <th>
                {role !== 'admin' && <button className='btn btn-xs btn-error'>Remove User</button>}
                {role === 'admin' && <span className='text-warning'>Admin can't be removed</span>}
            </th>
        </tr>
    );
};

export default User;