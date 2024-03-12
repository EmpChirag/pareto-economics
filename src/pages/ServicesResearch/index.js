import React from "react"
import Header from '../../Layouts/Header'
import Footer from '../../Layouts/Footer'
import HeroSection from '../../components/HeroSection'
import CommonSection from '../../components/CommonSection'

const ServicesResearch = () => {
  return (
    <div className="container mx-auto pb-[200px]">
        <Header />

        <HeroSection
            className="hero-home"
            title="Harness the Power of Our Analytics to Answer Your Questions"
            image="images/ServicesResearch/Services-Research.png"
            h1width="max-w-[700px]"
        />

        <div className="flex justify-between items-center mt-8">
            <h2 className="text-4xl leading-[1.2] lg:text-6xl lg:leading-[1.3] max-w-[550px]">
                Why Commission Research?
            </h2>
        </div>

        <div className="flex justify-between items-center mt-8 pb-10 border-black border-b-2">
            <h2 className="w-full">
            </h2>

            <div className="w-full text-3xl text-gray-600">
                <p className="mt-5 pb-5 border-black border-b-2">
                    Solve complex questions beyond internal expertise.
                </p>

                <p className="mt-5 pb-5 border-black border-b-2">
                    Refine strategies for informed decisions.
                </p>

                <p className="mt-5 pb-5 border-black border-b-2">
                    Uncover fresh perspectives on challenges.
                </p>

                <p className="mt-5 pb-5 border-black border-b-2">
                    Demonstrate due diligence for stakeholders.
                </p>

                <p className="mt-5 pb-5 border-black border-b-2">
                    Optimize strategies with dynamic insights.
                </p>
            </div>
        </div>

        <div className="flex justify-between items-center mt-8">
            <h2 className="text-4xl leading-[1.2] lg:text-6xl lg:leading-[1.3] max-w-[550px]">
                Research Process
            </h2>
        </div>

        <div className="flex justify-between items-center mt-8 pb-10 border-black border-b-2">
            <p className="w-full text-3xl text-gray-600">
                The best kind of research is one where both the needs and expectations of the client are met. To do this properly requires a thorough and robust research process.
            </p>
            
            <h2 className="w-full">
            </h2>
        </div>

        <div className="flex justify-between items-center mt-8 pb-10 border-black border-b-2">
            <h2 className="w-full">
            </h2>

            <p className="w-full text-xl text-gray-600">
                Our six-step process allows for both the client and us to work together on established goals and results which fully answers the client’s questions.

                <br/>
                <br/>

                We offer both quantitative & qualitative research methods as well as access to our proprietary data bank when required as well as open and primary-source data collection avenues.

                <br/>
                <br/>
                
                The client is kept informed of our progress throughout the research lifecycle as milestones are achieved.
            </p>
        </div>

        <div className="flex justify-between items-center mt-8">
            <h2 className="text-4xl leading-[1.2] lg:text-6xl lg:leading-[1.3] max-w-[550px]">
                How Long Does Research Take?
            </h2>
        </div>

        <div className="flex justify-between items-center mt-8 pb-10 border-black border-b-2">
            <h2 className="w-full">
            </h2>

            <p className="w-full text-xl text-gray-600">
                This depends on the scope of the research clients want to commission as well as the resources needed to successfully complete the commission.

                <br/>
                <br/>

                Each commission and unique, our team will be happy to discuss your needs and timeframes during a consultation.
            </p>
        </div>

        <Footer />
    </div>
  );
};

export default ServicesResearch;