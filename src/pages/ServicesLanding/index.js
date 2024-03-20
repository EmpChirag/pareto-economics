import React from "react";
import Header from "../../Layouts/Header";
import { Link } from "react-router-dom";
import Footer from "../../Layouts/Footer";
import SpeakingEngagement from "../../assets/images/ServiceLeanding/Speaking-Engagement.png"
import Research from "../../assets/images/ServiceLeanding/Research.png"
import ExecutiveWorkshops from "../../assets/images/ServiceLeanding/Executive-Workshops.png"
const ServicesLanding = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <section className="mt-10">
        <div className="max-md:flex-col flex justify-between">
          <div className="flex-1 border-b pb-[16px] border-slate-900">
            <h1 className="   flex-1">Services</h1>
            <div className="flex md:justify-end pt-2">
              <h3 className="max-w-[337px]">
                Pareto offers three broad client services
              </h3>
              <br />
            </div>
          </div>
        </div>
        <section className="my-10">
          <div className="max-md:flex-col flex justify-between">
            <div className="flex-1">
              <img
                className="md:max-w-[75%] h-auto"
                src={SpeakingEngagement}
                alt="Speaking Engagement"
              />
              <br />
            </div>
            <div className="flex-1 justify-end  border-b border-slate-900 pb-[28px]">
              <h4 className="font-body text-2xl font-bold">
                Speaking Engagements
              </h4>
              <br />

              <div className="max-lg:flex-col flex justify-end lg:items-center gap-5">
                <p className="max-w-[350px]">
                  Are you an event organiser and want your audience to
                  experience our cutting edge research and insights? Then book
                  our CEO for your next conference or summit.
                </p>

                <div className="flex-1 max-md:mb-4 lg:mt-9 lg:pl-[34px] 2xl:pl-[92px]  md:pl-0">
                  <Link
                    to="/services-speaking"
                    className="btn2 self-end min-w-[115px] max-lg:w-4/5 "
                  >
                    Book
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-10">
          <div className="max-md:flex-col flex justify-between">
            <div className="flex-1">
              <img className="md:max-w-[75%] h-auto" src={Research} />
            </div>
            <br />
            <div className="flex-1 justify-end  border-b border-slate-900 pb-[28px]">
              <h4 className="font-body text-2xl font-bold">Research</h4>
              <br />

              <div className="max-lg:flex-col flex justify-end lg:items-center gap-5">
                <p className="max-w-[350px] ">
                  This offering helps to satisfy clients need for insights into
                  specific issues by providing full service research services
                  which help formulate your research question all the way to
                  post engagement debrief.
                </p>

                <div className="flex-1 max-md:mb-4 lg:mt-9 lg:pl-[34px] 2xl:pl-[92px]  md:pl-0">
                  <Link
                    to="/services-research"
                    className="btn2 self-end min-w-[146px] max-lg:w-4/5"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10">
          <div className="max-md:flex-col flex justify-between">
            <div className="flex-1">
              <img className="md:max-w-[75%] h-auto" src={ExecutiveWorkshops} />
              <br />
            </div>
            <div className="flex-1 justify-end ">
              <h4 className="font-body text-2xl font-bold">
                Executive Workshops
              </h4>
              <br />

              <div className="max-lg:flex-col flex justify-end lg:items-center gap-5">
                <p className="max-w-[350px]">
                  This service gives the opportunity for structured analysis and
                  the free exploration of issues of related interest to clients.{" "}
                </p>

                <div className=" flex-1 lg:mt-9 lg:pl-[34px] 2xl:pl-[92px]  md:pl-0">
                  <Link
                    to="/services-executive-workshops"
                    className="btn2 self-end min-w-[115px] max-lg:w-4/5"
                  >
                    Discover
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer
        contact
        ptext="Get in touch to explore how we can partner today."
      />
    </div>
  );
};
export default ServicesLanding;
