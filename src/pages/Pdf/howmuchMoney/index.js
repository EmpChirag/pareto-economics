import React, { useState } from "react";
import Header from "../../../Layouts/Header";
import Footer from "../../../Layouts/Footer";
import Fig1 from "../../../assets/images/fig1.png";
import Fig2 from "../../../assets/images/fig2.png";

const HowmuchMoney = () => {
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
    <div className="container mx-auto">
      <Header />
      <div className="h-6" />
      <div className="h-6" />
      <div className=" max-lg:block flex items-center justify-center ">
        <div className=" max-w-[1180px]">
          <h1 className="pb-10 max-md:pb-1 text-[24px] md:text-[60px] leading-[1.2]">
            How much money is needed to finance a sustainable future? The World
            Bank says $70bn, and it has a plan
          </h1>

          <div className="h-6" />

          <div className=" md:flex block  items-center justify-between">
            <div>
              <p>April 2024 </p>
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

          <div className="mt-12">
            <p className=" pb-5">
              The World Bank is responding to macro pressure on its member
              countries by shifting its approach to financing so it can address
              global issues more effectively. With the world experiencing a high
              interest rate environment, geopolitical headwinds and vulnerable
              supply chains, Ajay Banga, the World Bank president is perusing
              more creative financing structures to fund the future of
              sustainability and global resilience.
            </p>
            <p className=" pb-5">
              With the recent announcement of a substantial increase in lending
              capacity the Bank is pursuing an aggressive expansion of its
              mandate as a response to what they believe are the pressing
              challenges of the day.
            </p>
            <p className=" pb-5">
              At the heart of the World Bank's strategy lies a concerted effort
              to bolster its financial resources to confront global crises
              effectively. With pledges totalling $11 billion from various
              countries, including a significant commitment from the United
              States, the Bank's lending capacity is set to increase by $70
              billion over the next decade. This infusion of funds comes at a
              critical juncture as the world faces escalating climate threats
              and health emergencies.
            </p>
            <p className=" pb-5">
              In April 2023, World Bank shareholders endorsed an increase in the
              bank's leverage ratio to boost lending capacity by some $40
              billion over 10 years and expanded bilateral guarantees to unlock
              another $10 billion in financing. The bulk of the latest funding
              pledge, around $9 billion, was made by the U.S. to the new
              Portfolio Guarantee Platform which backs private loans and equity
              investments in qualifying projects. This current 'hybrid' funding
              drive is reflective in the fact that the US (the largest financing
              contributor) will be shoring up the funds with a mixture of direct
              cash financing as well as a U.S. guarantee for the World Bank's
              platform, backed by a $750 million appropriation request to
              Congress. This limits the pledge's leverage to about four times,
              enabling $36 billion of added lending over the next 10 years.
            </p>
            <p className=" pb-5">
              Britain, Denmark, Germany, Italy, Latvia, the Netherlands, and
              Norway will also be contributing to the mechanism for hybrid
              capital using instruments that include features of both debt and
              equity to leverage loans.
            </p>
          </div>
          <div className="mt-12">
            <h3 className="pb-5">A shift in political priorities</h3>
            <p className=" pb-5">
              Despite these ambitious plans, political uncertainties loom large,
              particularly with the risk of a potential shift in US policy
              direction. In our view, A Trump presidency, for instance, may see
              these financing successes short lived as President Trump will most
              likely pursue a curtailing of green financing initiatives
              especially those which have no direct and immediate benefit to the
              US taxpayer, potentially jeopardising the momentum built by the
              World Bank. Given the US is the largest contributor to World Bank
              Funds and also given these new contributions are entirely
              voluntary, there's a pressing need for contingency plans to
              mitigate any financing gaps and ensure continuity in addressing
              global challenges.
            </p>
          </div>
          <div className="mt-12">
            <h3 className="pb-5">Money can’t buy winners</h3>
            <p className=" pb-5">
              Financing only matters if viable projects can be found that can
              scale. Central to the World Bank's mission is the strategic
              prioritisation of projects with the greatest potential for
              long-term impact. Given that the focus of these funds is to
              finance only projects that have cross-border benefits such as a
              focus on initiatives that reduce greenhouse gas emissions, prevent
              pandemics, and promote sustainable development, it is our view
              that clear key performance indicators (KPIs) and robust investment
              monitoring mechanisms are imperative to ensure the best ROI for
              their capital allocation. This ensures that funds are channelled
              efficiently towards projects that deliver tangible results. The
              World Bank needs to ensure funds are spent as efficiently as
              possible on solutions that are long term winners.
            </p>
            <p className=" pb-5">
              As the World Bank charts a course for the future, calls for reform
              and adaptation resonate louder than ever. Streamlining project
              processes, enhancing transparency, and strengthening
              accountability mechanisms are imperative for maximizing the Bank's
              impact. Moreover, amidst evolving geopolitical dynamics and
              shifting global priorities, there's a need for a more focused and
              agile approach to tackling complex challenges.
            </p>

            <p className=" pb-5">
              As finance ministers and central bank governors convene for the
              IMF and World Bank's spring meetings, the spotlight is on charting
              a path towards a resilient and sustainable global economy. With
              the World Bank at the forefront of this endeavour, there's a
              shared responsibility to harness collective action and innovation
              to address the defining challenges of our time.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowmuchMoney;
