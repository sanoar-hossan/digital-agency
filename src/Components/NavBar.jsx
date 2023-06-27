import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const portfolioNavbar = [
        {
            label: 'Home',
            url: '/',
        },
        {
            label: 'About',
            url: '/about',
        },
        {
            label: 'Portfolio',
            url: '/portfolio',
        },
        {
            label: 'Services',
            url: '#service',
        },
        {
            label: 'Testimonials',
            url: '#testimonials',
        },
        {
            label: 'Blog',
            url: '/blog',
        },
        {
            label: 'Contact',
            url: '/contact',
        },
        {
            label: 'FAQ',
            url: '/faq',
        }
    ];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <div className='w-[88%] sticky  top-0 flex justify-between items-center mx-auto py-6'>
            <div className="logo bg-black p-1">
                <h1 className='text-3xl  text-[#E15039] font-bold'>MEDIA  JIGS</h1>
            </div>
            <div className="text hidden md:block">
                <ul className='flex justify-between text-white text-sm'>
                    {portfolioNavbar.map((item, index) => (
                        <li className='mx-5 text-[16px] font-semibold' key={index}>
                            <Link to={item.url}>{item.label} </Link>
                        </li>))}
                </ul>

            </div>
            <div className="md:hidden">
        <button className="text-white" onClick={handleMobileMenuToggle}>
        <AiOutlineMenu className='text-white'></AiOutlineMenu>
        </button>
        {isMobileMenuOpen && (
          <ul className="bg-black text-white text-sm mt-2">
            {portfolioNavbar.map((item, index) => (
              <li className="px-4 py-2" key={index}>
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>

        </div>
    );
};

export default NavBar;