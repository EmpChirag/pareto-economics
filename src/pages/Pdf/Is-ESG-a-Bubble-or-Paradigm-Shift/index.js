import React, { useState } from "react";
import Header from "../../../Layouts/Header";
import Footer from "../../../Layouts/Footer";


const IsBubble = () => {
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
      <div className=" max-lg:block flex items-center justify-center ">
        <div className="mt-10 max-w-[1180px]">
          <h1 className="pb-10 max-md:pb-1 text-[24px] md:text-[40px] leading-[1.2]">
            Is ESG a Bubble or Paradigm Shift?
          </h1>
          <div className="h-6" />
          <div className=" md:flex block  items-center justify-between">
            <div>
              <p>December 2020</p>
            </div>
            <div className="flex items-center md:mt-0 mt-4">
              <img src="images/icons/share.svg" className="w-[20px] mr-3" />:{" "}
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
          <div className="">
            <p className=" pb-5">
              An irresponsible bandwagon or a paradigm shift? ESG investing has
              certainly been a polarising topic. Typically, opinions fall into
              one of two categories, you either love it or you hate it. Unless
              of course you are one of the many apprehensive and curious
              investors who is yet to make up their mind and form a strategy
            </p>
            <p className=" pb-5">
              In fact, this group is larger than you would think. In fact, 53%
              of investors do not know how to have a measurable impact across
              different ESG criteria1 . You may fall into this group yourself,
              and if so, welcome, you are not alone in your deliberations. There
              is a lot that has been written about ESG investing over the years
              with ample reasons given by both sides as to the virtues and vices
              of this trend. This whitepaper however, far from supporting one
              side or the other, attempts to give an unabashed perspective of
              this phenomena to the undecided, anxious and peer pressured
              investor who wants clarity in one place
            </p>
            <p className=" pb-5">
              Does ESG investing truly reduce carbon emissions? Do ESG funds
              really produce alpha over the long run? What gives with the
              disparity of ESG metrics? And, how does one successfully manoeuvre
              through what seems like a bubbly trend? These are just some of the
              questions we attempt to answer for the apprehensive and curious
              investor.
            </p>
            <p className=" pb-5">
              For simplicity, in this whitepaper we focus on investors who trade
              in stocks, although there is a lot of material that can be covered
              for ESG innovation in financial services and products like Trade
              Finance, Bonds, Insurance, Real Estate etc. which we may cover in
              subsequent whitepapers
            </p>

            <h3 className="pb-10 mt-9 text-4xl">Two Tiered ESG</h3>
            <p className=" pb-5">
              A lot of the time, ESG activity is lumped in altogether as one
              homogenous goliath. This approach is unspecific and unhelpful as
              ESG activity can broadly be divided into two distinct tiers.
              Firstly, the “Company/Real Economy” tier and secondly, the
              “Investor/Financial Economy” tier. They operate in two different
              worlds with different incentives, pressures, and dynamics. Their
              journey in the ESG ecosystem is also very different.
            </p>
            <p className=" pb-5">
              Tackling the “Company/Real Economy” tier first, we notice a more
              simplistic structure but with more complex applications. That is
              to say, a company which operates in any industry will be aware of
              the ESG strategies/milestones and agreed to protocol that already
              exists within their industry. These cover broad considerations
              including ecological sustainability, community outreach etc. These
              standards have a somewhat reflexive relationship, as to say, they
              shape each other. Standards shape firms and firms contribute to
              the standards set.
            </p>

            <div className=" max-w-[1000px] mx-auto">
              <p className=" pb-5">
                <span className="font-bold"> Figure 1.</span> ESG Transmission
                Framework
                <img src="./images/pdf/financialeconomy.PNG" className="" />
              </p>
            </div>
            <div className="h-6" />
            <p className=" pb-5">
              Typically, however, this focus leans heavily on the “E” side
              especially for industrial sectors like construction, mining,
              natural resources etc. The “S” side has also been a concern
              especially for industries like diamond mining, which gave rise to
              the Kimberly process in 2003 to help prevent “conflict diamonds”
              from entering the mainstream rough diamond market. The “G” can
              also be department specific, for example, the compliance function
              in a bank or Fintech for example pays a lot of attention to
              governance within their organisation.
            </p>
            <p className=" pb-5">
              However, some aspects of ESG have been harder to implement and
              measure. These include changes that companies make off the back of
              social outcry. For example, the death of George Floyd in the USA
              brought to light in a sharp way the growing and sustained
              grievances of police brutality. Soon after, the conversation
              turned to racial inequality and prejudice in the workplace. Many
              firms attempted to address this grievance, but responding in
              unison has been difficult especially when there wasn’t a sustained
              targeted campaign to one company or industry, but rather a macro
              all-encompassing call for equality.
            </p>
            <p className=" pb-5">
              On the second tier we have the “Investor/Financial Economy”
              ecosystem of ESG. Investors and asset managers play a dule role,
              firstly by investing with ESG parameters, and secondly, by wearing
              at the same time the hat of a business which have their own ESG
              policies that they implement within their firm and share standards
              within the industry. The issues and processes of the latter have
              been explained above.
            </p>
            <p className=" pb-5">
              The process of ESG investing begins with the metrics investors
              decide to use. These metrics, whether created in house or
              externally provided, informs the investor as to what companies fit
              the criteria, which then allows investors to allocate client
              capital to those firms. Although this sounds simple, many problems
              emerge especially when determining what metrics to use and how to
              classify the ESG worthiness of companies. Two different metrics
              may rate the same company high in one score and another low, they
              often do. Therefore, the reliability and validity of these
              measures are pulled into question.
            </p>
            <p className=" pb-5">
              The reasons why these metrics are so diverse is two-fold. Firstly,
              because there are no common standards when creating ESG metrics.
              This is a result of many reasons, including the relative infancy
              of ESG metrics, as well as a values-based approach to ESG
              investing which allows for customisable measures and a lack of
              regulatory standards that allow for a clearer and more divided
              playing field. Secondly, environmental, social and governance
              measure are very different and distinct things, that having a
              homogenous measure that encapsulates all dimensions has proven so
              far unworkable.
            </p>
            <p className=" pb-5">
              This is a point of frustration for many investors. Having such
              diverse measures has severely undermined the legitimacy of the
              quintessential ESG fund, and overcoming this hurdle is of
              paramount importance in order to increase the validity to ESG
              investing.
            </p>
            <div className="bg-black border border-black ">
              <h3 className="pb-10 mt-9 text-4xl text-white mx-5 font-bold">
                KEY TAKE AWAYS
              </h3>
              <ul className="list-disc px-5 text-white mx-5 pb-10 text-2xl">
                <li className="pb-4">
                  A clear distinction exists between the real economy and
                  financial economy in relation to the understanding and
                  application of ESG standards and metrics
                </li>
                <li className="pb-4">
                  There is a reflexive relationship that exists between
                  industries in the real economy and ESG standards
                </li>
                <li className="pb-4">
                  Companies in the real economy are seeing an increase in
                  reputational risk because they are finding it increasingly
                  difficult to respond to social outcry and demands for change
                  from their customer base.
                </li>
              </ul>
            </div>
            <h3 className="pb-10 mt-9 text-4xl text-[#3e4c72]">
              The Problems with ESG Metrics
            </h3>
            <p className=" pb-5">
              Investing with ESG principles in mind is not a new thing, in fact
              in theory, this is a good philosophy to implement into any
              business. The problems arise however when investors try to
              formulate this investing angle into a metric. Fair and comparable
              comparisons on something like environmental standards are
              difficult to create for companies within industries, this point is
              even more complex when trying to create a homogenous “E” measure
              cross industry. Couple this with the sample problems that present
              itself with the “S” and “G”, you quickly find how problematic
              having a unified ESG metric becomes. Fundamentally, there is a
              qualitative judgement call that is made on all three levels hence
              the stark deviations.
            </p>
            <p className=" pb-5">
              Furthermore, we also face an issue of authority in measuring. In
              other words, who is to say what the correct or optimum governance
              structure a corporation should have? Who sets the standards? So
              far, it seems each company controls and develops their own
              governance, including hiring and leadership tracks, which are in
              line with their values. So how can a governance measure for
              example be created which inevitability uses a self-created measure
              when all firms included in that metric have their own approach?
            </p>
            <p className=" pb-5">
              There is no doubt that ESG considerations are important in regards
              to the wider impact an industry/company has on the planet. The
              current measures however, can be argued to encapsulate too much in
              a metric which has made it unreliable. Moreover, the investing
              world has come to view this new trend as just another investment
              product which will attract more AuM, as opposed to a real push by
              the investment community for more holisticstandards for the
              business community to adopt.
            </p>
            <p className=" pb-5">
              So, for the conscious investor who is trying to find a response to
              this reality, the current landscape should serve as an example of
              what has been done and not as a template of what should be done
              moving forward.
            </p>
            <div className="bg-black border border-black">
              <h3 className="pb-10 mt-9 text-4xl text-white mx-5 font-bold">
                KEY TAKE AWAYS
              </h3>
              <ul className="list-disc px-5 text-white mx-5 pb-10 text-2xl">
                <li className="pb-4">
                  Translating ESG considerations into a useful and valid metric
                  has been very difficult to achieve
                </li>
                <li className="pb-4">
                  In relation to Governance, there emerges the issue of
                  authority. Which is to say, who gets to decide what governance
                  structures are the most valid?
                </li>
                <li className="pb-4">
                  The current ESG measures attempt to encapsulate too many
                  variables to produce a valid measure that can be applied to
                  stock picking.
                </li>
              </ul>
            </div>
            <h3 className="pb-10 mt-9 text-4xl text-[#3e4c72]">
              The Who’s Who of ESG Metrics
            </h3>
            <p className=" pb-5">
              Knowing who has it right and who has it wrong in the world of
              metrics providers is an important consideration especially for the
              apprehensive but curious investor. So, when first diving in to the
              market of metric providers, one may be surprised to see the sheer
              number of metrics on offer. On last count there exists more than
              70 firms offering ESG data<sup>2</sup> .
            </p>
            <p className=" pb-5">
              Even within the narrowed scope of ESG data providers, a highly
              dispersed and scattered industry is observed, mainly driven by the
              fact that 13% of asset managers use in-house data management and
              that every ESG data provider uses different variables and weights
              when assessing a firm’s ESG friendliness.
            </p>

            <p className=" pb-5">
              Moreover, recent reports shed light on the fragmented ESG data
              providers industry. 200 asset managers were asked which ESG data
              providers they use. To simplify the survey, researchers limited
              their industry scope to 16 providers due to the sheer number of
              providers available<sup>3</sup> .
            </p>
            <p className=" pb-5">
              “RobecoSAM” tops the list at 17%, but the difference between them
              and the least chosen option, “Vigeo Eiris” at 7% is not big enough
              to speak of a dominate market position. (Cf. Figure 2)
            </p>
            <p className=" pb-5">
              This supports the finding that ESG data providers’ rating
              processes differ greatly in evaluating a firm’s ESG profile.
              Research has found that in the Governance rating of Wells Fargo,
              the two main and established ESG data providers, rank Wells Fargo
              respectively in the top-third and the bottom 5% in their universe
              which gives investors a hard time to really know how E, S or
              Gfriendly a firm really is and to adjust their investment decision
              accordingly<sup>4</sup>{" "}
            </p>
            <p className=" pb-5">
              In relation to this study, it was surprising to find that no one
              provider had a functional monopoly. This could be due to the fact
              that ESG considerations are still in their infancy and as the
              market matures, these measures will eventually homogenise and an
              agreed set of standards will be imposed. Although, if we are to
              believe that ESG is a value driven investing movement, then the
              chances of this homogenisation happening will be fractious as by
              their nature, values are diverse. Therefore, agreeing on a set of
              universally held standards may not happen.
            </p>
            <div className="max-w-[1000px] mx-auto">
              <p className="">
                <span className="font-bold"> Figure 2.</span> PwC survey
                question on choice of ESG data provider
                <img src="./images/pdf/Wealth Management.PNG" />
              </p>
            </div>

            <h3 className="pb-10 mt-9 text-4xl text-[#3e4d77]">
              Bull Markets and its Impact on Risk
            </h3>
            <p className=" pb-5">
              Bubble or paradigm shift? This is the main question investors want
              and need answers to. According to a global survey
              <sup>5</sup> among 212 fund managers representing $598 billion in
              assets, 78% of investors find stock markets to be overvalued with
              three quarters of investors saying that internet stocks are
              expensive (57%) and even bubble-like (18%). Since the Global
              Financial Crisis (GFC) in 2008, stock markets have been rising at
              an annualized growth rate of 15%
              <sup>6</sup>{" "}
            </p>
            <p className=" pb-5">
              Covid-19 induced massive selloffs which reached its peak on March
              16th, 2020, with the S&P500 hitting 2,304 points. This saw a rapid
              recovery in the course of the last 8 months to an all-time high of
              3,699 points<sup>7</sup> in what seems like a V-shaped recovery.
              Have investors, been overly enthusiastic about the underlying
              factors, rushed in too fast? This concern is common among analysts
              who expect the V-shaped recovery turning into a W-shaped one,
              accompanied by a period of high volatility.
            </p>
            <p className=" pb-5">
              Investors should ask themselves why is it that I am willing to
              accept relatively more risk than ever before? Returns are indeed
              supporting risk-taking, but volatility is higher than before,
              fuelled by overly expansive central bank policies, low interest
              rates and a more than ever unpredictable geopolitical climate
              which impacts globalisation and affects stock markets in a
              seemingly unpredictable way, especially given the unprecedented
              connectivity of the world as a result of technological
              advancements.
            </p>
            <p className=" pb-5">
              The Shiller Price to Earnings Ratio (P/E adjusted for cyclicality)
              for the S&P500, is at an all-time high at 33 since its peak in the
              Dot-Com Bubble at 43.53 (cf. Figure 3). A relevant example to this
              end is the recent IPO valuation of Airbnb which reached a market
              capitalization of $100 billion in early trading. Furthermore,
              global stock market capitalization recently broke through the $100
              trillion mark. Major asset managers have been adjusting their
              strategy from growth towards value investing as they expect value
              stocks to outperform growth stocks. Value stocks typically have
              low P/E, low P/B, low P/cash flow and high dividend yields while
              growth stocks are exactly the opposite and typically don’t pay
              dividends in order to reinvest in growth. The latter typically
              outperform during bull markets while value stocks do better during
              recessions.
            </p>
            <p className=" pb-5">
              With the Wilshire Growth/Value Ratio (cf. Figure 3) standing at
              1.30, an all-time high since the highs of the Dot-Com bubble
              (1.69), together with the duration of the current bull market,
              investors are increasingly anticipating a bear market. Investors
              may expect increased volatility and corrections in the near future
              as major asset managers have openly stated that these valuations
              are unprecedented and even bubble-like<sup>8</sup> . Subsequently,
              asset allocations towards more alternative, real and less risky
              assets like gold, oil, commodities and real estate are likely.
            </p>

            <p className=" pt-5">
              Furthermore, given ESG’s alternative-asset-like behaviour when it
              comes to returns and perceived risk, we might see increased
              momentum in ESG related stocks.
            </p>
            <div className="h-6" />

            <div className="max-w-[1000px] mx-auto">
              <p className="">
                <span className="font-bold"> Figure 3.</span> Cyclically
                adjusted P/E ratio and growth/value ratio 1990 to date
              </p>
              <div className="h-6" />
              <img src="./images/pdf/cyclicallygrowth.PNG" />
            </div>
            <div className="bg-black border border-black mt-9">
              <h3 className="pb-10 mt-9 text-4xl text-white mx-5 font-bold">
                KEY TAKE AWAYS
              </h3>
              <ul className="list-disc px-5 text-white mx-5 pb-10 text-2xl">
                <li className="pb-4">
                  More than 70 firms exist that offer ESG data, notwithstanding
                  that almost a quarter of asset managers also produce their own
                  in-house metrics.
                </li>
                <li className="pb-4">
                  There is no clear leader in ESG data, all mentioned have a
                  relatively equal market share.
                </li>
                <li className="pb-4">
                  Common ESG standards are needed in order to make metrics more
                  valid. However, if ESG is values driven, then common standards
                  will be impossible as values will vary.
                </li>
              </ul>
            </div>
            <h3 className="pb-10 mt-9 text-4xl text-[#3e4d77]">Cash Is King</h3>
            <p className=" pb-5">
              The main drivers of relatively high valuations are the
              unconventional monetary policy and the subsequent dry powder, ease
              of diversification through passive investing and emerging markets
              becoming more developed economically and financially. The Federal
              Funds Rate and the Main Refinancing Operations Rate have been
              stuck at the Zero Lower Bound, resulting in Quantitative Easing to
              bring long term interest rates down and to stimulate employment
              and inflation respectively.
            </p>
            <p className=" pb-5">
              These policies have resulted in great amounts of dry powder and
              have incentivised households to invest in stocks as a replacement
              for low-yielding savings accounts or low risk asset classes. This
              investment has and will most likely continue to take the form of
              passive investing and diversification through ETFs which have
              lower barriers to entry for relatively new stock market
              participants. On the institutional side, dry powder has increased
              mega M&A deals in the US, dividend payments and share buybacks.
            </p>
            <p>
              We have seen a surge in mega M&A deals caused by corporations and
              their increasingly activist shareholders pushing for competitive
              advantage through economies of scale. Dividend and share buybacks
              make up 109.7% of operating earnings. This ratio was 135% in
              run-up of the GFC and knew its bottom in the peak of the GFC at
              60%
              <sup>9</sup> . The S&P500 would be 5% lower if companies would
              hold the number of buybacks since 2010 in T-Bills and even 19%
              lower if buybacks vanished<sup>10</sup> . The latter assumption is
              not empirically correct but shows the dependency of S&P500
              performance on buybacks. Next to that, SWFs, pension funds, family
              offices, infrastructure and patient investment vehicles in general
              are becoming active participants in the stock market in their hunt
              for yield. Given the popularity of ESG investing due to the unique
              combination of risk-adjusted returns and their
              “doing-good”-character, a significant AuM increase is caused by
              these new cash rich market participants.
            </p>
            <div className="bg-black border border-black mt-9">
              <h3 className="pb-10 mt-9 text-4xl text-white mx-5 font-bold">
                KEY TAKE AWAYS
              </h3>
              <ul className="list-disc px-5 text-white mx-5 pb-10 text-2xl">
                <li className="pb-4">
                  Low interest rates are incentivising retail investing to
                  increase, typically these take the form of passive ETF funds.
                </li>
                <li className="pb-4">
                  Smart/institutional money is also being put to work due to low
                  interest rates with an increase in M&A deal flow, dividend
                  payments and share buybacks.
                </li>
                <li className="pb-4">
                  Low interest rates are incentivising cash-rich market
                  participants like retail investors, family offices, SWFs,
                  infrastructure funds to place capital into ESG related funds
                  as this investment class suits them by nature.
                </li>
              </ul>
            </div>
            <h3 className="pb-10 mt-12 text-4xl text-[#3e4d77]">
              Does ESG Investing Impact Carbon Emissions?
            </h3>
            <p className=" pb-5">
              ESG-themed investing has dramatically grown in popularity among
              asset managers and retail investors. In order to address key
              Environmental, Social and Governance issues, capital is being
              allocated to companies that have these issues high on their
              agenda. This white-paper earlier addressed the lack of clear and
              standardised ESG information on which a proper sustainable
              investment decision can be based. Still, investors are
              exponentially investing in companies with high ESG scores.
            </p>
            <p className=" pb-5">
              The fragmented ESG data provider market does not justify these
              massive AuM inflows. It appears investors ignore the current
              problematic state of ESG metrics by expecting a properly
              standardized framework that would justify current valuations and
              assets under management. Next to that, global sustainable assets
              under management have grown from $13.3 trillion in 2012
            </p>

            <p className=" pt-5">
              to $30.9 trillion in 2018 with Europe having the biggest share
              followed by the USA, Japan, Canada, Australia & New Zealand
              <sup>11</sup> . Maybe this AuM increase can be justified in light
              of expected reduced emissions and a greener future in general.
              However, Figure 4 shows that this increase in AuM is not as
              justified as investors think.
            </p>
            <div className="max-w-[1200px] mx-auto">
              <div className="h-6" />
              <p className="">
                <span className="font-bold"> Figure 4.</span> Total CO
                <sub>2</sub>
                emissions 2012-2018 rescaled
                <img src="./images/pdf/emissions.PNG" />
              </p>
            </div>
            <div className="h-6" />
            <div className="max-w-[1200px] mx-auto pt-12">
              <img src="./images/pdf/Sustainable.PNG" />
            </div>
            <div className="h-6" />
            <p className=" pt-10">
              CO<sub>2</sub> emissions for the listed countries has been
              rescaled to 100 in 2012 in order to visualize evolutions
              comparably. Europe and Japan are the only two with average reduced
              reduction with a yearly number of -1,3% and -2,1% respectively.
              Europe leads investors’ embrace for ESG while CO
              <sub>2</sub>reduction for Japan could be seen in their
              service-oriented nature. Canada, Australia & New{" "}
            </p>
            <div className="h-6" />

            <p className=" pb-5">
              Zealand and the USA have known increased CO<sub>2</sub>emissions
              even though their AuM recorded average annual growth ranging from
              20% to 25%. Even after the Paris Climate Agreement on December
              12th, 2015, it is incorrect to state that investments in ESG will
              lead to reduced CO<sub>2</sub>emissions when such country-specific
              variations and influences are observed. It looks like sustainable
              investments are being defined too broadly because of their poor
              qualification and ratings to have a real impact. Research12 shows
              that larger companies in the real economy have better ESG scores
              because they are included in more funds, therefore their ESG
              scores are higher which leads to further investment and
              consequently increasingly higher valuation, which comes at the
              cost of smaller companies who might have a more direct and real
              impact on ESG issues but are overseen due to their size and
              investor perception{" "}
            </p>
            <div className="bg-black border border-black mt-9">
              <h3 className="pb-10 mt-9 text-4xl text-white mx-5 font-bold">
                KEY TAKE AWAYS
              </h3>
              <ul className="list-disc px-5 text-white mx-5 pb-10 text-2xl">
                <li className="pb-4">
                  Global sustainable AuM has grown from $13.3 tr in 2012, to
                  $30.9 tr in 2018.
                </li>
                <li className="pb-4">
                  An increase in sustainable AuM does not necessarily correspond
                  to lower carbon emissions.
                </li>
                <li className="pb-4">
                  Only in Europe and Japan do we see a positive correlation
                  between AuM & carbon emissions, whereas in the USA, Canada and
                  Australia & New Zealand there exists a negative correlation.
                </li>
              </ul>
            </div>
            <h3 className="pb-10 mt-12 text-4xl text-[#3e4d77]">
              Finding Alpha in ESG
            </h3>
            <p className=" pb-5">
              A major driver of ESG investing is the expected outperformance.
              The gap between ESG and nonESG returns is widening and research
              shows that higher ESG scores lead to higher excessive returns for
              European companies. For the USA, this relationship is negative,
              again showing that sustainability in the USA does not receive the
              same focus as it does in Europe. ESG related fund inflows have
              definitely played a significant role in the high stock market
              valuation. Earlier on we mentioned how monetary policies, ease of
              investing and emerging markets drove the market to unprecedented
              highs. With sustainable European AuM making up 46% of local AuM
              and the USA at 39% of local AuM in 2018<sup>13</sup> , it is hard
              to ignore the role of ESG in the current bull run.
            </p>
            <p className=" pb-5">
              Many investors have started allocating assets to alternative
              classes like gold and real estate but also ESG. As the gap between
              ESG and non-ESG performance widens and the correlation between
              equity markets and alternative assets starts to decrease, money is
              flowing away from non-ESG markets into ESG and alternative assets.
              This asset relocation towards alternative assets is common in
              turbulent times with high volatility and global uncertainty about
              monetary policy, inflation, GDP growth and international conflicts
              and heightened tensions. It might seem
            </p>
            <div className="h-6" />
            <p className="pt-5 ">
              far-fetched to compare ESG to safe-haven stocks and classify the
              current trend as a gradual flight-to-safety but ESG is showing
              solid returns relative to an already high stock market
            </p>
            <p>
              It looks like ESG is one of investors’ favourite places for stable
              returns in an unstable environment. Whether ESG is here to stay is
              a very important question. History has shown other investing
              trends like BRIC and SmartBeta to have narrow hype cycles.
              Typically, when capital inflows show a significant gain, these
              cycles are presented as introducing a new paradigm shift in the
              investing community, using the level of AuM as proof of this
              theory. If enough people invest, this gives credence and
              legitimacy to the trend, which then ultimately leads to a
              reflexive relationship between investor sentiment and stock price
              gains. This self-fulfilling prophecy perpetuates itself beyond the
              rational justification based on fundamental analysis of the stock
              or strategy. Eventually, this bubble pops, markets correct and
              investors revert to the mean. (Cf. Figure 5)
            </p>
            <div className="max-w-[1200px] mx-auto pt-12">
              <p className="">
                <span className="font-bold"> Figure 5.</span> The 4
                psychological phases of asset bubbles
                <img src="./images/pdf/psychological.PNG" />
              </p>
            </div>
            <h3 className="pb-10 mt-12 text-4xl text-[#3e4d77]">
              BRICS & Smart BETA
            </h3>
            <p className=" pb-5">
              BRICs (later turned BRICS to accommodate South Africa) investing
              was introduced by Goldman Sachs’ Chairman of Asset Management Jim
              O’Neill with “Building Better Global Economic BRICs'' to invest in
              world leading emerging countries with a focus on Brazil, Russia,
              India and China
            </p>
            <p className=" pb-5">
              The Goldman Sachs’s BRIC fund was introduced in 2007 with much
              anticipation, this was reflected in the rapid AUM surge to a peak
              of $800m in mid-2007, however due to the crisis of 2008, this
              evaporated to lows of $200m in mid-08. As markets adjusted, the
              fund regained momentum to see another peak of $842m in mid-2011,
              however this momentum didn’t last and in October 2015 the fund
              closed due to poor performance and a subsequent cascade of
              investment withdrawals. Although this particular investment fund
              ended, the focus on emerging markets did not. Jim O’Neill can be
              said to have pioneered the focus for emerging markets investing,
              this focus did not disappear when the fund close. In fact,
              institutional investors still have an emerging markets strategy
              albeit not exclusively focused on the BRICS.
            </p>
            <p className=" pb-5">
              SmartBeta is another financial innovation that swept markets post
              2008, essentially SmartBeta is a hybrid investment strategy
              theorised originally by Harry Markowitz in his work on Modern
              Portfolio Theory (MPT), which provides investors the opportunity
              to combine active and passive investing advantages through factors
              like volatility, momentum, size and market capitalization to
              reduce volatility and increase returns.
            </p>
            <p className=" pb-5">
              Again, like BRICS, SmartBeta investing followed a similar bell
              curve pattern. Global assets in SmartBeta funds have doubled over
              the last 5 years to over $1 trillion. Between 2009 and 2018 a
              global underperformance is observed, mainly because most factors
              suffer during bull markets. With the decade long equity rally and
              growth-outperformance, SmartBeta fails to meet the hype14 .
              However, unlike the Goldman Sachs BRICS fund which inspired a
              wider focus into emerging markets despite the closure of their
              fund, SmartBeta has not paved the way for a new investing angle
              which can have benefits for the real economy
            </p>
            <p className=" pb-5">
              It is hard to say which path ESG investing will take. No doubt the
              underlying fundamentals of ESG have real world impact and
              consequences which have been present in investors’ minds for a
              while. The diligent reader may be quick to point out our
              assumption in comparing ESG to the two other investing trends by
              inferring that we believe ESG funds will inevitably succumb to the
              same fate as BRICS and SmartBeta, that is, a movement with great
              optimism, but ultimately short lived and deflated.
            </p>
            <p className=" pb-5">
              Our answer is that investors must be aware that investment trends
              come and go and ESG has still a long way to go to be a fundamental
              indicator for valuing companies. Value driven investing is not a
              new thing either, and furthermore, industry can benefit from a
              more systematic and long term ESG planning and adoption strategy.
              The main challenge of ESG investing is the standardisation of
              ratings methodologies and the subsequent elimination of
              unjustified ESGlabelled investments which will cause a great deal
              of volatility and sell-offs
            </p>

            <div className="bg-black border border-black mt-9">
              <h3 className="pb-10 mt-9 text-4xl text-white mx-5 font-bold">
                KEY TAKE AWAYS
              </h3>
              <ul className="list-disc px-5 text-white mx-5 pb-10 text-2xl">
                <li className="pb-4">
                  The closure of Goldman Sachs flagship BRICS fund did not close
                  investors appetite for emerging markets growth
                </li>
                <li className="pb-4">
                  SmartBeta, like the BRICS, saw a similar bell-shaped curve
                  pattern, but unlike BRICS, it did not expand an investing
                  paradigm.
                </li>
                <li className="pb-4">
                  ESG, like BRICS, does have an underlying real economy focus,
                  however, its current execution is looking very bubble like
                  which could cause problems for investors.
                </li>
              </ul>
            </div>
            <h3 className="pb-10 mt-12 text-4xl text-[#3e4d77]">
              Further Research Questions
            </h3>
            <p className=" pb-5">
              Below is a list of questions and themes we have investigated and
              think you would like the answers to.
            </p>
            <ul className="list-decimal px-5">
              <li>
                Do ESG investors have anything to learn from Islamic Finance?
              </li>
              <li>How can ESG metrics be improved?</li>
              <li>
                How can investors develop better relationships with companies,
                in order to better incentivise ESG development?
              </li>
              <li>How does ESG play out in the private equity space?</li>
              <li>
                What are the primary KPIs that investors and businesses measure
                the impact of ESG policy?
              </li>
              <li>Where is the drive for ESG considerations coming from?</li>
              <li>Should ESG investing be values driven?</li>
              <li>
                What is the difference between ESG and impact investing, and why
                is it important?
              </li>
              <li>
                What role(s) do government and regulators play in the ESG
                debate?
              </li>
              <li>
                How can investors better align themselves with UN Sustainable
                Development Goals?
              </li>
            </ul>
            <div className="text-lg">
              <p className="mt-[100px]  ">
                <p className=" max-w-[250px] border-b-2 border-b-slate-900 mb-3 md:mt-16"></p>
                <div className="h-6" />
                <sup className="mr-3">1</sup> The Story Behind Talent & ESG,
                2020, BRUIN FINANCIAL, ESG Initiative Surve
              </p>

              <p className="mt-[6px]">
                <sup className="mr-3">2</sup> According to Research Affiliates.
              </p>

              <p className="mt-[6px]">
                <sup className="mr-3">3</sup> PwC Asset & Wealth Management,
                Luxembourg
              </p>

              <p className="mt-[6px]">
                <sup className="mr-3">4</sup> Research Affiliates’ Li and
                Polychronopoulos (2020)
              </p>

              <p className="mt-[6px]">
                <sup className="mr-3">5</sup> Bank of America Global Fund
                Manager Survey
              </p>

              <p className="mt-[6px]">
                <sup className="mr-3">6</sup> Yahoo Finance, time of writing 11
                <sup>th</sup> of December 2020
              </p>

              <p className="mt-[6px]">
                <sup className="mr-3">7</sup> Yahoo Finance, time of writing 11
                <sup>th</sup> of December 2020
              </p>

              <p className="mt-[6px]">
                <sup className="mr-3">8</sup> Bank of America Global Fund
                Manager Survey
              </p>

              <p className="mt-[6px]">
                <sup className="mr-3">9</sup> Yardeni Research, 2020
              </p>

              <p>
                <sup className="mr-3">10</sup> Ned Davis Research, 2019
              </p>

              <p className="mt-[6px]">
                <sup className="mr-3">11</sup> Bank of America Global Fund
                Manager Survey
              </p>

              <p className="mt-[6px]">
                <sup className="mr-3">12</sup> Refinitiv’s Wu & Borovkova, 2020
              </p>

              <p className="mt-[6px]">
                <sup className="mr-3">13</sup> Global Sustainable Investment
                Alliance report, 2019
              </p>

              <p className="mt-[6px]">
                <sup className="mr-3">14</sup> Research Affiliates’ Kalesnik
              </p>
            </div>
            {/* <div className="flex gap-10 max-md:gap-0 max-md:flex-col">
              <div
                className="flex-1 mt-28 relative w-full
              "
              >
                <img src="/images/pdf/globlinvesto.png" className="w-[100%] " />
                <img
                  src="/images/pdf/Pareto.png"
                  className="w-[70%] absolute bottom-10 left-4 bg-[#223949]"
                />

                <div className="absolute top-0 p-8 text-black font-semibold">
                  {" "}
                  <h3 className="pb-10 mt-9">
                    <div className="font-bold mt-4">
                      GLOBAL INVESTORS SERIES{" "}
                    </div>
                  </h3>
                  <p className="pb-5">
                    To receive other whitepapers from our Global Investors
                    Series on themes including:
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
                </div>
              </div>

              <div className="flex-1 max-md:mt-6 mt-28 w-full">
                <h3 className="pb-10  max-md:mt-0 mt-20">
                  <div className="font-bold mt-4">Contact</div>
                  <div className="flex-1 max-md:mt-16 mt-28">
                    <img
                      src="/images/pdf/klisman.png"
                      className="w-[300px] -mt-7"
                    />
                  </div>
                  <div className="font-bold mt-20">Klisman Murati </div>
                  <p className="pb-5">Director, Pareto Economics</p>

                  <p className="pb-5">
                    <a
                      className="underline decoration-2"
                      href="https://klisman.m@pareto-economics.com"
                      target="_blank"
                    >
                      klisman.m@pareto-economics.com
                    </a>
                  </p>

                  <p className="pb-5">
                    <a
                      className="underline decoration-2"
                      href="https://pareto-economics.com/"
                      target="_blank"
                    >
                      https://pareto-economics.com/
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
};

export default IsBubble;
