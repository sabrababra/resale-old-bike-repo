import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const SingleBike = ({ bike }) => {
    const { name, img, category, location, resalePrice, originalPrice, UsedYears, postedTime, sellerName, isSellerVerify, sellerEmail } = bike;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className=''>
                <img className='w-fit' src={img} alt="bike" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Category: {category}</p>
                <p>Location: {location}</p>
                <p>Resale Price: {resalePrice}</p>
                <p>Original Price: {originalPrice}</p>
                <p>Years of used: {UsedYears}</p>
                <div className="card-actions justify-between items-center">
                    <div>
                        <p className=''>Seller: {sellerName}  {isSellerVerify && <FaCheckCircle className='text-green-500 w-10 h-10' />} </p>
                        <p>Email: {sellerEmail}</p>
                        <p>Post time: {postedTime}</p>
                    </div>
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleBike;
