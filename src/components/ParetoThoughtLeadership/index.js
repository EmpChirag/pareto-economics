import React from "react";

const ParetoThoughtLeadership = () => {
  return (
    <section>
      <h2 className="lg:max-w-[780px]">
        Pareto Thought Leadership - In Action
      </h2>
      <div className="flex justify-between max-lg:flex-col mt-10 gap-5 lg:gap-10">
        <h3 className=" lg:my-5 max-w-[500px]">
          How To Understand The Changing World Order
        </h3>
        <div className="max-w-[600px]">
          Helsinki 2024 | Watch Klisman Murati, CEO of Pareto Economics deliver
          the keynote address at the annual Telia DAY ONE conference to an
          assembly of business leaders in the telecommunications space.
        </div>
      </div>
      <div className="max-w-[900px] mx-auto">
        <iframe
          width="900"
          height="520"
          className="max-md:h-[300px] w-full mt-10"
          src={`https://www.youtube.com/embed/aCFzDh63U1k?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <div className="mt-10 flex max-md:flex-col gap-10 lg:px-10">
        <div className="">
          <div className="uppercase text-lg">Insights</div>
          <a
            href="/how-is-ma-impacted"
            target="_blank"
            className="font-title text-2xl md:text-3xl my-4 md:my-5 inline-block"
          >
            How is M&A impacted by China’s ‘Dual Circulation’ Development
            Strategy?
          </a>
          <p>
            “We focus on three key bilateral relationships, including; US-China,
            EU- China and UK-China”
          </p>
        </div>
        <div className="">
          <div className="uppercase text-lg">PODCAST</div>
          <a
            href="https://podcasts.apple.com/gb/podcast/what-really-drives-political-action-in-the-real-world/id1394658598?i=1000518351187"
            className="font-title text-2xl md:text-3xl my-4 md:my-5 inline-block"
            target="_blank"
          >
            What Drives Political Action in the Real World | CEO Munich Security
            Conference, Benedikt Franke
          </a>
          <p>
            This is a masterclass on the nature of politics and how to better
            understand your world.
          </p>
        </div>
        <div className="">
          <div className="uppercase text-lg">Insights</div>
          <a
            href="/a-beginners-guide"
            target="_blank"
            className="font-title text-2xl md:text-3xl my-4 md:my-5 inline-block"
          >
            A Beginner’s Guide to Geopolitical Risk, and How it’s Impacting
            Fintech
          </a>
          <p>
            “Geopolitics is a phenomenon that is increasingly impacting the
            global fintech and financial services ecosystem. ”
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParetoThoughtLeadership;
