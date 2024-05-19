import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function AccedeCompany() {
  const tasks = [
    {
      text: "Led the transformation of design concepts into cutting-edge front-end UI for an automated kitchen management app at Royal Adelaide Hospital, ensuring seamless functionality across devices and enhancing accessibility for end-users.",
      keywords: ["Advanced Agro Management"],
    },
    {
      text: "Actively contributed to accessibility features and testing to identify potential UI inconsistencies or performance bottlenecks.",
      keywords: ["MOnitored","WordPress issues"],
    },
    {
      text: "Technologies used: JavaScript, Twig, PHP, Bootstrap, MS Access, MS SQL Server. ",
      keywords: ["Oracle Database"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Frontend Developer Intern <span className="text-AAsecondary">@ Accede Holdings Pty Ltd</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Mar 2021 - May 2021</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
