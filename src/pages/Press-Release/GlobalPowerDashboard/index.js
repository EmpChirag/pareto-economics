import React, { useState } from "react";
import Footer from "../../../Layouts/Footer";
import Header from "../../../Layouts/Header";
import { Link } from 'react-router-dom';

const GlobalPowerDashboard = () => {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const handleSharePageLink = (shareTo) => {
    if (window?.location?.href && shareTo) {
      switch (shareTo) {
        case "FACEBOOK":
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
            "_blank"
          );
          break;
        case "WHATSAPP":
          window.open(`https://wa.me/?text=${window.location.href}`, "_blank");
          break;
        case "TWITTER":
          window.open(
            `https://twitter.com/intent/tweet?url=${window.location.href}`,
            "_blank"
          );
          break;
        case "LINKEDIN":
          window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`,
            "_blank"
          );
          break;
        case "EMAIL":
          window.open(`mailto:?body=${window.location.href}`, "_blank");
          break;
        case "COPY":
          navigator.clipboard
            .writeText(window.location.href)
            .then(() => {
              setShowCopiedMessage(true);
              setTimeout(() => {
                setShowCopiedMessage(false);
              }, 2000); // Hide the message after 5 seconds
            })
            .catch((error) => {
              console.error("Error copying text: ", error);
            });
          break;
        default:
          return;
      }
    }
  };
  return (
    <>
      <div className="container mx-auto px-5">
        <Header />
      </div>
      <div className="max-w-[1180px] mx-auto px-5">
        <h1 className="text-[24px] md:text-[60px] leading-[1.2] mb-10  mt-10 break-all">
          Pareto Economics Launches Global Power Dashboard
        </h1>
        <div className="md:flex block  items-center justify-between">
          <div>
            <p>
              March 27<sup>th</sup>, 2024
            </p>
          </div>
          <div className="flex items-center md:mt-0 mt-4">
            <img src="images/icons/share.svg" className="w-[20px] mr-2" />:{" "}
            <div className="social flex gap-1 pl-2 relative">
              <a
                className="cursor-pointer"
                onClick={() => handleSharePageLink("FACEBOOK")}
              >
                <img
                  src="/images/icons/facebook.svg"
                  alt="youtube"
                  height="30"
                  width="30"
                  className="h-[30px] w-[30px]"
                />
              </a>
              <a
                className="cursor-pointer"
                onClick={() => handleSharePageLink("WHATSAPP")}
              >
                <img
                  src="/images/icons/whatsapp.svg"
                  alt="youtube"
                  height="30"
                  width="30"
                  className="h-[30px] w-[30px]"
                />
              </a>
              <a
                className="cursor-pointer"
                onClick={() => handleSharePageLink("TWITTER")}
              >
                <img
                  src="/images/icons/twitter.svg"
                  alt="X"
                  height="30"
                  width="30"
                  className="h-[30px] w-[30px]"
                />
              </a>
              <a
                className="cursor-pointer"
                onClick={() => handleSharePageLink("LINKEDIN")}
              >
                <img
                  src="/images/icons/linkedin.svg"
                  alt="Linkedin"
                  height="30"
                  width="30"
                  className="h-[30px] w-[30px]"
                />
              </a>
              <a
                className="cursor-pointer"
                onClick={() => handleSharePageLink("EMAIL")}
              >
                <img
                  src="/images/icons/email.svg"
                  alt="youtube"
                  height="30"
                  width="30"
                  className="h-[30px] w-[30px]"
                />
              </a>
              <a
                className="cursor-pointer copytext"
                onClick={() => handleSharePageLink("COPY")}
              >
                <img
                  src="/images/icons/copy.svg"
                  alt="youtube"
                  height="30"
                  width="30"
                  className="h-[30px] w-[30px]"
                />
              </a>
              {showCopiedMessage && (
                <div className="absolute right-0 top-[110%] text-sm w-1/2 rounded-lg p-2 bg-black shadow-lg text-white">
                  Link copied successfully!
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="h-6" />
        <div className="h-6" />
        <div className="entry-content clear">
          <p>
            
              Pareto Economics, today launches the Global Power Dashboard, a
              cutting-edge enterprise SaaS product made for capital allocators,
              corporate leaders and policy makers. This innovative platform
              provides access to the Global Power Index and six sub-indices,
              including Active Consumer Market, Military Balance, Technological
              Leadership, Systemically Important Commodities, Geo-Strategic
              Positioning, and Financial Strength, empowering decision-makers
              with comprehensive insights into global dynamics.
          </p>
          <div className="h-6" />
          <p>
            <strong>
              LONDON, UK. March 27<sup>th</sup> , 2024-{" "}
            </strong>
            The Global Power Dashboard is not just a data repository; it's a
            powerful toolkit for informed decision-making. Here are some key
            features and benefits:
          </p>
          <div className="h-6" />
          <ul class="list-decimal pl-5 mt-5 leading-[2]">
            <li>
              <strong>Advanced Data Visualisations:</strong> Users can explore
              complex datasets through intuitive visualisations, making it
              easier to identify trends, patterns, and correlations.
            </li>
            <li>
              <strong>Comparison Tools:</strong> The platform allows for
              effortless comparisons between countries, regions, indices and
              time periods, enabling users to gain deeper insights into global
              dynamics.
            </li>
            <li>
              <strong>Bespoke Written Analyses:</strong> Tailored written
              analyses provide valuable context and interpretation of the data,
              ensuring users can make informed decisions based on comprehensive
              insights.
            </li>
            <li>
              <strong>11 Years of Historical Data:</strong> With access to over
              a decade's worth of historical data, decision-makers can analyze
              long-term trends and anticipate future developments with greater
              accuracy.
            </li>
            <li>
              <strong>Freemium Model:</strong> The platform operates on a
              'freemium' model, offering basic functionality for free while
              providing the option for users to unlock the full power of the
              dashboard through a paid subscription. This ensures flexibility
              and affordability for users at every level.
            </li>
          </ul>
          <div className="h-6" />
          <div className="h-6" />
          <em>
            <strong>
              "The Global Power Dashboard is more than just a tool; it's a
              game-changer for decision-makers across industries," said Klisman
              Murati, CEO at Pareto Economics. "By providing access to
              comprehensive data, advanced analytics, and tailored insights,
              we're empowering our users to navigate the complexities of the
              global landscape with confidence and clarity."
            </strong>
          </em>
          <div className="h-6" />
          <div className="h-6" />
          <p>
            From assessing market opportunities to understanding geopolitical
            risks, the Global Power Dashboard equips decision-makers with the
            tools they need to stay ahead in an ever-changing world. For more
            information about the Global Power Dashboard and how it can
            transform decision-making for your organization, please visit{" "}
            <Link to="/global-power-index">Here</Link>.
          </p>{" "}
          <div className="h-6" />
          <div className="h-6" />
          <p>
            About Pareto Economics: Pareto Economics is a leading provider of
            data analytics and economic intelligence solutions. With a focus on
            mapping the future of global development, Pareto Economics delivers
            cutting-edge software, research, consulting and speaking services
            for success in a dynamic world.
            <div className="h-6" />
            <div className="h-6" />
            <strong>Contact: </strong>
            <div className="h-6" />
            Chris Questly <div className="h-6" />
            Head of Outreach, Pareto Economics. <div className="h-6" />
            <a href="mailto:chris.q@pareto-economics.com">
              chris.q@pareto-economics.com
            </a>{" "}
            <div className="h-6" />
            <a href="https://pareto-economics.com">pareto-economics.com</a>
          </p>
        </div>
      </div>
      <div className="container mx-auto px-5">
        {" "}
        <Footer />
      </div>
    </>
  );
};

export default GlobalPowerDashboard;
