import React, { useState } from "react";
import Footer from "../../../Layouts/Footer";
import Header from "../../../Layouts/Header";
import { Helmet } from "react-helmet";

const TheUSACrown = () => {
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
        <title>Most Powerful Country in the World 2022 | Pareto Economics</title>
        <meta
          name="description"
          content="Here is the top 3 most powerful countries in the world (Pareto Economics News) like United States, China and Russia. Read more details.... "
        />
        <link rel="canonical" href="https://www.pareto-economics.com/the-usa-is-crowned-most-powerful-country-in-the-world" />
        <meta name="robots" content="follow, index, all" />
      </Helmet>
        <Header />
      </div>
      <div className="max-w-[1180px] mx-auto px-5">
        <h1 className="text-[24px] md:text-[60px] leading-[1.2] mb-10  mt-10">
          The USA is crowned most powerful country in the world, beating both
          Russia and China in the 2022 Global Power Index by Pareto Economics.
        </h1>
        <div className="md:flex block  items-center justify-between">
          <div>
            24<sup>th</sup> February 2022
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
        <div className="entry-content">
          <p>
            <em>
              The worlds first investment focused world affairs index ranks a
              record 113 countries across 7 regions giving investors and policy
              makers a radical new picture of the future.
            </em>
          </p>
          <div className="h-6" />
          <p>
            <strong>
              24<sup>th</sup> February 2022
            </strong>{" "}
            <a href="http://pareto-economics.com/wp-content/uploads/2022/03/24th-Feb-2022-PR.pdf">
              DOWNLOAD PRESS RELEASE
            </a>
          </p>
          <div className="h-6" />
          <p>
            <strong>LONDON, Unite Kingdom – </strong>Pareto Economics, the
            global world affairs research consultancy today announced at their
            annual Summit the latest rankings of the Global Power Index for
            2022. In a room full of high-level delegates from the 113 countries
            ranked, C-Suite Executives, media representatives, and other
            corporate entities, Pareto Economics CEO Klisman Murati gave a
            keynote on this year’s index, which was followed by a 40-minute
            Q&amp;A where the audience both in person and virtually had the
            opportunities to dive deeper into this year’s index and what it
            means from them.
          </p>
          <div className="h-6" />
          <p>
            The Index is the worlds first investment focused world affairs tool
            which is used by both institutional investors and corporations as
            well as policy makers from established and growing financial centres
            to better understand the tectonic changes happening in the world
            today due to changing power dynamics in the world. &nbsp;
          </p>
          <div className="h-6" />
          <p>
            “The launch of this year’s GPI comes at a critical time for both
            investors and policy makers”, said Klisman Murati, Founder &amp; CEO
            of Pareto Economics. “This is a first-of-its-kind index which offers
            not only an important marker of country power as it exists today,
            but a truly new and ground-breaking look at what the trajectory of
            power will be in the future, giving global operators the tools to
            make more informed, long term and confident strategic decisions.
          </p>
          <div className="h-6" />
        </div>
      </div>
      <div className="container mx-auto px-5">
        <Footer />
      </div>
    </>
  );
};

export default TheUSACrown;
