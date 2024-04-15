import React from "react"
import Header from '../../Layouts/Header'
import Footer from '../../Layouts/Footer'
import HeroSection from '../../components/HeroSection'
import { Helmet } from "react-helmet";

const ServicesResearch = () => {
  return (
    <div className="container mx-auto">
        <Helmet>
          <title>Research Services in London, UK | Pareto Economics</title>
          <meta name='description' content='Looking for top-notch research services in London, UK? Our experts deliver insights that propel success. Call us on +44 (0) 20 8154 3425 for more information or to discuss your specific research needs.  ' />
          <link rel="canonical" href="https://www.pareto-economics.com/services-research" />
          <meta name="robots" content="follow, index, all" />
      </Helmet>
      <Header />

      <HeroSection
        className="hero-home"
        title="Harness the Power of Our Analytics to Answer Your Questions"
        image="/images/ServicesResearch/services-research.png"
        h1width="max-w-[950px]"
      />

      <section className="mt-10 pb-10 border-black border-b">
        <div className="flex justify-between max-md:flex-col mt-8">
          <h2 className="max-w-[620px]">Why Commission Research?</h2>
        </div>

        <div className="flex justify-between max-md:w-full max-md:flex-col gap-5 max-lg:gap-0 max-lg:justify-normal mt10">
          <div className="clear-both"></div>

          <div className="max-w-[750px] text-lg md:text-2xl max-md:w-full ">
            <p className="font-title mt-5 pb-5 border-black border-b">
              Solve complex questions beyond internal expertise.
            </p>

            <p className="font-title mt-5 pb-5 border-black border-b">
              Refine strategies for informed decisions.
            </p>

            <p className="font-title mt-5 pb-5 border-black border-b">
              Uncover fresh perspectives on challenges.
            </p>

            <p className="font-title mt-5 pb-5 border-black border-b">
              Demonstrate due diligence for stakeholders.
            </p>

            <p className="font-title mt-5 pb-5 border-black  md:border-b">
              Optimize strategies with dynamic insights.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 pb-10 border-black md:border-b">
        <div className="flex justify-between max-md:flex-col mt-8">
          <h2 className="max-w-[720px]">Research Process</h2>
        </div>

        <div className="flex justify-between max-md:w-full max-md:flex-col gap-5 max-lg:gap-0 max-lg:justify-normal">
          <div className="flex justify-between max-md:flex-col gap-5 md:gap-10 mt-10">
            <h3 className="max-w-[720px]">
              The best kind of research is one where both the needs and
              expectations of the client are met. To do this properly requires a
              thorough and robust research process.
            </h3>
          </div>
        </div>

        <div className="flex  justify-end max-md:w-full max-md:flex-col gap-5 max-lg:gap-0 max-lg:justify-normal">
          <div className="flex justify-between max-md:flex-col gap-5 md:gap-10 mt-10">
            <div className="max-w-[720px]">
              Our six-step process allows for both the client and us to work
              together on established goals and results which fully answers the
              client’s questions.
              <div className="h-6" />
              We offer both quantitative & qualitative research methods as well
              as access to our proprietary data bank when required as well as
              open and primary-source data collection avenues.
              <div className="h-6" />
              The client is kept informed of our progress throughout the
              research lifecycle as milestones are achieved.
            </div>
          </div>
        </div>

        <div className="flex justify-between max-md:w-full max-md:flex-col gap-5 max-lg:gap-0 max-lg:justify-center mt-10">
          <img
            src="/images/ServicesResearch/research-lifecycle.png"
            alt="Research Lifecycle"
            height="200"
            width="400"
            className="max-w-[500px] w-full"
          />
        </div>
      </section>

      <section className="mt-10">
        <div className="flex justify-between max-md:flex-col mt-8">
          <h2 className="max-w-[720px]">How Long Does Research Take?</h2>
        </div>

        <div className="flex justify-between max-md:w-full max-md:flex-col gap-5 max-lg:gap-0 max-lg:justify-normal">
          <div className="clear-both"></div>

          <div className="flex justify-between max-md:flex-col gap-5 md:gap-10 mt-10">
            <div className="max-w-[720px] float-right">
              This depends on the scope of the research clients want to
              commission as well as the resources needed to successfully
              complete the commission.
              <div className="h-6" />
              Each commission and unique, our team will be happy to discuss your
              needs and timeframes during a consultation.
            </div>
          </div>
        </div>
      </section>

      <Footer contact ptext="Get in touch to discuss your needs now." />
    </div>
  );
};

export default ServicesResearch;