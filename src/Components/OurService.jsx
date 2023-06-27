import React from 'react';
import { BsLaptop } from 'react-icons/bs';

import react from '../assets/atom.png';
import shopify from '../assets/shopify.png';
import wordpress from '../assets/wordpress.png';
import app from '../assets/mediajigs/app.png';
import email from '../assets/mediajigs/email.jpg';
import seo from '../assets/mediajigs/seo.jpg';
import ppc from '../assets/mediajigs/ppc.png';
import social from '../assets/mediajigs/social.png';

const OurService = () => {
    const services = [
        {
            name: 'Wordpress',
            img : wordpress,
            details: 'These modular elements can be readily used and customized'
        },
        {
            name: 'Shopify',
            img : shopify,
            details: 'Build an online store with ease and customize it to your liking'
        },
        {
            name: 'React',
            img : react,
            details: 'Create dynamic user interfaces with the popular React library'
        },
        {
            name: 'Seo /Sem',
            img : seo,
            details: 'Build scalable and high-performance web applications with Node.js'
        },
        {
            name: 'PPC ADVERTISING',
            img : ppc,
            details: 'It is vital to study information and make acclimations to advertisement campaigns. At Mediajigs, we help you measure the suitability of campaigns whenever new information comes in'
        },
        {
            name: 'EMAIL MARKETING',
            img : email,
            details: 'Our team’s professional email marketers help you stay on top of the minds with your expectations and existing clients.'
        },
        
        {
            name: 'SOCIAL MEDIA MARKETING',
            img : social,
            details: 'We manage your social media advertising with customised campaigns and strategies to help you grow your business and reach out to prospects.'
        },
        {
            name: 'mobile apps',
            img : app,
            details: '90% of individuals use mobile devices and applications. Keep your audiences engaged 24×7 with mobile and app marketing.'
            
        }
    ];

    return (
        <div id='service' className='w-[88%] mx-auto'>
            <div className="flex flex-col mb-9 justify-center items-center">
                <BsLaptop className="text-4xl text-center text-[#E15039] mt-20" />
                <h1 className="text-4xl mt-3 text-center text-[#E15039] font-bold"><span className='text-black'>Our</span> Services</h1>
                <div className="w-[70%] text-center mt-5">
                We create impact for Advertise.
                </div>
            </div>
        
                    <div className="grid md:grid-cols-4 gap-7  ">
                        {
                            services.map((item , i) => { 
                                return (<div key={i} className='flex flex-col px-3 py-4 justify-center items-center text-center border rounded-2xl cursor-pointer  transform transition duration-300 hover:scale-105 hover:bg-slate-50'>
                                    <img src={item.img} className='w-[35px] h-[35px]' alt="" />
                                    <h1 className='text-[#E15039] uppercase font-bold text-xl my-3'>{item.name}</h1>
                                    <p className='text-light'>{item.details}</p>
                                </div>)
                            })
                        }
                    </div>
                    
        </div>
    );
};

export default OurService;