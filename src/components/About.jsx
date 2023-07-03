import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#ff99cc] text-white"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-white-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-pink-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right font-size: 30px text-4xl font-bold text-pink-500 ">
              <p>
              Ctrl+C, Ctrl+V enthusiast with a knack for cyber security 
              and a passion for all things techy.
              </p>
            </div>
            <div>
              <p>
              {" "}
              I am a final-year computer science student with a minor in cyber security. I am passionate for technology 
              and desire to ensure the safety/security of digital systems. With a great understanding in programming, 
              networking, and information security, I am motivated to leverage 
              my skills and knowledge to contribute to the cyber security field. Please browse through my website to learn more 
              about my path and projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;