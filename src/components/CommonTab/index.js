import React from "react";

const CommonTab = ({ title, options }) => {
  return (
    <div>
      <div className="mt-6">
        <h2 className="text-4xl leading-[1.2] lg:text-6xl">{title}</h2>
      </div>
      <div className="flex gap-5 max-md:flex-col mt-8 justify-between">
        <div className="flex items-center flex-wrap gap-4">
          {options.map((option, index) => (
            <div
              key={index}
              className="uppercase leading-[1] border border-black px-2 md:px-4 py-2"
            >
              {option.value}
            </div>
          ))}
        </div>
        <div className="relative max-w-[300px] w-full">
          <input
            className="appearance-none border-b text-end pl-10 border-black hover:border-gray-400 transition-colors w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
            id="username"
            type="text"
          />
          <div className="absolute left-0 top-0 h-10 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400 hover:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonTab;
