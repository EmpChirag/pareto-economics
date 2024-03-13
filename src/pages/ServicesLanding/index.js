import React from "react";
import Header from "../../Layouts/Header";
import { Link } from "react-router-dom";
import Footer from "../../Layouts/Footer";
const ServicesLanding = () => {
  return (
    <div className="container mx-auto pb-[200px]">
      <Header />
      <section>
        <div className="max-md:flex-col flex justify-between">
          <div className="flex-1 border-b-2 pb-[16px] border-slate-900">
            <h1 className="text-4xl leading-[1.2] lg:text-6xl font-semibold  flex-1">
              Services
            </h1>
            <div className="flex justify-end  col-span-1  pt-[8px]">
              <h2 className="text-3xl max-w-[337px]">
                Pareto offers three broad client services
              </h2>
              <br />
            </div>
          </div>
        </div>
        <section>
          <div className="max-md:flex-col flex justify-between">
            <div className="flex-1">
              <img
                className="max-w-[70%] h-auto"
                src="images/ServiceLeanding/Speaking-Engagement.png"
              />
            </div>
            <div className="flex-1 justify-end col-span-1 border-b border-slate-900 pb-[28px]">
              <h4 className="text-3xl">Speaking Engagements</h4>
              <br />

              <div className="flex max-md:flex-col justify-end col-span-1">
                <p className="text-xl max-w-[300px]">
                  Are you an event organiser and want your audience to
                  experience our cutting edge research and insights? Then book
                  our CEO for your next conference or summit.
                </p>

                <div className="col-span-1 flex-1 mt-9">
                  <Link to="" className="btn3  w-[110px] self-end ">
                    Book
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-md:flex-col flex justify-between">
            <div className="flex-1">
              <img
                className="max-w-[70%] h-auto"
                src="images/ServiceLeanding/Research.png"
              />
            </div>
            <div className="flex-1 justify-end col-span-1 border-b border-slate-900 pb-[28px]">
              <h4 className="text-3xl">Research</h4>
              <br />

              <div className="flex max-md:flex-col justify-end col-span-1">
                <p className="text-xl max-w-[274px]">
                  This offering helps to satisfy clients need for insights into
                  specific issues by providing full service research services
                  which help formulate your research question all the way to
                  post engagement debrief.
                </p>

                <div className="col-span-1 flex-1 mt-9">
                  <Link to="" className="btn3 w-full max-w-[160px] self-end">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="max-md:flex-col flex justify-between  pb-[38px]">
            <div className="flex-1">
              <img
                className="max-w-[70%] h-auto"
                src="images/ServiceLeanding/Executive-Workshops.png"
              />
            </div>
            <div className="flex-1 justify-end col-span-1">
              <h4 className="text-3xl">Executive Workshops</h4>
              <br />

              <div className="flex max-md:flex-col justify-end col-span-1">
                <p className="text-xl max-w-[274px]">
                  This service gives the opportunity for structured analysis and
                  the free exploration of issues of related interest to clients.{" "}
                </p>

                <div className="col-span-1 flex-1 mt-9">
                  <Link to="" className="btn3 w-full max-w-[160px] self-end">
                    Discover
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
       </section>
      <Footer contact/>
    </div>
  );
};
export default ServicesLanding;
