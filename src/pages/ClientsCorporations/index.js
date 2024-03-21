import React from "react";
import Header from "../../Layouts/Header";
import HeroSection from "../../components/HeroSection";
import Footer from "../../Layouts/Footer";
import { Link } from 'react-router-dom';

const ClientsCorporations = () => {
  return (
    <div className="container mx-auto pb-[200px]">
      <Header />
      <HeroSection
        className="hero-home"
        title="We Partner with Global Stakeholders to Guide Business Strategy"
        image="/images/ClientsCorporations/clients_corporations.png"
        h1width="max-w-[950px]"
      />
      <section className="mt-10 pb-10 border-b   border-black">
        <div className="flex max-md:flex-col">
          <h2 className="flex-1 lg:max-w-[650px]">
            Long term thinking done right
          </h2>

          <div className="flex-1 max-md:mt-5">
            <h3>
              We use a data driven approach to inform business strategy when it
              matters most.
            </h3>
            <p className="mt-5 md:mt-10">
              Today’s business leaders face daily challenges and crossroads
              where critical decision making about how to grow businesses,
              define future investment allocations, and enter or leave markets
              happen regularly. <span className="block h-6" />
              Using our data driven approach, we equip clients with the
              knowledge they need to take their businesses to new heights.
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex  max-md:block">
          <h2 className="flex-1 lg:max-w-[650px]">How We Serve</h2>

          <div className="flex-1 max-md:mt-5">
            <div>
              <h3>No two clients are the same, nor are our solutions</h3>
              <p className="pb-8 max-md:mt-5  mt-10 border-b   border-black">
                Pareto has developed a suite of services catered to the needs of
                our clients, with various engagement levels to suit each
                situation and circumstance.
              </p>
              <div className="pt-8">
                <h3 className="font-body text-2xl font-bold pb-3">
                  Speaking Engagements
                </h3>
                <div className=" max-xl:block flex items-center justify-between border-b   border-black pb-6">
                  <p className="lg:max-w-[400px]">
                    Are you an event organiser and want your audience to
                    experience our cutting edge research and insights? Then book
                    our CEO for your next conference or summit.
                  </p>
                  <Link
                    to="/services-speaking"
                    className="btn2 max-xl:mt-3 max-xl:w-[240px] w-[250px] max-md:mb-4 flex items-center justify-between"
                  >
                    Book
                  </Link>
                </div>
              </div>
              <div className="pt-8">
                <h3 className="font-body text-2xl font-bold pb-3">Research</h3>
                <div className=" max-xl:block flex items-center justify-between border-b   border-black pb-6">
                  <p className="lg:max-w-[400px]">
                    This offering helps to satisfy clients need for insights
                    into specific issues by providing full service research
                    services which help formulate your research question all the
                    way to post engagement debrief.
                  </p>
                  <Link
                    to="/services-research"
                    className="btn2 max-xl:mt-3 max-xl:w-[240px] w-[250px] max-md:mb-4 flex items-center justify-between"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="pt-8">
                <h3 className="font-body text-2xl font-bold pb-3">
                  Executive Workshops
                </h3>
                <div className="max-xl:block  flex items-center justify-between md:border-b   border-black pb-6">
                  <p className="lg:max-w-[400px]">
                    This service gives the opportunity for structured analysis
                    and the free exploration of issues of related interest to
                    clients.
                  </p>
                  <Link
                    to="/services-executive-workshops"
                    className="btn2 max-xl:mt-3 max-xl:w-[240px] w-[250px]  flex items-center justify-between"
                  >
                    Discover
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 md:mt-10 pt-10 border-t  border-black">
        <div className="flex flex-1 max-lg:block">
          <h2 className=" flex-1 lg:max-w-[650px] mb-5">Who We Serve</h2>

          <div className="flex-1 ">
            <div>
              <h3>
                We believe current and future global dynamics will impact every
                industry around the world.
              </h3>
              <p className="py-7">
                Our message of challenging status quo thinking resonates with
                industry leaders from varies sectors who believe a new approach
                is need to meet the challenges of a new world, including:
              </p>

              <div className="flex gap-10 md:gap-20 max-sm:block">
                <div className="w-full">
                  <div className=" py-3 border-b border-t border-black">
                    Telecoms
                  </div>
                  <div className=" py-3 border-black">Legal</div>
                  <div className=" py-3 border-t   border-black">
                    Technology
                  </div>
                  <div className=" py-3  border-b border-t border-black">
                    Insurance
                  </div>
                </div>
                <div className="w-full">
                  <div className="  py-3 sm:border-t border-black">Energy</div>
                  <div className="  py-3 border-t border-black">
                    Natural Resources
                  </div>
                  <div className="  py-3 border-t border-black">Defense </div>
                  <div className="  py-3 sm:border-b border-t border-black">
                    Financial Services
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer contact />
    </div>
  );
};

export default ClientsCorporations;
