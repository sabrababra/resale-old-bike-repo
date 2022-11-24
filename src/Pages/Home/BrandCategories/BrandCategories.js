import React from 'react';
import honda from '../../../Assets/honda.png';
import sujuki from '../../../Assets/suzuki.jpg';
import yamaha from '../../../Assets/yamaha.jpg';
import vespa from '../../../Assets/vespa.png';
import BrandData from './BrandData';
const BrandCategories = () => {
    const brandCategory=[
        {
            _id:1,
            brandName:'Honda',
            img:honda,
            amount:4
        },
        {
            _id:2,
            brandName:'Sujuki',
            img:sujuki,
            amount:2
        },
        {
            _id:3,
            brandName:'Yamaha',
            img:yamaha,
            amount:4
        },
        {
            _id:4,
            brandName:'Vespa',
            img:vespa,
            amount:2
        },
    ]
    return (
        <div className='mt-10'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 w-11/12 lg:w-10/12 mx-auto my-6'>
                {
                    brandCategory.map(brand=><BrandData
                    key={brand.map}
                    brand={brand}
                    ></BrandData>)
                }
            
        </div>
        </div>
    );
};

export default BrandCategories;