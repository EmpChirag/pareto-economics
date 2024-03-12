import React from 'react'
import { Link } from 'react-router-dom'

const Footerdark = ({ demo, contact, ptext = '' }) => {
  return (
    <footer className=" border-white border-t mt-20">
      {demo && (
        <div className="flex max-sm:flex-col max-sm gap-5 items-center justify-between mb-14 md:mb-20">
          <h3 className="text-3xl md:text-5xl">Request a Demo</h3>
          <Link to="/contact-us" className="btn leading-[48px] h-[50px] px-10">
            Start Now
          </Link>
        </div>
      )}
      {contact && (
        <div className="flex max-md:flex-col mb-14 md:mb-20">
          <h3 className="text-3xl md:text-5xl flex-1">Conact Us</h3>
          <div className="flex-[2] flex max-sm:flex-col items-start justify-between mt-8 md:mt-20">
            <p className="text-2xl sm:max-w-[60%] max-sm:mb-5">
              {ptext !== '' && ptext}
              {/* Talk to us about gaining full access to the Global Power
              dashboard. */}
            </p>
            <Link
              to="/contact-us"
              className="btn leading-[48px] h-[50px]  px-10 border-black"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
      <div className="social flex gap-1">
        <a href="youtube.com" target="_blank">
          <img
            src="images/icons/youtube.svg"
            alt="youtube"
            height="40"
            width="40"
            className="h-[40px] w-[40px]"
          />
        </a>
        <a href="x.com" target="_blank">
          <img
            src="images/icons/twitter.svg"
            alt="X"
            height="40"
            width="40"
            className="h-[40px] w-[40px]"
          />
        </a>
        <a href="linkedin.com" target="_blank">
          <img
            src="images/icons/linkedin.svg"
            alt="Linkedin"
            height="40"
            width="40"
            className="h-[40px] w-[40px]"
          />
        </a>
      </div>
      <p className="mt-4 text-lg">
        (c) 2024 Pareto Economics LtD. All rights reserved.
      </p>
      <div className="flex flex-col text-lg gap-4 mt-10 font-semibold">
        <a href="/">LEGAL</a>
        <a href="/">Modern Slavery Statement</a>
        <a href="/">Cookies</a>
        <a href="/">Privacy and Security Statement</a>
        <a href="/">Terms of Use</a>
        <a href="/">Site Map</a>
      </div>
    </footer>
  );
};

export default Footerdark;