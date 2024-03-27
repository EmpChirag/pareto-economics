import React, { useState } from 'react'
import Header from '../../../Layouts/Header';
import Footer from '../../../Layouts/Footer';

const USATop = () => {
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
          The United States maintains position as the most powerful country in
          the world, followed by China and then France according to the latest
          Global Power Index by Pareto Economics
        </h1>
        <div className="entry-content">
          <div className="md:flex block  items-center justify-between">
            <div>
              <p>March 1st, 2023</p>
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
          <p>
            <em>
              The most comprehensive power index ranks a record 194 counties and
              unveils stark changes in the balance of power in 2023.
            </em>
          </p>
          <div className="h-6"></div>
          <p>
            <strong>London, UK. March 1st, 2023 </strong>– Pareto Economics has
            released its highly anticipated 2023 Global Power Index, the most
            comprehensive ranking of the world’s most powerful countries.
          </p>
          <div className="h-6"></div>
          <p>
            This annual ranking measures a country’s power through the six
            proprietary sub-indices created by Pareto Economics including the
            Active Consumer Market Index, Military Balance Index, Technological
            Leadership Index, Systemically Important Commodities Index,
            Geo-Strategic Positioning Index and Financial Strength Index –
            together they form the Global Power Index.
          </p>
          <div className="h-6"></div>
          <p>
            The results of the latest edition provide valuable insights into the
            world’s political and economic landscape and are widely used by
            policymakers, businesses, and investors to understand the relative
            strengths and weaknesses of countries around the world.
          </p>
          <div className="h-6"></div>
          <div className="h-6"></div>
          <h3 className="mb-5">GLOBAL HIGHLIGHTS</h3>
          <p>
            This year’s index is also accompanied by the “Global Power Index
            Report 2023” which highlights the most important movements and
            trends to global power.
          </p>{" "}
          <div className="h-6"></div>
          <p>Some of the biggest takeaways from the report include:</p>
          <ul className="list-disc pl-5 mt-5 leading-[2]">
            <li>
              The <strong>United States of America</strong> has maintained its
              position as the number one most powerful country in the world,
              followed by China in second place, France in third, Singapore in
              fourth, and the United Kingdom in fifth.
            </li>
            <li>
              <strong>Europe</strong> continues to be the most powerful region
              in the world, with several economically, technologically, and
              militarily advanced countries located in the region.
            </li>
            <li>
              <strong>Sub-Saharan Africa</strong> ranked the least powerful
              region, holding this title for the second year in a row.
            </li>
            <li>
              <strong>Russia</strong> dropped significantly from last year where
              it ranked number two, this year it ranked number 11. This was due
              to significant drops in its geo-strategic positioning and
              financial strength.
            </li>
            <li>
              The rise of <strong>emerging technologies</strong> has also
              impacted the ranking, with countries that have invested heavily in
              cutting-edge technologies performing well in the ranking.{" "}
              <strong>Singapore</strong>, for example, has been at the forefront
              of technological innovation, and this has translated into a strong
              performance in the ranking
            </li>
          </ul>
          <div className="h-6"></div>
          <p>
            “The Global Power Index is the only index that provides a
            comprehensive, objective and quantitative assessment of a country’s
            power”, said Klisman Murati, Founder &amp; CEO of Pareto Economics.
            He continues “it helps us to understand the shifting power dynamics
            in the world and the resulting macro trend catalysts that transpire
            out of it. It is important to have a clear understanding of the
            relative strengths of different countries and regions, as the world
            continues to evolve and new challenges emerge.”
          </p>
          <div className="h-6"></div>
          <p>
            The report also identifies the emergence of 2 macro trend catalysts
            as countries continue to grow in power, these includes “
            <strong>The Great Convergence</strong>” and “
            <strong>Segmented Polarity</strong>”. These the report mentions,
            will be the driving forces behind the most violent changes to
            politics and economics over the coming 100 years.
          </p>
          <div className="h-6"></div>
          <p>
            As part of the offering, global stakeholders are also able to
            purchase deep and bespoke analytics across the 7 regions and 7
            indices created by the company which enables them to make more
            confident and long-term strategic business and investing decisions.
          </p>
          <div className="h-6"></div>
  
          <div className="h-6"></div>
        </div>
      </div>
      <div className="container mx-auto px-5">
        <Footer />
      </div>
    </>
  );
}

export default USATop