import React, { useState } from 'react';
import image from "./image.png";
import Vector1 from "./Vector1.png";
import Vector2 from "./Vector2.png";


import { ToastContainer, toast } from 'react-toastify';
import { FaGoogle } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Both fields are required');
            return;
        }

        // const savedUser = window.localStorage.getItem('email');
        // const savedUser1 = window.localStorage.getItem('password');


        if (email !== "" && password !== "") {
            localStorage.getItem("email", email)
            localStorage.getItem("password", password)

            toast('Sign In Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setEmail("")
            setPassword("")
        } else {
            toast.error('Invalid Credintials please try again', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="grid h-screen grid-cols-2 bg-[hsl(60,54%,95%)]">

                {/* Left Section */}
                <div className="flex items-center justify-center">
                    <div className="bg-white w-[480px] h-[648px] rounded-2xl flex flex-col items-center p-8">
                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-bold tracking-wide mb-2">Sign in</h2>
                            <p className="text-[#000000] w-[265px] h-[58px] text-[17px] tracking-wide leading-[29.19px] font-[400]">
                                Hey, Enter your details to login to your account
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col w-[376px] h-[140px] gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Email / Phone No"
                                className="w-[376px] h-[48px] gap-[10px] p-4 border border-[#5D5D5D] rounded-lg outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-[16px] font-[500] tracking-[5%] leading-[21.23px]"
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Passcode"
                                className="w-[376px] h-[48px] gap-[10px] p-4 border border-[#5D5D5D] rounded-lg outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-[16px] font-[500] tracking-[5%] leading-[21.23px]"
                            />
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <div className="w-[376px] h-[16px] gap-[10px] py-[4px] px-[8px]">
                                <p className="text-[12px] font-[200]">Don’t have an account yet? <span className='font-[500]'>Register now!</span></p>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-[#AED6B3] text-white rounded-lg font-semibold mt-6"
                            >
                                Sign In
                            </button>
                            <div className='flex items-center w-[376px] justify-center mt-4'>
                                <h6 className='h-[16px] items-center gap-[4px]  text-[#000000] flex'><img className='border bg-[#000000]' src={Vector1} /> Or Sign in with <img className='border bg-[#000000]' src={Vector2} /></h6>

                            </div>


                            <div className='w-[376px] h-[40px] gap-2 flex mt-7'>
                                <button className='w-[120px] h-[40px] rounded-[40px]  border border-[#000000] flex items-center py-[16px] px-[15px] gap-2'><FaGoogle className='text-[18px]' />Google</button>
                                <button className='w-[120px] h-[40px] rounded-[40px] border border-[#000000] flex items-center py-[16px] px-[15px] gap-2'><IoLogoApple className='text-[18px]' />Apple</button>
                                <button className='w-[120px] h-[40px] rounded-[40px]  border border-[#000000] flex items-center py-[16px] px-[15px] gap-2'><FaFacebook className='text-[18px]' />Facebook</button>

                            </div>
                            <p className='w-[376px] mt-6 h-[16px] font-[500] text-[13px] text-center leading-[15.6px]'>Don’t have an account? <span className='font-[700]'>Register Now </span></p>
                        </form>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center justify-center text-white text-2xl font-bold">
                    <img className="w-[598.8px] h-[600px]" src={image} alt="Login illustration" />
                </div>
            </div>
        </>

    );
};

export default LogIn;
