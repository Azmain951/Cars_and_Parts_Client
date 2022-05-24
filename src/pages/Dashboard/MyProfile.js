import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
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
                <div className='flex-1 ml-5'>
                    <div class="w-full max-w-sm m-5">
                        <label class="label">
                            <span class="label-text">Phone Number</span>
                        </label>
                        <input type="text" placeholder='Enter Phone Number' class="input input-bordered w-full max-w-sm " />
                    </div>
                    <div class="w-full max-w-sm m-5">
                        <label class="label">
                            <span class="label-text">Address</span>
                        </label>
                        <textarea type="text" placeholder='Address' class="input input-bordered w-full max-w-sm " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;