import React from "react";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitType from 'split-type';

const GlobalPowerIndex = () => {
  //  useGSAP(() => {
  //    setTimeout(() => {
  //      const animH1 = gsap.utils.toArray("h1");
  //      animH1.forEach((box) => {
  //        const splith1 = new SplitType(box, {
  //          types: "words, chars,lines"
  //        });
  //        gsap.from(splith1.chars, {
  //          display: "none",
  //          stagger: 0.05
  //        });
  //      });
  //      const animH2 = document.querySelectorAll("h2");
  //      animH2.forEach((box) => {
  //        const splith2 = new SplitType(box, {
  //          types: "words, chars,lines"
  //        });
  //        gsap.from(splith2.chars, {
  //          display: "none",
  //          stagger: 0.05,
  //          scrollTrigger: {
  //            trigger: box,
  //            start: "top center"
  //          }
  //        });
  //      });
  //    }, 2000);
  //  });
  return (
    <div className="bg-[#1B2029] text-white ">
      <div className="container mx-auto">
        <Header invert />
        <section className="mt-10 pb-10 border-white border-b ">
          <div className="flex max-md:flex-col gap-5 md:items-center justify-between ">
            <h1 className="max-w-[500px]">Global Power Index</h1>
            <h4 className="w-[430px] text-left text-5xl">
              Software enabled Macro forecasting
            </h4>
          </div>
          <div className="w-full mt-10">
            <img
              src="/images/GlobalPowerIndex/globalimg.png"
              className="w-full"
              height="1480"
              width="492"
              alt="Global Power Index"
            />
          </div>
        </section>
        <section className="pb-[50px] md:pb-24 w-full flex max-md:block justify-between border-b border-white gap-10 ">
          <div className="w-full">
            <h2 className="sticky top-5 lg:max-w-[650px] ">
              Empowering Informed Global Strategies
            </h2>
          </div>
          <div className="w-full">
            <h3 className="mt-[16px]">
              Pareto’s GPI is the most comprehensive tool designed to provide
              global stakeholders with invaluable insights into the intricate
              dynamics of global power, thereby empowering informed
              decision-making across industries and regions.
            </h3>
            <p className="py-10">
              Through our dashboard, comparative analysis and decision making
              are sharpened.
              <span className="h-6 block"></span>
              With access to over 13,500 data points, spanning 194 countries
              across 10 years, coupled with real-time macro analysis, and access
              to our experts on demand, investors, corporations, and policy
              makers can make informed strategic decisions, assess geopolitical
              risks, and identify market opportunities with unparalleled
              accuracy.
            </p>
            <a
              href="https://globalpowerindex.com/"
              target="_blank"
              className="btn leading-[48px] h-[50px] text-black mt-5 btn-invert"
            >
              Access Dashboard
            </a>
          </div>
        </section>
        <section className="pb-[50px] md:pb-24 border-b border-white ">
          <div className="flex items-center justify-between  max-md:block gap-10">
            <div className="w-full">
              <h2 className="lg:max-w-[650px] ">We Map the World</h2>
              <div className="mt-10 w-full items-center lg:max-w-[650px]">
                <img
                  src="/images/GlobalPowerIndex/map.png"
                  className="w-full"
                  alt="map"
                />
              </div>
            </div>
            <div className="w-full">
              <h3 className=" lg:max-w-[700px] ">
                We score 194 countries to give a truly global picture of
                changing power dynamics. These countries are grouped into 7
                regions which allows for segmented analysis and tailored
                comparisons for users.
              </h3>
            </div>
          </div>
        </section>
        <section className="pb-[50px] md:pb-24 flex gap-10  max-md:block  border-b  border-white ">
          <div className="w-full lg:max-w-[650px]">
            <h2 className="pb-4">We Lead with an Intelligent Framework</h2>
            <div className="my-5 ">
              <p className="border-b lg:w-[50%] font-title w-[80%] mb-4 pb-3 text-2xl border-white">
                Active Consumer Market
              </p>

              <p className="border-b lg:w-[50%] font-title w-[80%] mb-4 pb-3 text-2xl border-white">
                Military Balance
              </p>

              <p className="border-b lg:w-[50%] font-title w-[80%] mb-4 pb-3 text-2xl border-white">
                Technological leadership
              </p>

              <p className="border-b lg:w-[50%] font-title w-[80%] mb-4 pb-3 text-2xl border-white">
                Systemically Important Commodities
              </p>

              <p className="border-b lg:w-[50%] font-title w-[80%] mb-4 pb-3 text-2xl border-white">
                Geo-Strategic Positioning
              </p>
            </div>
            <div>
              <p className="text-xl border-b lg:w-[50%] font-title w-[80%] mb-4 pb-3  border-white">
                Financial Strength
              </p>
            </div>
            <p className="font-title pt-5">
              Each of these Sub-Indices are composed of themes which best
              reflect each respective sub-index.
              <span className="h-6 block"></span>
              And these themes are composed of a number of variables to give us
              a robust and reliable score for each country.
            </p>
          </div>
          <div className="max-md:mt-10 w-full">
            <div className="w-full items-center justify-center lg:max-w-[700px] float-right">
              <p className="text-3xl pb-5 ">
                The GPI is a composite index, integrating six proprietary sub
                indices which reflect an important component of power.
              </p>
              <div className="flex items-center justify-center max-md:mt-5">
                <img
                  src="/images/GlobalPowerIndex/red_dot.png"
                  className="w-full lg:max-w-[650px]"
                />
              </div>
            </div>
            <div className="clear-both"></div>
          </div>
        </section>
        <section className="pb-[50px] md:pb-24 border-b border-white flex max-md:block gap-10">
          <div className="w-full">
            <h2 className="lg:max-w-[650px] pb-4">Analytics + Analysis</h2>
            <a
              href="https://globalpowerindex.com/"
              target="_blank"
              className="btn leading-[48px] h-[50px] text-black mt-5 md:mt-10 btn-invert"
            >
              Access Insights
            </a>
          </div>
          <div className="max-md:mt-10 w-full">
            <h3 className="pb-5">
              We harness our trend data to craft dynamic and timely reports for
              you to read.
            </h3>
            <p className="mt-5">
              Subscribed members receive full access to our insights portal
              which is updated with timely and relevant analysis on the
              countries, regions and indices you care about.
            </p>
          </div>
        </section>
        <section className="mt-10 md:mt-20 md:pb-10 border-white">
          <div className="flex items-center justify-center text-center  ">
            <div className="max-w-[700px] font-title">
              <h3 className="flex items-start">
                <img
                  src="/images/GlobalPowerIndex/quote.svg"
                  alt="quote"
                  className="w-[20px] md:w-[30px] rotate-[180deg]"
                />
                Looking at the complexities of today’s world, how power operates
                is key. I was therefore interested to see that this is also the
                starting point of Pareto Economics’ approach to understanding
                global issues, and it underpins its Global Power Index.
                <img
                  src="/images/GlobalPowerIndex/quote.svg"
                  alt="quote"
                  className="w-[20px] md:w-[30px]"
                />
              </h3>

              <p className="mt-5 md:mt-10">
                Cho Khong, Chief Political Analyst | Shell International
              </p>
            </div>
          </div>
        </section>
        <Footer
          dark
          contact
          ptext="Talk to us about gaining full access to the Global Power dashboard."
        />
      </div>
    </div>
  );
};

export default GlobalPowerIndex;
