import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Lumient() {
  const tasks = [
    {
      text: "Led the development of a cutting-edge Wool Management System for Elders, an Australian agriculture company, exceeding a million dollars in value.",
      keywords: ["NFT Marketplace"],
    },
    {
      text: "Utilized Vue.js to create visually appealing landing pages from Figma designs.",
      keywords: ["Next.js/React", "AWS", "Vercel"],
    },
    {
      text: "Engineered robust RESTful APIs with ASP.NET Core and C#, following SOLID, DRY, and KISS principles",
      keywords: [],
    },
    {
      text: "Contributed to a 13% decrease in labor, highlighting the project's potential as a lucrative software solution.",
      keywords: [],
    }
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Developer <span className="text-AAsecondary">@ Lumient</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Mar 2022 - Dec 2022</span>
          <span className="font-mono text-xs text-AAsecondary hover:cursor-pointer" style={{ fontSize: "0.6rem" }}
           // set on click to open the website
           onClick={() => window.open("www.lumient.com.au", "_blank")}
          >
           www.lumient.com.au
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
