import React from "react";
import Header from "../../Layouts/Header";
import HeroSection from "../../components/HeroSection";
import Footer from "../../Layouts/Footer";

const ClientsCorporations = () => {
  return (
    <div className="container mx-auto pb-[200px]">
      <Header />
      <HeroSection
        className="hero-home"
        title="We Partner with Global Stakeholders to Guide Business Strategy"
        image="images/ClientsCorporations/Clients_Corporations.png"
        h1width="max-w-[700px]"
      />
      <section className="mt-10 pb-10">
        <div className="flex">
<div className="w-full">
          <h2 className="sticky top-5 text-4xl leading-[1.2] lg:text-6xl lg:leading-[1.3] lg:max-w-[650px]">
            Long term thinking done right
          </h2>
          </div>
          <div className="w-full float-right">
            <p className=" float-right text-3xl ">
              We use a data driven approach to inform business strategy when it
              matters most.
            </p>
            <p className="text-xl pb-5">
              We use a first principles thinking approach when helping our
              clients navigate the geopolitical, economic, social and
            </p>
            <p className="text-xl">
              We use a first principles thinking approach when helping our
              clients navigate the geopolitical, economic, social and
              technological changes they are experiencing so they can take
              action with more confidence.
            </p>
          </div>
        </div>
      </section>
      <Footer demo />
    </div>
  );
};

export default ClientsCorporations;