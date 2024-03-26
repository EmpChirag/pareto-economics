import React, { useState } from "react";
import Footer from "../../../Layouts/Footer";
import Header from "../../../Layouts/Header";

const IndexLaunch = () => {
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
        <h1 className="text-[24px] md:text-[40px] leading-[1.2] mb-10  mt-10">
          Pareto Economics launches the “Global Power Index 2022 ranking” with
          an exclusive in person event for business, finance and policy leaders
          at the London School of Economics
        </h1>
        <div className="md:flex block  items-center justify-between">
          <div>
            <p>
              January 18<sup>th</sup>{" "}, 2022
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
        <div className="entry-content clear">
          <p>
            <em>
              Pioneering index provides new insights into countries true power
              potential and how investors and policy makers can take full
              advantage of unseen opportunities.
            </em>
          </p>
          <div className="h-6" />
          <p>
            <strong>
              LONDON, UK. January 18<sup>th</sup>{" "}, 2022-{" "}
            </strong>
            The London based world affairs research consultancy Pareto Economics
            is challenging the status quo and calling out doomsday sellers on
            their agreed sense of uncertainty. Armed with a revolutionary new
            approach to seeing the development of world affairs based on first
            principles thinking and intelligent quantitative analytics to boot,
            they host their global launch of the Global Power Index.
          </p>
          <div className="h-6" />
          <p>
            The event is targeted towards business, finance and policy making
            leaders from around the world and is hosted in partnership with the
            London School of Economics PRIS.
          </p>
          <div className="h-6" />
          <p>
            The Global Power Index (GPI) is the most comprehensive analysis and
            measurement of a countries globalised power to date. Using a blend
            of propriety and open-sourced forecasting indicators the index
            measures and evaluates countries on our leading Centres of Power
            (CoP) methodology and conceptual framework to assess their “true”
            power and influence.
          </p>
          <div className="h-6" />
          <p>
            CEO Klisman Murati stated “It is the world’s first index of its kind
            that allows users to better assess current and future power dynamics
            which can help investors make more informed investing decisions,
            help businesses plan more intelligent long-term strategy and allows
            policy makers to create better investing conditions which benefit
            their populace and increases their ranking.”
          </p>
          <div className="h-6" />
          <p>
            He continues “We are delighted by the wave of positive feedback from
            our clients and audience who are eager to seeing the ranking. I
            think this year’s results will be very surprising to many and we
            look forward to sharing our learnings at the launch”.
          </p>
          <div className="h-6" />
          <p>
            The launch will take place on the{" "}
            <strong>
              24<sup>th</sup>{" "} February at 3pm
            </strong>{" "}
            at the LSE followed by a welcoming drinks reception where guests
            will have the opportunity to network and learn more about how the
            GPI can be useful to their organisation.
          </p>
          <div className="h-6" />
          <p>
            For more information about the event and to book your seat please
            visit:
          </p>
          <div className="h-6" />
          <figure className="wp-block-embed is-type-wp-embed is-provider-embed wp-block-embed-embed">
            <div className="wp-block-embed__wrapper">
              <blockquote
                className="wp-embedded-content"
                data-secret="FC5JUbJ37t"
              >
                <a href="https://pareto-economics.com/global-power-index-2022-launch/">
                  2022 LAUNCH EVENT
                </a>
              </blockquote>
              <iframe
                className="wp-embedded-content"
                sandbox="allow-scripts"
                security="restricted"
                title="“2022 LAUNCH EVENT” — "
                src="https://pareto-economics.com/global-power-index-2022-launch/embed/#?secret=FC5JUbJ37t"
                data-secret="FC5JUbJ37t"
                width="600"
                height="338"
              ></iframe>
            </div>
          </figure>
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

export default IndexLaunch;
