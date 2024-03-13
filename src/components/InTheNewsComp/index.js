import React from "react";
import { Link } from "react-router-dom";

const InTheNewsComp = () => {
  return (
    <section>
      <h2 className="text-3xl leading-[1.2] lg:text-6xl lg:leading-[1.3]">
        In The News
      </h2>
      <div className="my-6 md:my-16 max-w-[700px] text-2xl md:ml-[80px]">
        Pareto Economics regularly lends its voice to global media outlets whose
        audience seek to navigate the complexities of today's world,
        encompassing geopolitics, economics, trade, and society.
      </div>
      <div className="flex max-md:flex-col gap-10 md:gap-14 max-md:mt-10">
        <div className="">
          <div className="uppercase font-extra text-lg md:text-2xl">INTERVIEW | CGTN</div>
          <a
            href="https://youtu.be/5DJIgMJt_pw?si=P8eSllvspG0SIMdJ&t=173"
            className="text-2xl md:text-3xl my-4 md:my-5 inline-block"
          >
            Biden Travels to UK to launch ‘Atlantic Declaration’
          </a>
        </div>
        <div className="">
          <div className="uppercase font-extra text-lg md:text-2xl">
            ARTICLE | M&A Community
          </div>
          <a
            href="https://mnacommunity.com/insights/how-to-better-evaluate-geopolitical-risk/"
            className="text-2xl md:text-3xl my-4 md:my-5 inline-block"
          >
            How to Better Evaluate Geopolitical Risk
          </a>
        </div>
        <div className="">
          <div className="uppercase font-extra text-lg md:text-2xl">INTERVIEW | CGTN</div>
          <a
            href="https://www.youtube.com/watch?v=Na8-qANEQWI"
            className="text-2xl md:text-3xl my-4 md:my-5 inline-block"
          >
            Middle East Ties after Qatar’s Emir Visits the White House
          </a>
        </div>
      </div>
      <Link to="/" className="btn2 max-w-[600px] mt-10">
        See More
      </Link>
    </section>
  );
};

export default InTheNewsComp;
