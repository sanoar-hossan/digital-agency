import React from 'react';
import CountUp from 'react-countup';
import { GiSelfLove } from 'react-icons/gi';
import { AiOutlineFileProtect } from 'react-icons/ai';
import { BsCodeSlash, BsFillCloudArrowDownFill } from 'react-icons/bs';
import LazyLoad from 'react-lazy-load';
const HappyClient = () => {
    return (
        <LazyLoad>
            <div className=' py-5 bg-opacity-90 flex flex-col md:flex-wrap md:flex-row  gap-6 h-auto justify-around items-center bg-[#1C3037] lg:h-[18rem]'>
                <div className="flex  flex-col justify-center items-center">
                    <GiSelfLove className='text-5xl text-[#E15039]' />
                    <h1 className='text-5xl text-white'><CountUp duration={2.75} end={80} /></h1>
                    <div className="border-b-[3px] mt-2 w-10 border-[#E15039]"></div>
                    <p className='text-2xl mt-3 text-white'>Happy Clients</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <AiOutlineFileProtect className='text-5xl text-[#E15039]' />
                    <h1 className='text-5xl text-white'><CountUp duration={2.75} end={205} /></h1>
                    <div className="border-b-[3px] mt-2 w-10 border-[#E15039]"></div>
                    <p className='text-2xl mt-3 text-white'>Projects Compleated</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <BsFillCloudArrowDownFill className='text-5xl text-[#E15039]' />
                    <h1 className='text-5xl text-white'><CountUp duration={2.75} end={103} /></h1>
                    <div className="border-b-[3px] mt-2 w-10 border-[#E15039]"></div>
                    <p className='text-2xl mt-3 text-white'>Files Downloaded</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <BsCodeSlash className='text-5xl text-[#E15039]' />
                    <h1 className='text-5xl text-white'><CountUp duration={2.75} end={10301} /></h1>
                    <div className="border-b-[3px] mt-2 w-10 border-[#E15039]"></div>
                    <p className='text-2xl mt-3 text-white'>Liens Of Code</p>
                </div>

            </div>
        </LazyLoad>
    );
};

export default HappyClient;