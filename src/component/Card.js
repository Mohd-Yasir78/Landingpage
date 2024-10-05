// src/components/BoxContainer.jsx
import React, { useEffect, useState } from 'react';
import icon1 from './icon/icon1.svg'
import icon2 from './icon/icon2.svg'
import icon3 from './icon/icon3.svg'

import AOS from "aos";
import "aos/dist/aos.css";

const BoxContainer = () => {


  useEffect (() =>{
    AOS.init({duration : 1200})
  })

  const [activeBox, setActiveBox] = useState('box2');

  const handleClick = (box) => {
    setActiveBox(box);
  };

  const getBoxClasses = (box) => {
    let baseClasses = "m-4 p-8 cursor-pointer transition-transform w-[300px] h-[300px] flex justify-center items-center flex-col";
    if (activeBox === box) {
      baseClasses += " scale-110 shadow-lg";
    }
    return baseClasses;
  };

  return (
    <div className="w-screen h-auto flex-wrap  flex items-cnter justify-center items-cnter gap-10" data-aos='fade-up'>
      <div 
        className={getBoxClasses('box1')}
        onClick={() => handleClick('box1')}
        
      >
        <img src={icon1} alt='icon1' className='text-center mb-2'/>
        <h1 className='text-2xl font-normal text-center mb-2'>Corss platform</h1>
        <h2 className='text-slate-300  font-sans mb-1'>Elit esse cillum dolore eu</h2>
        <h3 className='text-slate-300  font-sans '>fugiat nulla pariatur</h3>
      </div>
      <div
        className={getBoxClasses('box2')}
        onClick={() => handleClick('box2')}
      >
      <img src={icon2} alt='icon2' className='text-center mb-2'/>
      <h1 className='text-2xl font-normal text-center mb-2'>Cloud server</h1>
      <h2 className='text-slate-300  font-sans mb-1'>Elit esse cillum dolore eu</h2>
      <h3 className='text-slate-300  font-sans '>fugiat nulla pariatur</h3>
      </div>
      <div className={getBoxClasses('box3')}
      onClick={() => handleClick('box3')}
      >
      <img src={icon3} alt='icon3' className='text-center mb-2'/>
      <h1 className='text-2xl font-normal text-center mb-2'>Pure javascript</h1>
      <h2 className='text-slate-300  font-sans mb-1'>Elit esse cillum dolore eu</h2>
      <h3 className='text-slate-300  font-sans '>fugiat nulla pariatur</h3>
      </div>
    </div>
  );
};

export default BoxContainer;
