import React, { useState } from "react";
import { Link } from 'react-router-dom';
import MegaMenu from '../../components/MegaMenu';
import SearchBox from '../../components/SearchBox';
import { searchResult } from "../../static/serach";
const Header = ({ invert }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleMenu = () => {
    setSearchOpen(false);
    const body = document.querySelector('body');
    if (!menuOpen === true) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
    setMenuOpen(!menuOpen);
  };
  const handleSearch = () => {
    setMenuOpen(false);
    const body = document.querySelector("body");
    if (!searchOpen === true) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");

    }
    setSearchOpen(!searchOpen);
  };
  return (
    <>
      <header>
        <div className="header">
          <div className="flex justify-between items-center pt-2">
            <Link to="/">
              <img
                src="images/pareto-logo.webp"
                alt="Pareto Economics"
                width="244"
                height="56"
                className={`w-full h-auto max-w-[280px] max-md:-ml-5 ${
                  invert && "invert"
                }`}
              />
            </Link>
            <div className="right flex">
              <Link
                to="/contact-us"
                className={`btn max-md:hidden ${invert && "btn-invert "}`}
              >
                Start Now{" "}
              </Link>
              <button
                className={`Search-icon border w-10 h-10 flex items-center pl-[12px] pr-[10px] ${
                  invert ? "border-white" : "border-black"
                } ml-7`}
                onClick={handleSearch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="16"
                  height="16"
                  x="0"
                  y="0"
                  viewBox="0 0 461.516 461.516"
                  xmlSpace="preserve"
                  className={`${
                    invert &&
                    "invert-[98%] sepia-[99%] saturate-[4%] hue-rotate-60  brightness-[108%] contrast-[530%]"
                  }`}
                >
                  <g transform="matrix(-1.8369701987210297e-16,1,-1,-1.8369701987210297e-16,461.516040802002,0.000026702880859375)">
                    <path
                      d="M185.746 371.332a185.294 185.294 0 0 0 113.866-39.11L422.39 455c9.172 8.858 23.787 8.604 32.645-.568 8.641-8.947 8.641-23.131 0-32.077L332.257 299.577c62.899-80.968 48.252-197.595-32.716-260.494S101.947-9.169 39.048 71.799-9.204 269.394 71.764 332.293a185.64 185.64 0 0 0 113.982 39.039zM87.095 87.059c54.484-54.485 142.82-54.486 197.305-.002s54.486 142.82.002 197.305-142.82 54.486-197.305.002l-.002-.002c-54.484-54.087-54.805-142.101-.718-196.585l.718-.718z"
                      fill="#5F6062"
                      opacity="1"
                    ></path>
                  </g>
                </svg>
              </button>
              <button
                className={`burger-menu border w-10 ${
                  invert ? "border-white" : "border-black"
                } border-l-0 flex flex-col h-10 justify-around py-2`}
                onClick={handleMenu}
              >
                <span
                  className={`w-4 h-[1px] ${
                    invert ? "bg-white" : "bg-black"
                  } inline-block mx-auto`}
                ></span>
                <span
                  className={`w-4 h-[1px] ${
                    invert ? "bg-white" : "bg-black"
                  } inline-block mx-auto`}
                ></span>
                <span
                  className={`w-4 h-[1px] ${
                    invert ? "bg-white" : "bg-black"
                  } inline-block mx-auto`}
                ></span>
              </button>
            </div>
          </div>
          <div className="second-menu w-full pt-7 pb-7 max-md:hidden">
            <ul className="flex gap-10 w-full">
              <li>
                <Link to="/global-power-index">Global Power Index</Link>
              </li>
              <li>
                <Link to="/first-principles">First Principles</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <MegaMenu
        menu={menuOpen}
        handleMenu={handleMenu}
        handleSearch={handleSearch}
      />
      <SearchBox
        search={searchOpen}
        handleMenu={handleMenu}
        handleSearch={handleSearch}
        data={searchResult}
      />
    </>
  );
};

export default Header;
