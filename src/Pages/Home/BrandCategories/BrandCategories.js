import React from 'react';
import honda from '../../../Assets/honda.png';
import sujuki from '../../../Assets/suzuki.jpg';
import yamaha from '../../../Assets/yamaha.jpg';
import vespa from '../../../Assets/vespa.png';
const BrandCategories = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 w-11/12 lg:w-10/12 mx-auto my-6'>
            <div className="card card-side bg-base-100 shadow-xl hover:bg-gray-400
             ">
                <img className='ml-5 w-2/4 h-2/4 flex justify-center' src={honda} alt="Movie" />
                <div className="card-body flex justify-center">
                    <h2 className="card-title">3 bike available</h2>
                    <p>Honda</p>
                    
                </div>
            </div>
            
            <div className="card card-side bg-base-100 shadow-xl hover:bg-gray-400">
                <img className='ml-5 w-2/4 h-2/4 flex justify-center'  src={sujuki} alt="Movie" />
                <div className="card-body flex justify-center">
                    <h2 className="card-title">4 bike available</h2>
                    <p>Sujuki</p>
                    
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl hover:bg-gray-400">
                <img className='ml-5 w-2/4 h-2/4 flex justify-center' src={yamaha} alt="Movie" />
                <div className="card-body flex justify-center">
                    <h2 className="card-title">2 bike available</h2>
                    <p>Yamaha</p>
                    
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl hover:bg-gray-400">
                <img className='ml-5 w-2/4 h-2/4 flex justify-center' src={vespa} alt="Movie" />
                <div className="card-body flex justify-center">
                    <h2 className="card-title">3 bike available</h2>
                    <p>Vespa</p>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default BrandCategories;