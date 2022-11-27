import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import UseTitle from '../../Hook/useTitle';

const AllBuyers = () => {
    UseTitle('My Products');
    const { user } = useContext(AuthContext);
    const [tableData, setTableData] = useState([]);

    const getData = () => {
        fetch(`http://localhost:5000/allBuyers?role=buyer`)
            .then(res => res.json())
            .then(data => setTableData(data))
    }
    useEffect(() => {
        getData();
    }, [user?.uid])

    const handleVerify = (id) => {
        console.log(id);
    }

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-white text-center text-3xl font-semibold my-10'>
                <span className='p-1 border-b-2 border-primary'>All <span className='text-primary'>Seller</span></span>
            </h1>
            <div className=' w-10/12 mx-auto '>
                {tableData.length > 0 ? <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>verify</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableData?.map((item, index) => <tr key={item?._id}>
                                    <td >{index + 1}</td>
                                    <td >{item?.userName}</td>
                                    <td>{item?.email}</td>
                                    <td>
                                        {
                                            item?.isSellerVerify ?
                                                <p>{item?.isSellerVerify}</p>
                                                :
                                                < button className="btn btn-error btn-sm" onClick={() => handleVerify(item?._id)}>Verify</button>
                                        }
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
        </div >
    );
};

export default AllBuyers;