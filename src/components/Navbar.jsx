import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="p-5 bg-blue-800 shadow md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <span className="text-3xl font-sf-black text-white">
            E-NSAYO
          </span>
          <button 
            onClick={toggleMenu} 
            className="text-white text-3xl md:hidden focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <ul className={`md:flex md:items-center z-[1] md:z-auto md:static absolute bg-blue-800 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all ease-in duration-500 ${isOpen ? 'top-30 opacity-100' : 'top-[-400px] opacity-0 md:opacity-100'}`}>
          <li className="mx-4 my-6 md:my-0">
            <a href="/" className="text-lg font-sf-regular text-white hover:text-blue-400 duration-500">Home</a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="/dashboard" className="text-lg font-sf-regular text-white hover:text-blue-400 duration-500">Courses</a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <button className="bg-white text-blue-800 font-sf-bold duration-500 px-6 py-2 mx-4 hover:bg-opacity-60 rounded">
              Get started
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

