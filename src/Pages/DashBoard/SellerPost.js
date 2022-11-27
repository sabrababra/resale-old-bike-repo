import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import UseTitle from '../../Hook/useTitle';

const SellerPost = () => {
    UseTitle('My Products');
    const { user } = useContext(AuthContext);
    const [tableData, setTableData] = useState([]);

    const getData = () => {
        fetch(`http://localhost:5000/myProduct?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTableData(data))
    }
    useEffect(() => {
        getData();
    }, [user?.uid])

    const handleDelete = (id) => {
        console.log(id);
    };

    const handleAdvertise = (item) => {
        console.log(item);
    };

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-white text-center text-3xl font-semibold my-10'>
                <span className='p-1 border-b-2 border-primary'>My <span className='text-primary'>Products</span></span>
            </h1>
            <div className=' w-10/12 mx-auto '>
                {tableData.length > 0 ? <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th></th>
                                <th>Price</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableData?.map(item => <tr key={item?._id}>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.img} alt={item?.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td colSpan={2}>{item?.name}</td>
                                    <td>{item?.resalePrice}</td>
                                    <td>
                                        {
                                            (item?.status === "Available") ? <button className="btn btn-error btn-sm" onClick={() => handleAdvertise(item)}>Add to Advertise </button> : <p>{item?.status}</p>
                                        }

                                    </td>
                                    <td>
                                        <button className="btn btn-error btn-sm" onClick={() => handleDelete(item?._id)}>Delete</button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
                    :
                    <div className='min-h-[50vh] text-2xl flex justify-center items-center'>You did not add any product</div>
                }
            </div>
        </div>
    );
};

export default SellerPost;