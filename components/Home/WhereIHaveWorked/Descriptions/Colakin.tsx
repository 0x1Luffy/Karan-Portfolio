import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function ColakinCompany() {
  const tasks = [
    {
      text: "Crafted scalable microservices RESTful APIs to tackle sizing challenges in the clothing industry, elevating customer experience and bolstering retention rates.",
      keywords: ["ReactJS", "TailwindCSS v1", "TypeScript"],
    },
    {
      text: "Took ownership of the platform conducting a comprehensive analysis to develop efficient solution in Spring Boot and Node.js ",
      keywords: ["Next.js"],
    },
    {
      text: "Technologies used: Vue JS, Java Spring Boot, Node JS, Bootstrap, Python, Mongo DB, PostgreSQL and Graph QL.",
      keywords: ["technical support","troubleshoots"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Backend Developer Intern <span className="text-AAsecondary">@ Colakin</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jun 2021 - Aug 2021</span>
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
