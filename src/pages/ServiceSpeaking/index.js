import React from "react";
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
const ServiceSpeaking = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection
        className="hero-service"
        title="Speaking that Inspires and Informs"
        h1width="max-w-[600px]"
        image={Hero}
      />
      <section className="ceo border-b border-black pb-[50px] md:pb-24">
        <div className="flex gap-10 max-w-[1100px] mx-auto">
          <div className="flex-1">
            <img src={Klisman} alt="Klisman Murati" width={300} height={600} />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-4xl leading-[1.2] md:leading-[1.3] mb-10">
                Want to ignite minds and inspire action? Book Pareto CEO,
                Klisman Murati as your headline speaker.
              </h3>
              <div className="text-xl font-extra">
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
            <Link to="" className="btn w-content max-w-[260px] inline-block">
              Download Speakers Pack
            </Link>
          </div>
        </div>
      </section>
      <section className="border-b border-black pb-[50px] md:pb-24 ">
        <div className="icons flex items-center flex-wrap [&>img]:w-[13%] gap-10 justify-between border-b border-black pb-[50px] md:pb-24">
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
        <section>
          <h2 className="text-4xl leading-[1.2] lg:text-6xl lg:leading-[1.3] lg:max-w-[650px]">
            Watch Murati in Action
          </h2>
        </section>
        <div className="flex max-lg:block mt-20 gap-10 mb-20">
          <div className="w-full flex-1">
            <p className="text-4xl w-[400px] pb-5">
              How to Understand the Changing World Order
            </p>
            <p className="text-xl font-extra w-[500px]">
              Helsinki 2024 | Watch Klisman Murati, CEO of Pareto Economics
              deliver the keynote address at the annual Telia DAY ONE conference
              to an assembly of business leaders in the telecommunications
              space.
            </p>
          </div>
          <div className="video-responsive">
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/aCFzDh63U1k?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
        <div className="flex max-lg:block gap-10 mb-20">
          <div className="video-responsive">
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/fUw6wyuU2Xk?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
          <div className="w-full flex-1">
            {" "}
            <p className="text-4xl w-[400px] pb-5">Global Power Summit 2023</p>
            <p className="text-xl font-extra w-[500px]">
              London 2024 | Join Murati, as he gives his keynote for Pareto’s
              flagship summit to an audience of senior business and government
              leaders
            </p>
          </div>
        </div>
        <div className="flex max-lg:block gap-10">
          <div className="w-full flex-1">
            <p className="text-4xl w-[400px] pb-5">Global Power Summit 2022</p>
            <p className="text-xl font-extra  w-[500px]">
              London 2023 | Murati opens up the first Global Power Summit at the
              London School of Economics. Watch his keynote now.
            </p>
          </div>
          <div className="video-responsive">
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/4b2MggrfgY8?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
      </section>
      <section className="">
        <div className="flex justify-between mt-8">
          <div className="flex-1 flex justify-between flex-col">
            <h2 className="text-3xl leading-[1.2] lg:text-6xl lg:leading-[1.3] max-w-[600px]">
              Keynotes Worth Sharing
            </h2>
            <div className="text-xl font-bold max-w-[500px] mb-10">
              These topics provide a great starting point for your event. Murati
              crafts personalized experiences by tailoring each talk to match
              the event's goals and the audience's interests.
            </div>
          </div>

          <div className="w-full flex-1 text-3xl">
            <div className="mt-32 pb-10 border-black border-b-2">
              <p>
                Navigating Geopolitical Shifts: Strategies for Business
                Resilience
              </p>

              <p className="text-xl pt-3">
                In an era marked by geopolitical volatility, understanding the
                intersection of global politics and business is imperative. This
                keynote explores actionable strategies for businesses to thrive
                amidst geopolitical uncertainties, emphasizing adaptable
                frameworks and risk mitigation techniques.
              </p>
            </div>

            <div className="mt-10 pb-10 border-black border-b-2">
              <p>
                Leadership in 2024: What it Takes to Lead in a World with New
                Rules
              </p>

              <p className="text-xl pt-3">
                As we step into a new phase of the 21st century, leadership
                paradigms are undergoing significant transformations. This
                keynote delves into the essential qualities and approaches that
                leaders must cultivate to effectively navigate the evolving
                landscape, focusing on critical thinking, long term strategy
                planning and vision building for their organisations.
              </p>
            </div>

            <div className="mt-10 pb-10 border-black border-b-2">
              <p>
                Elections in 2024: How Will they Shape the Future of Business
              </p>

              <p className="text-xl pt-3">
                2024 will be the most important year in recent memory. This talk
                delves into the new dimensions of strategic planning in the face
                of global and a volatile election year. Murati emphasizes
                agility, innovation, and scenario-based decision-making to stay
                ahead in dynamic markets, leveraging insights into 2024 and
                beyond.
              </p>
            </div>

            <div className="mt-10 pb-10 border-black border-b-2">
              <p>
                The Future of Global Business: Anticipating Trends and
                Opportunities
              </p>

              <p className="text-xl pt-3">
                Unraveling the prospects of global business in the upcoming
                years requires a keen understanding of emerging trends and
                potential opportunities. This keynote explores forecasts for
                various industries, unveiling key strategies for businesses to
                position themselves advantageously in an ever-evolving global
                marketplace.
              </p>
            </div>

            <div className="mt-10 pb-10 border-black border-b-2">
              <p>
                New Risks Requires New Thinking - How to Understand the Changing
                World Order”
              </p>

              <p className="text-xl pt-3">
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
      <section className="Testimonials max-w-[]">
        <h2 className="text-3xl leading-[1.2] lg:text-6xl lg:leading-[1.3] mb-20">
          Testimonials
        </h2>
        <div className="flex gap-24">
          <div className="flex-1 flex flex-col justify-between gap-[200px]">
            <div>
              <div className="text-2xl leading-[1.2] md:text-5xl md:leading-[1.3] mb-5">
                “His [Klisman’s] capability to catch the attention of the
                audience was astonishing”
              </div>
              <p className="font-extra text-lg">
                – General Ivan Caruso, Commander of the Italian Special Forces |
                Italian Army
              </p>
            </div>
            <div>
              <div className="text-2xl leading-[1.2] md:text-5xl md:leading-[1.3] mb-5">
                “Klisman has the unique ability to communicate highly complex
                topics in an easy to understand, thought provoking, fun, and
                engaging way.”
              </div>
              <p className="font-extra text-lg">– Barclays Bank</p>
            </div>
            <div>
              <div className="text-2xl leading-[1.2] md:text-5xl md:leading-[1.3] mb-5">
                “One of the best speakers we’ve had."
              </div>
              <p className="font-extra text-lg">– OP Financial Group</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col  justify-around">
            <div>
              <div className="text-2xl leading-[1.2] md:text-5xl md:leading-[1.3] mb-5">
                “Klisman thank you very much for a great presentation and
                excellent discussion”
              </div>
              <p className="font-extra text-lg">
                – -Dr Patricia Lewis – Research Director| Chatham House
              </p>
            </div>
            <div>
              <div className="text-2xl leading-[1.2] md:text-5xl md:leading-[1.3] mb-5">
                "Excellent talk by a speaker who knows his stuff.
              </div>
              <p className="font-extra text-lg">– AIG</p>
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
      <Footer />
    </div>
  );
};

export default ServiceSpeaking;
