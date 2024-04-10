import React, { useState } from 'react'
import Header from '../../../Layouts/Header';
import Footer from '../../../Layouts/Footer';


const KillingESG = () => {
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
    <div className="max-w-[1480px] mx-auto px-5">
      <Header />
      <div className=" max-lg:block flex items-center justify-center ">
        <div className="mt-10 max-w-[1180px]">
          <h1 className="pb-10 max-md:pb-1 text-[24px] md:text-[60px] leading-[1.2]">
            Is Passive Investing Killing ESG ?
          </h1>
          <div className="h-6" />
          <div className="md:flex block  items-center justify-between">
            <div>
              <p>June 2020</p>
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
          <div className="">
            <h3 className="pb-10 mt-9">Societal Change in Action</h3>
            <p className="pb-5">
              Social Anthropology probably isn’t the first subject you think of
              when seeking to better understand the changing investment
              landscape, however, when looking at glocal societal change, it
              along with behavioural psychology are probably the two most
              advantageous disciplines to consult when making more informed and
              therefore more profitable investing decisions. This is because
              they help us understand why and how the world is experiencing
              faster rates and new dynamics of societal change which have never
              been seen before. These new dynamics have resulted in new
              correlations between previously uncorrelated phenomena.
            </p>
            <p className="pb-5">
              As the worlds of commerce, finance, politics, social norms, and
              attitudes, etc become ever more correlated and interdependent as
              well as divergent due to technology this in turn gives rise to
              these interdependent systems being more prone to significant
              changes and challenges arising from regular and unchanged human
              activity. In short, human activity has remained pretty constant
              throughout the years, but its impacts are now felt on a much wider
              scale than before due to shared consequences and shared
              experiences. For example, the act of adhering to a certain type of
              diet like veganism or vegetarianism has always existed, however,
              coupled with social media, vegan alternatives have transformed
              business offerings and have even ignited a new multibillion-dollar
              industry.
            </p>
            <p className="pb-5">
              Factors such as rising living standards, open trade borders,
              technological advancements, and global connectivity, and
              information sharing among others are impacting the way people are
              living, thinking, and consuming. Essentially, due to the above
              factors, citizens and consumers are becoming more informed which
              is altering their buying behaviours and consequently are demanding
              a lot more from their government and business to reflect their
              needs and attitudes in the policies they enact and products they
              produce. This is perhaps the essence of the glocal world we are
              living in, where both governments and industry need to understand,
              anticipate, and respond to the growing needs and wants of the
              people. Their voice will only get more powerful and spread more
              widely.
            </p>
            <p className="pb-5">
              As investors, it imperative that this brave new world be
              investigated and understood in order to form a more precise
              understanding ofsocietal change and consequently the affects it
              has on the investment landscape.
            </p>
            <h3 className="pb-10 mt-9">
              Shareholder Activism in the Age of ESG Policy
            </h3>
            <p className="pb-5">
              To curb what is today called agency problems, shareholder activism
              is deployed in order to help company leadership make better
              decisions for shareholders. This in turn allows markets to operate
              more efficiently and effectively.
            </p>
            <p className="pb-5">
              This has been historically true, in fact, Adam Smith in his
              seminal work The Wealth of Nations highlights that since the
              directors of these companies manage ‘other people's
              money…negligence and profusion…must always prevail, more or less,
              in the management of the affairs of such a company.’
            </p>
            <p className="pb-5">
              However, this is not the only relationship a listed business has
              to manage. Increasingly the attitudes and sentiments of customers
              are playing a larger role in the direction and character of
              companies.
            </p>
            <p className="pb-5 ">
              Whether rightly or wrongly, listed companies are compelled to
              develop stances and opinions on social issues. Additionally, and
              on a deeper level, consumer are expecting companies to reflect in
              their operations, actionable initiatives that reflect the concerns
              and aspirations of their consumer base, this is especially true
              and relevant for industries that are seen as exacerbating a social
              cause, for example the fashion industry and ecological
              denigration.
            </p>
            <img
              src="/images/pdf/business-triangle.png"
              className="w-[1500px] -mt-7"
            />
            <p className="pb-5">
              ESG is the umbrella title that loosely brings the concerns of
              environmental, social and governance issues together. A movement
              that started at different stages for different issues has now
              presented itself to the business and investment community as
              valuable criteria to follow when businesses make practical growth
              decisions and as criteria by which investors should judge the
              public utility of a company alongside its profitability.
            </p>
            <p className="pb-5">
              Leaving aside the much talked about shortfalls of current ESG
              standards by which we measure businesses against and metrics by
              which investors evaluate the efficacy of these measures. It seems
              as if ESG speculation has now in fact become an industry onto
              itself, citing for example the creation of new analytics for
              investors, to the plethora of conference, summits, roundtables
              that discuss ESG, to new divisions in companies and investment
              firms that are tasked with creating, implementing and measuring
              ESG guidelines to ESG auditing and consulting and much more.
            </p>
            <p className="pb-5">
              Whatever we collectively decide ESG is and how we measure it, its
              evolution and implementation will inevitably come from the
              interplay between the three players of the business triangle and
              in particular the effects of shareholder activism on management.
              Although, for some who believe ESG is a hindrance to profitability
              or at the very least an unwelcomed distraction from primary
              business operations, the thought that those who have no vested
              interest in the business such as the vague notion of public
              opinion does not sit well. The unchanged doctrine that a business
              must do what is best for the shareholders, for it is the
              shareholders money which management is responsible for and only
              active shareholder voices coupled with clear government policy can
              and should direct the activities of a company.
            </p>
            <h3 className="pb-10 mt-9">
              How is passive investing impacting ESG policy implementation?
            </h3>
            <p className="pb-5">
              Starting with the premise that a company is in business to make
              money and assuming the position that ESG policy implementations
              contributes to the long-term longevity and prosperity of a
              company, we can then dissect the main differences between active
              versus passive management in relation to ESG. Although it is also
              helpful to note that this divide is not binary and that there is a
              spectrum of investment vehicles that range from purely passive
              index investing to independently active investing.
            </p>
            <p className="pb-5">
              The main aspect which differentiates passive and active management
              in relation to ESG is that active managers have a mandate from
              their clients to engage with management of listed companies to
              fully flesh out their ESG vision and framework for the ultimate
              benefit of a positive stock price. This mandate is built into the
              fees charged by active managers who pursue an informational
              advantage to their competitors by conducting market research on
              fundamental aspects that can positively impact the stock price.
              They also have a direct line to company leadership to help shape
              company policy and deter agency problems.
            </p>
            <p className="pb-5">
              Passive investing on the other hand does not have a mandate from
              clients. A passive funds aim is not to have an informational
              advantage of which to trade from, but rather is based on the
              notion that it is extremely difficult to beat the market at a cost
              effective rate for the client, therefore no money or resources are
              allocated to market research or management engagement. Gaining
              market return is the most cost effective and consistent way to
              profit according to passive fund providers. Due to the lack of
              engagement with management, passive funds cannot shape what they
              consider as effective ESG policy for the companies in their fund.
              This lack of investor accountability is giving management more
              independence in how they go about shaping their ambitions and
              direction, but if not incentivised by investors, companies
              according to Adam Smith risk neglecting their ESG responsibilities
              or may pander to the fog of public opinion.
            </p>
            <p className="pb-5">
              When considering the prevalence of passive fund providers over the
              years, for example in Europe where net inflows into European
              passive funds in 2016 – both index funds and ETFs – totalled $83
              billion, outpacing the $48 billion netted by their active peers.
              It is easy to extrapolate the effects of this black noise coming
              from passive funds and its impact on ESG policy.
            </p>
            <p className="pb-5">
              Although there are passive funds with ESG considerations such as
              the Vanguard ESG Developed World All-Cap Equity Index & Vanguard
              ESG Emerging Markets All-Cap Equity Index funds, this still does
              not mitigate the fact that the true aim of ESG is to build a
              philosophy of positive environmental, social and governance
              principles for all companies to engage in, and to use the voice
              and leverage as a shareholder to hold companies to account to
              these standards. It is not simply an exercise of excluding or
              screening out companies which are involved in non-renewable
              energy, weapons, and ‘vice’ products such as gambling, tobacco and
              alcohol.
            </p>
            <p className="pb-5">
              Furthermore, it is not just ESG that passive funds are having an
              impact on. Studies have shown that passive investing is having an
              adverse effect on company innovation, M&A and investment strategy.
              For example, Aghion, Van Reenen, and Zingales (2013) found that
              innovative activity increases as the share of non-fund ownership
              increases. Furthermore, Schmidt and Fahlenbrach (2017) examine the
              link between value-destroying M&A activity and the active/passive
              split in share ownership, and find that as the proportion of
              passive ownership increases, management becomes more entrenched
              (as measured by the accumulation of job titles) and that the
              probability that a firm indulges in valuedestroying M&A activity
              increases. Finally, Gutierrez and Philippon (2017) examine the
              impact of the proportion of passive ownership on investment
              behaviour. They find that firms with a higher proportion of
              passive ownership invest less and pay out more. These shortfalls
              can be attributed in large part by the lack of accountability of
              passive funds but also the unexamined and lack of fundamental
              analysis that is required for efficient and effective markets to
              prevail.
            </p>
            <p className="pb-5">
              The fate of ESG seems to lie in either the efficient
              underperformance of active shareholders who consider ESG a
              priority or the inefficient average performance of passive funds
              who are trying to cater to ESG conscious investors. Either way,
              there is still a lot that must be done for ESG to be incorporated
              into the business and investment architecture.
            </p>
            <h3 className="pb-10 mt-9">Further Research Questions </h3>
            <p className="pb-5">
              Below is a list of questions and themes we have investigated and
              think you would like the answers to.
            </p>
            <ul className="list-decimal list-inside">
              <li className="pb-4">
                Are ESG conscious companies really more profitable over time, or
                Is it a self-fulfilling prophecy?
              </li>
              <li className="pb-4">
                What industries are more likely to benefit from ESG policies?
              </li>
              <li className="pb-4">
                Where in the world is ESG investing the most prevalent and least
                prevalent, and why?
              </li>
              <li className="pb-4">
                How does ESG playout in the private equity space?
              </li>
              <li className="pb-4">
                How valid are current ESG investment rating metrics?
              </li>
              <li className="pb-4">
                What are the primary KPIs that investors and businesses measure
                the impact of ESG policy?
              </li>
              <li className="pb-4">
                Where is the drive for ESG considerations coming from?
              </li>
              <li className="pb-4">
                Why is there such disparity between the adoption of ESG measures
                by institutional investors?
              </li>
              <li className="pb-4">
                What is the difference between ESG and impact investing, and why
                is it important?
              </li>
              <li className="pb-4">
                What role(s) do government and regulators play in the ESG
                debate?
              </li>
            </ul>
            <h3 className="pb-10 mt-9">Research delivery </h3>
            <p className="pb-5">
              Our team is happy to discuss your needs for further insights into
              the topics above, or any other questions you are asking. Below are
              our four ways we typically work with clients.{" "}
            </p>
            {/* Box */}
            <div className="grid md:grid-cols-2 text-center mt-5">
              <div className="px-5 border-black md:border-b md:border-r">
                <h3 className="pb-5 md:pb-10 mt-4 md:mt-9">
                  Commissioned Research{" "}
                </h3>
                <p className="pb-5">
                  This can vary in from a snap-shot one-page overview of a
                  current development to an extended piece of research
                </p>
              </div>

              <div className="px-5 border-black md:border-b ">
                <h3 className="pb-5 md:pb-10 mt-4 md:mt-9">
                  Expert Briefings{" "}
                </h3>
                <p className="pb-5">
                  Delivered in seminars and boardrooms, which gives
                  opportunities both for structured and the free exploration of
                  issues of related interest to clients{" "}
                </p>
              </div>

              <div className="px-5 border-black md:border-r">
                <h3 className="pb-5 md:pb-10 mt-4 md:mt-9">Consulting </h3>
                <p className="pb-5">
                  This offers a “deep dive” discussion angle for clients rather
                  than a written report or a formal briefing into the questions
                  they need answering
                </p>
              </div>

              <div className="px-5">
                <h3 className="pb-5 md:pb-10 mt-4 md:mt-9">Public Speaking </h3>
                <p className="pb-5">
                  Formats include Keynotes, Q&A, Fireside Chats, Panels.
                </p>
              </div>
            </div>
            {/* <div className="flex max-md:flex-col gap-10">
              <div className="flex-1 mt-28">
                <img src="/images/pdf/1.png" className="w-[1000px] -mt-7" />
              </div>
              <div className="flex-1 md:mt-28">
                <h3 className="pb-10 mt-9">
                  <div className="font-bold mt-4">GLOBAL INVESTORS SERIES </div>
                </h3>
                <p className="pb-5">
                  To receive other whitepapers from our Global Investors Series
                  on themes including:
                </p>

                <ul className="pl-10 list-disc">
                  <li className="pb-4">GEOPOLITICS</li>
                  <li className="pb-4">GLOBALISATION</li>
                  <li className="pb-4">TRANSFORMATIVE TECHNOLOGY</li>
                  <li className="pb-4">SOCIETAL CHANGE</li>
                </ul>
                <p className="pb-5">
                  Please email us at info@pareto-economics.com
                </p>

                <h3 className="pb-10 mt-20">
                  <div className="font-bold mt-4">Contact</div>
                  <div className="flex-1 mt-14 md:mt-28">
                    <img
                      src="/images/pdf/klisman.png"
                      className="w-[300px] -mt-7"
                    />
                  </div>
                  <div className="font-bold mt-10  md:mt-20">
                    Klisman Murati{" "}
                  </div>
                  <p className="pb-5">Director, Pareto Economics</p>

                  <p className="pb-5">
                    <a
                      href="mailto:Klisman.m@pareto-economics.com"
                      target="_blank"
                    >
                      Klisman.m@pareto-economics.com
                    </a>
                  </p>

                  <p className="pb-5">
                    <a href="https://www.pareto-economics.com/" target="_blank">
                      https://www.pareto-economics.com/
                    </a>
                  </p>
                </h3>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer
        contact
        ptext="Get in touch to explore how we can partner today."
      />
    </div>
  );
}

export default KillingESG