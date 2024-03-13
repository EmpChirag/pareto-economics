import React from "react";
import Header from "../../Layouts/Header";

import Hero from "../../assets/images/GlobalPowerIndex/globalimg.png";
import Red from "../../assets/images/GlobalPowerIndex/Red_Dot.png";
import Map from "../../assets/images/GlobalPowerIndex/Map.png";
import Quote from "../../assets/images/GlobalPowerIndex/quote.svg";
import Footer from '../../Layouts/Footer';
const GlobalPowerIndex = () => {
  return (
    <div className="bg-[#1C1A1C]  text-white ">
      <div className="container mx-auto">
        <Header invert />
        <section className="mt-10 pb-10 border-white border-b ">
          <div className="flex max-md:flex-col gap-5 md:items-center justify-between ">
            <h1 className="text-4xl leading-[1.2] lg:text-6xl font-semibold  max-w-[500px]">
              Global Power Index
            </h1>
            <p className="text-3xl max-w-[300px] ">
              Software enabled Macro forecasting
            </p>
          </div>
          <div className="w-full mt-10">
            <img
              src={Hero}
              className="w-full"
              height="1480"
              width="492"
              alt="Global Power Index"
            />
          </div>
        </section>
        <section className="pb-[50px] md:pb-24 w-full flex max-md:block justify-between border-b border-[#EDE9DF] gap-10 ">
          <div className="w-full">
            <h2 className="sticky top-5 text-3xl leading-[1.2] lg:text-6xl lg:leading-[1.3] lg:max-w-[650px] ">
              Empowering Informed Global Strategies
            </h2>
          </div>
          <div className="w-full">
            <p className="text-3xl">
              Pareto’s GPI is the most comprehensive tool designed to provide
              global stakeholders with invaluable insights into the intricate
              dynamics of global power, thereby empowering informed
              decision-making across industries and regions.
            </p>
            <p className="text-xl  py-10">
              Through our dashboard, comparative analysis and decision making
              are sharpened.
            </p>
            <p className="text-xl pt-4">
              With access to over 13,500 data points, spanning 194 countries
              across 10 years, coupled with real-time macro analysis, and access
              to our experts on demand, investors, corporations, and policy
              makers can make informed strategic decisions, assess geopolitical
              risks, and identify market opportunities with unparalleled
              accuracy.
            </p>
            <a href="#" className="btn mt-5 md:mt-10 invert">
              Access Dashboard
            </a>
          </div>
        </section>
        <section className="pb-[50px] md:pb-24 border-b border-[#EDE9DF] ">
          <div className="flex items-center justify-between  max-md:block gap-10">
            <div className="w-full">
              <h2 className="text-3xl leading-[1.2] lg:text-6xl lg:leading-[1.3] lg:max-w-[650px] ">
                We Map the World
              </h2>
              <div className="mt-10 w-full items-center lg:max-w-[650px]">
                <img src={Map} className="w-full" alt="map" />
              </div>
            </div>
            <div className="w-full">
              <p className="max-md:mt-5 text-3xl lg:max-w-[700px] float-right">
                We score 194 countries to give a truly global picture of
                changing power dynamics. These countries are grouped into 7
                regions which allows for segmented analysis and tailored
                comparisons for users.
              </p>
              <div className="clear-both"></div>
            </div>
          </div>
        </section>
        <section className="pb-[50px] md:pb-24  flex gap-10  max-md:block  border-b  border-[#EDE9DF] ">
          <div className="w-full">
            <div className="w-full lg:max-w-[650px]">
              <h2 className="  text-3xl leading-[1.2] lg:text-6xl lg:leading-[1.3]  pb-4">
                We Lead with an Intelligent Framework
              </h2>
              <div>
                <p className="border-b lg:w-[50%] w-[80%] mb-4 pb-1 text-xl border-[#EDE9DF]">
                  Active Consumer Market
                </p>
              </div>
              <div>
                <p className="border-b lg:w-[50%] w-[80%] mb-4 pb-1 text-xl border-[#EDE9DF]">
                  Military Balance
                </p>
              </div>
              <div>
                <p className="border-b lg:w-[50%] w-[80%] mb-4 pb-1 text-xl border-[#EDE9DF]">
                  Technological leadership
                </p>
              </div>
              <div>
                <p className="border-b lg:w-[50%] w-[80%] mb-4 pb-1 text-xl border-[#EDE9DF]">
                  Systemically Important Commodities
                </p>
              </div>
              <div>
                <p className="border-b lg:w-[50%] w-[80%] mb-4 pb-1 text-xl border-[#EDE9DF]">
                  Geo-Strategic Positioning
                </p>
              </div>
              <div>
                <p className="text-xl">Financial Strength</p>
              </div>
              <p className="text-xl pt-5">
                Each of these Sub-Indices are composed of themes which best
                reflect each respective sub-index.
              </p>
              <p className="text-xl pt-3">
                And these themes are composed of a number of variables to give
                us a robust and reliable score for each country.
              </p>
            </div>
          </div>
          <div className="max-md:mt-10 w-full">
            <div className="w-full items-center justify-center lg:max-w-[700px] float-right">
              <p className="text-3xl pb-5 ">
                The GPI is a composite index, integrating six proprietary sub
                indices which reflect an important component of power.
              </p>
              <div className="flex items-center justify-center max-md:mt-5">
                <img src={Red} className="w-full lg:max-w-[650px]" />
              </div>
            </div>
            <div className='clear-both'></div>
          </div>
        </section>
        <section className="pb-[50px] md:pb-24 border-b border-[#EDE9DF] flex max-md:block gap-10">
          <div className="w-full">
            <h2 className="  text-3xl leading-[1.2] lg:text-6xl lg:leading-[1.3] lg:max-w-[650px] pb-4">
              Analytics + Analysis
            </h2>
            <a href="#" className="btn mt-5 md:mt-10 invert">
              Access Dashboard
            </a>
          </div>
          <div className="max-md:mt-10 w-full">
            <p className="text-3xl pb-5">
              We harness our trend data to craft dynamic and timely reports for
              you to read.
            </p>
            <p className="text-xl">
              Subscribed members receive full access to our insights portal
              which is updated with timely and relevant analysis on the
              countries, regions and indices you care about.
            </p>
          </div>
        </section>
        <section className="mt-10 md:mt-20 md:pb-10 border-[#EDE9DF]">
          <div className="flex items-center justify-center text-center  ">
            <div className="md:w-[50%]">
              <p className="text-xl md:text-3xl flex items-start">
                <img
                  src={Quote}
                  alt="quote"
                  className="w-[20px] md:w-[30px] rotate-[180deg]"
                />
                Looking at the complexities of today’s world, how power operates
                is key. I was therefore interested to see that this is also the
                starting point of Pareto Economics’ approach to understanding
                global issues, and it underpins its Global Power Index.
                <img src={Quote} alt="quote" className="w-[20px] md:w-[30px]" />
              </p>

              <p className="pt-4">
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
