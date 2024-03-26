import React, { useState } from "react";
import HeroSection from "../../components/HeroSection";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import Articles from "../../components/Articles";
import { news } from "../../Json/news";

const InTheNews = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection
        title="In the News"
        image="/images/in-the-news.png"
        h1width="max-w-[700px]"
      />
      <Articles
        option={news}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Footer />
    </div>
  );
};

export default InTheNews;
