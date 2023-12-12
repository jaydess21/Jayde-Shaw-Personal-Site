import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#ff99cc]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-500">
            Computer Science & Cybersecurity Student
          </h2>
          <p className="text-white py-4 max-w-md">
            Currently in my last year, I am a Computer Science student with a minor in
            Cybersecurity. I enjoy designing web applications using technologies such as
            React, Java, Node.js, and MongoDB. While enjoying that I am also passionate about securing
            digital systems and committed to staying current with the rapid development of technologies.
          </p>
          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
