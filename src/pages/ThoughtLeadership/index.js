import React, { useState } from "react";
import HeroSection from "../../components/HeroSection";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import LadershipArticles from "../../components/LadershipArticles";
import { leadership } from "../../Json/leadership";

const ThoughtLeadership = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection
        title="Original Thinking, Sharp Analysis"
        image="/images/thought-leadership.png"
        h1width="max-w-[700px]"
      />
      <LadershipArticles
        option={leadership}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Footer />
    </div>
  );
};

export default ThoughtLeadership;
