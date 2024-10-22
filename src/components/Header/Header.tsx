'use client'
import Image from "next/image";
import React from "react";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState<any>(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-blue-600 flex flex-row gap-1 items-center">
              <img src="/DLogo.png" alt="Logo" width={50} height={50} /> <span>Hii</span>
            </a> 
          </div>

          {/* Navigation (Hidden on small screens) */}
          {/* <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
          </nav> */}

          {/* Button */}
          {/* <div className="hidden md:block">
            <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Get Started</a>
          </div> */}

          {/* Mobile Menu Button */}
          {/* <div className="md:hidden flex items-center"> 
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile Menu (Visible only when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-4 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600">About</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600">Services</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;