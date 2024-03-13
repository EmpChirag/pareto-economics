import React from "react"
import Header from '../../Layouts/Header'
import Footer from '../../Layouts/Footer'
import HeroSection from '../../components/HeroSection'

const FirstPrinciple = () => {
  return (
    <div className="container mx-auto">
        <Header />
        <HeroSection
            className="hero-home"
            title="We Apply First Principles Thinking to World Affairs"
            image="images/FirstPrinciple/First-Principles.png"
            h1width="max-w-[700px]"
        />

        <section className="mt-10 pb-10 border-black border-b">
            <div className="flex justify-between max-md:flex-col mt-10 gap-5 md:gap-10">
                <h3 className="text-3xl md:my-5 max-w-[500px]">
                    What is First Principles Thinking?
                </h3>

                <div className="max-w-[720px] text-xl text-gray-600">
                    First Principles Thinking is a problem-solving approach that involves breaking down complex problems into their most basic elements and reexamining them from the ground up, without relying on assumptions or prior knowledge. It requires questioning established conventions and beliefs to arrive at fundamental truths or principles that form the foundation of understanding.
                </div>
            </div>
        </section>

        <section className="mt-10 pb-10 border-black border-b">
            <div className="flex justify-between max-md:flex-col mt-10 gap-5 md:gap-10">
                <h3 className="text-3xl md:my-5 max-w-[500px]">
                    Challenging Existing Narratives
                </h3>

                <div className="max-w-[720px] text-xl text-gray-600">
                    When applied to the analysis of world affairs, First Principles Thinking involves examining global issues by identifying the fundamental drivers of world affairs so as to understand how they will behave now and in the future. Rather than relying on conventional wisdom or historical precedent, it requires challenging existing narratives and assumptions to identify the underlying principles driving events and dynamics in the international arena.
                </div>
            </div>
        </section>

        <section className="mt-10 pb-10 border-black border-b">
            <div className="flex justify-between max-md:flex-col mt-8">
                <h2 className="temp-font-remove max-w-[720px]">
                    What is the Nature of Power?
                </h2>
            </div>

            <div className="flex justify-between max-md:flex-col mt-10 gap-5 md:gap-10">
                <div className="max-w-[720px] float-right text-2xl text-gray-600">
                    We have discovered that in order to fully understand the tectonic changes happening in today’s world one must understand the fundamental nature of power as it relates to nation-states.

                    <br/>
                    <br/>

                    Every problem, struggle, issue or change that clients face is a result of the compounding and multi-order effects of nation-states <b>Centers of Power</b> and the rate of their developmental differential relative to other countries.

                    <br/>
                    <br/>

                    With a solid grasp of this foundation, you can make more confident, quicker and profitable investing, business and policy making decisions, as well as improve your ability to forecast and hedge risk.
                </div>
            </div>
        </section>

        <section className="mt-10 pb-10 border-black md:border-b">
            <div className="flex justify-between max-md:flex-col mt-8">
                <h2 className="temp-font-remove max-w-[720px]">
                    Centers of Power
                </h2>
            </div>

            <div className="flex justify-between max-md:flex-col mt-10 gap-5 md:gap-10">
                <div className="max-w-[720px] float-right text-2xl text-gray-600">
                    A countries relevance and influence are predicated on developing, maintaining and leading in six primary interrelated and interconnected ways, what we call their “Centers of Power (CoP)”.
                </div>
            </div>

            <div className="flex justify-between max-md:w-full max-md:flex-col gap-5 max-lg:gap-0 max-lg:justify-normal mt-10">
                <div className="clear-both"></div>

                <div className="max-w-[750px] float-right text-3xl max-md:w-full">
                    <p className=" text-2xl mt-5 pb-5 border-black border-b">
                        These include:
                    </p>

                    <p className="text-gray-600 text-2xl mt-5 pb-5 border-black border-b">
                        Active Consumer Market
                    </p>

                    <p className="text-gray-600 text-2xl mt-5 pb-5 border-black border-b">
                        Military Balance
                    </p>

                    <p className="text-gray-600 text-2xl mt-5 pb-5 border-black border-b">
                        Technological leadership
                    </p>

                    <p className="text-gray-600 text-2xl mt-5 pb-5 border-black border-b">
                        Systemically Important Commodities
                    </p>

                    <p className="text-gray-600 text-2xl mt-5 pb-5 border-black border-b">
                        Geo-Strategic Positioning
                    </p>

                    <p className="text-gray-600 text-2xl mt-5 pb-5 border-black border-b">
                        Financial Strength
                    </p>
                </div>
            </div>
        </section>

        <section className="mt-10">
            <div className="flex justify-between max-md:flex-col mt-8">
                <h2 className="temp-font-remove max-w-[720px]">
                    From Thinking to Action
                </h2>
            </div>

            <div className="flex justify-between max-md:w-full max-md:flex-col gap-5 max-lg:gap-0 max-lg:justify-normal">
                <div className="clear-both"></div>

                <div className="flex justify-between max-md:flex-col gap-5 md:gap-10 mt-10">
                    <div className="max-w-[720px] float-right text-2xl text-gray-600">
                        Our systemic way of thinking lifts off the page and directly into your decision making matrix through the Global Power Index.
                    </div>
                </div>
            </div>

            <div className="flex justify-between max-md:w-full max-md:flex-col gap-5 max-lg:gap-0 max-lg:justify-normal">
                <div className="clear-both"></div>

                <div className="flex justify-between max-md:flex-col gap-5 md:gap-10 mt-10">
                    <div className="max-w-[720px] float-right text-base text-gray-600">
                        Discover what the most advanced measure of country power can do for you and your organisation.
                    </div>
                </div>
            </div>

            <button className="btn mt-10">Explore Index </button>
        </section>

        <Footer contact />
    </div>
  );
};

export default FirstPrinciple;
