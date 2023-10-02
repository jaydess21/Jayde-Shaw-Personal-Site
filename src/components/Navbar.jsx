import React, { useState } from 'react'; 
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-gradient-to-r 
    from-purple-500 to-pink-500 text-gray-300'>
      <div>
        <h1 className=' font-thin text-md  italic font-serif'>Jayde Shaw</h1>
      </div>
      {/* menu */}
      <ul className='hidden md:flex gap-x-8'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Projects
          </Link>
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
            : 'absolute top-0 left-0 w-full h-screen bg-[#ff99cc] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl '>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
      </ul>
      {/* Social icons */}
      <div className='fixed top-[70%] left-0'>
        <ul>
          <li className='w-[138px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/jayde-shaw-774560224/' >

              Linkedin <FaLinkedin size={22} />
            </a>
          </li>
          <li className='w-[138px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/jaydess21'>
              Github <FaGithub size={22} />
            </a>
          </li>
          <li className='w-[138px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              a href='mailto:shawintelligence@gmail.com'
            >
              Email <HiOutlineMail size={22} />
            </a>
          </li>
          <li className='w-[138px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://docs.google.com/document/d/1-3BlUN9Nlv0ebA59CTXmjaK2FUdgQWizyF44phz2G7s/edit'
            >
              Resume <BsFillPersonLinesFill size={22} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;