import React from 'react';
import code from '../assets/cyber.png';

const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen text-black-300 bg-[#ff99cc]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-white border-pink-500'>
            Projects
          </p>
          <p className='py-2 text-1xl text-center text-white'>Check out some of my projects</p>
        </div>
{/* Container */}
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8'>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-sm font-bold text-black tracking-wider'>
                Mastermind Game 
              </span>
              <p className=' text-sm text-center text-pink-500 mt-0 max-w-sm mx-auto'>Team Project- Java Game Application</p>

            {/* Add demo video */}
              <div className='pt-4 flex justify-center items-center'>
             <video controls width='40%' height='25%' >
             <source src={require('../assets/Mastermind-Video.mp4')} type='video/mp4' />
              Your browser does not support the video tag.
              </video>
             </div> 
             

                <a href='https://github.com/jaydess21/MastermindG'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
      
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
  <span className='text-md font-bold text-black tracking-wider'>
    Social Media Web-App
  </span>
  <div className='text-sm text-center text-pink-500 mt-2 max-w-sm'>
    Team project - React, node.js, and Mongo.DB
  </div>
  <div className='pt-8 text-center'>
    {/* Add YouTube Video */}
    <div className='w-full max-w-md flex justify-center'>
      <iframe
        width='100%'
        height='100'
        src='https://www.youtube.com/embed/O9s-wxb5kPA'
        title='Social Media Web App'
        allow='autoplay; encrypted-media'
        allowFullScreen
      ></iframe>
      </div>
    <a href='https://github.com/cen4010-fa21-g02/social-media-app'>
      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
        Code
      </button>
    </a>
  </div>
</div>
</div>

        
          <div style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-md font-bold text-black tracking-wider'>
              Coming soon.. 
              </span>
              <p className=' text-sm text-center text-pink-500 mt-0 max-w-sm mx-auto'>More info coming soon.. </p>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};
export default Works;