import React, { useState } from "react";
import Header from "../../../Layouts/Header";
import Footer from "../../../Layouts/Footer";

const ChinaFinal = () => {
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
            The rise of China + : Why China is Winning in Emerging Markets
          </h1>
          <div className="h-6" />
          <div className="md:flex block  items-center justify-between">
            <div>
              <p>June 2024</p>
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
            <p className="pb-5 mt-9">
              This piece introduces a new concept into the lexicon of world
              affairs, one which helps frame the new reality which global
              business, investment and policy operators are faced with today.
              This term is CHINA +. It relates to China’s role in emerging
              markets and global power dynamics, the extend of which will be
              made apparent throughout the course of this piece.{" "}
              <div className="h-5" />
              It is our opinion that China’s presence on the world stage is one
              that can no longer be described as emerging. Its force and
              influence can be seen across every dimension of world affairs,
              most notably trade, finance, geopolitics, technological
              innovation, and more.
              <div className="h-5" />
              Furthermore, it is our belief that China’s growing leadership on
              the international stage has not been fully characterised. This is
              what we attempt to do in this piece. z
            </p>
            <h3 className="pb-5 md:pb-10 mt-9">China’s Debut to the Ton</h3>
            <p className="pb-5">
              Amidst the tumultuous aftermath of 9/11, the world witnessed an
              event on December 11, 2001, that would silently alter the course
              of history. China's entry into the WTO marked a turning point in
              international trade which fundamentally reshaped the global
              economic landscape. This decision, largely overlooked at the time,
              became the catalyst for a seismic shift in the realm of
              macroeconomics and geopolitics which would reverberate throughout
              the world for decades to come.
            </p>
            <p className="pb-5">
              Two decades later, the impact of that seemingly inconspicuous
              decision reverberates. The resulting convergence of economic
              liberalisation championed by the west and adopted by China had
              grown in tandem with the sustained divergence of political
              doctrine between western liberal democracies, and China’s
              socialism with Chinese characteristics.
            </p>
            <p className="pb-5">
              China's success defied Western expectations and has over the years
              seen China grow as the leading winner in emerging markets.
            </p>
            <p className="pb-5">
              So far ahead of the rest of the pack, the China phenomenon has led
              many counties and market participants to view China as not only an
              alternative provider of economic growth opportunities, which until
              recently, was only offered by the west, but moreover as a viable
              model for economic growth and a long-term partner of the emerging
              markets.
            </p>
            <p className="pb-5">
              Without China, the potential and opportunity of emerging markets
              would not exist to the extent it does with China. Its prominence
              is not only reflected by its own development trends but also by
              the ability of China to raise all ships.
            </p>
            <p className="pb-5">
              This new and dynamic assembly of emerging market potential is what
              we call CHINA +.
            </p>
            <h3 className="pb-5 md:pb-10 mt-9">Trade Is Reorienting Towards China</h3>
            <p className="pb-5">
              In the late 20th century, the United States stood tall as the
              undisputed leader of global trade. Its economic prowess and
              political influence were unmatched, and over 80% of the world’s
              nations counted the U.S. as their most important trading partner.
              This dominance was built on a foundation of strong industrial
              capabilities, extensive diplomatic relationships, and an open,
              market-driven economy that encouraged international trade. The
              world looked to America as the hub of commerce, innovation, and
              opportunity.
            </p>
            <p className="pb-5">
              In the 21st century, this title of undisputed leader of global
              trade cannot be made as confidently. This is because in the years
              that followed, China embarked on an aggressive campaign to expand
              its trade relationships. Between 2005 and 2010, a noticeable shift
              began to take place. This was not merely a matter of trade volumes
              but a reflection of China’s increasing economic influence and
              strategic investments.
            </p>
            <p className="pb-5">
              One of the most ambitious undertakings that symbolised China’s
              rising influence was the Belt and Road Initiative (BRI), launched
              in 2013. This massive infrastructure project aimed to create new
              trade routes, linking China with more than 140 countries across
              Asia, Africa, and beyond. Through investments in ports, highways,
              and railways, China was not only facilitating trade but also
              fostering economic dependencies. Countries receiving Chinese
              investments found themselves increasingly integrated into China’s
              economic sphere, further shifting the balance of global trade.
            </p>
            <p className="pb-5">
              By 2018, the transformation was undeniable. China had emerged as
              the largest trading partner for 128 out of 190 countries. As a
              result the U.S. saw its influence wane, retaining its status as
              the primary trading partner for only 30% of countries. This shift
              was a testament to China's strategic economic policies and its
              ability to capitalise on cheaper exports and increased imports.
            </p>
            <p className="pb-5">
              Central to this strategy is the establishment of a China-centric
              network of bilateral and regional free trade agreements (FTAs),
              aimed at reducing trade barriers and promoting direct investment
              flows. Presently, China's FTA network includes 28 countries and
              territories, accounting for nearly 40% of its exports, with plans
              for further expansion.
            </p>
            <p className="pb-5">
              In pursuit of its geopolitical imperatives, China is actively
              pursuing FTAs with strategically significant regions, such as the
              Gulf Cooperation Council (GCC) and the African continent. China's
              engagement with Africa, facilitated by initiatives like the
              African Continent Free Trade Agreement (AfCFTA), underscores its
              commitment to fostering mutually beneficial trade relationships.
            </p>
            <p className="pb-5">
              As the West grapples with the prospect of decoupling from China,
              the rest of the world is increasingly orienting itself towards
              China, as evidenced by the surge in investment flows following the
              trajectory of Chinese FTAs.
            </p>
            <p className="pb-5">
              In essence, while several nations seek stronger trade prospects,
              US policymakers appear hesitant in pursuing such opportunities,
              contrasting with China's proactive approach in forging new
              partnerships and agreements. Despite the challenges posed by
              escalating trade tensions with the US and EU, China remains
              committed to upholding the principles of globalisation, as
              exemplified by its exponential growth in trade since joining the
              WTO in 2001.
            </p>
            <h3 className="pb-5 md:pb-10 mt-9">
              China Vs. United States Economic Structure
            </h3>
            <p className="pb-5">
              Examining the structure of China's and the US's economies sheds
              light on their vastly different economic models and priorities.
              This matters to emerging markets as a large part of their future
              has depended and will in large part continue to depend on the
              growth strategies these two juggernauts employ in the long run.
            </p>
            <p className="pb-5">
              Azerbaijan’s Ilham Aliyev is another leader in the region who
              views a second Trump term favourably. Aliyev has rebuffed the
              Biden administration’s efforts to broker peace with Armenia and
              appears poised for another military incursion against his
              neighbour. Azerbaijan’s recent military successes have not faced
              significant opposition from the Trump administration, despite
              international criticism.
            </p>
            <p className="pb-5">
              In China, the industrial sector accounts for a significant portion
              of GDP, making up around 39% in 2021.
            </p>
            <p className="pb-5">
              This reflects China's focus on manufacturing and production, which
              has propelled it to become a global industrial powerhouse.
              Notably, the service sector which encompasses financial services
              makes up 53% of GDP, with a majority of financial institutions
              being state-owned and geared towards supporting the real economy
              rather than speculative activities.
            </p>
            <p className="pb-5">
              On the other hand, the US economy paints a starkly contrasting
              picture.
            </p>
            <img
              src="images/pdf/chart1.png"
              alt="Breakdown of GDP by Sector (2021)"
              className="max-w-[700px] mx-auto"
            />
            <div class="h-6"></div>
            <p className="pb-5">
              The largest sector by far is its services sector at a substantial
              78% of GDP. This sector is characterised by rent extraction and
              financialisation, rather than productive activities which bolster
              the real economy. In contrast, its industrial sector, which
              includes construction, mining, utilities and manufacturing
              represents only around 18% of GDP, a figure that has been on a
              slight decline over the years. This shift towards a
              service-dominated economy, where professional and business
              services make up a significant portion of GDP, has been a
              transition which has been taking place since the introduction of
              Bretton Woods in 1945.
            </p>
            <p className="pb-5">
              This divergence in economic structures highlights the contrasting
              approaches taken by China and the US. While China has prioritised
              industrial development and state intervention to support key
              sectors, the US has progressively leaned towards neoliberal
              economics, emphasising financialisaton, offshoring industrial
              capacity and reducing state intervention in the economy.
            </p>
            <p className="pb-5">
              It is our opinion that given the current priorities of emerging
              markets to focus on expanding its infrastructure development,
              export markets and over all industrialisation, China provides not
              only the markets which these emerging markets can reliably sell
              into, but moreover, China is also more readily able to provide the
              financing via the Belt & Road Initiative and the Asia
              Infrastructure investment Bank to make it happen.
            </p>
            <h3 className="pb-5 md:pb-10 mt-9">
              Securing influence through Global Governance
            </h3>
            <p className="pb-5">
              China's growing importance to the United Nations (UN) highlights
              Beijing's efforts to exert influence through established global
              international organisations, aiming to shape the narrative and
              disseminate its foreign policy values and interests. Beijing’s
              growing presence at the UN can be assessed through metrics that
              gauge its success in steering the global governance agenda.
            </p>
            <p className="pb-5">
              China views the UN as a cornerstone for a state-led international
              order, working to reform it from within to better execute
              President Xi’s vision of a “community of common destiny” or a
              “shared future”. This concept is deliberately nebulous and
              all-encompassing with an intention to showcase China’s peaceful
              and cooperative stance on matters of global significance.
            </p>
            <p className="pb-5">
              However, there is a divergence in their core values. The UN’s
              “three pillars” approach nurtures human protection through a
              combination of development, human rights, and peace and security.
              This stance emphasises accountability, inclusivity, and
              transparency regarding state operations. By contrast, China’s
              foreign policy emphasises a “triadic model,” using economic
              development, social stability, and a strong state infrastructure
              to secure international peace and security.
            </p>
            <p className="pb-5">
              We can gauge China’s rising presence at the UN using publicly
              available data across observable metrics that allow inferences to
              be drawn about China’s influence. These metrics include an
              increase in funding from China for key UN agencies & an increase
              of Chinese nationals in senior UN roles:
            </p>
            <h3 className="pb-5 md:pb-10 mt-9">
              Funding for departments, programs, and initiatives
            </h3>
            <p className="pb-5">
              The “power of the purse” is a means to shape the UN agenda. As one
              US official stated, “Our influence at the UN is greatest when we
              pay our bills in full and on time.”
            </p>
            <p className="pb-5">
              Consequently, we anticipate the Trump administration to finance
              its fiscal commitments by increasing customs receipts and
              repealing some of President Biden’s policies. Overall, fiscal
              policy may experience slight loosening in the first year of a
              Trump presidency but could in subsequent years take a neutral
              stance.
            </p>
            <p className="pb-5">
              In the same vein, the UN has become progressively more reliant on
              China’s contributions, allowing China to use various levers to
              elevate its position within the UN system.
            </p>
            <img
              src="images/pdf/chart2.png"
              alt="Top Contributions to the UN Regular Budget"
              className="max-w-[700px] mx-auto"
            />
            <div class="h-6"></div>
            <p className="pb-5">
              By 2019, China had become the second-largest financial contributor
              to the UN regular budget, surpassing Japan and only behind the US.
            </p>
            <p className="pb-5">
              Controlling for country GDP, China’s assessed contributions lag
              behind other top government donors. Since 2013, apart from the US,
              all other top government donors contribute, on average, 0.02 to
              0.03% of their GDP to UN assessed contributions. By comparison,
              China’s assessed contributions remain at 0.01% of its GDP. Other
              selected G77 countries with larger economies contribute around
              0.015 to 0.018% of their GDP to UN assessed contributions, higher
              than China’s 0.01%.
            </p>
            <p className="pb-5">
              This discrepancy suggests there is room for China to contribute
              more to UN assessed contributions in the future.
            </p>
            <h3 className="pb-5 md:pb-10 mt-9">
              Staffing of Executive-Level Personnel Positions
            </h3>
            <p className="pb-5">
              China is making a concerted effort to secure executive leadership
              posts within international organisations like the UN. China
              identifies these headships as an important lever to advance their
              interests through the UN, as these positions have organisational
              control to direct and execute their agency’s agenda.
            </p>
            <h3 className="pb-5 md:pb-10 mt-9">International Standards Organisation</h3>
            <img
              src="images/pdf/chart3.png"
              alt="International Standards Organisation"
              className="max-w-[700px] mx-auto"
            />
            <div class="h-6"></div>
            <p className="pb-5">
              The bar chart provides a comparative analysis of the number of
              secretariats held by China, the United States, Germany, and Japan
              in 2011 and 2020, emphasizing China's substantial rise relative to
              the other nations. In 2011, China held approximately 43
              secretariats, which surged by 73% to around 74 in 2020. This
              remarkable increase suggests a strategic intention by China to
              enhance its influence within international standardisation bodies,
              with an aim to shape global standards and norms in alignment with
              its technological and economic interests.
            </p>
            <p className="pb-5">
              In contrast, the United States, which consistently maintained the
              highest number of secretariats in both years compared to China,
              saw a slight decline from around 115 in 2011 to about 110 in 2020.
              This decline might indicate a diminishing focus on maintaining its
              dominant role in international standards.
            </p>
            <h3 className="pb-5 md:pb-10 mt-9">
              International Telecommunications Union
            </h3>
            <p className="pb-5">
              As it relates to the ITU, the American representative Doreen
              Bogdan-Martin in 2023 took the mantel of secretary general from
              China’s Houlin Zhao who held the post for 7 years previously.
            </p>
            <img
              src="images/pdf/chart4.png"
              alt="Top Funding Countries of the ITU"
              className="max-w-[700px] mx-auto"
            />
            <div class="h-6"></div>
            <p className="pb-5">
              This focus on the ITU by China can also be seen in the funding
              statistics. The United States consistently leads in funding,
              showing a gradual increase over the years, reflecting its
              sustained commitment to maintaining a dominant role in the ITU. In
              contrast, China's contributions display significant volatility.
              Starting at a lower point in 2017, China's funding saw a sharp
              increase, peaking around 2020 during Zhao's tenure, before
              experiencing a notable decline by 2022. This pattern suggests
              China's strategic effort to enhance its influence within the ITU
              during critical periods, aligning with its broader goals of
              shaping global telecommunications standards.
            </p>
            <h3 className="pb-5 md:pb-10 mt-9">
              UN Industrial Development Organization (UNIDO)
            </h3>
            <p className="pb-5">
              Given China’s focus on industrlisation it makes sense for them to
              invest in shaping the dynamics at the UNIDO. This can be seen by
              the fact that the UNIDO’s Deputy Director General is China’s
              Ciyong Zou.
            </p>
            <img
              src="images/pdf/chart5.png"
              alt="UN Industrial Development Organization"
              className="max-w-[700px] mx-auto"
            />
            <div class="h-6"></div>
            <p className="pb-5">
              Moreover, China has also put a concerted effort since 2017 in
              being the second largest funding country of the UNIDO behind only
              Japan.
            </p>
            <h3 className="pb-5 md:pb-10 mt-9">
              Under-priced Emerging Market Potential
            </h3>
            <p className="pb-5">
              In the early 2000s, China demonstrated a willingness to engage
              with the international community and took advantage of the
              pre-existing international organisations. However, as its economic
              power grew, Beijing began to take a more active role in
              establishing and leading new bounded international orders, thus
              showing its potential to both challenge existing institutions and
              norms and create alternative international offerings.
            </p>
            <p className="pb-5">
              Since the early 2000s, China has been central to the founding and
              growth of three key international organisations that aim to
              provide a challenge to the established global players. These
              institutions are the Shanghai Cooperation Organization (SCO), the
              Asia Infrastructure Investment Bank (AIIB), and BRICS. Each of
              these organisations plays a pivotal role in shaping the
              geopolitical and economic landscape of the emerging markets. Let
              us focus on BRICS.
            </p>
            <h3 className="pb-5 md:pb-10 mt-9">BRICS</h3>
            <p className="pb-5">
              Many don’t know BRICS was a concept founded by the then Goldman
              Sachs Economist Jim O’Neil in a paper produced in 2001. Despite it
              being a group not originally founded by its members, one must see
              the disproportionate role China plays in this grouping.
            </p>
            <p className="pb-5">
              Through measuring a number of important metrics one will quickly
              see conclusive evidence for why we should be seeing the emerging
              markets as China +.
            </p>
            <img
              src="images/pdf/chart6.png"
              alt="BRICS Joint Statistical Publication 2022"
              className="max-w-[700px] mx-auto"
            />
            <div class="h-6"></div>
            <p className="pb-5">
              The volume of trade and business activity as measured by GDP shows
              clearly that China far outpaces any other BRICS countries
              combined. This is also the case when taking into account the
              collective GDP of BRICS +.
            </p>
            <img
              src="images/pdf/chart7.png"
              alt="Proportion of R&D Expenditure to GDP"
              className="max-w-[700px] mx-auto"
            />
            <div class="h-6"></div>
            <p className="pb-5">
              China’s lead is also evident when comparing the BRICS on the
              proportion of R&D expenditure to GDP. This metric is useful as it
              signals where the innovations in technology are likely to come
              from. China has a focus on expanding itself in the sphere of
              technological leadership, this can be seen also via Pareto
              Economics’ Technological Leadership index.
            </p>
            <img
              src="images/pdf/chart8.png"
              alt="FX Reserves"
              className="max-w-[700px] mx-auto"
            />
            <div class="h-6"></div>
            <p className="pb-5">
              Again in the realm of FX reserves of the BRIC nations, China’s
              position is unmatched. This high level of FX reserves is essential
              for the economic stability of a country, putting China in a
              position to be a substantial liquidity provider as well as
              cushioning China against external shocks, giving the leadership
              more flexibility to manage its exchange rate etc.
            </p>
            <h3 className="pb-5 md:pb-10 mt-9">Conclusion</h3>
            <p className="pb-5">
              Over the past two decades, China has gained significant influence
              on the global stage, steadily advancing towards its goal of
              claiming its perceived rightful status as a great power. Beijing’s
              intentions, actions and future potential presents a formidable
              force in the grand theatre of world affairs.
            </p>
            <p className="pb-5">
              If China's economy continues to expand in the long term, it will
              likely exert even more influence in all dimensions of its power
              projection as measured by our{" "}
              <a href="https://www.pareto-economics.com/global-power-index">
                Global Power Index
              </a>
              .
            </p>
            <p className="pb-5">
              It has been increasingly evident that without China, not only
              would the potential and opportunity of emerging market success be
              less expansive, but given the economic role that China plays, it
              has a real ability to shape and influence the future of world
              affairs to its favour without the need to build a domestic civil
              and political consensus in the same way a western liberal
              democracy needs to, allowing it to manoeuvre swiftly and
              effectively on the global stage.
            </p>
            <p className="pb-5">
              In essence, China's rise underscores its capacity to not only
              participate in but also direct the trajectory of global economic
              and political developments far more powerfully than any other
              emerging market participant as well as the vast majority of
              developed market participants. This dynamic highlights China’s
              growing role in shaping the future of international relations and
              economic landscapes and why we should see the emerging markets as
              China +.
            </p>
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

export default ChinaFinal;
