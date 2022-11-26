import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const [role, setRole] = useState('seller');

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const loginData = {
                    userName: user?.displayName,
                    email: user?.email,
                    role: role
                };

                console.log(loginData);
                fetch('http://localhost:5000/user', {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        navigate(from, { replace: true });
                    });
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });



    }
    return (
        <div className="flex gap-5  min-h-screen bg-base-200  flex-col justify-center items-center">

            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card w-11/12 lg:w-4/12  mx-auto  shadow-2xl bg-base-100 p-5">
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full grid grid-cols-3 gap-4">
                        <label className="label"> <span className="label-text">Role:</span></label>
                        <div className="form-control">
                            <label className="label cursor-pointer justify-evenly">
                                <span className="label-text">Buyer</span>
                                <input
                                    type="radio"
                                    name="role"
                                    className="radio checked:bg-blue-500"
                                    checked={role === 'buyer'}
                                    onChange={() => setRole('buyer')}
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer justify-evenly">
                                <span className="label-text">Seller</span>
                                <input
                                    type="radio"
                                    name="role"
                                    className="radio  checked:bg-blue-500"
                                    checked={role === 'seller'}
                                    onChange={() => setRole('seller')}
                                />
                            </label>
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <input className='btn w-full' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Resale Bike <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE (only for seller)</button>
            </div>

        </div>
    );
};

export default Login;