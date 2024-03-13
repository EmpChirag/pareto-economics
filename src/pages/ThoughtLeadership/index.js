import React from "react";
import ThoughtLeadershipImg from "../../assets/images/Thought-Leadership.png";
import HeroSection from "../../components/HeroSection";
import CommonTab from "../../components/CommonTab";
import Header from "../../Layouts/Header";
import Footer from '../../Layouts/Footer';

const ThoughtLeadership = () => {
  const option = [
    { id: "INSIGHTS", value: "INSIGHTS" },
    { id: "PODCASTS", value: "PODCASTS" },
    { id: "KEYNOTES", value: "KEYNOTES" },
  ];
  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection
        title="Original Thinking,
         Sharp Analysis"
        image={ThoughtLeadershipImg}
      />

      <CommonTab title="Choose Content Type" options={option} />

      <div className="mt-8 flex max-md:flex-col gap-10 md:px-10">
        <div className="flex-1">
          <div className="uppercase font-extra text-2xl">Insights</div>
          <h3 className="text-3xl my-4 md:my-5">
            How is M&A impacted by China’s ‘Dual Circulation’ Development
            Strategy?
          </h3>
          <p className="font-extra text-2xl">
            “We focus on three key bilateral relationships, including; US-China,
            EU- China and UK-China”
          </p>
        </div>
        <div className="flex-1">
          <div className="uppercase font-extra text-2xl">PODCAST</div>
          <h3 className="text-3xl my-4 md:my-5">
            What Drives Political Action in the Real World | CEO Munich Security
            Conference, Benedikt Franke
          </h3>
          <p className="font-extra text-2xl">
            This is a masterclass on the nature of politics and how to better
            understand your world.
          </p>
        </div>
        <div className="flex-1">
          <div className="uppercase font-extra text-2xl">KEYNOTE</div>
          <h3 className="text-3xl my-4 md:my-5">
            A Beginner’s Guide to Geopolitical Risk, and How it’s Impacting
            Fintech
          </h3>
          <p className="font-extra text-2xl">
            Watch Klisman Murati, CEO of Pareto Economics deliver the keynote
            address at the annual Telia DAY ONE conference to an assembly of
            business leaders in the telecoms space.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThoughtLeadership;
