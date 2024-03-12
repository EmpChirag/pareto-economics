import React from "react";

const CommonTab = ({ title, options }) => {
  return (
    <div>
      <div className="mt-6">
        <p className="text-6xl">{title}</p>
      </div>
      <div className="flex mt-8 d-flex">
        {options.map((option, index) => (
          <div
            key={index}
            className="inline-block text-uppercase mr-8 border-2 border-black px-8 py-1"
          >
            {option.value}
          </div>
        ))}
        <div className="mx-10">
          <div className="relative">
            <input
              className="appearance-none border-b-2 text-end pl-10 border-black hover:border-gray-400 transition-colors w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
              id="username"
              type="text"
            />
            <div className="absolute  left-0 inset-y-0 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 ml-3 text-gray-400 hover:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonTab;
