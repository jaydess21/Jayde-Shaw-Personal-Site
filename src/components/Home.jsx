import React, { useEffect, useRef, useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

import AIVideo from '../assets/AI.mp4'; // Import the video

const Home = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Autoplay the video every 60 seconds
    const autoplayInterval = setInterval(() => {
      if (isPlaying && videoRef.current) {
        videoRef.current.play();
      }
    }, 60000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [isPlaying]);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div name="home" className="h-screen w-full bg-[#ff99cc]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Computer Science & Cybersecurity Student
          </h2>
          <p className="text-white py-4 max-w-md">
            Currently in my last year, I am a Computer Science student with a minor in Cybersecurity. I enjoy designing web applications using technologies such as React, Java, Node.js, and MongoDB. While enjoying that I am also passionate about securing digital systems and committed to staying current with the rapid development of technologies.
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
        <div>
          <div onClick={handleVideoClick}>
            <video
              ref={videoRef}
              src={AIVideo}
              alt="AI Bot Video"
              className="rounded-2xl mx-auto w-full h-auto md:w-2/3" // Adjust the width here
              autoPlay
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
