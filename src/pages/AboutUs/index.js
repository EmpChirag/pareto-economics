import React from "react";
import Header from "../../Layouts/Header";
import HeroSection from "../../components/HeroSection";
import { Link } from "react-router-dom";
import Footer from "../../Layouts/Footer";
import ourCore from '../../assets/images/aboutus/Our-Core.png'
const AboutUs = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection
        className="hero-home"
        title="Our Core"
        image={ourCore}
      />

      <section>
        <h2 className="text-3xl leading-[1.2] lg:text-6xl lg:leading-[1.3] lg:max-w-[690px] my-10">
          How Will the World be Changed and Challenged in the next 100 years?
        </h2>
        <div className="border-b border-slate-900  py-10">
          <p className="text-3xl max-w-[700px] pt-3">
            Never before has there been a greater demand for unwavering
            long-term vision and decisive action.
          </p>
          <br />
          <p className="max-w-[598px] text-2xl font-normal">
            Yet, amidst today's unprecedented complexities and the proliferation
            of questionable information, achieving such clarity in understanding
            and action becomes increasingly challenging.
          </p>
          <br />
          <p className="max-w-[568px] text-2xl">
            Solving this required a radical paradigm shift coupled with the
            application of quantitative metrics.
          </p>
          <br />
          <p className="max-w-[600px] text-2xl">
            This combination would not come from the established offering. It
            would take a different kind of company to build it. That’s why we
            founded Pareto Economics.
          </p>
        </div>
      </section>
      <div>
        <section className="my-10">
          <h2 className="text-4xl  leading-[1.2] lg:text-6xl lg:leading-[1.3]">
            What we do
          </h2>
          <div className="grid md:grid-cols-2 pt-[20px] border-b border-slate-900 pb-[22px]">
            <div className="col-span-1">
              <p className="max-w-[280px] text-3xl">
                We forecast country growth trends using software enabled
                insights
              </p>
              <br/>
            </div>
            <div className="col-span-1">
              <p className="max-w-[472px] text-xl">
                We’re focused on creating the most comprehensive tool on country
                development trends for people and organisations who need data
                backed macro insights to make more informed strategy decisions.{" "}
              </p>
              <div className="grid lg:grid-cols-3">
                <div className="col-span-2">
                  <p className="text-lg pt-4 max-w-[274px]">
                    To achieve this, we created our flagship Global Power Index
                    and built a SAAS enabled platform to interact with the 194
                    countries we ranked.
                  </p>
                  <br />
                </div>
                <div className="col-span-1">
                  <Link
                    to=""
                    className="btn3 mt-5 w-[110px] self-end border-b-[1px] border-slate-900"
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
              <p className="max-w-[280px] text-3xl">
                We serve clients who make long term vision a priority
              </p>
              <br/>
            </div>
            <div className="col-span-1">
              <p className="max-w-[466px] text-xl">
                Our clients recognise the value of playing the long game. They
                have a culture of curiosity and open dialogue, that’s why they
                trust us to challenge their assumptions and shape their thinking
                when it matters most.{" "}
              </p>
              <div className="grid lg:grid-cols-3">
                <div className="col-span-2">
                  <p className="max-w-[276px] text-lg pt-4">
                    We partner with diverse clients from both the private and
                    public sectors, across various industries and regions, to
                    provide clarity and support.
                  </p>
                  <br />
                </div>
                <div className="col-span-1">
                  <Link
                    to=""
                    className="btn3 mt-5 w-[110px] self-end border-b-[1px] border-slate-900"
                  >
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
              <p className="max-w-[280px] text-3xl">
                We start from First Principles, and build from there
              </p>
              <br/>
            </div>
            <div className="col-span-1">
              <p className="max-w-[450px] text-xl">
                {" "}
                We take the power of systemic thinking seriously.
              </p>
              <div className="lg:grid lg:grid-cols-5">
                <div className="col-span-3">
                  <p className="max-w-[328px] text-lg pt-4 pr-5">
                    Pareto has developed a three pronged approach using first
                    principles thinking that helps clients better understand how
                    to approach problem solving in a smarter way.
                  </p>
                  <br />
                </div>
                <div className="col-span-2">
                  <Link
                    to=""
                    className="btn3 mt-5 max-w-[182px] max-md:w-full self-end border-b-[1px] text-[16px] border-slate-900"
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
              <p className="max-w-[280px] text-3xl">
                We mold our service offerings to fit your needs
              </p>
              <br/>
            </div>
            <div className="col-span-1">
              <p className="max-w-[426px] text-xl">
                No problem is the same, so why should our solutions be
              </p>
              <div className="grid lg:grid-cols-5">
                <div className="col-span-3">
                  <p className="max-w-[267px] text-lg pt-4 pr-5">
                    PClients are supported with an array of deliverables that
                    best serve the the intended outcomes.
                  </p>
                  <br/>
                </div>
                <div className="col-span-2">
                  <Link
                    to=""
                    className="btn3 mt-5 max-w-[180px] w-full self-end border-b-[1px] border-slate-900"
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
              <div className="flex justify-end  col-span-1 max-md:pt-[30px] pt-[70px]">
                <p className="text-3xl max-xl:w-[482px]">
                  Global stakeholders are using Pareto to solve their biggest
                  problems.
                </p>
              </div>
              <br />
              <div className="flex justify-end">
                <p className="text-2xl max-w-[486px]">
                  With Pareto, governments are reforming their foreign direct
                  investment strategy, in doing so, changing the trajectory of
                  their country.
                </p>
              </div>
              <br />
              <div className="flex justify-end ">
                <p className="text-2xl max-w-[480px]">
                  Investors are making more informed capital allocations.
                  Telecommunications companies are better able to anticipate
                  growth markets. Corporate strategy leaders can more
                  confidently assess opportunities. And we are just getting
                  started.
                </p>
              </div>
              <br />
              <div className="flex justify-end ">
                <p className="text-2xl max-w-[476px]">
                  We’re committed to forging a future where the status quo of
                  short-term thinking fueled by uncertainty is replaced with
                  confident leadership based on informed decision making..
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;
