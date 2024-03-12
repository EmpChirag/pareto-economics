import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/pareto-logo.webp";

const SearchBox = () => {
  return (
    <div className="searchBox absolute top-0 px-5 left-0 w-full bg-black h-screen text-white">
      <div className="header">
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <img
              src={Logo}
              alt="Pareto Economics"
              width="244"
              height="56"
              className="w-full h-auto invert max-md:-ml-5 max-w-[250px]"
            />
          </Link>
          <div className="right flex">
            <Link
              to="/contact-us"
              className="btn [&:after]:invert border-white hover:invert max-md:hidden"
            >
              Start Now{" "}
            </Link>
            <button className=" ml-4 md:ml-7 Search-icon border w-10 bg-white flex flex-col h-10 justify-around py-2">
              <span className="w-4 h-[1px] bg-black inline-block mx-auto rotate-45 top-[5px] relative"></span>
              <span className="w-4 h-[1px] bg-black inline-block mx-auto -rotate-45 -top-[6px] relative"></span>
            </button>
            <button className="burger-menu border w-10 border-white border-l-0 flex flex-col h-10 justify-around py-2">
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
          className="border-[0] w-full border-b border-white bg-transparent text-3xl outline-none"
        />
        <div className="links flex max-md:flex-col gap-4 mt-5 text-lg [&>a]:underline">
          <span className="font-extra text-sm">MOST POPULAR</span>{" "}
          <Link to="/global-power-index">Global Power Index</Link>
          <Link to="/first-principles"> First Principles</Link>
          <Link to="services"> Services</Link>
          <Link to="thought-leadership">Thought Leadership</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
