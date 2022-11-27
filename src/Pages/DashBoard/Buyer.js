import React from 'react';
import UseTitle from '../../Hook/useTitle';

const Buyer = () => {
    UseTitle('My Orders')
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-white text-center text-3xl font-semibold my-10'>
                <span className='p-1 border-b-2 border-primary'>My <span className='text-primary'>Buyers</span></span>
            </h1>
            <div className=' w-10/12 mx-auto '>

            </div>
        </div>
    );
};

export default Buyer;