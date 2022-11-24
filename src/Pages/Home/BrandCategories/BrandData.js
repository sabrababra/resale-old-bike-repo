import React from 'react';

const BrandData = ({brand}) => {
    const {brandName,img,amount}=brand;
    return (
        <div className="card  card-side bg-base-100 shadow-xl hover:bg-gray-400
             ">
                <img className='ml-5 w-2/4 h-2/4 flex justify-center items-center' src={img} alt="Movie" />
                <div className="card-body flex justify-center">
                    <h2 className="card-title">{amount} bike available</h2>
                    <p>{brandName}</p>

                    <button className='btn mt-8'>See Products</button>
                    
                </div>
                 
                
            </div>
    );
};

export default BrandData;