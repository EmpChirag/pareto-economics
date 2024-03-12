import React from 'react'

const ParetoThoughtLeadership = () => {
  return (
    <section>
      <h2 className="text-4xl leading-[1.2] lg:text-6xl lg:leading-[1.3] lg:max-w-[780px]">
        Pareto Thought Leadership - In Action
      </h2>
      <div className="flex justify-between max-md:flex-col mt-10 gap-5 md:gap-10">
        <h4 className="text-3xl md:my-5 max-w-[500px]">
          How To Understand The Changing World Order
        </h4>
        <div className="max-w-[600px] text-2xl">
          Helsinki 2024 | Watch Klisman Murati, CEO of Pareto Economics deliver
          the keynote address at the annual Telia DAY ONE conference to an
          assembly of business leaders in the telecommunications space.
        </div>
      </div>
      <img
        src="https://source.unsplash.com/random"
        alt="Pareto Thought Leadership In Action"
        height="492"
        width="1480"
        className="object-cover w-full h-[592px] mt-10"
      />
      <div className="mt-8 flex max-md:flex-col gap-10 md:px-10">
        <div className="">
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
        <div className="">
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
        <div className="">
          <div className="uppercase font-extra text-2xl">Insights</div>
          <h3 className="text-3xl my-4 md:my-5">
            A Beginner’s Guide to Geopolitical Risk, and How it’s Impacting
            Fintech
          </h3>
          <p className="font-extra text-2xl">
            “Geopolitics is a phenomenon that is increasingly impacting the
            global fintech and financial services ecosystem. ”
          </p>
        </div>
      </div>
    </section>
  );
}

export default ParetoThoughtLeadership