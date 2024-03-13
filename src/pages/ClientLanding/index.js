import React from "react";
import Header from "../../Layouts/Header";
import { Link } from "react-router-dom";
import Footer from "../../Layouts/Footer";
import ClientsCorporations from "../../assets/images/Clients-Corporations.png";
import ClientsInvestors from "../../assets/images/Clients-Investors.png"
import ClientsGovernments from "../../assets/images/Clients-Governments.png"
const ClientLanding = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <section>
        <div className="max-md:flex-col flex justify-between">
          <div className="flex-1 max-md:flex-col max-sm:flex-col border-b-2 pb-[16px] border-slate-900 flex">
            <h1 className="text-4xl leading-[1.2] lg:text-6xl font-semibold  flex-1">
              Clients
            </h1>
            <div className="flex  col-span-1">
              <h2 className="text-3xl max-w-[287px]">
                Pareto segments its clients into three broad categories.{" "}
              </h2>
              <br />
            </div>
          </div>
        </div>
        <section className="my-10">
          <div className="max-md:flex-col flex justify-between">
            <div className="flex-1">
              <img
                className="max-w-[70%] h-auto"
                src={ClientsCorporations}
              />
              <br/>
            </div>
            <div className="flex-1 justify-end col-span-1 border-b border-slate-900 pb-[28px]">
              <h4 className="text-3xl">Corporations</h4>
              <br />

              <div className="max-md:flex-col flex justify-end col-span-1">
                <p className="text-xl max-w-[300px]">
                  We partner with business leaders to guide business strategy.
                </p>

                <div className="col-span-1 flex-1">
                  <Link to="" className="btn3  w-[110px] self-end ">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-10">
          <div className="max-md:flex-col flex justify-between">
            <div className="flex-1">
              <img
                className="max-w-[70%] h-auto"
                src={ClientsInvestors}
              />
              <br/>
            </div>
            <div className="flex-1 justify-end col-span-1 border-b border-slate-900 pb-[28px]">
              <h4 className="text-3xl">Investors</h4>
              <br />

              <div className="max-md:flex-col flex justify-end col-span-1">
                <p className="text-xl max-w-[287px]">
                  We help capital allocators manage risk using our data first
                  methodology..
                </p>

                <div className="col-span-1 flex-1">
                  <Link to="" className="btn3 w-[110px] self-end">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10">
          <div className="max-md:flex-col flex justify-between">
            <div className="flex-1">
              <img
                className="max-w-[70%] h-auto"
                src={ClientsGovernments}
              />
              <br/>
            </div>
            <div className="flex-1 justify-end col-span-1">
              <h4 className="text-3xl">Governments</h4>
              <br />

              <div className="flex max-md:flex-col  justify-end col-span-1">
                <p className="text-xl max-w-[286px]">
                  We support governments to build and transform economies.
                </p>

                <div className="col-span-1 flex-1 max-lg:ml-[26px] max-sm:ml-0 max-md:ml-0">
                  <Link to="" className="btn3 w-[110px] self-end">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer contact ptext="Get in touch to explore how we can partner today." />
    </div>
  );
};
export default ClientLanding;
