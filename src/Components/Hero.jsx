import React from 'react';
import hero from '../assets/mediajigs/pattern-short.png'
const Hero = () => {
    return (
        <div className='h-screen text-white  flex justify-center items-center'>
            <div className="text-center">
                <h1 className='text-6xl text-center tracking-wide font-bold'>BRANDING SIMPLIFIED</h1>
                <img className='text-center py-5 mx-auto ' src={hero} alt="" />
                <p className=' text-center  my-4'>We are a passionate digital design agency that specializes in beautiful and easy-to-use digital design <br /> & web development services.</p>
                <button className='bg-[#E15039] px-6 py-3 rounded-full'>Get Started</button>
            </div>
        </div>
    );
};

export default Hero;