import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleBike from './SingleBike';

const Category = () => {
    const { name } = useParams();

    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/allBikes?category=${name}`)
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])

    return (
        <div className='w-11/12 mx-auto min-h-[60vh] flex justify-center items-center'>
            <div className='grid grid-cols-1 gap-4'>
                {
                    bikes.length > 0 ?
                        bikes.map(bike => <SingleBike key={bike._id} bike={bike} />)
                        :
                        <div>No Data Available.</div>
                }
            </div>
        </div>
    );
};

export default Category;