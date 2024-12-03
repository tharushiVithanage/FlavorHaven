import React from 'react';
import Banner from "../../assets/orange.jpg";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundColor: "black", // Black overlay
    backgroundBlendMode: "overlay", // Blend image with black
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const ContactUs = () => {
    return (
        <div
            data-aos="zoom-in"
            className='mt-20 mb-20 bg-gray-100 dark:bg-gray-800 text-white' // Top and bottom margin for page gap
            style={BannerImg}
        >
            <div className='container backdrop-blur-sm py-14'>
                <div className='space-y-8 max-w-screen-xl mx-auto sm:text-left'>
                    <h1
                        className='text-3xl text-center sm:text-left sm:text-5xl font-semibold'
                    >
                        Stay Connected with Us
                    </h1>
                    <div className='flex items-center gap-4' data-aos='fade-up'>
                        <input
                            type='text'
                            placeholder='Enter your email'
                            className='w-full p-4 rounded-l border border-gray-300 text-black'
                            style={{ height: "60px" }}
                        />
                        <button
                            className='text-white px-6 rounded-r'
                            style={{
                                backgroundColor: "orange",
                                height: "60px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                hover:"bg - orange - 800" ,
                            }}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
