import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user, loading] = useAuthState(auth);

    const handleReview = e => {
        e.preventDefault();
        const rating = e.target.rating.value;
        const comment = e.target.comment.value;

        const review = {
            name: user?.displayName,
            email: user?.email,
            rating,
            comment
        }

        console.log(review);
        fetch(`http://localhost:5000/review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        e.target.reset();
    }
    return (
        <div className='shadow-2xl rounded-box text-center m-5 p-5'>
            <h2 className='text-3xl'>Add a review</h2>
            <form onSubmit={handleReview} className='w-1/2 mx-auto m-10 p-10 shadow-2xl rounded'>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input readOnly type="text" value={user?.email} class="input input-bordered" />
                </div>
                <div>
                    <label class="label">
                        <span class="label-text">Ratings</span>
                    </label>
                    <select name='rating' class="select select-bordered w-full">
                        <option selected>5</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                    </select>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Comments</span>
                    </label>
                    <textarea type="text" name='comment' placeholder="write about the product / your experience" class="textarea textarea-bordered" />
                </div>
                <div class="form-control mt-6">
                    <input type='submit' class="btn btn-primary text-white" value='Post Review' />
                </div>
            </form>

            <div className='mt-5'>
                <h2 className='text-3xl'>My Reviews</h2>
            </div>
        </div>
    );
};

export default AddReview;