import React from 'react';
import code from '../assets/cyber.png';

const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen text-black-300 bg-[#ff99cc]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-5xl font-bold inline border-b-4 text-white border-pink-500'>
            Projects
          </p>
          <p className='py-4 text-3xl text-center text-white'>Check out some of my projects</p>
        </div>
        {/* Container */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8'>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${code})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center bg-white p-4 rounded shadow-lg'>
              <span className='text-sm font-bold text-black tracking-wider'>
                Anti' Mood
              </span>
              <p className='text-sm text-center text-pink-500 mt-2 max-w-sm'>
                Team Project - Swift iOS Productivity App
              </p>
              {/* Loom video */}
              <div className='pt-4 flex justify-center items-center'>
                <iframe
                  width='300'
                  height='150'
                  src='https://www.loom.com/embed/900fba895af445fa8b5de2804a4b7f80?sid=6de675e8-3e7e-478f-a170-d11869b87fd5'
                  webkitallowfullscreen
                  mozallowfullscreen
                  allowfullscreen
                ></iframe>
              </div>
              <a href='https://github.com/COP4655-MobileApps-Fall2023/cop4655-mobile-apps-final-project-group-7'>
                <button className='text-center rounded-sm px-4 py-2 bg-gray-700 text-white font-bold text-sm'>
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
            <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center bg-white p-4 rounded shadow-lg'>
              <span className='text-md font-bold text-black tracking-wider'>
                LifePath
              </span>
              <div className='text-sm text-center text-pink-500 mt-2 max-w-sm'>
                Team Project - Photo memories AI Application
              </div>
              {/* Add demo video */}
              <div className='pt-4 flex justify-center items-center'>
                <video controls width='300' height='150'>
                  <source src={require('../assets/lifepath.mp4')} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </div>
              <a href='https://github.com/Group11-EngDesign/LifePath'>
                <button className='text-center rounded-sm px-4 py-2 bg-gray-700 text-white font-bold text-sm'>
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
            <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center bg-white p-4 rounded shadow-lg'>
              <span className='text-md font-bold text-center text-black tracking-wider'>
                Coming soon currently working on projects..
              </span>
              <p className='text-sm text-center text-pink-500 mt-2 max-w-sm'>
                More info coming soon..
              </p>
              <img src={require('../assets/blogsite.gif')} alt='Blogsite Preview' className='w-70 h-30 mt-4' />
              <div className='pt-8 text-center'>
                <a href='https://github.com/jaydess21/Expect-To-Express'>
                  <button className='text-center rounded-sm px-4 py-2 bg-gray-700 text-white font-bold text-sm'>
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
