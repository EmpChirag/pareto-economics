import React from "react";
import Header from "../../Layouts/Header";
import HeroSection from "../../components/HeroSection";
import Footer from "../../Layouts/Footer";
import Footerdark from "../../Layouts/Footerdark";

const ClientsCorporations = () => {
  return (
    <div className="container mx-auto pb-[200px]">
      <Header />
      <HeroSection
        className="hero-home"
        title="We Partner with Global Stakeholders to Guide Business Strategy"
        image="images/ClientsCorporations/Clients_Corporations.png"
        h1width="max-w-[700px]"
      />
      <section className="mt-10 pb-10 border-b-2   border-[#000000]">
        <div className="flex  max-md:block">
          <div className="w-full">
            <h2 className=" text-3xl leading-[1.2] lg:text-6xl lg:leading-[1.3] lg:max-w-[650px]">
              Long term thinking done right
            </h2>
          </div>
          <div className="w-full ">
            <div className="float-right max-md:float-none">
              <p className=" float-right text-3xl ">
                We use a data driven approach to inform business strategy when
                it matters most.
              </p>
              <p className="text-xl pb-7 max-md:mt-5  mt-20">
                1We use a first principles thinking approach when helping our
                clients navigate the geopolitical, economic, social and
              </p>
              <p className="text-xl">
                We use a first principles thinking approach when helping our
                clients navigate the geopolitical, economic, social and
                technological changes they are experiencing so they can take
                action with more confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="flex  max-md:block">
          <div className="w-full">
            <h2 className=" text-3xl leading-[1.2] lg:text-6xl lg:leading-[1.3] lg:max-w-[650px]">
              How We Serve
            </h2>
          </div>
          <div className="w-full ">
            <div className="float-right max-md:float-none">
              <p className="  text-3xl ">
                No two clients are the same, nor are our solutions
              </p>
              <p className="text-xl pb-8 max-md:mt-5  mt-10 border-b-2   border-[#000000]">
                Pareto has developed a suite of services catered to the needs of
                our clients, with various engagement levels to suit each
                situation and circumstance.
              </p>
              <div className="pt-8">
                <p className=" pb-3 text-3xl ">Speaking Engagements</p>
                <div className=" max-xl:block flex items-center justify-between border-b-2   border-[#000000] pb-6">
                  <p className="text-xl lg:max-w-[400px]">
                    Are you an event organiser and want your audience to
                    experience our cutting edge research and insights? Then book
                    our CEO for your next conference or summit.
                  </p>
                  <button className="btn2 max-xl:mt-3 max-xl:w-[300px] w-[250px]   flex items-center justify-between">
                    Book
                  </button>
                </div>
              </div>
              <div className="pt-8">
                <p className=" pb-3 text-3xl ">Research</p>
                <div className=" max-xl:block flex items-center justify-between border-b-2   border-[#000000] pb-6">
                  <p className="text-xl lg:max-w-[400px]">
                    This offering helps to satisfy clients need for insights
                    into specific issues by providing full service research
                    services which help formulate your research question all the
                    way to post engagement debrief.
                  </p>
                  <button className="btn2 max-xl:mt-3 max-xl:w-[300px] w-[250px]   flex items-center justify-between">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="pt-8">
                <p className=" pb-3 text-3xl ">Executive Workshops</p>
                <div className="max-xl:block  flex items-center justify-between border-b-2   border-[#000000] pb-6">
                  <p className="text-xl lg:max-w-[400px]">
                    This service gives the opportunity for structured analysis
                    and the free exploration of issues of related interest to
                    clients.
                  </p>
                  <button className="btn2 max-xl:mt-3 max-xl:w-[300px] w-[250px]  flex items-center justify-between">
                    Discover
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10 py-10 border-b-2 border-t-2   border-[#000000]">
        <div className="flex  max-md:block">
          <div className="w-full">
            <h2 className=" text-3xl leading-[1.2] lg:text-6xl lg:leading-[1.3] lg:max-w-[650px]">
              Who We Serve
            </h2>
          </div>
          <div className="w-full ">
            <div className="float-right max-md:float-none">
              <p className=" float-right text-3xl ">
                We believe current and future global dynamics will impact every
                industry around the world.
              </p>
              <p className="text-xl py-7 max-md:mt-5  mt-20">
                Our message of challenging status quo thinking resonates with
                industry leaders from varies sectors who believe a new approach
                is need to meet the challenges of a new world, including:
              </p>

              <div className="flex">
                <div className="w-full">
                  <div className="  w-[150px] py-3  border-b-2 border-t-2   border-[#000000]">
                    Telecoms
                  </div>
                  <div className="  w-[150px] py-3  border-[#000000]">
                    Legal
                  </div>
                  <div className="  w-[150px] py-3  border-t-2   border-[#000000]">
                    Technology
                  </div>
                  <div className="  w-[150px] py-3 border-b-2 border-t-2   border-[#000000]">
                    Insurance
                  </div>
                </div>
                <div className="w-full">
                  <div className=" w-[150px] py-3   border-t-2   border-[#000000]">
                    Energy
                  </div>
                  <div className=" w-[150px] py-3   border-t-2   border-[#000000]">
                    Natural Resources
                  </div>
                  <div className=" w-[150px] py-3   border-t-2   border-[#000000]">
                    Defense{" "}
                  </div>
                  <div className=" w-[150px] py-3   border-b-2 border-t-2   border-[#000000]">
                    Financial Services
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footerdark contact />
    </div>
  );
};

export default ClientsCorporations;