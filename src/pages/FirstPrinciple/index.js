import React from "react"
import Header from '../../Layouts/Header'
import Footer from '../../Layouts/Footer'
import HeroSection from '../../components/HeroSection'

const FirstPrinciple = () => {
  return (
    <div className="container mx-auto pb-[200px]">
        <Header />
        <HeroSection
            className="hero-home"
            title="We Apply First Principles Thinking to World Affairs"
            image="images/FirstPrinciple/First-Principles.png"
            h1width="max-w-[700px]"
        />

        <section className="mt-10">
            <div className="flex justify-between items-center mt-8 pb-10 border-black border-b-2">
                <h2 className="w-full text-3xl text-gray-800">
                    What is First Principles Thinking?
                </h2>

                <p className="w-full text-xl text-gray-600">
                    First Principles Thinking is a problem-solving approach that involves
                    breaking down complex problems into their most basic elements and
                    reexamining them from the ground up, without relying on assumptions or
                    prior knowledge. It requires questioning established conventions and
                    beliefs to arrive at fundamental truths or principles that form the
                    foundation of understanding.
                </p>
            </div>
        </section>

        <section className="mt-10">
            <div className="flex justify-between items-center mt-8 pb-10 border-black border-b-2">
                <h2 className="w-full text-3xl text-gray-800">
                    Challenging Existing Narratives
                </h2>

                <p className="w-full text-xl text-gray-600">
                    When applied to the analysis of world affairs, First Principles
                    Thinking involves examining global issues by identifying the
                    fundamental drivers of world affairs so as to understand how they will
                    behave now and in the future. Rather than relying on conventional
                    wisdom or historical precedent, it requires challenging existing
                    narratives and assumptions to identify the underlying principles
                    driving events and dynamics in the international arena.
                </p>
            </div>
        </section>

        <section className="mt-10">
            <div className="flex justify-between items-center mt-8">
                <h2 className="text-3xl leading-[1.2] lg:text-6xl lg:leading-[1.3] max-w-[550px]">
                    What is the Nature of Power?
                </h2>
            </div>

            <div className="flex justify-between items-center mt-8 pb-10 border-black border-b-2">        
                <p className="w-full text-3xl text-gray-600">
                    We have discovered that in order to fully understand the tectonic changes happening in today’s world one must understand the fundamental nature of power as it relates to nation-states.

                    <br/>
                    <br/>

                    Every problem, struggle, issue or change that clients face is a result of the compounding and multi-order effects of nation-states <b>Centers of Power</b> and the rate of their developmental differential relative to other countries.

                    <br/>
                    <br/>

                    With a solid grasp of this foundation, you can make more confident, quicker and profitable investing, business and policy making decisions, as well as improve your ability to forecast and hedge risk.
                </p>
                
                <h2 className="w-full">
                </h2>
            </div>
        </section>

        <section className="mt-10">
            <div className="flex justify-between items-center mt-8">
                <h2 className="text-3xl leading-[1.2] lg:text-6xl lg:leading-[1.3] max-w-[550px]">
                    Centers of Power
                </h2>
            </div>

            <div className="flex justify-between items-center mt-8 pb-10">        
                <p className="w-full text-3xl text-gray-600">
                    A countries relevance and influence are predicated on developing, maintaining and leading in six primary interrelated and interconnected ways, what we call their “Centers of Power (CoP)”.
                </p>
                
                <h2 className="w-full">
                </h2>
            </div>

            <div className="flex justify-between items-center mt-8 pb-10 border-black border-b-2">
                <h2 className="w-full">
                </h2>

                <div className="w-full text-3xl">
                    <p className="font-semibold mt-5 pb-5 border-black border-b-2">
                        These include:
                    </p>

                    <p className="text-gray-600 mt-5 pb-5 border-black border-b-2">
                        Active Consumer Market
                    </p>

                    <p className="text-gray-600 mt-5 pb-5 border-black border-b-2">
                        Military Balance
                    </p>

                    <p className="text-gray-600 mt-5 pb-5 border-black border-b-2">
                        Technological leadership
                    </p>

                    <p className="text-gray-600 mt-5 pb-5 border-black border-b-2">
                        Systemically Important Commodities
                    </p>

                    <p className="text-gray-600 mt-5 pb-5 border-black border-b-2">
                        Geo-Strategic Positioning
                    </p>

                    <p className="text-gray-600 mt-5 pb-5 border-black border-b-2">
                        Financial Strength
                    </p>
                </div>
            </div>
        </section>

        <section className="mt-10">
            <div className="flex justify-between items-center mt-8">
                <h2 className="text-3xl leading-[1.2] lg:text-6xl lg:leading-[1.3] max-w-[550px]">
                    From Thinking to Action
                </h2>
            </div>

            <div className="flex justify-between items-center mt-8">        
                <h2 className="w-full">
                </h2>

                <p className="w-full text-3xl text-gray-600">
                    Our systemic way of thinking lifts off the page and directly into your decision making matrix through the Global Power Index.
                </p>
            </div>

            <div className="flex justify-between items-center mt-8 pb-10">        
                <h2 className="w-full">
                </h2>
                
                <p className="w-full text-base text-gray-600">
                    Discover what the most advanced measure of country power can do for you and your organisation.
                </p>
            </div>

            <button className="btn">Explore Index </button>
        </section>

        <Footer contact />
    </div>
  );
};

export default FirstPrinciple;
