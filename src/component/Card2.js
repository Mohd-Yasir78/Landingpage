// src/components/BoxContainer.jsx
import React, { useEffect, useState } from 'react';
import icon1 from './pricing/icon1.svg'
import icon2 from './pricing/icon2.svg'
import icon3 from './pricing/icon3.svg'
import { GoCheck, GoArrowRight } from "react-icons/go";

import AOS from "aos";
import "aos/dist/aos.css";

const BoxContainer2 = () => {


  useEffect (() =>{
    AOS.init({duration : 1200})
  })

  const [activeBox, setActiveBox] = useState('box2');

  const handleClick = (box) => {
    setActiveBox(box);
  };

  const getBoxClasses = (box) => {
    let baseClasses = "m-4 p-8 cursor-pointer transition-transform w-[300px] h-[350px] flex justify-center flex-col";
    if (activeBox === box) {
      baseClasses += " scale-110 shadow-lg";
    }
    return baseClasses;
  };

  return (
    <div className="w-screen h-auto flex-wrap flex items-cnter justify-center items-center gap-10" data-aos='fade-up'>
      <div 
        className={getBoxClasses('box1')}
        onClick={() => handleClick('box1')}
        
      >
        <img src={icon1} className='w-[20px] h-[20px] mb-3'/>
        <h1 className='text-3xl font-sans mb-3'>Start Plan</h1>
       <div className='flex  items-center justify-center gap-1'> <span><GoCheck /></span><h2>Store unlimited data</h2></div>
       <div className='flex  items-center justify-center gap-1'> <span><GoCheck /></span><h2>Export to pdf, xls, csv</h2></div>
       <div className='flex  items-center justify-center gap-1 mb-4'> <span><GoCheck /></span><h2>Cloude server support</h2></div>
       <div className='mb-3'><h2 className='font-bold'>$9.99/ <span className='text-slate-300'>year <br/>up to 3 user + 199per user </span></h2></div>
       <div className='w-[100px] h-[40px] bg-orange-500 flex items-center justify-center gap-2 pl-2 rounded'>Get this <GoArrowRight/> </div>
      </div>
      <div
        className={getBoxClasses('box2')}
        onClick={() => handleClick('box2')}
      >
      <img src={icon2} className='w-[20px] h-[20px] mb-3'/>
        <h1 className='text-3xl font-sans mb-3'>Silver Plan</h1>
       <div className='flex  items-center justify-center gap-1'> <span><GoCheck /></span><h2>Store unlimited data</h2></div>
       <div className='flex  items-center justify-center gap-1'> <span><GoCheck /></span><h2>Export to pdf, xls, csv</h2></div>
       <div className='flex  items-center justify-center gap-1 mb-4'> <span><GoCheck /></span><h2>Cloude server support</h2></div>
       <div className='mb-3'><h2 className='font-bold'>$19.99/ <span className='text-slate-300'>year <br/>up to 3 user + 199per user </span></h2></div>
       <div className='w-[100px] h-[40px] bg-orange-500 flex items-center justify-center gap-2 pl-2 rounded'>Get this <GoArrowRight/> </div>
      </div>
      <div className={getBoxClasses('box3')}
      onClick={() => handleClick('box3')}
      >
      <img src={icon3} className='w-[20px] h-[20px] mb-3'/>
        <h1 className='text-3xl font-sans mb-3'>Diamond Plan</h1>
       <div className='flex  items-center justify-center gap-1'> <span><GoCheck /></span><h2>Store unlimited data</h2></div>
       <div className='flex  items-center justify-center gap-1'> <span><GoCheck /></span><h2>Export to pdf, xls, csv</h2></div>
       <div className='flex  items-center justify-center gap-1 mb-4'> <span><GoCheck /></span><h2>Cloude server support</h2></div>
       <div className='mb-3'><h2 className='font-bold'>$29.99/ <span className='text-slate-300'>year <br/>up to 3 user + 199per user </span></h2></div>
       <div className='w-[100px] h-[40px] bg-orange-500 flex items-center justify-center gap-2 pl-2 rounded'>Get this <GoArrowRight/> </div>
      </div>
    </div>
  );
};

export default BoxContainer2;
