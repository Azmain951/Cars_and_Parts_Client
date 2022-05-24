import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import User from './User';

const MakeAdmin = () => {
    const [user, loading] = useAuthState(auth);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`https://obscure-wave-68553.herokuapp.com/user`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
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
                            users?.map((u, index) => <User
                                index={index}
                                key={u._id}
                                user={u}
                            ></User>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;