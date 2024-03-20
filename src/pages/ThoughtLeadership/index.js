import React from "react";
import ThoughtLeadershipImg from "../../assets/images/thought-leadership.png";
import HeroSection from "../../components/HeroSection";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import { Link } from "react-router-dom";
import PodcastData from "../../Json/podcast-for-leadership.json";
import Insights from "../../Json/insights.json";
import Keynotes from "../../Json/keynotes.json";
import CommonTab from "../../components/CommonTab";

const ThoughtLeadership = () => {
  const option = [
    { id: "INSIGHTS", value: "INSIGHTS" },
    { id: "PODCAST", value: "PODCAST" },
    { id: "KEYNOTES", value: "KEYNOTES" }
  ];
  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection
        title="Original Thinking, Sharp Analysis"
        image={ThoughtLeadershipImg}
        h1width="max-w-[700px]"
      />

      {/* <div>
        <div className="mt-6">
          <p className="text-4xl md:text-4xl lg:text-6xl">
            Choose Content Type
          </p>
        </div>
        <div className="mt-8 md:-mx-2 grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center flex-wrap gap-4">
            <Link
              to="#"
              className="uppercase hover:bg-black hover:text-white !no-underline leading-[1] border border-black px-2 md:px-4 py-2"
            >
              INSIGHTS
            </Link>
            <Link
              to="#"
              className="uppercase  hover:bg-black hover:text-white !no-underline leading-[1] border border-black px-2 md:px-4 py-2"
            >
              PODCASTS
            </Link>

            <Link
              to="#"
              className="uppercase  hover:bg-black hover:text-white !no-underline leading-[1] border border-black px-2 md:px-4 py-2"
            >
              KEYNOTES
            </Link>
          </div>
          <div className="flex justify-end">
            <div className="md:mx-2 lg:mx-2 w-full md:w-auto">
              <div className="relative">
                <input
                  className="appearance-none border-b text-end pl-10 border-black hover:border-gray-400 transition-colors w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                  id="username"
                  type="text"
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-black hover:text-gray-500"
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
        </div>
      </div> */}
      {/* <CommonTab options={option} title="Choose Content Type" /> */}
      <div className="mt-20 flex max-md:flex-col flex-wrap gap-4 md:gap-8 lg:gap-12 max-md:mt-10">
        {PodcastData.map((podcast, index) => {
          return (
            <div className="md:w-[47%] lg:w-[30%]" key={index}>
              <div className="uppercase text-lg">Podcast</div>
              <a
                target="_blank"
                href={podcast.link}
                className="text-2xl md:text-3xl my-2 md:my-3 inline-block font-title"
              >
                {podcast.title}
              </a>
              {podcast.date && <div className="date text-sm uppercase">{podcast.date}</div>}
            </div>
          );
        })}
        {Insights.map((insight, index) => {
          return (
            <div className="md:w-[47%] lg:w-[30%]" key={index}>
              <div className="uppercase text-lg">Insights</div>
              <a
                target="_blank"
                href={insight.link}
                className="text-2xl md:text-3xl my-2 md:my-3 inline-block font-title"
              >
                {insight.title}
              </a>
              {insight.date && <div className="date text-sm uppercase">{insight.date}</div>}
            </div>
          );
        })}
        {Keynotes.map((keynotes, index) => {
          return (
            <div className="md:w-[47%] lg:w-[30%]" key={index}>
              <div className="uppercase text-lg">Keynotess</div>
              <a
                target="_blank"
                href={keynotes.link}
                className="text-2xl md:text-3xl my-2 md:my-3 inline-block font-title"
              >
                {keynotes.title}
              </a>
              {keynotes.date && <div className="date text-sm uppercase">{keynotes.date}</div>}
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default ThoughtLeadership;
