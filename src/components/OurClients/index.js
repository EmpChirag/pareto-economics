import React from 'react'
import { Link } from 'react-router-dom';

const OurClients = () => {
    return (
      <section>
        <div className="title flex max-md:flex-col gap-5 md:items-center justify-between border-t border-black py-10">
          <h2 className="text-4xl font-bold leading-[1.2] lg:text-6xl lg:leading-[1.3] flex-1">
            Our Clients
          </h2>
          <h3 className="font-bold flex-1">
            We Partner With Global Stakeholders
          </h3>
        </div>
        <div className="flex items-start max-md:flex-col gap-5 justify-between border-t border-b border-dashed border-black py-10">
          <h3 className="flex-1">Investors</h3>
          <div className="text-[34px] font-title flex-1 flex flex-col">
            <div className="flex-1">
              We help capital allocators manage risk using our data first
              methodology
            </div>
            <Link to="/clients-investors" className="btn3 mt-5 w-[110px] self-end">
              Explore
            </Link>
            <div className="clear-both"></div>
          </div>
        </div>
        <div className="flex items-start max-md:flex-col gap-5 justify-between border-b border-dashed border-black py-10">
          <h3 className="flex-1">Corporations</h3>
          <div className="text-[34px] font-title flex-1 flex flex-col">
            <div className="flex-1 ">
              We partner with business leaders to guide business strategy
            </div>
            <Link to="/clients-corporations" className="btn3 mt-5 w-[110px] self-end">
              Explore
            </Link>
            <div className="clear-both"></div>
          </div>
        </div>
        <div className="flex items-start max-md:flex-col gap-5 justify-between border-b  border-black py-10">
          <h3 className="flex-1">Governments</h3>
          <div className="text-[34px] font-title flex-1 flex flex-col">
            <div className="flex-1 ">
              We support governments to build and transform economies
            </div>
            <Link to="/clients-governments" className="btn3 mt-5 w-[110px] self-end">
              Explore
            </Link>
            <div className="clear-both"></div>
          </div>
        </div>
      </section>
    );
}

export default OurClients