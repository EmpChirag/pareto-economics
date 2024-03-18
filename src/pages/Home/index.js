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
import homeHero from "../../assets/images/home/home-hero.png";

const Home = () => {

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <HeroSection
          className="hero-home"
          title="Thinking That Moves Markets"
          image={homeHero}
        />
        <CommonSection>
          <div className='border-b border-b-slate-900 md:pb-24 pb-[50px] '>

          <h2 className="lg:max-w-[650px]">
            We harness the power of data analytics to map the future of global
            development
          </h2>
          <div className="max-w-[750px] float-right text-xl mt-10">
            Pareto Economics is a London based research consultancy focused on
            shaping the business, investing and policy making strategies of
            corporate leaders, investors and governments around the world.
            <br />
            <br /> We use a first principles thinking approach when helping our
            clients navigate the geopolitical, economic, social and
            technological changes they are experiencing so they can take action
            with more confidence.
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