import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './Payment/CheckForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const BookingRow = ({ item }) => {
    const { _id, productImg, productName, price, sellerName, pay } = item;


    return (
        <>
            {/* modal  */}
            <input type="checkbox" id={`pay${_id}`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative  w-11/12 max-w-2xl">
                    <label htmlFor={`pay${_id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <div className='text-center my-5'>
                            <div className="avatar">
                                <div className="mask mask-squircle w-64 h-64">
                                    <img src={productImg} alt={productName} />
                                </div>
                            </div>
                            <h3 className="text-lg font-bold my-4">{productName}</h3>
                            <p><span className=' font-semibold'>Price:</span> {price}</p>
                        </div>
                        <div className='my-auto'>
                            <h1 className='text-2xl my-5'>Payment Now</h1>

                            <Elements stripe={stripePromise}>
                                <CheckoutForm
                                    item={item}
                                />
                            </Elements>
                            
                        </div>
                    </div>
                </div>
            </div>


            {/* row  */}
            <tr >
                <td>
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={productImg} alt={productName} />
                        </div>
                    </div>
                </td>
                <td>{productName}</td>
                <td>{price}</td>
                <td>{sellerName}</td>
                <td>{pay}</td>
                <td>
                    {
                        pay === "UnPaid" &&
                        <label htmlFor={`pay${_id}`} className="btn btn-info btn-sm">pay Now</label>
                    }
                </td>
            </tr>


        </>
    );
};

export default BookingRow;