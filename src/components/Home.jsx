import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#ff99cc] flex items-center justify-center">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-500">
          Computer Science & Cybersecurity Student
        </h2>
        <p className="text-white py-4 max-w-md text-center">
          Currently in my last year, I am a Computer Science student with a minor in
          Cybersecurity. I enjoy designing web applications using technologies such as
          React, Java, and SQL. While enjoying that I am also passionate about securing
          digital systems and committed to staying current with the rapid development of technologies.
        </p>
        <p className="text-white py-4 max-w-md text-center">
          As society faces technology, my commitment to computer science and cybersecurity 
          empowers me to contribute positively to emerging technologies. My goal is to make
          a meaningful impact, staying aware of the rapid developments in technology and 
          ensuring a secure digital future. 
        </p>
        <div>
          {/* Add some content here */}
          <Link
            to="/posts"
            className="group text-white w-fit px-12 py-2 my-2 flex flex-col items-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer" >
            <p className="text-white max-w-md text-center">Jayde's Blog</p>
            <p className="text-white max-w-md text-center">Coming Soon</p> 
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
