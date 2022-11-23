import React from 'react';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import BrandCategories from '../BrandCategories/BrandCategories';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <Review></Review>
            <BrandCategories></BrandCategories>
        </div>
    );
};

export default Home;