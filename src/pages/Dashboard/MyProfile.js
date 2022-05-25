import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [userInfo]);

    if (loading) {
        return <Loading></Loading>
    }

    const handleProfileUpdate = e => {
        e.preventDefault();
        const phone = e.target.number.value;
        const address = e.target.address.value;

        const updatedInfo = { phone, address };
        fetch(`http://localhost:5000/user/${user.email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`
                }
            },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className='shadow-xl rounded-box text-3xl text-center m-5 p-5'>
            <h2 className='mb-3'>My Profile</h2>
            <div className='flex w-3/4 mx-auto mb-5'>
                <div className='flex-1 mr-5'>
                    <div class="w-full max-w-sm m-5">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input disabled readOnly type="text" value={user?.displayName} class="input input-bordered w-full max-w-sm " />
                    </div>
                    <div class="w-full max-w-sm m-5">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input disabled readOnly type="text" value={user?.email} class="input input-bordered w-full max-w-sm " />
                    </div>
                </div>
                <form className='flex-1 ml-5' onSubmit={handleProfileUpdate}>
                    <div class="w-full max-w-sm m-5">
                        <label class="label">
                            <span class="label-text">Phone Number</span>
                        </label>
                        <input type="text" defaultValue={userInfo?.phone || ''} placeholder='Enter Phone Number' name='number' class="input input-bordered w-full max-w-sm " />
                    </div>
                    <div class="w-full max-w-sm m-5">
                        <label class="label">
                            <span class="label-text">Address</span>
                        </label>
                        <textarea name='address' type="text" defaultValue={userInfo?.address || ''} placeholder='Address' class="textarea textarea-bordered w-full max-w-sm " />
                    </div>
                    <div class="form-control my-5 ml-5 items-start">
                        <input type='submit' class="btn btn-primary text-white" value='Update Info' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;