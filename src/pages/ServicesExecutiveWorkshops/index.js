import React from "react";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import HeroSection from "../../components/HeroSection";

const ServicesExecutiveWorkshops = () => {
  return (
    <div className="container mx-auto pb-[200px]">
      <Header />
      <HeroSection
        className="hero-home"
        title="We Apply First Principles Thinking to World Affairs"
        image="images/ServicesExecutiveWorkshops/Services-Executive-Workshops.png"
        h1width="max-w-[700px]"
      />

      <section className="mt-10 pb-10 border-black border-b">
        <div className="flex justify-between items-center mt-8">
          <h2 className=" max-w-[700px]">
            We Provide Customised Content for Your Needs and Challenges
          </h2>
        </div>

        <div className="flex justify-between items-center mt-8">

          <p className="w-full text-3xl text-gray-600">
            Pareto is brought in to shed light and shape thinking of senior
            leadership through interactive and engaging workshop/training
            programs.
          </p>
        </div>
      </section>

      <section className="mt-10 pb-10 border-black border-b">
        <div className="social  flex items-center justify-between gap-4">
          <img
            src="images/ServicesExecutiveWorkshops/logos/Logo-1.png"
            alt="Logo 1"
            height="100"
            width="200"
            className="w-[100px] h-auto"
          />

          <img
            src="images/ServicesExecutiveWorkshops/logos/Logo-2.png"
            alt="Logo 2"
            height="100"
            width="200"
            className="w-[100px] h-auto"
          />

          <img
            src="images/ServicesExecutiveWorkshops/logos/Logo-3.png"
            alt="Logo 3"
            height="100"
            width="200"
            className="w-[150px] h-auto"
          />

          <img
            src="images/ServicesExecutiveWorkshops/logos/Logo-4.png"
            alt="Logo 4"
            height="100"
            width="200"
            className="w-[100px] h-auto"
          />

          <img
            src="images/ServicesExecutiveWorkshops/logos/Logo-5.png"
            alt="Logo 5"
            height="100"
            width="200"
            className="w-[200px] h-auto"
          />
        </div>
      </section>

      <section className="mt-10 pb-10 border-black border-b">
        <div className="flex justify-between items-center mt-8">
          <h2 className=" max-w-[700px]">
            Why Commission an Executive Workshop?
          </h2>
        </div>

        <div className="md:flex justify-between items-center mt-20 mb-10 gap-20">
          <div className="flex-1">
            <h2 className="text-2xl lg:text-4xl leading-[1.2] max-w-[480px] mb-5">
              Strategic Planning & Decision Making
            </h2>
            <p className="max-w-[460px] text-lg lg:text-2xl md:w-full text-gray-600 ">
              Whether your team is eager to engage in scenario planning, test
              assumptions, or gain a broader, more informed perspective, Pareto
              is poised to offer deep insights into underlying dynamics,
              empowering you to make informed decisions with confidence.
            </p>
            <br/>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl lg:text-4xl leading-[1.2] max-w-[434px] mb-5">
              Education & Skills Upgrade
            </h2>

            <p className="max-w-[413px] text-lg lg:text-2xl md:w-full text-gray-600">
              Executive workshops offer a dynamic platform for education and
              skills upgrades, providing participants with immersive learning
              experiences and practical tools to enhance their professional
              capabilities.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 pb-10 ">
        <div className="flex justify-between items-center mt-8">
          <h2 className="temp-font-remove max-w-[600px]">
            Our Approach
          </h2>
        </div>

        <div className="flex justify-between items-center mt-8">
          <h2 className="w-full"></h2>

          <div className="w-full text-3xl">
            <div className="mt-5 pb-10 border-black border-b">
              <p>Interactive Learning Environment</p>

              <p className="text-xl pt-3">
                Our executive workshops foster an interactive learning
                environment where participants engage in discussions, case
                studies, group activities, and hands-on exercises. This
                interactive approach promotes active participation and deepens
                learning retention.
              </p>
            </div>

            <div className="mt-10 pb-10 border-black border-b">
              <p>Cutting-Edge Content</p>

              <p className="text-xl pt-3">
                Executive workshops feature cutting-edge content on the latest
                trends, developments, and best practices in various industries
                and domains. Participants gain access to up-to-date information
                and innovative strategies that can be applied directly to their
                work.
              </p>
            </div>

            <div className="mt-10 pb-10 border-black border-b">
              <p>Tailored Curriculum</p>

              <p className="text-xl pt-3">
                Workshops are always tailored to the specific needs and
                objectives of the participants or organisations. This customised
                curriculum ensures that the content is relevant, practical, and
                aligned with the participants' learning goals and professional
                development needs.
              </p>
            </div>

            <div className="mt-10 pb-10 border-black border-b">
              <p>Skill-Building</p>

              <p className="text-xl pt-3">
                Executive workshops focus on skill-building and competency
                development across a wide range of areas, including leadership,
                strategic thinking, analysis, problem-solving, and
                decision-making. Participants acquire new skills and enhance
                existing ones to excel in their roles and advance their careers.
              </p>
            </div>

            <div className="mt-10 pb-10 border-black border-b">
              <p>Actionable Insights</p>

              <p className="text-xl pt-3">
                Executive workshops deliver actionable insights and practical
                tools that participants can immediately apply to their work.
                Whether it's developing a strategic plan, refining leadership
                skills, or implementing innovative solutions, participants leave
                the workshop with tangible takeaways to drive performance and
                results.
              </p>
            </div>

            <div className="mt-10 pb-10 border-black border-b">
              <p>Continuous Learning Culture</p>

              <p className="text-xl pt-3">
                By participating in executive workshops, individuals and
                organisations cultivate a culture of continuous learning and
                professional development. Investing in education and skills
                upgrades through workshops demonstrates a commitment to growth
                and excellence in today's fast-paced business environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer
        contact
        ptext="Thinking about how Executive Workshops can help you?"
      />
    </div>
  );
};

export default ServicesExecutiveWorkshops;
