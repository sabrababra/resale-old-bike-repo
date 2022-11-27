import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyProfile = () => {
    const {  user } = useContext(AuthContext);
    const [showUser, setShowUser] = useState(null);

    // const { isLoading, data, refetch } = useQuery(('user'), () => fetch(`https://toolmine-app.herokuapp.com/user/${user.email}`, {
    //     method: 'GET',
    //     headers: {
    //         authorization: `Bearer ${localStorage.getItem('token')}`
    //     }
    // })
    //     .then(res => res.json())
    // )

    // if (isLoading) {
    //     return <Spinner />
    // }

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-white text-center text-3xl font-semibold my-10'>
                <span className='p-1 border-b-2 border-primary'>My <span className='text-primary'>Profile</span></span>
            </h1>
            <div className='card w-10/12 mx-auto shadow-lg bg-white'>
                <div className="card-body">

                    <div>
                        <div className='flex justify-between items-center'>
                            <h2 className="text-xl font-semibold my-5 lg:text-4xl">{user?.displayName}</h2>
                            <h2 className="text-xl font-semibold my-5 lg:text-2xl">{user?.email}</h2>

                            {/* text edit button  */}
                            <div className="tooltip" data-tip="Text Edit">
                                <button className='text-indigo-700 hover:text-rose-500'>
                                    {/* <label htmlFor='updateUser-modal' onClick={() => setShowUser(data[0])} >
                                        <PencilIcon className="h-6 w-6 cursor-pointer " />
                                    </label> */}
                                </button>
                            </div>
                        </div>

                        {/* <p className=" lg:text-lg my-2 p-3 badge badge-success">Role: {data[0]?.role ? ' Admin' : ' User'}</p>

                        <p className=" lg:text-xl my-2"><span className=' font-semibold'>Email: </span> {data[0]?.email}</p>

                        <p className=" lg:text-xl my-2"><span className=' font-semibold'>Phone number: </span> {data[0]?.phone ? data[0].phone : "No data , please click pencil button to  update  profile"}</p>

                        <p className=" lg:text-xl my-2"><span className=' font-semibold'>Education: </span> {data[0]?.education ? data[0].education : "No data , please click pencil button to  update  profile "}</p>

                        <p className=" lg:text-xl my-2"><span className=' font-semibold'>Location: </span>{data[0]?.location ? data[0].location : "No data , please click pencil button to  update  profile"}</p>


                        <p className=" lg:text-xl my-2"><span className=' font-semibold'> LinkedIn profile: </span>{data[0]?.linkedIn ? data[0].linkedIn : "No data , please click pencil button to  update  profile"}</p> */}

                    </div>

                    <div className="card-actions flex-col lg:flex-row justify-between">


                    </div>
                </div>
                {/* {
                    showUser &&
                    <UpdateProfile
                        showUser={showUser}
                        setShowUser={setShowUser}
                        refetch={refetch}
                    />
                } */}
            </div>
        </div>
    );
};

export default MyProfile;