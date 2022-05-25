import React from 'react';
import notFound from '../../images/notFound.jpg';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;