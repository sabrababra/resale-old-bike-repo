import React, { useContext } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider';
import UseTitle from '../../Hook/useTitle';

const SingleBike = ({ bike }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, img, category, location, resalePrice, originalPrice, UsedYears, postedTime, sellerName, isSellerVerify, sellerEmail } = bike;


    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const meetingLocation = form.meetingLocation.value;

        const formData = {
            productName: name,
            productId: _id,
            price: resalePrice,
            buyerName: buyerName,
            buyerEmail: buyerEmail,
            meetingLocation: meetingLocation
        }
        // console.log(formData);
        fetch('http://localhost:5000/addBooking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
    };

    return (
        <>
            {/* modal  */}
            <input type="checkbox" id={`bookNow${_id}`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor={`bookNow${_id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <p><span className=' font-semibold'>Resale Price:</span> {resalePrice}</p>
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name='buyerName'
                                value={user?.displayName} 
                                className="input input-bordered"
                                disabled
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                name='buyerEmail'
                                value={user?.email}  
                                className="input input-bordered"
                                disabled
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Meeting Location</span>
                            </label>
                            <input
                                type="text"
                                name='meetingLocation'
                                className="input input-bordered"
                            />
                        </div>
                        <button className="btn btn-primary my-10 block mx-auto">
                        <label htmlFor={`bookNow${_id}`} >Submit</label>
                        </button>
                        
                    </form>
                </div>
            </div>

            {/* card  */}
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img className='w-[300px] h-[300px] mx-auto rounded-lg' src={img} alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p><span className=' font-semibold'>Category:</span> {category}</p>
                    <p><span className=' font-semibold'>Location:</span> {location}</p>
                    <hr />
                    <div className='grid grid-cols-2'>
                        <p><span className=' font-semibold'>Resale Price:</span> {resalePrice}</p>
                        <p><span className=' font-semibold'>Original Price:</span> {originalPrice}</p>
                    </div>
                    <p><span className=' font-semibold'>Years of used:</span> {UsedYears}</p>
                    <hr />
                    <div className="card-actions justify-between items-center">
                        <div>
                            <div className='grid grid-cols-2 gap-2'>
                                <span>Seller: {sellerName} </span>
                                {isSellerVerify && <FaCheckCircle className='text-green-500 w-6 h-6' />}
                            </div>
                            <p>Email: {sellerEmail}</p>
                            <p>Post time: {postedTime}</p>
                        </div>
                        <label htmlFor={`bookNow${_id}`} className="btn btn-primary">Book Now</label>
                    </div>
                </div>
            </div>
        </>

    );
};

export default SingleBike;

