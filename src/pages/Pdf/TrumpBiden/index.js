import React, { useState } from "react";
import Header from "../../../Layouts/Header";
import Footer from "../../../Layouts/Footer";

const TrumpBiden = () => {
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
            Scenario planning a second Trump Presidential Term: A Deep Dive into
            Fiscal, Geopolitical, and Trade Dynamics
          </h1>
          <div className="h-6" />
          <div className="md:flex block  items-center justify-between">
            <div>
              <p>May 2024</p>
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
              In the landscape of international affairs, the spectre of a Trump
              presidency looms large, stirring a mixture of apprehension and
              curiosity among global business, investment and policy leaders.
              Drawing insights from previous policy stances, current global
              dynamics and original analysis, we delve into the potential
              trajectory of U.S. power under a reestablishment of Trump's
              leadership and its far-reaching ramifications for global
              diplomacy, regional stability, and the pursuit of international
              cooperation.
            </p>
            <h3 className="pb-10 mt-9">What does the neighbourhood think? </h3>
            <p className="pb-5">
              While Trump's first term witnessed unexpected diplomatic
              successes, a second term would confront a changed global
              landscape. For instance, in the Middle East, unequivocal support
              for Israel could exacerbate regional tensions, while in Asia,
              willingness to compromise on Taiwan might embolden China given
              that Trump does not see a benefit in engaging in war with a
              nuclear armed superpower to benefit an island as increasingly less
              strategic tiny as Taiwan.
            </p>
            <p className="pb-5">
              Several world leaders have openly expressed their apprehensions.
              Canadian Prime Minister Justin Trudeau acknowledged the need for
              Canada to prepare for the uncertainty that a Trump return would
              bring, while German Chancellor Olaf Scholz endorsed Biden last
              year, citing Trump's divisive leadership. European Central Bank
              Chief Christine Lagarde has labelled Trump's resurgence as a
              threat to Europe, pointing to his past actions on tariffs, NATO,
              and climate change.
            </p>
            <p className="pb-5">
              Ukrainian President Volodymyr Zelensky, in particular, has reason
              to be wary of Trump's return, given Trump's previous actions
              regarding military aid to Ukraine and his unsubstantiated claims
              about swiftly ending the conflict with Russia.
            </p>
            <p className="pb-5">
              On the other hand, some leaders, like Hungarian Prime Minister
              Viktor Orbán and Polish President Andrzej Duda, had warm relations
              with Trump during his presidency.
            </p>
            <p className="pb-5">
              Israeli Prime Minister Benjamin Netanyahu, who enjoyed a close
              alliance with Trump, may see his return favourably, given the
              pressure Israel faces internationally following the armed conflict
              with Hamas.
            </p>
            <p className="pb-5">
              While Trump's resurgence wasn't entirely unexpected, the recent
              flurry of diplomatic engagements has raised alarms among Biden's
              aides, who perceive Trump's actions as an attempt to maintain a
              quasi-presidential role.
            </p>
            <p className="pb-5">
              The standard practice in international politics is for nations to
              refrain from openly discussing each other’s elections. However,
              it's widely known that in Europe there's a preference for Biden’s
              re-election. This preference is strategic and rooted in values.
            </p>
            <p className="pb-5">
              For the countries within the European Union, the Biden
              administration’s commitment to multilateralism and liberal
              democracy is familiar and reassuring. Yet, there's a palpable
              concern in Europe that a second Trump presidency would lead the
              United States to abandon these principles. There are worries that
              such a scenario could embolden autocrats worldwide and even fuel
              the rise of illiberal parties within Europe.
            </p>
            <p className="pb-5">
              Within Europe, Italian Prime Minister Giorgia Meloni is a discreet
              supporter of Trump, although she has earned praise in Europe for
              her willingness to stand by Ukraine. The European far-right shares
              several commonalities with Trump’s MAGA base, particularly in
              their rhetoric regarding "globalist elites" and discussions on
              equality, diversity, and immigration. Europe’s far-right
              insurgents see themselves as part of the same anti-liberal
              movement as Trump.
            </p>
            <p className="pb-5">
              Moreover, As Hungary’s populist prime minister and a figure on the
              far-right, Orbán has forged a close relationship with Trump. Trump
              and Orbán’s longstanding friendship reached new heights in March
              when Orbán visited Mar-a-Lago, expressing his support for Trump,
              whom he hails as a "man of peace."
            </p>
            <p className="pb-5">
              While negotiation to end the war in Ukraine is seen as inevitable
              among allies, the timing and manner of these talks are crucial.
              U.S. and European officials privately envision the endgame in
              Ukraine as the emergence of a strong and sovereign nation capable
              of standing independently, even with continued Russian occupation
              of Crimea and parts of Ukraine. However, they acknowledge that
              achieving this goal requires military support for Ukraine to
              maintain its position on the battlefield. Pushing Ukraine into
              negotiations without providing weapons would amount to accepting
              peace on Russia’s terms, potentially leading to Ukraine’s
              permanent partition without security guarantees against future
              Russian aggression.
            </p>
            <p className="pb-5">
              Interestingly, Putin has denied expressing a preference for a
              second Trump term. When asked which candidate is better for
              Russia, Putin, breaking the tradition of not directly expressing a
              preference in U.S. elections, stated that Biden is preferable
              because he is more experienced and predictable.
            </p>
            <p className="pb-5">
              Further east in Europe, others anticipate a second Trump term with
              optimism. Turkey’s Erdoğan enjoyed a positive relationship with
              Trump during his first term and would welcome another opportunity
              for high-profile engagement with the United States. Erdoğan
              envisions himself as a leader capable of balancing geopolitics
              among major powers and advocating for Muslims worldwide.
            </p>
            <p className="pb-5">
              However, Erdoğan has faced increasing scrutiny from the Biden
              administration and European leaders due to Turkey’s democratic
              decline and its proximity to the Kremlin. This has limited his
              ability to engage internationally. Erdoğan hopes for improved
              relations with the United States under a second Trump term, which
              could lead to increased trade and investment between the two
              countries.
            </p>
            <p className="pb-5">
              Trump’s re-election might also benefit Turkey’s military
              objectives in Iraq and Syria and allow Ankara to address its
              concerns regarding U.S.-backed Syrian Kurds, whom Turkey considers
              terrorists. Ankara hopes that Trump will fulfil his promise to
              withdraw U.S. troops from Syria, enabling Turkey to extend its
              territorial control into Syrian territory.
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
              Aliyev desires closer ties with the West but has been excluded
              from high-level engagements such as White House visits due to
              concerns over Azerbaijan’s human rights record and treatment of
              Armenians. He hopes that under a second Trump term, human rights
              issues will be overlooked, allowing for improved relations with
              the United States.
            </p>
            <h3 className="pb-10 mt-9">
              Contrasting the fiscal priorities of Trump & Biden
            </h3>
            <p className="pb-5">
              The initial terms of Presidents Joe Biden and Donald Trump provide
              insights into their potential economic management and how
              financial markets might react.
            </p>
            <p className="pb-5">
              While every presidential election year brings its own surprises,
              2024 appears to be particularly significant. However, analysing
              the track records of the leading candidates, Biden and Trump,
              offers observers a clear understanding of their governing styles
              and economic strategies, which could impact market sentiments in a
              potential second term.
            </p>
            <p className="pb-5">
              Before the pandemic, the U.S. national debt was already on an
              unsustainable path. To address the pandemic's economic impact,
              policymakers authorised substantial borrowing—$3.4 trillion—to
              support the economy. However, even after the economy stabilised,
              borrowing continued at elevated levels.
            </p>
            <p className="pb-5">
              Estimates indicate that the policies implemented by the Biden
              Administration, through both legislation and executive actions,
              could escalate deficits by over $4.8 trillion between 2021 and
              2031, with approximately $2.5 trillion attributed to actions
              excluding the American Rescue Plan. This exacerbates existing
              projections for borrowing. Persistent borrowing poses risks of
              inflation, a record-high national debt by 2030, and a tripling of
              federal interest payments over the next decade, particularly if
              interest rates unexpectedly rise.
            </p>
            <p className="pb-5">
              In comparison, the Biden Administration's borrowing is lower than
              President Trump's approximately $7.5 trillion deficit increase
              during his term ($4 trillion excluding COVID relief), but
              surpasses the $2.5 trillion at this point in Trump's term. The
              $4.8 trillion borrowing under Biden comprises roughly $4.6
              trillion in new spending, $500 billion in tax reductions, and $700
              billion in additional interest expenses, offset by $400 billion in
              spending cuts and $600 billion in revenue-raising measures. Around
              $3 trillion of deficit increases originate from legislation,
              including $1.6 trillion passed along partisan lines and $1.4
              trillion with bipartisan support, with an additional $1.1 trillion
              from executive actions.
            </p>
            <p className="pb-5">
              We anticipate that the combined legislative and executive actions
              sanctioned by the President will elevate interest expenses by $700
              billion, primarily attributed to the American Rescue Plan.
              Notably, this estimation does not encompass any interest
              repercussions linked to adjustments in student loans, typically
              gauged on an accrual basis.
            </p>
            <p className="pb-5">
              Against the backdrop of inflation reaching a 40-year peak and
              national debt approaching unprecedented levels, substantial
              deficit mitigation measures will be imperative to steer the
              country towards a sustainable fiscal trajectory.
            </p>
            <p className="pb-5">
              The world has undergone significant changes in the eight years
              since the 2016 election, prompting four key observations:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="my-2">
                Fiscal policy has spiralled out of control, with both candidates
                prioritising their agendas over fiscal responsibility, leading
                to a growing budget deficit. Even excluding the pandemic period,
                deficits increased under each administration. Addressing the
                ballooning U.S. government debt will become increasingly
                challenging over time.
              </li>
              <li className="my-2">
                Rather than passing judgment on this fiscal governance approach,
                it's noteworthy that markets are beginning to do so. Bond
                investors expressed dissatisfaction last summer when Treasury
                issuance exceeded expectations, resulting in the highest average
                interest rate on federal debt service since 2010.
              </li>
              <li className="my-2">
                Peak globalisation has transitioned to deglobalisation, evident
                from the period before Trump’s tariffs. The Biden
                administration's emphasis on enhancing domestic industrial
                capacity for technology hardware and clean energy further
                illustrates this shift. Both administrations aimed to safeguard
                U.S. interests amid the evolving U.S.-China power dynamic,
                albeit through different means.
              </li>
              <li className="my-2">
                Deglobalisation and the absence of incentives to reduce federal
                deficits pose ongoing challenges, regardless of the election
                outcome in November.
              </li>
            </ul>
            <p className="pb-5">
              Regarding fiscal policy, caution is expected from the
              administration. A potential Trump 2.0 presidency would inherit
              substantial fiscal deficits from the Biden administration, along
              with rising interest expenses. Another round of deficit-financed
              tax cuts or increased spending could reignite inflation and raise
              concerns about the sustainability of U.S. public finances in bond
              markets.
            </p>
            <p className="pb-5">
              Moreover, it’s unlikely that fiscal conservatives within the
              Republican Party would support significant tax cuts or new
              spending, given the poor state of U.S. public finances.
              Additionally, the Trump administration may acknowledge that
              reducing the trade deficit significantly would be challenging as
              long as public deficits remain large.
            </p>
            <p className="pb-5">
              Consequently, we anticipate the Trump administration to finance
              its fiscal commitments by increasing customs receipts and
              repealing some of President Biden’s policies. Overall, fiscal
              policy may experience slight loosening in the first year of a
              Trump presidency but could in subsequent years take a neutral
              stance.
            </p>
            <h3 className="pb-10 mt-9">Green financing curtailed</h3>
            <p className="pb-5">
              During his first term, President Trump showed little interest in
              green financing, instead favouring investments in non-renewable
              energy sources. A prime example is his support for the Keystone XL
              pipeline, where in January 2017, Trump signed an executive order
              to expedite its approval within 60 days.
            </p>
            <p className="pb-5">
              Current initiatives by the World Bank to enhance investment in
              cross-border resilience projects, such as energy transitions and
              global health, are likely to encounter resistance under a Trump
              administration. Although the US is the largest contributor to this
              new World Bank investment strategy, without sustained support from
              the US administration, these and similar financing projects will
              stall.
            </p>
            <p className="pb-5">
              Trump is unlikely to back financing efforts that do not provide
              clear benefits to the American labour market, and he is opposed to
              international organisations using US taxpayer money to fund energy
              transitions and carbon reduction initiatives in emerging markets.
            </p>
            <h3 className="pb-10 mt-9">Foreign Policy</h3>
            <p className="pb-5">
              Foreign policy has not been as important since the end of the
              second world war. 2024 has delivered flashpoints and headwinds in
              every region of the world. Let us explore how a Trump second term
              could engage in these quagmires.
            </p>
            <p className="pb-5">
              Israel-Iran Conflict: During his first term, Trump's approach to
              the Israel-Iran conflict was characterised by a transactional and
              assertive stance. He prioritised strengthening ties with Israel
              and taking a hardliner stance against Iran. His administration
              pursued policies such as withdrawing from the Iran nuclear deal,
              imposing sanctions on Iran, and supporting Israel's military
              actions against Iranian proxies like Hamas and Hezbollah.
            </p>
            <p className="pb-5">
              Trump's "America First" ideology often translated into
              prioritising American interests over global alliances, leading to
              a more unilateral approach in the region. In a potential second
              term, Trump's policies might continue to focus on countering
              Iran's influence and supporting Israel, possibly with an even
              stronger emphasis on military solutions and sanctions. His
              administration would likely prioritise maintaining Israel's
              security and would be less inclined to engage in diplomacy with
              Iran, favouring a more confrontational approach.
            </p>
            <p className="pb-5">
              Economically, Trump's policies could lead to more secure supply
              chains in the region, particularly for energy resources, as he
              aimed to maximise American energy independence. However, his
              aggressive stance on trade, including tariffs and trade wars,
              could contribute to increased economic tensions globally,
              potentially affecting inflation and trade balances.
            </p>
            <p className="pb-5">
              <span class="font-bold">Russia-Ukraine Conflict:</span> While his
              administration maintained sanctions on Russia and provided
              military aid to Ukraine, Trump's actions and statements often
              raised doubts about the reliability of U.S. support for Ukraine.
              In a second term, Trump's personal inclinations towards Putin and
              his desire for transactional deals might lead to attempts at
              negotiating a settlement in Ukraine, such efforts may likely
              result in a settlement of pragmatism and not one defined by a
              loyalty to western values.
            </p>
            <p className="pb-5">
              His administration might prioritise improving relations with
              Russia over supporting Ukraine, potentially weakening the symbolic
              united Western front against Russian aggression. Economically,
              Trump's policies towards Russia and Ukraine could impact energy
              markets, particularly regarding natural gas supplies from Russia
              to Europe. Any attempts at brokering deals or easing tensions in
              the region could influence energy prices and trade dynamics.
            </p>
            <p className="pb-5">
              <span class="font-bold">US-Europe Relations:</span> Trump's
              presidency strained relations with Europe, particularly regarding
              issues such as NATO spending, trade tariffs, and the Iran nuclear
              deal. His scepticism towards multilateral agreements and
              preference for bilateral deals led to friction with European
              allies. Additionally, his criticism of NATO and calls for European
              countries to increase defence spending created tensions within the
              alliance.
            </p>
            <p className="pb-5">
              In a potential second term, Trump's approach to Europe will in our
              opinion further prioritise America's interests over traditional
              alliances, potentially leading to continued friction on trade and
              defence spending issues. His administration will most likely push
              for more bilateral trade agreements and demand greater financial
              contributions from European NATO members. Economically, Trump's
              policies towards Europe could contribute to trade tensions,
              affecting industries and supply chains on both sides of the
              Atlantic. Increased tariffs or trade barriers could impact
              economic growth and stability in the region.
            </p>
            <p className="pb-5">
              <span class="font-bold">US-China Relations:</span> Trump's
              approach to China was marked by trade tensions, including tariffs
              and sanctions, as well as competition in areas like technology and
              geopolitics. His administration pursued a confrontational stance
              towards China, viewing it as a strategic competitor and
              challenging its economic practices.
            </p>
            <p className="pb-5">
              In a potential second term, Trump's policies towards China will in
              our opinion continue to prioritise economic and strategic
              competition, potentially intensifying trade tensions and
              technological rivalries. His administration might pursue measures
              to reduce America's dependence on Chinese supply chains and
              bolster domestic industries.
            </p>
            <p className="pb-5">
              Economically, Trump's policies towards China will have significant
              implications for global trade and investment flows. Continued
              trade tensions and uncertainty could affect market sentiment and
              economic growth, particularly in export-dependent countries and
              industries.
            </p>
            <h3 className="pb-10 mt-9">Trade Policy</h3>
            <p className="pb-5">
              Irrespective of the presidential election outcome, the United
              States is poised to maintain its protectionist stance, which has
              evolved over the past decade. There's little anticipation for the
              US to join significant free-trade blocs or to enhance the trade
              aspect of other economic partnerships, such as the Indo-Pacific
              Economic Framework for Prosperity. President Biden's emphasis on
              US industrial incentives is expected to continue fostering trade
              growth within North America, fuelled by robust near-shoring
              demand. This is likely to benefit Canada and particularly Mexico,
              which is rapidly solidifying its status as a regional industrial
              centre.
            </p>
            <p className="pb-5">
              Trump's initial term marked a pivotal shift in US trade policy,
              effectively doubling the US tariff rate to 3%. Although some
              tariffs have been reduced since then, the Biden administration not
              only prolonged most trade barriers but also intensified
              protectionist measures. While the Trump administration aimed to
              reduce the US goods trade deficit, it fell considerably short of
              its target. Despite some tariff reductions last year (bringing the
              effective tariff rate down to 2.5%), the Biden administration
              extended most of Trump's trade barriers and bolstered
              protectionist measures by introducing new industrial subsidies to
              promote domestic firms over foreign competitors through
              initiatives like the IRA and the CHIPS Act.
            </p>
            <p className="pb-5">
              BIDEN: Biden's protectionist inclinations, aimed at appealing to
              working-class voters, bear resemblance to Trump's approach. He
              advocates tripling tariffs on Chinese steel to shield US producers
              from cheaper imports, proposing to raise the current 7.5% tariff
              rate to 25%. Additionally, he opposes the proposed acquisition of
              U.S. Steel by Japan’s Nippon Steel, emphasizing the importance of
              maintaining it as an American-owned and operated company.
            </p>
            <p className="pb-5">
              TRUMP: President Trump's protectionist inclinations would likely
              intensify, with discussions underway about imposing a universal
              10% levy on imports, substantially higher than the current level.
              Despite the potential economic repercussions, such protectionism
              would align with Trump's expansive view of national security. This
              would mark a significant escalation of US trade protectionism,
              potentially straining relations with major trade partners. Trump's
              trade agenda, largely focused on China, includes proposals to
              phase out Chinese imports of essential goods and to ban Chinese
              companies from owning US infrastructure in key sectors. Although
              there may be pushback from the domestic private sector, tariff
              threats would disrupt trade and create policy uncertainty,
              potentially undermining near-shoring investment across North
              America. Whether higher tariffs are implemented by a Biden or
              Trump administration, they are likely to lead to consumer price
              increases, exacerbating existing inflationary pressures.
            </p>
            <p className="pb-5">
              Overall, a resurgence of protectionism would result in losses for
              economies drawn into a trade war. Applied tariff rates faced by
              economies exporting to the US are generally aligned with most
              favoured nation (MFN) rates for most economies, except for China
              and India.
            </p>
            <h3 className="pb-10 mt-9">Conclusion</h3>
            <p className="pb-5">
              As we anticipate the potential return of Trump, understanding and
              preparing for these multidimensional impacts is essential. By
              analysing his past policies and projecting future scenarios,
              policymakers, businesses, and global leaders can better navigate
              the complexities of a Trump 2.0 presidency. Whether one views his
              potential return with optimism or apprehension, it is clear that
              the fiscal, geopolitical, and trade landscapes will be
              significantly influenced by the decisions and strategies of the
              next administration.
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

export default TrumpBiden;
