import React from "react";
import HeroSection from "../../components/HeroSection";
import InTheNewsImg from "../../assets/images/In-the-news.png";
import Header from "../../Layouts/Header";
import CommonTab from "../../components/CommonTab";
import Footer from "../../Layouts/Footer";
import Articles from '../../components/Articles';

const InTheNews = () => {
  const option = [
    { id: "ARTICLES", value: "ARTICLES" },
    { id: "TV/RADIO", value: "TV/RADIO" },
    { id: "PRESS RELEASE", value: "PRESS RELEASE" },
    { id: "PODCAST", value: "PODCAST" },
  ];

  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection title="In the News" image={InTheNewsImg} />
      <CommonTab title="Filter Media Content" options={option} />
      <Articles />
      <Footer />
    </div>
  );
};

export default InTheNews;
