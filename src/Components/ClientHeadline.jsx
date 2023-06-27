import React from 'react';
import img10 from '../assets/mediajigs/Frame-48097597-1.png'
import img12 from '../assets/mediajigs/Frame-48097601.png'
import img13 from '../assets/mediajigs/Frame-48097609.png'
import img11 from '../assets/mediajigs/Frame-48097600.png'


import Marquee from 'react-fast-marquee';
import { BiHappy } from 'react-icons/bi';
const ClientHeadline = () => {
    return (
        <div>

<div className="flex flex-col mb-9 justify-center items-center">
                <BiHappy className="text-4xl text-center text-[#E15039] mt-20" />
                <h1 className="text-4xl mt-3 text-center text-[#E15039] font-bold"><span className='text-black mr-3'>Our</span>Happy Clients</h1>
                <div className="w-[70%] text-center mt-5">
                    
                </div>
            </div>

           
            <Marquee>
            <div className='grid lg:grid-cols-4 gap-5'>
                <div><img className='hover:bg-[#42484F] hover:bg-opacity-40' src={img10} alt="" /></div>
                <div><img className='hover:bg-[#42484F] hover:bg-opacity-40' src={img11} alt="" /></div>
                <div><img className='hover:bg-[#42484F] hover:bg-opacity-40' src={img12} alt="" /></div>
                <div><img className='hover:bg-[#42484F] hover:bg-opacity-40' src={img13} alt="" /></div>

            </div>
            </Marquee>
        </div>
    );
};

export default ClientHeadline;