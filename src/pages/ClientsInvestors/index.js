import React from "react";
import Header from "../../Layouts/Header";
import HeroSection from "../../components/HeroSection";
import homeHer from "../../assets/images/Clients-Investors.png";
import Footer from "../../Layouts/Footer";
import { Link } from 'react-router-dom';

const ClientsInvestors = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection
        className="hero-home"
        title="We help Capital Allocators Manage Risk using our Data-First Methodology"
        image={homeHer}
        h1width={"max-w-[900px]"}
      />
      <section className="mt-0 border-b py-10 border-black">
        <div>
          <div>
            {" "}
            <h3 className=" max-w-[700px]">
              Pareto partners with investors who need clarity when understanding
              the non-financial risk drivers impacting their portfolios.
            </h3>
          </div>
          <div className="flex max-md:flex-col-reverse">
            <div className="w-full relative">
              <Link
                to="/global-power-index"
                className="btn md:absolute bottom-0"
              >
                Explore Index
              </Link>
            </div>
            <div className="w-full max-md:my-5">
              <h2 className="border-b border-black max-w-[450px] pb-4 ">
                Pareto helps with:
              </h2>
              <p className="font-title border-b border-black max-w-[380px] text-2xl py-4">
                Country Risk Analysis
              </p>
              <p className="font-title border-b border-black max-w-[380px] text-2xl py-4">
                M&A Advisory
              </p>
              <p className="font-title border-b border-black max-w-[380px] text-2xl py-4">
                Geopolitical Risk Assessments
              </p>
              <p className="font-title md:border-b border-black max-w-[380px] text-2xl py-4">
                Horizon Scanning & Future Trends Analysis
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 border-b py-10  border-black">
        <div>
          <div className="flex max-md:flex-col">
            <div className="w-full">
              <h2 className=" lg:max-w-[650px] mb-20">Who We Serve</h2>
              <p className="border-b font-title  border-t  border-black max-w-[380px] text-2xl py-4">
                Hedge Funds
              </p>
              <p className="border-b font-title border-black max-w-[380px] text-2xl py-4">
                Sovereign Wealth Funds
              </p>
              <p className="border-b font-title border-black max-w-[380px] text-2xl py-4">
                Commercial Lenders
              </p>
              <p className=" max-w-[380px] text-2xl py-4">Central Banks</p>
            </div>
            <div className="w-full items-end flex">
              <div className="">
                <h3 className="border-b  border-black max-w-[380px] pb-10 mt-10">
                  Institutional investors trust Pareto to deliver
                </h3>
                <p className="border-b font-title border-black max-w-[380px] text-2xl py-4">
                  Asset Management
                </p>
                <p className="border-b font-title border-black max-w-[380px] text-2xl py-4">
                  Family Offices
                </p>
                <p className="border-b font-title border-black max-w-[380px] text-2xl py-4">
                  Private Equity
                </p>
                <p className="font-title max-w-[380px] text-2xl py-4">
                  Multilateral Development Banks
                </p>
              </div>
            </div>
            <div className="clear-both"></div>
          </div>
        </div>
      </section>

      <section className="mt-10  md:pb-10">
        <div className="flex max-lg:gap-10 max-md:flex-col">
          <div className="w-full">
            <h2 className="lg:max-w-[650px]">How We Serve </h2>
          </div>
          <div className="w-full ">
            <div className="">
              <h3 className="  ">Solutions as besh3oke as your portfolios</h3>
              <p className=" pb-8 max-md:mt-5  mt-10 border-b border-black">
                Pareto has developed a suite of services catered to the needs of
                each investor, with various engagement levels to suit each
                situation and circumstance.
              </p>
              <div className="pt-8">
                <p className=" pb-3 font-bold">Speaking Engagements </p>
                <div className=" max-xl:block flex items-center justify-between border-b border-black pb-10 md:pb-6">
                  <p className=" lg:max-w-[400px]">
                    Are you an event organiser and want your audience to
                    experience our cutting edge research and insights? Then book
                    our CEO for your next conference or summit.
                  </p>
                  <Link
                    to="/services-speaking"
                    className="btn2 max-xl:mt-3 max-xl:w-[300px] w-[250px] flex items-center justify-between"
                  >
                    Book
                  </Link>
                </div>
              </div>
              <div className="pt-8">
                <p className=" pb-3 font-bold">Research</p>
                <div className=" max-xl:block flex items-center justify-between border-b border-black pb-10 md:pb-6">
                  <p className=" lg:max-w-[400px]">
                    This offering helps to satisfy clients need for insights
                    into specific issues by providing full service research
                    services which help formulate your research question all the
                    way to post engagement debrief.
                  </p>
                  <Link to='/services-research' className="btn2 max-xl:mt-3 max-xl:w-[300px] w-[250px]   flex items-center justify-between">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="pt-8">
                <p className=" pb-3 font-bold">Executive Workshops</p>
                <div className="max-xl:block  flex items-center justify-between md:border-b border-black  md:pb-6">
                  <p className=" lg:max-w-[400px]">
                    This service gives the opportunity for structured analysis
                    and the free exploration of issues of related interest to
                    clients.
                  </p>
                  <Link to='/services-executive-workshops' className="btn2 max-xl:mt-3 max-xl:w-[300px] w-[250px] flex items-center justify-between">
                    Discover
                  </Link>
                </div>
              </div>
            </div>
            <div className="clear-both"></div>
          </div>
        </div>
      </section>

      <Footer contact />
    </div>
  );
};
export default ClientsInvestors;
