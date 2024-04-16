import React from "react";
import Header from "../../Layouts/Header";
import HeroSection from "../../components/HeroSection";
import { Link } from "react-router-dom";
import Footer from "../../Layouts/Footer";
import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  useGSAP(() => {
    // setTimeout(() => {
    //   const animH1 = gsap.utils.toArray("h1");
    //   animH1.forEach((box) => {
    //     const splith1 = new SplitType(box, {
    //       types: "words, chars,lines"
    //     });
    //     gsap.from(splith1.chars, {
    //       display: "none",
    //       stagger: 0.05
    //     });
    //   });
    //   const animH2 = document.querySelectorAll("h2");
    //   animH2.forEach((box) => {
    //     const splith2 = new SplitType(box, {
    //       types: "words, chars,lines"
    //     });
    //     gsap.from(splith2.chars, {
    //       display: "none",
    //       stagger: 0.05,
    //       scrollTrigger: {
    //         trigger: box,
    //         start: "top center"
    //       }
    //     });
    //   });
    // }, 2000);
  });
  return (
    <div className="container mx-auto">
    <Helmet>
                
          <title>Research Consultancy in London, UK | Pareto Economics</title>
          <meta name='description' content='Pareto Economics Ltd is a research consultancy in London, UK. We provide a combination of enterprise SAAS products as well as research and consulting services to clients across various sectors.' />
          <link rel="canonical" href="https://www.pareto-economics.com/about-us" />
          <meta name="robots" content="follow, index, all" />
            </Helmet>
      <Header />
      <HeroSection
        className="hero-home"   
        title="Our Core"
        image="/images/aboutus/our-core.png"
      />

      <section className="mt-10">
        <h2 className="lg:max-w-[690px] ">
          How Will the World be Changed and Challenged in the next 100 years?
        </h2>
        <div className="border-b border-slate-900  py-5 md:py-10">
          <div className="text-xl max-w-[700px] py-3">
            Never before has there been a greater demand for unwavering
            long-term vision and decisive action.
            <div className="h-6"></div>
            Yet, amidst today's unprecedented complexities and the proliferation
            of questionable information, achieving such clarity in understanding
            and action becomes increasingly challenging.
            <div className="h-6"></div>
            Solving this required a radical paradigm shift coupled with the
            application of quantitative metrics.
            <div className="h-6"></div>
            This combination would not come from the established offering. It
            would take a different kind of company to build it. That’s why we
            founded Pareto Economics.
          </div>
        </div>
      </section>
      <div>
        <section className="my-10">
          <h2>What we do</h2>
          <div className="grid md:grid-cols-2 pt-8 border-b border-slate-900 pb-[22px]">
            <div className="col-span-1">
              <h3 className="max-w-[320px] ">
                We forecast country growth trends using software enabled
                insights
              </h3>
            </div>
            <div className="col-span-1">
              <h3 className="text-2xl max-w-[472px]">
                We’re focused on creating the most comprehensive tool on country
                development trends for people and organisations who need data
                backed macro insights to make more informed strategy decisions.{" "}
              </h3>
              <div className="lg:grid lg:grid-cols-5 gap-4">
                <div className="col-span-3">
                  <p className=" pt-4 max-w-[384px]">
                    To achieve this, we created our flagship Global Power Index
                    and built a SAAS enabled platform to interact with the 194
                    countries we ranked.
                  </p>
                </div>
                <div className="col-span-2">
                  <Link
                    to="/global-power-index"
                    className="btn3 mt-5 w-[110px] self-end "
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-10">
          <div className="grid md:grid-cols-2  border-b border-slate-900 pb-[22px]">
            <div className="col-span-1">
              <h3 className="max-w-[280px]">
                We serve clients who make long term vision a priority
              </h3>
            </div>
            <div className="col-span-1">
              <h3 className="text-2xl max-w-[466px] ">
                Our clients recognise the value of playing the long game. They
                have a culture of curiosity and open dialogue, that’s why they
                trust us to challenge their assumptions and shape their thinking
                when it matters most.{" "}
              </h3>
              <div className="lg:grid lg:grid-cols-5 gap-4">
                <div className="col-span-3">
                  <p className="max-w-[376px]  pt-4">
                    We partner with diverse clients from both the private and
                    public sectors, across various industries and regions, to
                    provide clarity and support.
                  </p>
                </div>
                <div className="col-span-2">
                  <Link to="/clients" className="btn3 mt-5 w-[110px] self-end ">
                    Clients
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-10">
          <div className="grid md:grid-cols-2  border-b border-slate-900 pb-[22px]">
            <div className="col-span-1">
              <h3 className="max-w-[280px]">
                We start from First Principles, and build from there
              </h3>
            </div>
            <div className="col-span-1">
              <h3 className="max-w-[450px] text-2xl">
                {" "}
                We take the power of systemic thinking seriously.
              </h3>
              <div className="lg:grid lg:grid-cols-5 gap-4">
                <div className="col-span-3">
                  <p className="max-w-[428px]  pt-4 pr-5">
                    Pareto has developed a three pronged approach using first
                    principles thinking that helps clients better understand how
                    to approach problem solving in a smarter way.
                  </p>
                </div>
                <div className="col-span-2">
                  <Link
                    to="/first-principles"
                    className="btn3 mt-5 max-w-[152px] max-md:w-full self-end text-[16px]"
                  >
                    Our Approach
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-10">
          <div className="grid md:grid-cols-2  border-b border-slate-900 pb-[22px]">
            <div className="col-span-1">
              <h3 className="max-w-[280px]">
                We mold our service offerings to fit your needs
              </h3>
            </div>
            <div className="col-span-1">
              <h3 className="max-w-[426px] text-2xl">
                No problem is the same, so why should our solutions be
              </h3>
              <div className="lg:grid lg:grid-cols-5 gap-4">
                <div className="col-span-3">
                  <p className="max-w-[367px]  pt-4 pr-5">
                    PClients are supported with an array of deliverables that
                    best serve the the intended outcomes.
                  </p>
                </div>
                <div className="col-span-2">
                  <Link
                    to="/services"
                    className="btn3 mt-5 max-w-[110px] w-full self-end "
                  >
                    Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-10">
          <div className="max-md:flex-col flex justify-between flex-1">
            <h2 className="text-4xl  leading-[1.2] lg:text-6xl lg:leading-[1.3] flex-1">
              Our Trajectory{" "}
            </h2>
            <div className="flex-1">
              <div className="flex justify-end  col-span-1 max-md:pt-[30px] md:pt-[100px]">
                <h3 className="max-xl:w-[482px]">
                  Global stakeholders are using Pareto to solve their biggest
                  problems.
                </h3>
              </div>

              <div className="flex pt-5">
                <div className="domo max-w-[486px]">
                  With Pareto, governments are reforming their foreign direct
                  investment strategy, in doing so, changing the trajectory of
                  their country.
                  <div className="h-6"></div>
                  Investors are making more informed capital allocations.
                  Telecommunications companies are better able to anticipate
                  growth markets. Corporate strategy leaders can more
                  confidently assess opportunities. And we are just getting
                  started.
                  <div className="h-6"></div>
                  We’re committed to forging a future where the status quo of
                  short-term thinking fueled by uncertainty is replaced with
                  confident leadership based on informed decision making..
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
