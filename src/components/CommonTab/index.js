import React from "react";

const CommonTab = ({ title, options }) => {
  return (
    <div>
      <div className="mt-6">
        <p className="text-4xl md:text-4xl lg:text-6xl">{title}</p>
      </div>
      <div className="mt-8 md:-mx-2">
        <div className="grid flex flex-wrap grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:mx-2">
          {options.map((option, index) => (
            <div
              key={index}
              className="inline-block text-uppercase border-2 border-black px-4 py-1"
            >
              {option.value}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <div className="md:mx-2 lg:mx-2 w-full md:w-auto">
          <div className="relative">
            <input
              className="appearance-none border-b text-end pl-10 border-black hover:border-gray-400 transition-colors w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
              id="username"
              type="text"
            />
            <div className="absolute left-0 inset-y-0 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-black hover:text-gray-500"
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
    </div>
  );
};

export default CommonTab;
