import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Story from './Components/Story';
import HappyClient from './Components/HappyClient';
import OurService from './Components/OurService';
import ContactUS from './Components/ContactUS';
import Portfolio from './Components/Portfolio';
import PortfolioCard from './Components/PortfolioCard';
import ClientHeadline from './Components/ClientHeadline';

import HeaderImg from './Components/HeaderImg';
import Footer from './Components/Footer';
import NewsLetter from './Components/NewsLetter';


function App() {
  const [navBackground, setNavBackground] = useState('bg-[#343D47]'); // Initial background color of the nav element

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 0) { // When the user scrolls down
        setNavBackground('bg-black'); // Change the background color of the nav element to black
      } else { // When the user scrolls to the top
        setNavBackground('bg-[#343D47]'); // Change the background color of the nav element to the initial color
      }
    };
    window.addEventListener('scroll', handleScroll); // Add a scroll event listener to the window object
    return () => {
      window.removeEventListener('scroll', handleScroll); // Remove the scroll event listener when the component unmounts
    };
  }, []);
 
  document.title = 'Home';
  return (
    <>
      <div className=" h-screen bg-hero-pattern bg-cover bg-fixed">
        <div id='nav' className={`fixed z-20 w-full top-0 bg-opacity-70 ${navBackground}`}>
          <NavBar /> 
        </div>
        <div className="bg-[#1E2837]  ">
          <Hero />
        </div>
      </div>
      <div className="mb-7">
        <Story /> 
      </div>
      <div className="mb-10">
       <HeaderImg></HeaderImg>
      </div>
      <div className="bg-happy-customer bg-fixed  bg-cover h-auto  lg:h-72">
        <HappyClient />
      </div>
      <div className="">
        <OurService />
      </div>
      <div className="bg-contact-us h-auto md:h-80 bg-fixed bg-cover">
        <ContactUS /> 
      </div>
      <div className="bg-client-headline   h-auto bg-fixed bg-cover border-red-900">
      <ClientHeadline></ClientHeadline>
        
        
      </div>
      <div className="" id='portfolio'>
        <Portfolio /> 
        <PortfolioCard /> 
      </div>

      <div className='h-auto pt-10 mt-5'>
      <NewsLetter></NewsLetter>
        
        
      </div>

      

      <div className='h-auto pt-10 mt-5'>
      <Footer></Footer>
        
        
      </div>

      
    </>
  )
}

export default App;
