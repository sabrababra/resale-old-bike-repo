import React from 'react';

const AdvertisedItems = () => {
    const num = [1, 2, 3, 4]
    return (
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
    );
};

export default AdvertisedItems;