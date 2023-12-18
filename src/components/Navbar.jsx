import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full h-[60px] flex justify-between items-center px-4 bg-gradient-to-r 
      from-purple-500 to-pink-500 text-gray-300 ${scroll > 60 ? 'bg-white shadow-md' : ''}`}>
      <div>
        <h1 className='font-thin text-md italic font-serif'>Jayde Shaw</h1>
      </div>
      {/* menu */}
      <ul className='hidden md:flex gap-x-8'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/skills'>Skills</Link>
        </li>
        <li>
          <Link to='/work'>Projects</Link>
        </li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
     {/* Mobile menu */}
<ul
  className={
    !nav
      ? 'hidden'
      : 'fixed top-0 left-0 w-full h-screen bg-[#ff99cc] flex flex-col items-center justify-center text-white' 
  }
>
  <li className='text-4xl py-6'>
    <Link onClick={handleClick} to='/'>
      Home
    </Link>
  </li>
  <li className='text-4xl py-6'>
    <Link onClick={handleClick} to='/about'>
      About
    </Link>
  </li>
  <li className='text-4xl py-6'>
    <Link onClick={handleClick} to='/skills'>
      Skills
    </Link>
  </li>
  <li className='text-4xl py-6'>
    <Link onClick={handleClick} to='/work'>
      Projects
    </Link>
  </li>
</ul>

      {/* Social icons */}
      <div className='fixed top-1/2 transform -translate-y-1/2 left-0'>
        <ul>
          <li className='w-[138px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/jayde-shaw-774560224/'
            >
              Linkedin <FaLinkedin size={22} />
            </a>
          </li>
          <li className='w-[138px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/jaydess21'
            >
              Github <FaGithub size={22} />
            </a>
          </li>
          <li className='w-[138px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:shawintelligence@gmail.com'
            >
              Email <HiOutlineMail size={22} />
            </a>
          </li>
          <li className='w-[138px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600'>
            <Link
              className='flex justify-between items-center w-full text-gray-300'
              to='/resume'
            >
              Resume <BsFillPersonLinesFill size={22} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
