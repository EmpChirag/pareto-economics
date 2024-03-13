import React from "react";
import ThoughtLeadershipImg from "../../assets/images/thought-leadership.png";
import HeroSection from "../../components/HeroSection";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import { Link } from "react-router-dom";

const ThoughtLeadership = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection
        title="Original Thinking, Sharp Analysis"
        image={ThoughtLeadershipImg}
      />

      <div>
        <div className="mt-6">
          <p className="text-4xl md:text-4xl lg:text-6xl">
            Choose Content Type
          </p>
        </div>
        <div className="mt-8 md:-mx-2 grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-wrap gap-4">
            <Link
              to="#"
              className="inline-block leading-[1] uppercase border border-black px-4 py-2"
            >
              INSIGHTS
            </Link>
            <Link
              to="#"
              className="inline-block leading-[1] uppercase border border-black px-4 py-2"
            >
              PODCASTS
            </Link>

            <Link
              to="#"
              className="inline-block leading-[1] uppercase border border-black px-4 py-2"
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
      </div>

      <div className="mt-8 grid gap-10 md:grid-cols-3">
        <div className="" id="insights">
          <div className="uppercase font-extra text-xl md:text-2xl">
            Insights
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl my-4 md:my-5">
            How is M&A impacted by China’s ‘Dual Circulation’ Development
            Strategy?
          </h3>
          <p className="text-base md:text-lg">
            “We focus on three key bilateral relationships, including; US-China,
            EU-China and UK-China”
          </p>
        </div>
        <div className="" id="podcasts">
          <div className="uppercase font-extra text-xl md:text-2xl">
            Podcasts
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl my-4 md:my-5">
            What Drives Political Action in the Real World | CEO Munich Security
            Conference, Benedikt Franke
          </h3>
          <p className="text-base md:text-lg">
            This is a masterclass on the nature of politics and how to better
            understand your world.
          </p>
        </div>
        <div className="" id="kynotes">
          <div className="uppercase font-extra text-xl md:text-2xl">
            Keynote
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl my-4 md:my-5">
            A Beginner’s Guide to Geopolitical Risk, and How it’s Impacting
            Fintech
          </h3>
          <p className="text-base md:text-lg">
            Watch Klisman Murati, CEO of Pareto Economics deliver the keynote
            address at the annual Telia DAY ONE conference to an assembly of
            business leaders in the telecoms space.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThoughtLeadership;
