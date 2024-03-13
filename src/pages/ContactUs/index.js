import React from "react";
import { Link } from "react-router-dom";
import ParetoEconomics from "../../assets/images/pareto-economics-logo.png";

const ContactUs = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        <div className="flex justify-center md:col-span-1">
          <Link to="/">
            <img
              src={ParetoEconomics}
              alt="Pareto Economics"
              width="90%"
              height="auto"
            />
          </Link>
        </div>
        <div className="md:col-span-3 text-white bg-black">
          <div className="text-end mt-8 mb-5">
            <Link className="text-4xl mr-20" to="/">
              X
            </Link>
          </div>
          <div className="flex justify-center">
            <form className="w-full md:w-2/3 lg:w-1/2">
              <div className="mt-20 mb-20 text-white text-center md:text-left">
                <p>CONTACT / DASHBOARD DEMO / PARTNERSHIP INQUIRY</p>
              </div>
              <div className="mb-5 group">
                <label htmlFor="fname" className="text-xl uppercase">
                  First Name
                  <span className="text-red-600 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  className="block w-full text-xl border-b border-white bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-blue-600 peer"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-5 group">
                <label htmlFor="lname" className="text-xl uppercase">
                  last name
                  <span className="text-red-600 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  className="block w-full text-xl border-b border-white bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-blue-600 peer"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-5 group">
                <label htmlFor="company" className="text-xl uppercase">
                  company/organisation
                  <span className="text-red-600 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className="block w-full text-xl border-b border-white bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-blue-600 peer"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-5 group">
                <label htmlFor="jobtitle" className="text-xl uppercase">
                  Job title
                  <span className="text-red-600 ml-1">*</span>
                </label>
                <input
                  type="text"
                  name="jobtitle"
                  id="jobtitle"
                  className="block w-full text-xl border-b border-white bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-blue-600 peer"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-5 group">
                <label htmlFor="email" className="text-xl uppercase">
                  Business Email
                  <span className="text-red-600 ml-1">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full text-xl border-b border-white bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-blue-600 peer"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-5 group">
                <label htmlFor="phone" className="text-xl uppercase">
                  Phone Number
                  <span className="text-red-600 ml-1">*</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="block w-full text-xl border-b border-white bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-blue-600 peer"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-5 group">
                <label htmlFor="phone" className="text-xl uppercase">
                  Topic
                  <span className="text-red-600 ml-1">*</span>
                </label>
                <div className="flex">
                  <ul>
                    <li>
                      <button
                        type="button"
                        className="border my-2 mx-2 border-white w-40 h-12 px-3 focus:bg-white focus:text-black"
                      >
                        INDEX DASHBOARD
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="border my-2 mx-2 border-white  w-40 h-12 px-3 focus:bg-white focus:text-black"
                      >
                        SERVICES
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="border my-2 mx-2 border-white w-40 h-12 px-3 focus:bg-white focus:text-black"
                      >
                        EVENTS
                      </button>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <button
                        type="button"
                        className="border my-2 mx-2 border-white w-40 h-12 px-3 focus:bg-white focus:text-black"
                      >
                        MEDIA REQUEST
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="border my-2 mx-2 border-white  w-40 h-12 px-3 focus:bg-white focus:text-black"
                      >
                        CAREERS
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="border my-2 mx-2 border-white w-40 h-12 px-3 focus:bg-white focus:text-black"
                      >
                        OTHER
                      </button>
                    </li>
                  </ul>
                </div>
                <input
                  type="text"
                  name="topic"
                  id="topic"
                  className="block w-full text-xl border-b border-white bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:border-blue-600 peer"
                  placeholder=""
                  required
                />
              </div>
              <div className="mb-5 group">
                <label
                  htmlFor="message"
                  className="block mb-2 text-xl font-medium uppercase"
                >
                  Tell Us More...
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block w-full p-2.5 text-xl border-white border bg-black"
                />
              </div>
              <button
                type="submit"
                className="mt-8 w-80 h-12 border border-white hover:bg-white hover:text-black text-xl"
              >
                Submit
              </button>
              <div className="mt-10">
                <p>
                  Please see our
                  <Link>
                    <i className="border-white border-b mx-2">Privacy Policy</i>
                  </Link>
                  regarding how we will handle this information.
                </p>
              </div>
              <div className="mt-10 mb-10">
                <h3 className="">UK Office Number</h3>
                <p className="mt-3">+44 (0) 20 8154 3425</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
