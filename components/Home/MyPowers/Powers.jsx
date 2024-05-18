import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";

export default function MyPowers(props) {
  const powers = [
    "Problem Solving",
    "Creative Thinking",
    "Collaboration",
    "Adaptability",
    "Critical Thinking",
    "Leadership",
  ];

  return (
    <div id="powersSection" data-aos="fade-up" className="snap-start flex flex-col items-center py-20 bg-AAprimary">
      {/* // ? 0.2 My Powers */}
      <div className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] md:w-[700px] lg:w-[900px] ml-4 sm:ml-8 md:ml-16 lg:ml-24">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl"> 03.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              My Powers
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}
        <div className="w-full flex flex-col space-y-8">
          <div className="font-Header text-gray-400">
            <span>
              Over the years, I have developed a diverse set of skills that help me excel in various areas of software
              engineering and beyond. Here are some of the key powers I possess:
            </span>
          </div>
          <div className="font-Header tracking-wide flex flex-wrap space-y-4">
            {powers.map((power, index) => {
              return (
                <div key={index} className="flex flex-row items-center space-x-2 w-full sm:w-1/2">
                  <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                  <span className="text-gray-400 sm:text-sm text-xs">{power}</span>
                </div>
              );
            })}
          </div>
        </div>
        {/* // ? Image in Desktop and Tablet */}
        <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden">
          <div
            className="group-hover:translate-x-3 group-hover:translate-y-3
             duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
             translate-y-5 rounded"
          ></div>
          <div className="absolute w-5/6 h-5/6 rounded overflow-hidden">
            <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
            <Img
              src={"/img/Portfolio-powers.jpg"}
              className={"object-contain rounded-lg"}
              alt="My Image Not Found"
            />
          </div>
        </div>
        {/* // ?Image in Mobile */}
        <div className="relative w-full h-48 md:hidden flex justify-center items-center">
          <div className="absolute w-48 h-full rounded translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
          <div className="absolute w-48 h-full rounded overflow-hidden">
            <Img
              src={"/img/Portfolio-powers.jpg"}
              className={"object-contain rounded-lg"}
              alt="My Image Not Found"
            />
          </div>
          <div className="absolute w-48 h-full bg-AAsecondary opacity-10 md:opacity-60 rounded overflow-hidden"></div>
        </div>
      </div>
    </div>
  );
}
