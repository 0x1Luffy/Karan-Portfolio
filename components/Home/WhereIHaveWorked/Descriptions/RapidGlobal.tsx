import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function RapidGlobal() {
  const tasks = [
    {
      text: "Led rebuilding of three flagship products—MyRapid, Trainee Portal, and Rapid Incident Reporting—using agile methodologies.",
      keywords: ["Alchemy", "Wagmi", "Web3.js", "Moralis", "Ethers.js"],
    },
    {
      text: "Developed seamless user experiences with React.js and robust RESTful APIs with ASP.NET Core, ensuring scalability and reliability.",
      keywords: ["quality", "testing tasks", "user base"],
    },
    {
      text: "Implemented Jest unit testing for code reliability and conducted code reviews to foster continuous learning.",
      keywords: ["website design"],
    },
    {
      text: "Collaborated cross-functionally to drive product evolution, resulting in a 33% revenue increase. Technologies: React JS, Redux, Jest, ASP.NET Core, C#, MS SQL Server.",
      keywords: ["smart contracts", "ENS"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Develeper <span className="text-AAsecondary">@ Rapid Global</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jan 2023 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("www.rapidglobal.com", "_blank")}
          >
            www.rapidglobal.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
