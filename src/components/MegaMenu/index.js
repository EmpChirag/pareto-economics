import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/pareto-logo.webp";
import Arrow from "../../assets/images/arrow.svg";
import contentImg from "../../assets/images/latest-content.png";
import newsImg from "../../assets/images/latest-news.png";
const MegaMenu = ({ menu, handleMenu, handleSearch }) => {

  return (
    <div
      className={`megaMenu absolute z-10 top-0 overflow-y-auto h-full px-5 left-0 w-full bg-black md:h-screen text-white pb-10 duration-300 ${
        menu
          ? "opacity-100 pointer-events-all"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-[1480px] mx-auto px-5">
        <div className="header">
          <div className="flex justify-between items-center pt-2">
            <Link to="/">
              <img
                src={Logo}
                alt="Pareto Economics"
                width="244"
                height="56"
                className="w-full h-auto invert max-w-[280px] max-md:-ml-5"
              />
            </Link>
            <div className="right flex">
              <Link
                to="/contact-us"
                className="btn btn-invert border-white  max-md:-ml-5 max-md:hidden"
              >
                Start Now{" "}
              </Link>

              <button
                className="Search-icon border w-10 h-10 flex items-center pl-[12px] pr-[10px] border-white ml-7"
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
                >
                  <g transform="matrix(-1.8369701987210297e-16,1,-1,-1.8369701987210297e-16,461.516040802002,0.000026702880859375)">
                    <path
                      d="M185.746 371.332a185.294 185.294 0 0 0 113.866-39.11L422.39 455c9.172 8.858 23.787 8.604 32.645-.568 8.641-8.947 8.641-23.131 0-32.077L332.257 299.577c62.899-80.968 48.252-197.595-32.716-260.494S101.947-9.169 39.048 71.799-9.204 269.394 71.764 332.293a185.64 185.64 0 0 0 113.982 39.039zM87.095 87.059c54.484-54.485 142.82-54.486 197.305-.002s54.486 142.82.002 197.305-142.82 54.486-197.305.002l-.002-.002c-54.484-54.087-54.805-142.101-.718-196.585l.718-.718z"
                      fill="#ffffff"
                      opacity="1"
                    ></path>
                  </g>
                </svg>
              </button>
              <button
                className="burger-menu border w-10 bg-white border-l-0 flex flex-col h-10 justify-around py-2"
                onClick={handleMenu}
              >
                <span className="w-4 h-[1px] bg-black inline-block mx-auto rotate-45 top-[5px] relative"></span>
                <span className="w-4 h-[1px] bg-black inline-block mx-auto -rotate-45 -top-[6px] relative"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="menu md:grid grid-cols-3 gap-10 md:mt-5">
          <div className="navigation pt-5 border-t">
            <div className="uppercase text-base  mb-3 md:mb-5">Navigation </div>
            <div className="navigation-links flex flex-col text-4xl leading-[47px] ">
              <Link to="/about-us">About Us</Link>
              <Link to="/global-power-index">Global Power index</Link>
              <Link to="/thought-leadership">Thought Leadership</Link>
              <Link to="/first-principles">First Principles</Link>
              <Link to="/services">Services</Link>
              <Link to="/services-speaking">
                <img
                  src={Arrow}
                  width="14"
                  height="14"
                  alt="arrow"
                  className="inline-block w-4 mr-2 invert"
                />
                Speaking
              </Link>
              <Link to="/services-research">
                <img
                  src={Arrow}
                  width="14"
                  height="14"
                  alt="arrow"
                  className="inline-block w-4 mr-2 invert"
                />
                Research
              </Link>
              <Link to="/services-executive-workshops">
                <img
                  src={Arrow}
                  width="14"
                  height="14"
                  alt="arrow"
                  className="inline-block w-4 mr-2 invert"
                />
                Executive Workshops
              </Link>
              <Link to="/clients">Clients</Link>
              <Link to="/clients-corporations">
                <img
                  src={Arrow}
                  width="14"
                  height="14"
                  alt="arrow"
                  className="inline-block w-4 mr-2 invert"
                />
                Corporations
              </Link>
              <Link to="/clients-investors">
                <img
                  src={Arrow}
                  width="14"
                  height="14"
                  alt="arrow"
                  className="inline-block w-4 mr-2 invert"
                />
                Investors
              </Link>
              <Link to="/clients-governments">
                <img
                  src={Arrow}
                  width="14"
                  height="14"
                  alt="arrow"
                  className="inline-block w-4 mr-2 invert"
                />
                Governments
              </Link>
              <Link to="/in-the-news">Newsroom</Link>
              <Link to="/contact-us">Contact </Link>
            </div>
          </div>
          <div className=" ">
            <div className="latest-content pt-5 border-t max-md:mt-10">
              <div className=" mb-5 uppercase flex justify-between">
                <span className="text-base ">Latest Content</span>
                <Link
                  to="/"
                  className="text-sm  underline hover:no-underline whitespace-nowrap"
                >
                  See More &gt;
                </Link>
              </div>
              <div className="w-2/3">
                <img src={contentImg} alt="" width={500} height={200} />
                <p className="text-lg mt-4">
                  How to understand the Changing World Order
                </p>
              </div>
            </div>
            <div className="latest-content mt-10 pt-5 border-t">
              <div className=" mb-5 uppercase flex justify-between">
                <span className="text-base ">Latest News</span>
                <Link
                  to="/"
                  className="text-sm underline hover:no-underline whitespace-nowrap"
                >
                  See More &gt;
                </Link>
              </div>
              <div className="w-2/3">
                <img src={newsImg} alt="news Image" width={500} height={200} />
                <p className="text-lg mt-4">
                  Global Business: UK economy sees recession to end 2023
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="global-power pt-5 border-t max-md:mt-10">
              <div className="mb-5 uppercase flex justify-between ">
                <span className="text-base">Global Power Index</span>
                <Link
                  to="/"
                  className="text-sm  underline hover:no-underline whitespace-nowrap"
                >
                  Access &gt;
                </Link>
              </div>
              <div className="text-lg max-w-[320px]">
                We’ve built a SAAS enabled platform so users can experience the
                full power of our index.
              </div>
            </div>
            <div className="global-power pt-5 border-t mt-10">
              <p>LEGAL</p>
              <div className="flex flex-col text-lg pl-[98px]">
                <a href="/">Modern Slavery Statement</a>
                <a href="/">Cookies</a>
                <a href="/">Privacy and Security Statement</a>
                <a href="/">Terms of Use</a>
                <a href="/">Site Map</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
