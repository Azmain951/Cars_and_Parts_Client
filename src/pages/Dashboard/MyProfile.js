import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        fetch(`https://obscure-wave-68553.herokuapp.com/user/${user?.email}`, {
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
        fetch(`https://obscure-wave-68553.herokuapp.com/user/${user.email}`, {
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
        <div className='shadow-none lg:shadow-xl rounded-box text-3xl text-center m-5 p-1 lg:p-5'>
            <h2 className='mb-3'>My Profile</h2>
            <div className='block lg:flex w-full lg:w-3/4 mx-auto mb-5'>
                <div className='flex-1 mr-0 lg:mr-5'>
                    <div className="w-full max-w-xs m-5">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input disabled readOnly type="text" value={user?.displayName} className="input input-bordered w-full max-w-sm " />
                    </div>
                    <div className="w-full max-w-xs m-5">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input disabled readOnly type="text" value={user?.email} className="input input-bordered w-full max-w-xs " />
                    </div>
                </div>
                <form className='flex-1 ml-0 lg:ml-5' onSubmit={handleProfileUpdate}>
                    <div className="w-full max-w-xs m-5">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" defaultValue={userInfo?.phone || ''} placeholder='Enter Phone Number' name='number' className="input input-bordered w-full max-w-sm " />
                    </div>
                    <div className="w-full max-w-xs m-5">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <textarea name='address' type="text" defaultValue={userInfo?.address || ''} placeholder='Address' className="textarea textarea-bordered w-full max-w-sm " />
                    </div>
                    <div className="form-control my-5 ml-5 items-start">
                        <input type='submit' className="btn btn-primary text-white" value='Update Info' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;