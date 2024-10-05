import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from './../photo/logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='w-full h-auto md:h-20 border-2 flex flex-col md:flex-row justify-between items-center px-4 md:px-10 fixed top-0 left-0 bg-white z-10'>
      <div className='flex justify-between items-center w-full md:w-auto py-4 md:py-0'>
        <img src={logo} className='w-24 md:w-32 h-auto' alt="Logo" />
        <button className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center w-full md:w-auto`}>
        <ul className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 my-4 md:my-0'>
          <li><Link to="/features" className='font-sans hover:text-orange-400 cursor-pointer'>Features</Link></li>
          <li><Link to="/about" className='font-sans hover:text-orange-400 cursor-pointer'>About us</Link></li>
          <li><Link to="/pricing" className='font-sans hover:text-orange-400 cursor-pointer'>Pricing</Link></li>
          <li><Link to="/feedback" className='font-sans hover:text-orange-400 cursor-pointer'>Feedback</Link></li>
        </ul>
        
        <div className='w-full md:w-auto mt-4 md:mt-0 md:ml-6'>
          <button className='w-full md:w-40 h-10 border-2 rounded-md flex justify-center items-center font-sans border-red-400 hover:bg-orange-400 hover:text-white cursor-pointer transition ease-in-out delay-150'>
            Request a demo
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
