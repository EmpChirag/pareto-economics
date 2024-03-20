import React, { useState } from "react";
import HeroSection from "../../components/HeroSection";
import Hero from "../../assets/images/services-speaking.png";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import Klisman from "../../assets/images/klisman-murati.png";
import { Link } from "react-router-dom";
import Logo1 from "../../assets/images/Logos/Logo-1.png";
import Logo2 from "../../assets/images/Logos/Logo-2.png";
import Logo3 from "../../assets/images/Logos/Logo-3.png";
import Logo4 from "../../assets/images/Logos/Logo-4.png";
import Logo5 from "../../assets/images/Logos/Logo-5.png";
import Logo6 from "../../assets/images/Logos/Logo-6.png";
import Logo7 from "../../assets/images/Logos/Logo-7.png";
import Logo8 from "../../assets/images/Logos/Logo-8.png";
import Logo9 from "../../assets/images/Logos/Logo-9.png";
import Logo10 from "../../assets/images/Logos/Logo-10.png";
import Logo11 from "../../assets/images/Logos/Logo-11.png";
import Logo12 from "../../assets/images/Logos/Logo-12.png";
import Logo13 from "../../assets/images/Logos/Logo-13.png";
import Logo14 from "../../assets/images/Logos/Logo-14.png";
import Logo15 from "../../assets/images/Logos/Logo-15.png";
import Logo16 from "../../assets/images/Logos/Logo-16.png";
import Logo17 from "../../assets/images/Logos/Logo-17.png";
import Logo18 from "../../assets/images/Logos/Logo-18.png";
import { useForm } from "react-hook-form";
import { postEventRequest } from "../../api/eventApi";
const ServiceSpeaking = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [requestStatus, setRequestStatus] = useState(null);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setRequestStatus(null);
    try {
      await postEventRequest(data)
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

  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection
        className="hero-service"
        title="Speaking that Inspires and Informs"
        h1width="max-w-[600px]"
        image={Hero}
      />
      <section className="ceo border-b border-black pb-[60px] md:pb-24">
        <div className="flex gap-10 max-w-[1100px]  max-md:block">
          <div className="flex-1">
            <img src={Klisman} alt="Klisman Murati" width={300} height={600} />
          </div>
          <div className="flex-1 flex flex-col justify-between ">
            <div>
              <h3 className="max-md:mb-5 max-md:mt-5 mb-10">
                Want to ignite minds and inspire action? Book Pareto CEO,
                Klisman Murati as your headline speaker.
              </h3>
              <div className="">
                Regularly appearing on the international speaking circuit,
                Murati shapes the insights of global leaders in industry and
                policy making on topics related to globalisation, geopolitics,
                transformative technology and societal change.
                <br />
                <br />
                Contact Pierre Bisaillon for enquires:
                <br />
                <br />{" "}
                <a href="mailto:pierreb@projectspeaker.com">
                  pierreb@projectspeaker.com
                </a>
              </div>
            </div>
            <div></div>
            <Link
              to=""
              className="btn w-content max-w-[330px] max-md:px-3 inline-block mt-10"
            >
              Download Speakers Pack
            </Link>
          </div>
        </div>
      </section>
      <section className="border-b border-black pb-[60px] md:pb-24 ">
        {/* <div className="icons flex items-center flex-wrap md:[&>img]:w-[8%]   max-md:[&>img]:w-[28%] gap-6 md:gap-12 justify-between border-b border-black pb-[60px] md:pb-24"> */}
        <div className="icons  items-center grid grid-cols-3 md:grid-cols-6 xl:grid-cols-9 gap-10 md:gap-12 justify-between border-b border-black pb-[60px] md:pb-24">
          <img src={Logo1} alt="logo" />
          <img src={Logo2} alt="logo" />
          <img src={Logo3} alt="logo" />
          <img src={Logo4} alt="logo" />
          <img src={Logo5} alt="logo" />
          <img src={Logo6} alt="logo" />
          <img src={Logo7} alt="logo" />
          <img src={Logo8} alt="logo" />
          <img src={Logo9} alt="logo" />
          <img src={Logo10} alt="logo" />
          <img src={Logo11} alt="logo" />
          <img src={Logo12} alt="logo" />
          <img src={Logo13} alt="logo" />
          <img src={Logo14} alt="logo" />
          <img src={Logo15} alt="logo" />
          <img src={Logo16} alt="logo" />
          <img src={Logo17} alt="logo" />
          <img src={Logo18} alt="logo" />
        </div>
        <section className="mt-10">
          <h2 className=" lg:max-w-[650px]">Watch Murati in Action</h2>
        </section>
        <div className="flex max-lg:block mt-20 gap-10 mb-20 max-lg:mt-10  max-lg:mb-10">
          <div className="w-full flex-1 max-lg:mb-10">
            <h3 className="w-[400px] max-sm:w-full pb-5">
              How to Understand the Changing World Order
            </h3>
            <p className="w-[500px] max-md:w-full">
              Helsinki 2024 | Watch Klisman Murati, CEO of Pareto Economics
              deliver the keynote address at the annual Telia DAY ONE conference
              to an assembly of business leaders in the telecommunications
              space.
            </p>
          </div>
          <div className="video-responsive">
            <iframe
              src={`https://www.youtube.com/embed/aCFzDh63U1k?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              className="min-h-[300px]"
            />
          </div>
        </div>
        <div className="flex max-lg:flex-col-reverse gap-10 mb-20 max-lg:mb-10">
          <div className="video-responsive">
            <iframe
              src={`https://www.youtube.com/embed/fUw6wyuU2Xk?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              className="min-h-[300px]"
            />
          </div>
          <div className="w-full flex-1 ">
            {" "}
            <h3 className="w-[400px] max-sm:w-full pb-5">
              Global Power Summit 2023
            </h3>
            <p className="w-[500px] max-md:w-full">
              London 2024 | Join Murati, as he gives his keynote for Pareto’s
              flagship summit to an audience of senior business and government
              leaders
            </p>
          </div>
        </div>
        <div className="flex max-lg:block gap-10">
          <div className="w-full flex-1 max-lg:mb-10">
            <h3 className="w-[400px] max-sm:w-full pb-5">
              Global Power Summit 2022
            </h3>
            <p className=" w-[500px] max-md:w-full">
              London 2023 | Murati opens up the first Global Power Summit at the
              London School of Economics. Watch his keynote now.
            </p>
          </div>
          <div className="video-responsive">
            <iframe
              src={`https://www.youtube.com/embed/4b2MggrfgY8?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              className="min-h-[300px]"
            />
          </div>
        </div>
      </section>
      <section className="">
        <div className="flex justify-between mt-8 gap-10 max-md:block">
          <div className="flex-1 flex justify-between flex-col">
            <h2 className="max-w-[600px]">Keynotes Worth Sharing</h2>
            <div className="max-w-[500px] font-title font-bold max-md:w-full mb-10">
              These topics provide a great starting point for your event. Murati
              crafts personalized experiences by tailoring each talk to match
              the event's goals and the audience's interests.
            </div>
          </div>

          <div className="w-full flex-1">
            <div className="mt-32 pb-10 border-black border-b">
              <h3>
                Navigating Geopolitical Shifts: Strategies for Business
                Resilience
              </h3>

              <p className="pt-3">
                In an era marked by geopolitical volatility, understanding the
                intersection of global politics and business is imperative. This
                keynote explores actionable strategies for businesses to thrive
                amidst geopolitical uncertainties, emphasizing adaptable
                frameworks and risk mitigation techniques.
              </p>
            </div>

            <div className="mt-10 pb-10 border-black border-b">
              <h3>
                Leadership in 2024: What it Takes to Lead in a World with New
                Rules
              </h3>

              <p className="pt-3">
                As we step into a new phase of the 21st century, leadership
                paradigms are undergoing significant transformations. This
                keynote delves into the essential qualities and approaches that
                leaders must cultivate to effectively navigate the evolving
                landscape, focusing on critical thinking, long term strategy
                planning and vision building for their organisations.
              </p>
            </div>

            <div className="mt-10 pb-10 border-black border-b">
              <h3>
                Elections in 2024: How Will they Shape the Future of Business
              </h3>

              <p className="pt-3">
                2024 will be the most important year in recent memory. This talk
                delves into the new dimensions of strategic planning in the face
                of global and a volatile election year. Murati emphasizes
                agility, innovation, and scenario-based decision-making to stay
                ahead in dynamic markets, leveraging insights into 2024 and
                beyond.
              </p>
            </div>

            <div className="mt-10 pb-10 border-black border-b">
              <h3>
                The Future of Global Business: Anticipating Trends and
                Opportunities
              </h3>

              <p className="pt-3">
                Unraveling the prospects of global business in the upcoming
                years requires a keen understanding of emerging trends and
                potential opportunities. This keynote explores forecasts for
                various industries, unveiling key strategies for businesses to
                position themselves advantageously in an ever-evolving global
                marketplace.
              </p>
            </div>

            <div className="mt-10 pb-10 border-black md:border-b">
              <h3>
                New Risks Requires New Thinking - How to Understand the Changing
                World Order”
              </h3>

              <p className="pt-3">
                Navigating uncertainties isn't just about managing risks; it's
                about seizing hidden opportunities within them. This keynote
                unravels the symbiotic relationship between risk and
                opportunity, providing a framework to enhance risk management
                practices while cultivating a keen eye for recognising and
                capitalising on opportunities that emerge in dynamic
                environments.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="Testimonials border-t border-slate-950 my-10">
        <h2 className="mb-20 max-md:mb-10 mt-10">Testimonials</h2>
        <div className="flex gap-24 max-md:block">
          <div className="flex-1 flex flex-col justify-between gap-[200px] max-md:gap-[40px]">
            <div>
              <h3 className="text-2xl leading-[1.2] md:text-5xl md:leading-[1.3] mb-5">
                “His [Klisman’s] capability to catch the attention of the
                audience was astonishing”
              </h3>
              <p className="">
                – General Ivan Caruso, Commander of the Italian Special Forces |
                Italian Army
              </p>
            </div>
            <div>
              <h3 className="text-2xl leading-[1.2] md:text-5xl md:leading-[1.3] mb-5">
                “Klisman has the unique ability to communicate highly complex
                topics in an easy to understand, thought provoking, fun, and
                engaging way.”
              </h3>
              <p className="">– Barclays Bank</p>
            </div>
            <div>
              <h3 className="text-2xl leading-[1.2] md:text-5xl md:leading-[1.3] mb-5">
                “One of the best speakers we’ve had."
              </h3>
              <p className="">– OP Financial Group</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col  justify-around">
            <div>
              <h3 className="text-2xl leading-[1.2] md:text-5xl md:leading-[1.3] mb-5">
                “Klisman thank you very much for a great presentation and
                excellent discussion”
              </h3>
              <p className="">
                – -Dr Patricia Lewis – Research Director| Chatham House
              </p>
            </div>
            <div>
              <h3 className="text-2xl leading-[1.2] md:text-5xl md:leading-[1.3] mb-5">
                "Excellent talk by a speaker who knows his stuff.
              </h3>
              <p className="">– AIG</p>
            </div>
          </div>
        </div>
        <div>
          <button className="btn h-[50px] float-right">
            More Testimonials
          </button>
          <div className="clear-both"></div>
        </div>
      </section>
      <section className="border-t border-black pt-[60px] md:pt-24">
        <div className="flex max-md:block justify-between max-w-[1200px] ml-auto">
          <div>
            <h2 className=" lg:max-w-[600px] max-md:mb-10">
              Tell Us about your Event
            </h2>
          </div>

          <div className="md:flex md:justify-center ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative pb-7">
                <div className="relative z-0 w-full mb-5 group">
                  <label
                    htmlFor="fname"
                    className="text-2xl max-sm:text-base uppercase flex items-center"
                  >
                    first name
                    <span className="text-red-600 ms-4">*</span>
                  </label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    className="block px-0  w-full text-2xl max-sm:text-base  bg-transparent border-0 border-b 
                   appearance-none  border-black  
                   focus:outline-none focus:ring-0 focus:border-gray-300 peer"
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
                  <label
                    htmlFor="lname"
                    className="text-2xl max-sm:text-base uppercase flex items-center"
                  >
                    last name
                    <span className="text-red-600 ms-4">*</span>
                  </label>
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    className="block px-0  w-full text-2xl max-sm:text-base  bg-transparent border-0 border-b  appearance-none  border-black  focus:outline-none focus:ring-0 focus:border-gray-300 peer"
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
                  <label
                    htmlFor="company"
                    className="text-2xl max-sm:text-base uppercase flex items-center"
                  >
                    company/organisation
                    <span className="text-red-600 ms-4">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="block px-0  w-full text-2xl max-sm:text-base  bg-transparent border-0 border-b  appearance-none  border-black  focus:outline-none focus:ring-0 focus:border-gray-300 peer"
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
                  <label
                    htmlFor="email"
                    className="text-2xl max-sm:text-base uppercase flex items-center"
                  >
                    business email
                    <span className="text-red-600 ms-4">*</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="block px-0  w-full text-2xl max-sm:text-base  bg-transparent border-0 border-b  appearance-none  border-black  focus:outline-none focus:ring-0 focus:border-gray-300 peer"
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
                  <label
                    htmlFor="phone"
                    className="text-2xl max-sm:text-base uppercase flex items-center"
                  >
                    phone number
                    <span className="text-red-600 ms-4">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="block px-0  w-full text-2xl max-sm:text-base  bg-transparent border-0 border-b  appearance-none  border-black  focus:outline-none focus:ring-0 focus:border-gray-300 peer"
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

              <div className="relative pb-7">
                <div className="relative z-0 w-full mb-5 group">
                  <label
                    htmlFor="jobtitle"
                    className="text-2xl max-sm:text-base uppercase flex items-center"
                  >
                    WHERE IS THE EVENT BEING HELD?
                    <span className="text-red-600 ms-4">*</span>
                  </label>
                  <input
                    type="text"
                    name="jobtitle"
                    id="jobtitle"
                    className="block px-0  w-full text-2xl max-sm:text-base  bg-transparent border-0 border-b  appearance-none  border-black  focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                    placeholder=" "
                    {...register("eventLocation", {
                      required: "The event location is required.",
                    })}
                  />
                </div>
                {errors.eventLocation && (
                  <div className="error absolute bottom-4 text-red-500">
                    {errors.eventLocation.message}
                  </div>
                )}
              </div>

              <div className="relative pb-7">
                <div className="relative z-0 w-full mb-5 group">
                  <label
                    htmlFor="jobtitle"
                    className="text-2xl max-sm:text-base uppercase flex items-center"
                  >
                    EVENT DATE
                    <span className="text-red-600 ms-4">*</span>
                  </label>
                  <input
                    type="text"
                    name="jobtitle"
                    id="jobtitle"
                    className="block px-0  w-full text-2xl max-sm:text-base  bg-transparent border-0 border-b  appearance-none  border-black  focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                    placeholder=" "
                    {...register("eventDate", {
                      required: "The event date is required.",
                    })}
                  />
                </div>
                {errors.eventDate && (
                  <div className="error absolute bottom-4 text-red-500">
                    {errors.eventDate.message}
                  </div>
                )}
              </div>

              <div className="relative pb-7">
                <div className="relative z-0 w-full mb-5 group">
                  <label
                    htmlFor="jobtitle"
                    className="text-2xl max-sm:text-base uppercase flex items-center"
                  >
                    SPEAKER BUDGET (USD $)
                    <span className="text-red-600 ms-4">*</span>
                  </label>
                  <input
                    type="text"
                    name="jobtitle"
                    id="jobtitle"
                    className="block px-0  w-full text-2xl max-sm:text-base  bg-transparent border-0 border-b  appearance-none  border-black  focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                    placeholder=" "
                    {...register("speakerBudget", {
                      required: "The speaker budget is required.",
                    })}
                  />
                </div>
                {errors.speakerBudget && (
                  <div className="error absolute bottom-4 text-red-500">
                    {errors.speakerBudget.message}
                  </div>
                )}
              </div>

              {(!requestStatus || requestStatus === null) && (
                <button
                  type="submit"
                  className="btn mt-8  hover:text-white   after:hidden text-xl"
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
                  <Link className="underline hover:no-underline">
                    <i className="border-black mx-2">Privacy Policy</i>
                  </Link>
                  regarding how we will
                  <br /> handle this information.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceSpeaking;
