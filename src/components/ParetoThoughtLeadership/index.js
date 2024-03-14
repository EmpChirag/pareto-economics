import React from "react";
import ParetoThought from "../../assets/images/home/kisman-murati.png";

const ParetoThoughtLeadership = () => {
  return (
    <section>
      <h2 className="lg:max-w-[780px]">
        Pareto Thought Leadership - In Action
      </h2>
      <div className="flex justify-between max-md:flex-col mt-10 gap-5 md:gap-10">
        <h3 className=" md:my-5 max-w-[500px]">
          How To Understand The Changing World Order
        </h3>
        <div className="max-w-[600px]">
          Helsinki 2024 | Watch Klisman Murati, CEO of Pareto Economics deliver
          the keynote address at the annual Telia DAY ONE conference to an
          assembly of business leaders in the telecommunications space.
        </div>
      </div>
      <iframe
        width="1480"
        height="820"
        className="max-md:h-[300px]"
        src={`https://www.youtube.com/embed/aCFzDh63U1k?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className=" w-full mt-10"
        title="Embedded youtube"
      />
      <div className="mt-8 flex max-md:flex-col gap-10 lg:px-10">
        <div className="">
          <div className="uppercase  text-lg md:text-2xl">Insights</div>
          <a
            href="/"
            className="font-title text-2xl md:text-3xl my-4 md:my-5 inline-block"
          >
            How is M&A impacted by China’s ‘Dual Circulation’ Development
            Strategy?
          </a>
          <p className=" text-lg md:text-2xl">
            “We focus on three key bilateral relationships, including; US-China,
            EU- China and UK-China”
          </p>
        </div>
        <div className="">
          <div className="uppercase  text-lg md:text-2xl">PODCAST</div>
          <a
            href="/"
            className="font-title text-2xl md:text-3xl my-4 md:my-5 inline-block"
          >
            What Drives Political Action in the Real World | CEO Munich Security
            Conference, Benedikt Franke
          </a>
          <p className=" text-lg md:text-2xl">
            This is a masterclass on the nature of politics and how to better
            understand your world.
          </p>
        </div>
        <div className="">
          <div className="uppercase  text-lg md:text-2xl">Insights</div>
          <a
            href="/"
            className="font-title text-2xl md:text-3xl my-4 md:my-5 inline-block"
          >
            A Beginner’s Guide to Geopolitical Risk, and How it’s Impacting
            Fintech
          </a>
          <p className=" text-lg md:text-2xl">
            “Geopolitics is a phenomenon that is increasingly impacting the
            global fintech and financial services ecosystem. ”
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParetoThoughtLeadership;
