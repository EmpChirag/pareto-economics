import React, { useState } from "react";

const CommonTab = ({ title, options, handleOption,setSearchText }) => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
    setSearchText(event.target.value);
  };
  return (
    <div>
      <div className="mt-6">
        <h2 className="">{title}</h2>
      </div>
      <div className="flex gap-5 max-md:flex-col mt-8 justify-between">
        <div className="flex items-center flex-wrap gap-4">
          {options.map((option, index) => (
            <button
              key={index}
              className={`uppercase leading-[1] border ${
                option.isActive ? "bg-black text-white" : "border-black"
              } duration-300 border-black px-2 md:px-4 py-2`}
              onClick={() => {
                handleOption(option.value);
              }}
            >
              {option.value}
            </button>
          ))}
        </div>
        <div className="relative max-w-[300px] w-full">
          <input
            className="appearance-none border-b pl-10 border-black hover:border-gray-400 transition-colors w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-gray-400 focus:border-gray-ring-gray-400 focus:shadow-outline"
            id="username"
            type="text"
            value={text}
           onChange={handleInputChange}
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
