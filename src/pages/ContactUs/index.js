import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="flex justify-center">
          <Link to="#">
            <img
              src="images/pareto-economics-logo.png"
              alt="Pareto Economics"
              width="90%"
              height="auto"
            />
          </Link>
        </div>
        <div className="col-span-3 text-white bg-black">
          <div className="text-end mt-8 mb-5">
            <button className="text-4xl mr-20">X</button>
          </div>
          <div className="flex justify-center">
            <form>
              <div className="mt-20 mb-20 text-white">
                <p>CONTACT / DASHBOARD DEMO / PARTNERSHIP INQUIRY</p>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <label for="fname" class="text-2xl uppercase">
                  first name
                  <span className="text-red-600 ms-4">*</span>
                </label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  class="block px-0 w-full text-2xl bg-transparent border-0 border-b-2  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <label for="lname" class="text-2xl uppercase">
                  last name
                  <span className="text-red-600 ms-4">*</span>
                </label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  class="block px-0 w-full text-2xl bg-transparent border-0 border-b-2  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <label for="company" class="text-2xl uppercase">
                  company/organisation
                  <span className="text-red-600 ms-4">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  class="block px-0 w-full text-2xl bg-transparent border-0 border-b-2  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <label for="jobtitle" class="text-2xl uppercase">
                  job title
                  <span className="text-red-600 ms-4">*</span>
                </label>
                <input
                  type="text"
                  name="jobtitle"
                  id="jobtitle"
                  class="block px-0 w-full text-2xl bg-transparent border-0 border-b-2  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <label for="email" class="text-2xl uppercase">
                  business email
                  <span className="text-red-600 ms-4">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="block px-0 w-full text-2xl bg-transparent border-0 border-b-2  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <label for="phone" class="text-2xl uppercase">
                  phone number
                  <span className="text-red-600 ms-4">*</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  class="block px-0 w-full text-2xl bg-transparent border-0 border-b-2  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <label for="topic" class="text-2xl uppercase">
                  topic
                  <span className="text-red-600 ms-4">*</span>
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
                  type="number"
                  name="phone"
                  id="phone"
                  class="block px-0 w-full text-2xl bg-transparent border-0 border-b-2  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>

              <label
                for="message"
                class="block mb-2 text-2xl font-medium uppercase"
              >
                tell us more...
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-2xl border-white border-2 bg-black"
              />
              <button
                type="submit"
                class=" mt-8 border-2 border-white w-80 h-12 px-6 hover:bg-white hover:text-black text-xl"
              >
                Submit
              </button>
              <div className="mt-10">
                <p>
                  Please see our
                  <Link>
                    <i className="border-white border-b-2 mx-2">
                      Privacy Policy
                    </i>
                  </Link>
                  regarding how we will
                  <br /> handle this information.
                </p>
              </div>
              <div className="mt-10 mb-10">
                <h3 className="text-bold">UK Office Number</h3>
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
