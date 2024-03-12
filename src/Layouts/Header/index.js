import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className=" flex justify-between pt-7">
        <Link>
          <img
            src="images/pareto-economics-logo.png"
            alt="Pareto Economics"
            width="244"
            height="56"
            className="w-full h-auto"
          />
        </Link>
        <div className="right flex">
          <button className="btn">Start Now </button>
          <div className="Search-icon border w-10 h-10 flex items-center pl-[12px] pr-[10px] border-black ml-7">
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
            >
              <g transform="matrix(-1.8369701987210297e-16,1,-1,-1.8369701987210297e-16,461.516040802002,0.000026702880859375)">
                <path
                  d="M185.746 371.332a185.294 185.294 0 0 0 113.866-39.11L422.39 455c9.172 8.858 23.787 8.604 32.645-.568 8.641-8.947 8.641-23.131 0-32.077L332.257 299.577c62.899-80.968 48.252-197.595-32.716-260.494S101.947-9.169 39.048 71.799-9.204 269.394 71.764 332.293a185.64 185.64 0 0 0 113.982 39.039zM87.095 87.059c54.484-54.485 142.82-54.486 197.305-.002s54.486 142.82.002 197.305-142.82 54.486-197.305.002l-.002-.002c-54.484-54.087-54.805-142.101-.718-196.585l.718-.718z"
                  fill="#cccccc"
                  opacity="1"
                ></path>
              </g>
            </svg>
          </div>
          <div className="burger-menu border w-10 border-black border-l-0 flex flex-col h-10 justify-around py-2">
            <span className="w-4 h-[1px] bg-black inline-block mx-auto"></span>
            <span className="w-4 h-[1px] bg-black inline-block mx-auto"></span>
            <span className="w-4 h-[1px] bg-black inline-block mx-auto"></span>
          </div>
        </div>
      </div>
      <div className="second-menu w-full pt-7 pb-7">
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
  );
};

export default Header;
