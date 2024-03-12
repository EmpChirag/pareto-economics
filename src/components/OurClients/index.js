import React from 'react'
import { Link } from 'react-router-dom';

const OurClients = () => {
    return (
      <section>
        <div className="title flex items-center justify-between border-t border-black py-10">
          <h2 className="text-4xl font-bold leading-[1.2] lg:text-6xl lg:leading-[1.3] flex-1">
            Our Clients
          </h2>
          <div className="text-4xl font-bold flex-1">
            We Partner With Global Stakeholders
          </div>
        </div>
        <div className="flex items-start justify-between border-t border-b border-dashed border-black py-10">
          <h4 className="text-3xl flex-1">Investors</h4>
          <div className="text-2xl flex-1 flex flex-col">
            <div className="flex-1 ">
              We help capital allocators manage risk using our data first
              methodology
            </div>
            <Link to="" className="btn3 mt-5 w-[110px] self-end">
              Explore
            </Link>
            <div className="clear-both"></div>
          </div>
        </div>
        <div className="flex items-start justify-between border-b border-dashed border-black py-10">
          <h4 className="text-3xl flex-1">Corporations</h4>
          <div className="text-2xl flex-1 flex flex-col">
            <div className="flex-1 ">
              We partner with business leaders to guide business strategy
            </div>
            <Link to="" className="btn3 mt-5 w-[110px] self-end">
              Explore
            </Link>
            <div className="clear-both"></div>
          </div>
        </div>
        <div className="flex items-start justify-between border-b  border-black py-10">
          <h4 className="text-3xl flex-1">Governments</h4>
          <div className="text-2xl flex-1 flex flex-col">
            <div className="flex-1 ">
              We support governments to build and transform economies
            </div>
            <Link to="" className="btn3 mt-5 w-[110px] self-end">
              Explore
            </Link>
            <div className="clear-both"></div>
          </div>
        </div>
      </section>
    );
}

export default OurClients