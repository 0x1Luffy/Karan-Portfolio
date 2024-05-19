import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";

const AboutMe: React.FC = () => {
  const technologies: string[][] = [
    ["Next.js", "JavaScript (ES6+)", "Tailwind CSS", "Ether.js", "Solidity"],
    ["Node.js", "TypeScript", "Framer Motion", "react-moralis", "web3.js"],
  ];

  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col items-center py-20 bg-AAprimary relative">
      {/* Particle effect */}
      <div className="particle-container">
        {[...Array(30)].map((_, index) => (
          <div key={index} className="particle"></div>
        ))}
      </div>

      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px]">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon className="flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary" />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">About Me</span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 sm:space-x-2">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm">
            <div className="font-Header text-xl">
              <span className="text-gray-400">
                I am Karan, a dedicated software developer with around <span className="text-AAsecondary">3 Years</span> of experience in the software industry. 
                My technical expertise lies in building exceptional <span className="text-AAsecondary">Full Stack Web</span> applications, demonstrating proficiency across diverse sectors including <span className="text-AAsecondary">product-based companies</span>, <span className="text-AAsecondary">e-commerce</span>, <span className="text-AAsecondary">SaaS</span>, <span className="text-AAsecondary">service-based firms</span>, <span className="text-AAsecondary">consulting</span>, and <span className="text-AAsecondary">start-ups.</span> 
                With a solid foundation in both front-end and back-end technologies, I consistently deliver robust, scalable, and user-friendly solutions, tailored to meet diverse business needs. 
                My commitment to staying updated with the latest industry trends and technologies ensures that I bring innovative and efficient approaches to every project I undertake.
              </span>
            </div>
          </div>

          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden">
            <div className="group-hover:translate-x-3 group-hover:translate-y-3 duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 translate-y-5 rounded"></div>
            <div className="absolute w-5/6 h-5/6 rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img src="/img/Portfolio-portrait-3.jpg" className="object-contain rounded-lg" alt="My Image Not Found" />
            </div>
          </div>

          <div className="relative w-full h-48 md:hidden flex justify-center items-center">
            <div className="absolute w-48 h-full rounded translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img src="/img/Portfolio-portrait-3.jpg" className="object-contain rounded-lg" alt="My Image Not Found" />
            </div>
            <div className="absolute w-48 h-full bg-AAsecondary opacity-10 md:opacity-60 rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
