import React from "react";

const About = () => {
  return (
    <div name="about" id="about" className="w-full h-screen bg-[#ff99cc] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="py-8 rounded-md bg-white-800 flex flex-col justify-center items-center w-2/3">
          <div className="max-w-[800px] w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <div className="md:text-right pb-0 md:pb-0 pr-4">
              <p className="text-2xl font-bold inline border-b-2 border-pink-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 px-4">
            <div className="sm:text-right font-size: 30px text-4xl font-bold text-pink-500 ">
              <p>
                Ctrl+C, Ctrl+V enthusiast with a knack for cybersecurity and
                a passion for all things techy.
              </p>
            </div>
            <div>
              <p className="text-md">
                I am a final-year computer science student with a minor in
                cybersecurity. My passion lies in software development and
                ensuring the safety and security of digital systems. With a
                strong understanding of programming and security, I am driven
                to utilize my skills and knowledge to make meaningful
                contributions to the software and cybersecurity industries.
                Feel free to explore my website to learn more about my journey
                and some of the projects that reflect my capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
