import React, { useState } from 'react';
import cover from "../../assets/cover.jpg";

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className='w-full h-full flex items-start'>
            <div className='w-1/2 h-full flex flex-col relative'>
                <img src={cover} className='w-full h-full object-cover' alt="Cover" />
            </div>
            <div>
                <div className='w-full bg-white flex flex-col p-10 justify-between'>
                    <h1 className='text-base text-black'></h1>
                    <div className='w-full flex-col text-base text-black'>
                        <h3 className='text-2xl font-bold mb-4'>{isSignUp ? 'Sign Up' : 'Login'}</h3>
                        <p>{isSignUp ? 'Create an account to explore delicious food options.' : 'Welcome Back! Satisfy your cravings with just a click.'}</p>
                        <div>
                            <form className="max-w-sm mx-auto">
                                {isSignUp && (
                                    <div className="mb-5">
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-black">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-orange-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                )}
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="name@flowbite.com"
                                        required
                                    />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
                                        Your Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="text-white bg-orange-400 hover:bg--800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                                >
                                    {isSignUp ? 'Sign Up' : 'Login'}
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='w-full'>
                        <p className='text-sm font-normal text-black'>
                            {isSignUp
                                ? 'Already have an account? '
                                : "Don't have an account? "}
                            <span
                                className='font-semibold underline-offset-2 cursor-pointer'
                                onClick={() => setIsSignUp(!isSignUp)}
                            >
                                {isSignUp ? 'Log In' : 'Sign Up'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
