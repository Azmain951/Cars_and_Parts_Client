import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MakeAdmin = () => {
    const [user, loading] = useAuthState(auth);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/user`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users]);
    return (
        <div className='shadow-2xl m-5 p-5 rounded-box'>
            <h2 className='text-2xl text-center mb-5'>All Users</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((u, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <th>{u.email}</th>
                                    <th>
                                        <button className='btn btn-xs btn-neutral'>Make Admin</button>
                                    </th>
                                    <th>
                                        <button className='btn btn-xs btn-error'>Remove User</button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;