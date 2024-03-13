import React from "react"
import Header from '../../Layouts/Header'
import Footer from '../../Layouts/Footer'
import HeroSection from '../../components/HeroSection'

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

        <section className="mt-10 pb-10 border-black border-b-2">
            <div className="flex justify-between items-center mt-8">
                <h2 className="text-4xl leading-[1.2] lg:text-6xl lg:leading-[1.3] max-w-[700px]">
                    We Provide Customised Content for Your Needs and Challenges
                </h2>
            </div>

            <div className="flex justify-between items-center mt-8">        
                <h2 className="w-full">
                </h2>

                <p className="w-full text-3xl text-gray-600">
                    Pareto is brought in to shed light and shape thinking of senior leadership through interactive and engaging workshop/training programs.
                </p>
            </div>
        </section>

        <section className="mt-10 pb-10 border-black border-b-2">
            <div className="social flex items-center justify-between gap-4">
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

        <section className="mt-10 pb-10 border-black border-b-2">
            <div className="flex justify-between items-center mt-8">
                <h2 className="text-4xl leading-[1.2] lg:text-6xl lg:leading-[1.3] max-w-[700px]">
                    Why Commission an Executive Workshop?
                </h2>
            </div>
        
            <div className="flex justify-between items-center mt-8">
                <h2 className="text-2xl lg:text-4xl leading-[1.2] max-w-[600px]">
                    Strategic Planning & Decision Making
                </h2>

                <h2 className="text-2xl lg:text-4xl leading-[1.2] max-w-[600px]">
                    Education & Skills Upgrade
                </h2>
            </div>

            <div className="flex justify-between items-center mt-8">        
                <p className="w-full text-lg lg:text-2xl text-gray-600">
                    Pareto is brought in to shed light and shape thinking of senior leadership through interactive and engaging workshop/training programs.
                </p>

                <p className="w-full text-lg lg:text-2xl text-gray-600">
                    Pareto is brought in to shed light and shape thinking of senior leadership through interactive and engaging workshop/training programs.
                </p>
            </div>
        </section>

        <section className="mt-10 pb-10 border-black border-b-2">
            <div className="flex justify-between items-center mt-8">
                <h2 className="text-3xl leading-[1.2] lg:text-6xl lg:leading-[1.3] max-w-[600px]">
                    Our Approach
                </h2>
            </div>

            <div className="flex justify-between items-center mt-8">
                <h2 className="w-full">
                </h2>

                <div className="w-full text-3xl">
                    <div className="mt-5 pb-10 border-black border-b-2">
                        <p>
                            Interactive Learning Environment
                        </p>

                        <p className="text-xl pt-3">
                            Our executive workshops foster an interactive learning environment where participants engage in discussions, case studies, group activities, and hands-on exercises. This interactive approach promotes active participation and deepens learning retention.
                        </p>
                    </div>

                    <div className="mt-10 pb-10 border-black border-b-2">
                        <p>
                            Cutting-Edge Content
                        </p>

                        <p className="text-xl pt-3">
                            Executive workshops feature cutting-edge content on the latest trends, developments, and best practices in various industries and domains. Participants gain access to up-to-date information and innovative strategies that can be applied directly to their work.
                        </p>
                    </div>

                    <div className="mt-10 pb-10 border-black border-b-2">
                        <p>
                            Tailored Curriculum
                        </p>

                        <p className="text-xl pt-3">
                            Workshops are always tailored to the specific needs and objectives of the participants or organisations. This customised curriculum ensures that the content is relevant, practical, and aligned with the participants' learning goals and professional development needs.
                        </p>
                    </div>

                    <div className="mt-10 pb-10 border-black border-b-2">
                        <p>
                            Skill-Building
                        </p>

                        <p className="text-xl pt-3">
                            Executive workshops focus on skill-building and competency development across a wide range of areas, including leadership, strategic thinking, analysis, problem-solving, and decision-making. Participants acquire new skills and enhance existing ones to excel in their roles and advance their careers.
                        </p>
                    </div>

                    <div className="mt-10 pb-10 border-black border-b-2">
                        <p>
                            Actionable Insights
                        </p>

                        <p className="text-xl pt-3">
                            Executive workshops deliver actionable insights and practical tools that participants can immediately apply to their work. Whether it's developing a strategic plan, refining leadership skills, or implementing innovative solutions, participants leave the workshop with tangible takeaways to drive performance and results.
                        </p>
                    </div>

                    <div className="mt-10 pb-10 border-black border-b-2">
                        <p>
                            Continuous Learning Culture
                        </p>

                        <p className="text-xl pt-3">
                            By participating in executive workshops, individuals and organisations cultivate a culture of continuous learning and professional development. Investing in education and skills upgrades through workshops demonstrates a commitment to growth and excellence in today's fast-paced business environment.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <Footer contact ptext="Thinking about how Executive Workshops can help you?" />
    </div>
  );
};

export default ServicesExecutiveWorkshops;