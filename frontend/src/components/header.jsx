import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  return (
    <header className='text-white bg-blue-600 shadow-lg'>
      <div className='container flex items-center justify-between px-4 py-4 mx-auto'>
        {/* Logo */}
        <div className='text-2xl font-bold'>
          <Link to='/'>Task Manager</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden space-x-6 md:flex'>
          <Link to='/' className='transition-colors duration-300 hover:text-gray-200'>
            Home
          </Link>
          <Link to='/add' className='transition-colors duration-300 hover:text-gray-200'>
            Add Task
          </Link>
          <Link to='/about' className='transition-colors duration-300 hover:text-gray-200'>
            About
          </Link>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button className='text-white md:hidden focus:outline-none' onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className='bg-blue-500 md:hidden'>
          <ul className='p-4 space-y-2'>
            <li>
              <Link to='/' className='block p-2 text-white rounded hover:bg-blue-700' onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/add-task' className='block p-2 text-white rounded hover:bg-blue-700' onClick={() => setIsOpen(false)}>
                Add Task
              </Link>
            </li>
            <li>
              <Link to='/about' className='block p-2 text-white rounded hover:bg-blue-700' onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
