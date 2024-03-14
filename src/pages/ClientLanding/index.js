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
          <div className="flex-1 max-md:flex-col max-sm:flex-col border-b pb-[16px] border-slate-900 flex">
            <h1 className="   flex-1">Clients</h1>
            <div className="flex md:justify-end pt-2">
              <h3 className="max-w-[287px]">
                Pareto segments its clients into three broad categories.{" "}
              </h3>
            </div>
          </div>
        </div>
        <section className="my-10">
          <div className="max-md:flex-col flex justify-between">
            <div className="flex-1">
              <img
                className="md:max-w-[75%] h-auto"
                src={ClientsCorporations}
              />
              <br />
            </div>
            <div className="flex-1 justify-end border-b border-slate-900 pb-[28px]">
              <h4 className="font-body text-2xl font-bold mb-5">
                Corporations
              </h4>

              <div className="max-md:flex-col flex justify-end md:items-center gap-5">
                <p className=" max-w-[350px]">
                  We partner with business leaders to guide business strategy.
                </p>

                <div className="flex-1 max-md:mt-4 2xl:pl-[92px] lg:pl-[34px] md:pl-0">
                  <Link
                    to="/clients-corporations"
                    className="btn2 self-end min-w-[115px]  max-md:w-4/5"
                  >
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
              <img className="md:max-w-[75%] h-auto" src={ClientsInvestors} />
              <br />
            </div>
            <div className="flex-1 justify-end border-b border-slate-900 pb-[28px]">
              <h4 className="font-body text-2xl font-bold mb-5">Investors</h4>

              <div className="max-md:flex-col flex justify-end md:items-center gap-5">
                <p className=" max-w-[350px]">
                  We help capital allocators manage risk using our data first
                  methodology..
                </p>

                <div className="flex-1 max-md:mt-4 2xl:pl-[92px] lg:pl-[34px] md:pl-0">
                  <Link
                    to="/clients-investors"
                    className="btn2 self-end min-w-[115px] max-md:w-4/5"
                  >
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
              <img className="md:max-w-[75%] h-auto" src={ClientsGovernments} />
              <br />
            </div>
            <div className="flex-1 justify-end">
              <h4 className="font-body text-2xl font-bold mb-5">Governments</h4>

              <div className="flex max-md:flex-col justify-end md:items-center">
                <p className=" max-w-[350px]">
                  We support governments to build and transform economies.
                </p>

                <div className="flex-1 max-md:mt-4 2xl:pl-[92px] lg:pl-[34px] md:pl-0">
                  <Link
                    to="/clients-governments"
                    className="btn2 self-end min-w-[115px] max-md:w-4/5"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer
        contact
        ptext="Get in touch to explore how we can partner today."
      />
    </div>
  );
};
export default ClientLanding;
