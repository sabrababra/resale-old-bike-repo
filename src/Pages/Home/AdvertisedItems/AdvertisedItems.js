import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { AuthContext } from '../../../Contexts/AuthProvider';

const AdvertisedItems = () => {
    const { user } = useContext(AuthContext);
    const [adsData, setAdsData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getAdvertise')
            .then(res => res.json())
            .then(data => setAdsData(data))
    }, [user?.uid])

    return (

        <>
            {
                (adsData.length > 0) && <div className='w-10/12 mx-auto my-5 pt-12'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-4xl text-primary font-semibold mb-5'>Advertised Products</h1>
                    </div>
                    <div className=''>
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            modules={[Pagination]}
                        // className="mySwiper"
                        >
                            {
                                adsData.map(item => <SwiperSlide key={item?._id}>
                                    <div className="grid grid-cols-3 gap-5">
                                        <img className='w-fit rounded-lg col-span-2' src={item?.img} alt="Album" />
                                        <div className="col-span-1 my-auto">
                                            <h2 className="text-2xl font-semibold my-4">{item?.name}</h2>
                                            <p><span className=' font-semibold'>Category:</span> {item?.category}</p>
                                            <p><span className=' font-semibold'>Status:</span> {item?.status}</p>
                                            <p><span className=' font-semibold'>Condition:</span> {item?.condition}</p>
                                            <p><span className=' font-semibold'>Location:</span> {item?.location}</p>
                                            <p><span className=' font-semibold pt-10'>Resale Price:</span> {item?.resalePrice}</p>
                                            <p><span className=' font-semibold pb-10'>Original Price:</span> {item?.originalPrice}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                </div>
            }
        </>
    );
};

export default AdvertisedItems;