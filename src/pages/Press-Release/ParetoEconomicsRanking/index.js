import React, { useState } from "react";
import Footer from "../../../Layouts/Footer";
import Header from "../../../Layouts/Header";
import { Helmet } from "react-helmet";

const ParetoEconomicsRanking = () => {
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
      <Helmet>
        <title>Global Power Index 2022 Ranking | Pareto Economics</title>
        <meta name='description' content='Pareto Economics launches the “Global Power Index 2022 ranking” with an exclusive in person event for business, finance and policy leaders at the London School of Economics. Read more here...' />
        <link rel="canonical" href="https://www.pareto-economics.com/global-power-index-2022-launch-press-release" />
        <meta name="robots" content="follow, index, all" />
      </Helmet>
        <Header />
      </div>
      <div className="max-w-[1180px] mx-auto px-5">
        <h1 className="text-[24px] md:text-[60px] leading-[1.2] mb-10  mt-10">
          Pareto Economics to unveil ranking of the most powerful countries in
          2023 at their annual Global Power Index Summit in London
        </h1>
        <div className="md:flex block  items-center justify-between">
          <div>
            January 26<sup>th</sup> , 2023
          </div>
          <div className="flex items-center md:mt-0 mt-4">
            <img src="images/icons/share.svg" className="w-[20px] mr-2" alt="Global Power Index 2022 Ranking" />:{" "}
            <div className="social flex gap-1 pl-2 relative">
              <a
                className="cursor-pointer"
                onClick={() => handleSharePageLink("FACEBOOK")}
              >
                <img
                  src="/images/icons/facebook.svg"
                  alt="Facebook Icon"
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
        <div className="entry-content ">
          <p>
            <em>
              The Global Power Index ranks 194 countries in 2023 up from 113 in
              2022, giving the most comprehensive picture of power to date.
            </em>
          </p>
          <div className="h-6" />
          <p>
            <strong>
              London, UK. January 26<sup>th</sup> , 2023
            </strong>{" "}
            – The Global Power Index Summit is the flagship event hosted by
            Pareto Economics that brings together experts in finance,
            policymaking and business from around the world to showcase their
            original research on the changing dynamics of global power.
          </p>
          <div className="h-6" />
          <p>
            This year’s summit, which will take place on the 24<sup>th</sup>{" "}
            February, 2023 from 13:00- 17:00 at The Beveridge Hall at Senate
            House, Malet Street, London, WC1E 7HU will unveil the updated
            ranking of the Global Power Index for 2023 which will provide a
            unique and timely picture of the shifting balance of power among
            nations, and the implications of these changes for global politics
            and economics in 2023.
          </p>
          <div className="h-6" />
          <p>Speakers at this year’s summit include:</p>
          <ul className="list-disc pl-5 leading-[2] mt-2">
            <li>Klisman Murati, CEO – Pareto Economics</li>
            <li>
              Annett Abo, President – The Norwegian British Chamber of Commerce
            </li>
            <li>Duarte Pedreira, Head of Trade Finance – Crown Agents bank</li>
            <li>
              Masamichi Ito, Director of Industrial Research – Japan External
              Trade Organisation (JETRO)
            </li>
            <li>Olivia Copper, Head of Family Office – Axiom DWFM</li>
            <li>
              Christopher Tinker, Founding Partner – Libra Investment Services
            </li>
            <li>
              Iain Willis, Research Director – Gallagher Research Centre (GRC),
              Gallagher Re
            </li>
          </ul>
          <div className="h-6" />
          <p>
            The summit will feature a keynote presentation by Pareto’s CEO, a
            follow up Q&amp;A as well as two panel debates, covering a variety
            of topics related to global power, including:
          </p>
          <div className="h-6" />
          <ul className="list-disc pl-5 leading-[2] mt-2">
            <li>What is shifting the global power balance between nations</li>
            <li>What will the future of the global economy look like</li>
            <li>How is technology shaping global power dynamics</li>
            <li>Who are the winners and losers in 2023</li>
          </ul>
          <div className="h-6" />
          <p>
            Attendees at the Global Power Index Summit 2023 will have the
            opportunity to engage with leading experts in the field, network
            with their peers, and participate in thought-provoking discussions
            about the future of global power.
          </p>
          <div className="h-6" />
          <p>
            Pareto CEO Klisman Murati stated “This year’s rankings are probably
            the most important we have ever created. There is not an industry in
            the world which has not felt the effects of geopolitics caused by
            the tectonic changes in power dynamics. We are honoured and
            privileged to showcase our perspective for clients and our global
            business audience at this year’s summit”.
          </p>
          <div className="h-6" />
        </div>
      </div>
      <div className="container mx-auto px-5">
        {" "}
        <Footer />
      </div>
    </>
  );
};

export default ParetoEconomicsRanking;
