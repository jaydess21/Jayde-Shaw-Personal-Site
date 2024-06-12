import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#ff99cc] flex items-center justify-center">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center text-center">
        <p className="text-white py-5 max-w-md text-center text-2xl">
I am a recent graduate from the University of Florida Atlantic University with a Bachelor of Science in Computer Science and a minor in Cybersecurity. 
I am passionate about technology and its impact on society. I am a quick learner, a team player, and a problem solver.
 I am always looking for new challenges and opportunities to grow.
        </p>
        <p className="text-white py-4 max-w-md text-center text-2xl">
          As society faces upcoming technology, my commitment to computer science and cybersecurity 
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
