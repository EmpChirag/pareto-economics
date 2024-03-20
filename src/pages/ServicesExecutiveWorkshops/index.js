import React from "react";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import HeroSection from "../../components/HeroSection";
import heroImg from "../../assets/images/ServicesExecutiveWorkshops/Services-Executive-Workshops.png";
import Logo1 from "../../assets/images/ServicesExecutiveWorkshops/logos/Logo-1.png";
import Logo2 from "../../assets/images/ServicesExecutiveWorkshops/logos/Logo-2.png";
import Logo3 from "../../assets/images/ServicesExecutiveWorkshops/logos/Logo-3.png";
import Logo4 from "../../assets/images/ServicesExecutiveWorkshops/logos/Logo-4.png";
import Logo5 from "../../assets/images/ServicesExecutiveWorkshops/logos/Logo-5.png";
const ServicesExecutiveWorkshops = () => {
  return (
    <div className="container mx-auto pb-[200px]">
      <Header />
      <HeroSection
        className="hero-home"
        title="Dive Deeper with Executive Workshops"
        image={heroImg}
        h1width="max-w-[850px]"
      />

      <section className="mt-10 pb-10 border-black border-b">
        <div className="flex max-md:flex-col justify-between mt-8">
          <h2 className=" max-w-[700px]">
            We Provide Customised Content for Your Needs and Challenges
          </h2>

          <h3 className="w-full mt-5 md:mt-[200px]">
            Pareto is brought in to shed light and shape thinking of senior
            leadership through interactive and engaging workshop/training
            programs.
          </h3>
        </div>
      </section>

      <section className="mt-10 pb-10 border-black border-b">
        <div className="social flex flex-wrap items-center justify-between gap-4">
          <img
            src={Logo1}
            alt="Logo 1"
            height="100"
            width="200"
            className="w-full max-w-[150px] h-auto"
          />

          <img
            src={Logo2}
            alt="Logo 2"
            height="100"
            width="200"
            className="w-full max-w-[150px] h-auto"
          />

          <img
            src={Logo3}
            alt="Logo 3"
            height="100"
            width="200"
            className="w-[150px] h-auto"
          />

          <img
            src={Logo4}
            alt="Logo 4"
            height="100"
            width="200"
            className="w-full max-w-[150px] h-auto"
          />

          <img
            src={Logo5}
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

        <div className="md:flex justify-between items-center mt-8 lg:mt-20 md:mb-10 gap-20">
          <div className="flex-1">
            <h3 className="max-w-[480px] mb-3 md:mb-5">
              Strategic Planning & Decision Making
            </h3>
            <p className="max-w-[460px] text-lg lg:text-2xl md:w-full  ">
              Whether your team is eager to engage in scenario planning, test
              assumptions, or gain a broader, more informed perspective, Pareto
              is poised to offer deep insights into underlying dynamics,
              empowering you to make informed decisions with confidence.
            </p>
            <br />
          </div>
          <div className="flex-1">
            <h3 className="max-w-[434px] mb-3 md:mb-5">
              Education & Skills Upgrade
            </h3>

            <p className="max-w-[413px] text-lg lg:text-2xl md:w-full ">
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
          <h2 className="max-w-[600px]">Our Approach</h2>
        </div>

        <div className="flex justify-between items-center md:mt-8 md:float-right md:max-w-[50%]">
          <div className="w-full">
            <div className="mt-5 pb-10 border-black border-b">
              <h3>Interactive Learning Environment</h3>

              <p className=" pt-3">
                Our executive workshops foster an interactive learning
                environment where participants engage in discussions, case
                studies, group activities, and hands-on exercises. This
                interactive approach promotes active participation and deepens
                learning retention.
              </p>
            </div>

            <div className="mt-10 pb-10 border-black border-b">
              <h3>Cutting-Edge Content</h3>

              <p className=" pt-3">
                Executive workshops feature cutting-edge content on the latest
                trends, developments, and best practices in various industries
                and domains. Participants gain access to up-to-date information
                and innovative strategies that can be applied directly to their
                work.
              </p>
            </div>

            <div className="mt-10 pb-10 border-black border-b">
              <h3>Tailored Curriculum</h3>

              <p className=" pt-3">
                Workshops are always tailored to the specific needs and
                objectives of the participants or organisations. This customised
                curriculum ensures that the content is relevant, practical, and
                aligned with the participants' learning goals and professional
                development needs.
              </p>
            </div>

            <div className="mt-10 pb-10 border-black border-b">
              <h3>Skill-Building</h3>

              <p className=" pt-3">
                Executive workshops focus on skill-building and competency
                development across a wide range of areas, including leadership,
                strategic thinking, analysis, problem-solving, and
                decision-making. Participants acquire new skills and enhance
                existing ones to excel in their roles and advance their careers.
              </p>
            </div>

            <div className="mt-10 pb-10 border-black border-b">
              <h3>Actionable Insights</h3>

              <p className=" pt-3">
                Executive workshops deliver actionable insights and practical
                tools that participants can immediately apply to their work.
                Whether it's developing a strategic plan, refining leadership
                skills, or implementing innovative solutions, participants leave
                the workshop with tangible takeaways to drive performance and
                results.
              </p>
            </div>

            <div className="mt-10 md:pb-10 border-black md:border-b">
              <h3>Continuous Learning Culture</h3>

              <p className=" pt-3">
                By participating in executive workshops, individuals and
                organisations cultivate a culture of continuous learning and
                professional development. Investing in education and skills
                upgrades through workshops demonstrates a commitment to growth
                and excellence in today's fast-paced business environment.
              </p>
            </div>
          </div>
        </div>
        <div className="clear-both"></div>
      </section>

      <Footer
        contact
        ptext="Thinking about how Executive Workshops can help you?"
      />
    </div>
  );
};

export default ServicesExecutiveWorkshops;
