import React, { useState } from "react";
import { leadership } from "../../Json/leadership";
import moment from "moment";

const LadershipArticles = ({ option, setSearchText }) => {
  const [filteredData, setFilteredData] = useState(leadership);
  const [text, setText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    setSearchText(inputText);
    filterData(inputText);
  };

  const filterData = (inputText) => {
    const filtered = leadership.filter((item) =>
      item.title.toLowerCase().includes(inputText.toLowerCase())
    );
    setFilteredData(filtered);
  };


  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "") {
      setFilteredData(leadership);
    } else {
      const filtered = leadership.filter((item) => item.category === category);
      setFilteredData(filtered);
    }
  };
  return (
    <section>
      <div>
        <div className="mt-6">
          <h2 className="">Choose Content Type</h2>
        </div>
        <div className="flex gap-5 max-md:flex-col mt-8 justify-between">
          <div className="flex items-center flex-wrap gap-4">
            <button
              className={`uppercase leading-[1] border ${
                selectedCategory.isActive
                  ? "bg-black text-white"
                  : "border-black"
              } duration-300 border-black px-2 md:px-4 py-2`}
              onClick={() => {
                handleFilter("podcast");
              }}
            >
              Podcast
            </button>
            <button
              className={`uppercase leading-[1] border ${
                option.isActive ? "bg-black text-white" : "border-black"
              } duration-300 border-black px-2 md:px-4 py-2`}
              onClick={() => {
                handleFilter("keynotes");
              }}
            >
              Keynotes
            </button>
            <button
              className={`uppercase leading-[1] border ${
                option.isActive ? "bg-black text-white" : "border-black"
              } duration-300 border-black px-2 md:px-4 py-2`}
              onClick={() => {
                handleFilter("insights");
              }}
            >
              Insights
            </button>
            <button
              className={`uppercase leading-[1] border ${
                option.isActive ? "bg-black text-white" : "border-black"
              } duration-300 border-black px-2 md:px-4 py-2`}
              onClick={() => {
                handleFilter("press");
              }}
            >
              Press
            </button>
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
      <div className="mt-20 flex max-md:flex-col flex-wrap gap-4 md:gap-8 lg:gap-12 max-md:mt-10">
        {filteredData.sort((a, b) => {
            return new Date(moment(b.date, 'MMMM YYYY').format('YYYY-MM-DD')) - new Date(moment(a.date, 'MMMM YYYY').format('YYYY-MM-DD'));
          }).map((item, index) => {
          return (
            <div className="md:w-[47%] lg:w-[30%]" key={index}>
              <div className="flex items-center justify-between gap-5">
                {item.category !== "press" && (
                  <div className="flex-1 max-w-[120px]">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        width={150}
                        className=""
                      />
                    ) : (
                      <img
                        src="/images/podcasts/podcast.png"
                        alt={item.title}
                        width={150}
                        className=""
                      />
                    )}
                  </div>
                )}
                <div className="flex-1">
                  <div className="uppercase text-lg">{item.category}</div>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.link}
                    className="text-2xl md:text-3xl my-2 font-title line-clamp-2"
                  >
                    {item.title}
                  </a>

                  {item.date && (
                    <div className="date text-sm uppercase">{item.date}</div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LadershipArticles;
