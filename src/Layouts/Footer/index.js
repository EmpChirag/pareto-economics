import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({ demo, contact, ptext,dark }) => {
  return (
    <footer
      className={`pt-[50px] md:pt-24 ${
        dark ? "border-white" : "border-black"
      } border-t mt-[50px] md:mt-24`}
    >
      {demo && (
        <div className="flex max-sm:flex-col max-sm gap-5 items-center justify-between mb-14 md:mb-20">
          <h2 className="">Request a Demo</h2>
          <Link to="/contact-us" className="btn leading-[48px] h-[50px] px-10">
            Start Now
          </Link>
        </div>
      )}
      {contact && (
        <div className="flex max-md:flex-col mb-14 md:mb-20">
          <h2 className=" flex-1 mb-3">Conact Us</h2>
          <div className="flex-[2] flex max-sm:flex-col items-start justify-between md:mt-20">
            <p className="text-2xl sm:max-w-[60%] max-sm:mb-5">
              {ptext && ptext}
              {/* Talk to us about gaining full access to the Global Power
              dashboard. */}
            </p>
            <Link
              to="/contact-us"
              className={`btn min-w-[210px] leading-[48px] h-[50px] px-10 text-black ${
                dark && "btn-invert"
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
      <div className="social flex gap-1">
        <a
          href="https://www.youtube.com/channel/UCByNVk6Z4YRTLMKNyhu3bBw"
          target="_blank"
        >
          <img
            src="/images/icons/youtube.svg"
            alt="youtube"
            height="40"
            width="40"
            className="h-[40px] w-[40px]"
          />
        </a>
        <a href="https://twitter.com/ParetoEconomics" target="_blank">
          <img
            src="/images/icons/twitter.svg"
            alt="X"
            height="40"
            width="40"
            className="h-[40px] w-[40px]"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/paretoeconomics/"
          target="_blank"
        >
          <img
            src="/images/icons/linkedin.svg"
            alt="Linkedin"
            height="40"
            width="40"
            className="h-[40px] w-[40px]"
          />
        </a>
      </div>
      <p className="mt-4 text-base ">
        (c) 2024 Pareto Economics LtD. All rights reserved.
      </p>
      <div className="flex flex-col text-lg gap-2 mt-10  pb-10">
        <p>LEGAL</p>
        <a href="/modern-slavery-statement">Modern Slavery Statement</a>
        <a href="/cookies">Cookies</a>
        <a href="/privacy-security-statement">Privacy and Security Statement</a>
        <a href="/terms-of-use">Terms of Use</a>
        <a href="/sitemap">Site Map</a>
      </div>
    </footer>
  );
};

export default Footer