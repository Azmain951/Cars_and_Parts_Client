import React from 'react';

const User = ({ user, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    console.log(res)
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <th>{email}</th>
            <th>
                {role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}
            </th>
            <th>
                <button className='btn btn-xs btn-error'>Remove User</button>
            </th>
        </tr>
    );
};

export default User;