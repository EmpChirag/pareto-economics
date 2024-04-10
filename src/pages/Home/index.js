import React from 'react'
import Header from '../../Layouts/Header'
import Footer from '../../Layouts/Footer'
import HeroSection from '../../components/HeroSection'
import CommonSection from '../../components/CommonSection'
import { Link } from 'react-router-dom'
import DiscoverPowerIndex from '../../components/DiscoverPowerIndex'
import OurClients from '../../components/OurClients'
import ParetoThoughtLeadership from '../../components/ParetoThoughtLeadership'

import InTheNewsComp from '../../components/InTheNewsComp'
import { Helmet } from 'react-helmet'

const Home = () => {

  return (
    <>
      <div className="container mx-auto">
      <Helmet>
      <title>Market Research Consulting Services | Pareto Economics</title>
        <meta name="description" content="Pareto Economics is a leading market research consulting services provider company in London, UK. We offer 
speaking engagements, in-depth research and executive workshop services with accurate reports. " />
        <link rel="canonical" href="https://pareto-economics.com/" />
		<meta name="robots" content="follow, index, all" />
        <meta
          name="keywords"
          content="app development company, mobile app development company in Clapham, mobile app development company in Battersea, mobile app development company in Shoreditch, mobile app development company in London "
        />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="Pareto Econimics" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Market Research Consulting Services | Pareto Economics"
        />
        <meta
          property="og:description"
          content="Pareto Economics is a leading market research consulting services provider company in London, UK. We offer 
speaking engagements, in-depth research and executive workshop services with accurate reports."
        />
        <meta property="og:url" content="https://pareto-economics.com/" />
        <meta
          property="og:image"
          content="https://pareto-economics.com/images/pareto-logo.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://pareto-economics.com/images/pareto-logo.webp"
        />
        <meta property="og:image:width" content="244" />
        <meta property="og:image:height" content="56" />
        <meta
          property="article:publisher"
          content="https://www.linkedin.com/company/paretoeconomics/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ParetoEconomics" />
        <meta
          name="twitter:title"
          content="Market Research Consulting Services | Pareto Economics"
        />
        <meta
          name="twitter:description"
          content="Pareto Economics is a leading market research consulting services provider company in London, UK. We offer 
speaking engagements, in-depth research and executive workshop services with accurate reports."
        />
        <meta
          name="twitter:image"
          content="https://pareto-economics.com/images/pareto-logo.webp"
        />
    </Helmet>
        <Header />
        <HeroSection
          className="hero-home"
          title="Thinking That Moves Markets"
          image="/images/home/home-hero.png"
        />
        <CommonSection>
          <div className="border-b border-b-slate-900 md:pb-24 pb-[50px] ">
            <h2 className="lg:max-w-[650px]">
              We harness the power of data analytics to map the future of global
              development
            </h2>
            <div className="max-w-[750px] float-right text-xl mt-10">
              Pareto Economics is a London based research consultancy focused on
              shaping the business, investing and policy making strategies of
              corporate leaders, investors and governments around the world.
              <br />
              <br /> We use a first principles thinking approach when helping
              our clients navigate the geopolitical, economic, social and
              technological changes they are experiencing so they can take
              action with more confidence.
              <Link to="/about-us" className="btn2 mt-8 md:ml-20">
                Discover How
              </Link>
            </div>
            <div className="clear-both"></div>
          </div>
        </CommonSection>
        <DiscoverPowerIndex />
        <OurClients />
        <ParetoThoughtLeadership />
        <InTheNewsComp />
        <Footer demo />
      </div>
    </>
  );
}

export default Home