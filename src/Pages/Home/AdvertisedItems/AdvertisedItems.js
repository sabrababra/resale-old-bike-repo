import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisedItems = () => {
    const num = [1, 2, 3, 4]
    return (
        
       <div className='w-10/12 mx-auto my-5 pt-12'>
        <div className='flex justify-between items-center'>
            <h1 className='text-4xl text-primary font-semibold mb-5'>Advertised Products</h1>
            {/* <Link to='/' className='btn btn-primary'>All Products</Link> */}
            </div>
         <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                num.map(item => <>
                    <div className="card bg-base-100 shadow-xl ">
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    </div>
                </>

                )

            }

        </div>
       </div>
    );
};

export default AdvertisedItems;