import React from 'react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className="bg-gray-100 ">
                <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
                    <div className="p-5">
                        <h3 className="font-bold text-2xl text-[#E15039]">Mdia Jigs</h3>
                        <p>We bring the best marketing and advertising solutions, tailor-made for your business.s</p>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-[#E15039] font-bold">Resources</div>
                        <a className="my-3 block" href="/#">Documentation <span className="text-[#E15039] text-xs p-1"></span></a><a
                            className="my-3 block" href="/#">Tutorials <span className="text-[#E15039] text-xs p-1"></span></a><a
                                className="my-3 block" href="/#">Support <span className="text-[#E15039] text-xs p-1">New</span></a>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-[#E15039] font-bold">Support</div>
                        <a className="my-3 block" href="/#">Help Center <span className="text-[#E15039] text-xs p-1"></span></a><a
                            className="my-3 block" href="/#">Privacy Policy <span className="text-[#E15039] text-xs p-1"></span></a><a
                                className="my-3 block" href="/#">Conditions <span className="text-[#E15039] text-xs p-1"></span></a>
                    </div>
                    <div className="p-5">
                        <div className="text-sm uppercase text-[#E15039] font-bold">Contact us</div>
                        <a className="my-3 text-sm block" href="/#">Floor 4 San Francisco,Rostov-na-donu6 , Russia
                            <span className="text-[#E15039] text-xs p-1"></span></a><a className="my-3 block" href="/#">Phone : +7(928) 123-45-67
                            <span className="text-[#E15039] text-xs p-1"></span></a>
                    </div>
                </div>
            </div>

            <div className="bg-gray-100 pt-2">
                <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      max-w-screen-lg items-center">
                    <div className="md:flex-auto justify-center items-center md:flex-row-reverse mt-2 flex-row flex">
                        <Link  className="w-6 mx-1">
                            <BsWhatsapp className='hover:text-primary text-2xl duration-300' />
                        </Link>
                        <Link  className="w-6 mx-1">
                            <BsGithub className='hover:text-primary text-2xl duration-300' />
                        </Link>
                        <Link  className="w-6 mx-1">
                            <BsInstagram className='hover:text-primary text-2xl duration-300' />
                        </Link>
                        <Link  className="w-6 mx-1">
                            <BsTwitter className='hover:text-primary text-2xl duration-300' />
                        </Link>
                        <Link  className="w-6 mx-1">
                            <BsFacebook className='hover:text-primary text-2xl duration-300' />
                        </Link>
                    </div>
                    <div className="my-5">© Copyright 2023. All Rights Reserved <Link to="mediajigs.com" target='_blank'>Mediajigs.com</Link>.</div>
                </div>
            </div>
        </>
    );
};

export default Footer;