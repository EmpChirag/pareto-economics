import React, { useState } from "react";
import { Link } from "react-router-dom";
import ParetoEconomics from "../../assets/images/pareto-logo.webp";
import { useForm } from "react-hook-form";
import { postContactRequest } from "../../api/contactApi";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [requestStatus, setRequestStatus] = useState(null);
  const [topic, setTopic] = useState(null);

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setRequestStatus(null);
    try {
      const topicData =
        data.topic && data.topic.toLowerCase() === "other"
          ? data.otherTopic
          : data.topic;

      const postObj = {
        firstName: data.firstName,
        lastName: data.lastName,
        companyName: data.companyName,
        jobTitle: data.jobTitle,
        email: data.email,
        phoneNumber: data.phoneNumber,
        topic: topicData,
        message: data.message,
      };

      await postContactRequest(postObj)
        .then((response) => {
          reset();
          setRequestStatus(response);
        })
        .catch((error) => {
          setRequestStatus({
            status: false,
            message: error.message
              ? error.message
              : "Something went wrong please try again.",
          });
        });
    } catch (error) {
      setRequestStatus({
        status: false,
        message: error.message
          ? error.message
          : "Something went wrong please try again.",
      });
    }

    setIsLoading(false);

    setTimeout(() => {
      setRequestStatus(null);
    }, 2000);
  };

  const handleChangeTopic = (value) => {
    setValue("topic", value);
    setTopic(value);
    clearErrors("topic");
    if (value && value.toLowerCase() !== "other") clearErrors("otherTopic");
  };

  return (
    <div>
      <div className="grid max-sm:grid-cols-2 grid-cols-4 gap-4">
        <div className="flex justify-center">
          <Link to="/">
            <img
              src={ParetoEconomics}
              alt="Pareto Economics"
              width="240"
              height="auto"
              className='w-[80%]'
            />
          </Link>
        </div>
        <div className="col-span-3 text-white bg-black">
          <div className="text-end mt-8 mb-5">
            <Link className="text-4xl mr-20 max-sm:mr-12" to="/">
              X
            </Link>
          </div>
          <div className="md:flex md:justify-center px-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-20 mb-20 text-white">
                <p>CONTACT / DASHBOARD DEMO / PARTNERSHIP INQUIRY</p>
              </div>
              <div className="relative pb-7">
                <div className="relative z-0 w-full mb-5 group">
                  <label htmlFor="fname" className="text-xl uppercase">
                    first name
                    <span className="text-red-600 ms-4">*</span>
                  </label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    className="block px-0 w-full text-xl bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    placeholder=" "
                    {...register("firstName", {
                      required: "The first name is required.",
                    })}
                  />
                </div>
                {errors.firstName && (
                  <div className="error absolute bottom-4 text-red-500">
                    {errors.firstName.message}
                  </div>
                )}
              </div>

              <div className="relative pb-7">
                <div className="relative z-0 w-full mb-5 group">
                  <label htmlFor="lname" className="text-xl uppercase">
                    last name
                    <span className="text-red-600 ms-4">*</span>
                  </label>
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    className="block px-0 w-full text-xl bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    placeholder=" "
                    {...register("lastName", {
                      required: "The last name is required.",
                    })}
                  />
                </div>
                {errors.lastName && (
                  <div className="error absolute bottom-4 text-red-500">
                    {errors.lastName.message}
                  </div>
                )}
              </div>

              <div className="relative pb-7">
                <div className="relative z-0 w-full mb-5 group">
                  <label htmlFor="company" className="text-xl uppercase">
                    company/organisation
                    <span className="text-red-600 ms-4">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="block px-0 w-full text-xl bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    placeholder=" "
                    {...register("companyName", {
                      required: "The company/organisation is required.",
                    })}
                  />
                </div>
                {errors.companyName && (
                  <div className="error absolute bottom-4 text-red-500">
                    {errors.companyName.message}
                  </div>
                )}
              </div>

              <div className="relative pb-7">
                <div className="relative z-0 w-full mb-5 group">
                  <label htmlFor="jobtitle" className="text-xl uppercase">
                    job title
                    <span className="text-red-600 ms-4">*</span>
                  </label>
                  <input
                    type="text"
                    name="jobtitle"
                    id="jobtitle"
                    className="block px-0 w-full text-xl bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    placeholder=" "
                    {...register("jobTitle", {
                      required: "The job title is required.",
                    })}
                  />
                </div>
                {errors.jobTitle && (
                  <div className="error absolute bottom-4 text-red-500">
                    {errors.jobTitle.message}
                  </div>
                )}
              </div>

              <div className="relative pb-7">
                <div className="relative z-0 w-full mb-5 group">
                  <label htmlFor="email" className="text-xl uppercase">
                    business email
                    <span className="text-red-600 ms-4">*</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="block px-0 w-full text-xl bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    placeholder=" "
                    {...register("email", {
                      required: "The business email is required.",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Please enter valid email.",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <div className="error absolute bottom-4 text-red-500">
                    {errors.email.message}
                  </div>
                )}
              </div>

              <div className="relative pb-7">
                <div className="relative z-0 w-full mb-5 group">
                  <label htmlFor="phone" className="text-xl uppercase">
                    phone number
                    <span className="text-red-600 ms-4">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="block px-0 w-full text-xl bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    placeholder=" "
                    {...register("phoneNumber", {
                      required: "The phone number is required.",
                      pattern: {
                        value: /^\d+$/,
                        message: "Please enter valid phone number.",
                      },
                    })}
                  />
                </div>
                {errors.phoneNumber && (
                  <div className="error absolute bottom-4 text-red-500">
                    {errors.phoneNumber.message}
                  </div>
                )}
              </div>

              <div className="pb-7 relative">
                <div className="relative z-0 w-full mb-5 group">
                  <label htmlFor="topic" className="text-xl uppercase">
                    topic
                    <span className="text-red-600 ms-4">*</span>
                  </label>

                  <div className="flex">
                    <ul>
                      <li>
                        <button
                          type="button"
                          className={`text-sm border my-2 mx-2 border-white w-40 max-sm:w-32 h-12 px-3 ${
                            topic &&
                            topic.toLowerCase() === "index dashboard" &&
                            "bg-white text-black"
                          }`}
                          onClick={() => handleChangeTopic("Index Dashboard")}
                        >
                          INDEX DASHBOARD
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className={`text-sm border my-2 mx-2 border-white  w-40 max-sm:w-32 h-12 px-3 ${
                            topic &&
                            topic.toLowerCase() === "services" &&
                            "bg-white text-black"
                          }`}
                          onClick={() => handleChangeTopic("Services")}
                        >
                          SERVICES
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className={`text-sm border my-2 mx-2 border-white w-40 max-sm:w-32 h-12 px-3 ${
                            topic &&
                            topic.toLowerCase() === "events" &&
                            "bg-white text-black"
                          }`}
                          onClick={() => handleChangeTopic("Events")}
                        >
                          EVENTS
                        </button>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <button
                          type="button"
                          className={`text-sm border my-2 mx-2 border-white w-40 max-sm:w-32 h-12 px-3 ${
                            topic &&
                            topic.toLowerCase() === "media request" &&
                            "bg-white text-black"
                          }`}
                          onClick={() => handleChangeTopic("Media Request")}
                        >
                          MEDIA REQUEST
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className={`text-sm border my-2 mx-2 border-white  w-40 max-sm:w-32 h-12 px-3 ${
                            topic &&
                            topic.toLowerCase() === "careers" &&
                            "bg-white text-black"
                          }`}
                          onClick={() => handleChangeTopic("Careers")}
                        >
                          CAREERS
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className={`text-sm border my-2 mx-2 border-white w-40 max-sm:w-32 h-12 px-3 ${
                            topic &&
                            topic.toLowerCase() === "other" &&
                            "bg-white text-black"
                          }`}
                          onClick={() => handleChangeTopic("Other")}
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
                    className="hidden"
                    placeholder=" "
                    {...register("topic", {
                      required: "The topic is required.",
                    })}
                  />

                  {topic && topic.toLowerCase() === "other" && (
                    <input
                      type="text"
                      name="otherTopic"
                      id="otherTopic"
                      className="block px-0 w-full text-xl bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                      placeholder=" "
                      {...register("otherTopic", {
                        required:
                          topic && topic.toLowerCase() === "other"
                            ? "The other topic is required."
                            : false,
                      })}
                    />
                  )}
                </div>
                {errors.topic && (
                  <div className="error absolute bottom-4 text-red-500">
                    {errors.topic.message}
                  </div>
                )}
                {errors.otherTopic && (
                  <div className="error absolute bottom-4 text-red-500">
                    {errors.otherTopic.message}
                  </div>
                )}
              </div>

              <label
                htmlFor="message"
                className="block mb-2 text-xl font-medium uppercase"
              >
                tell us more...
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-xl border-white border-2 bg-black"
                {...register("message")}
              />

              {(!requestStatus || requestStatus === null) && (
                <button
                  type="submit"
                  className=" mt-8 border-2 border-white w-80 h-12 px-6 hover:bg-white hover:text-black text-xl"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Submit"}
                </button>
              )}

              {requestStatus && requestStatus.status === true && (
                <div className="error bottom-4 text-green-500">
                  {requestStatus.message}
                </div>
              )}

              {requestStatus && requestStatus.status === false && (
                <div className="error bottom-4 text-red-500">
                  {requestStatus.message}
                </div>
              )}

              <div className="mt-10">
                <p>
                  Please see our
                  <Link>
                    <i className="border-white border-b mx-2">Privacy Policy</i>
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
