import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchBox = ({ search, handleMenu, handleSearch, data }) => {
  const [searchInput, setSearchInput] = useState(""); // State to store the search input value
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value); // Update the search input value
  };

  useEffect(() => {
    if(searchInput && searchInput !== '') {
      setFilteredResults(data.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    ) || []);
    } else {
      setFilteredResults([]);
    }
  }, [data, searchInput]);

  return (
    <div
      className={`searchBox absolute z-10 overflow-y-auto h-full top-0 px-5 left-0 w-full bg-black  text-white duration-300 ${
        search
          ? "opacity-100 pointer-events-all"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-[1480px] mx-auto px-5">
        <div className="header">
          <div className="flex justify-between items-center pt-2">
            <Link to="/">
              <img
                src="/images/pareto-logo.webp"
                alt="Pareto Economics"
                width="244"
                height="56"
                className="w-full h-auto invert max-w-[280px] max-md:-ml-5"
              />
            </Link>
            <div className="right flex">
              <Link
                to="/contact-us"
                className="btn btn-invert border-white max-md:hidden"
              >
                Start Now{" "}
              </Link>
              <button
                className=" ml-4 md:ml-7 Search-icon border w-10 bg-white flex flex-col h-10 justify-around py-2"
                onClick={handleSearch}
              >
                <span className="w-4 h-[1px] bg-black inline-block mx-auto rotate-45 top-[5px] relative"></span>
                <span className="w-4 h-[1px] bg-black inline-block mx-auto -rotate-45 -top-[6px] relative"></span>
              </button>
              <button
                className="burger-menu border w-10 border-white border-l-0 flex flex-col h-10 justify-around py-2"
                onClick={handleMenu}
              >
                <span className="w-4 h-[1px] bg-white inline-block mx-auto"></span>
                <span className="w-4 h-[1px] bg-white inline-block mx-auto"></span>
                <span className="w-4 h-[1px] bg-white inline-block mx-auto"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="searchbar md:pr-20 mt-28">
          <input
            type="text"
            placeholder="Type to search"
            name="searchinput"
            value={searchInput}
            onChange={handleSearchInputChange}
            className="border-[0] w-full border-b border-white bg-transparent text-3xl outline-none"
          />
          <div className="links flex max-md:flex-col gap-4 mt-5 text-lg [&>a]:underline">
            <span className=" text-sm">MOST POPULAR</span>{" "}
            <Link to="/global-power-index">Global Power Index</Link>
            <Link to="/first-principles"> First Principles</Link>
            <Link to="/services"> Services</Link>
            <Link to="/thought-leadership">Thought Leadership</Link>
          </div>
        </div>
      </div>
      <div className="search-results">
        <p>Total results: {filteredResults.length}</p>
        <ul>
          {filteredResults.map((result) => (
            <li key={result.id}>
              <Link to={result.path}>{result.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBox;
