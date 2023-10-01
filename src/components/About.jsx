import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#ff99cc] text-white"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="py-16 rounded-md bg-white-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-1">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-3xl font-bold inline border-b-4 border-pink-500">
                About Jayde
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 px-4">
            <div className="sm:text-right font-size: 30px text-4xl font-bold text-pink-500 ">
              <p>
                Ctrl+C, Ctrl+V enthusiast with a knack for cyber security 
                and a passion for all things techy.
              </p>
            </div>
            <div>
              <p>
                {" "}
                I am a final-year computer science student with a minor 
                in cybersecurity. My passion lies in software development 
                and ensuring the safety and security of digital systems. With a strong understanding 
                of programming and security; I am driven to utilize my skills 
                and knowledge to make meaningful contributions to the software 
                and cybersecurity industries. Feel free to explore my website to 
                learn more about my journey and some of the projects that reflect 
                my capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
