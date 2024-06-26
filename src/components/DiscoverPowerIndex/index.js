import React from 'react'
import { Link } from 'react-router-dom';
const DiscoverPowerIndex = () => {
    return (
      <section className="DiscoverPowerIndex">
        <div className="md:inline-block md:w-[45%]">
          <h2 className="">
            Discover how the Global Power Index (GPI) can shape decision making
            at the highest levels.
          </h2>
          <h3 className="mt-10">
            We have pioneered a new approach to geo-economic analysis that
            empowers organisations to make more informed decisions.
          </h3>
        </div>
        <div className="md:inline-block md:w-[55%] max-md:pt-10 md:pl-10 align-top">
          <img
            src="/images/home/global-power-analytics.png"
            alt="Global Power Analytics"
            height="200"
            width="400"
            className=" w-full "
          />
          <Link to="/global-power-index" className="btn2 mt-10 md:mt-14">
            Learn More
          </Link>
        </div>
      </section>
    );
}

export default DiscoverPowerIndex