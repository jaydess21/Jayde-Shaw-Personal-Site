import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#ffffff] flex items-center justify-center">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center text-center">
        <p className="text-black py-4 max-w-md text-center text-1xl">
        Hi, I'm Jayde, a graduate student at the University of West Florida, where 
        I’m pursuing a Master’s in Cybersecurity with a focus on the Software Systems 
        track. I currently work in IT as a Distributed Computer Systems Analyst, 
        a role that allows me to tackle technical challenges, support complex systems,
        and contribute to a field I’m passionate about.
        </p>
        <p className="text-black py-4 max-w-md text-center text-1xl">
        Take a moment to explore my website and learn more about my background, 
        interests, and the projects that shape my journey in this exciting field.
        </p>
        <div>
          {/* Add some content here */}
          <Link
            to="/posts"
            className="group text-white w-fit px-12 py-2 my-2 flex flex-col items-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer" >
            <p className="text-white max-w-md text-center">Connect with me!</p>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
