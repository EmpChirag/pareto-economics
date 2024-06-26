import React, { useState } from "react";
import HeroSection from "../../components/HeroSection";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import Articles from "../../components/Articles";
import { news } from "../../Json/news";
import { Helmet } from "react-helmet";

const InTheNews = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Latest News, Articles and Podcast for Economics | Pareto Economics</title>
        <meta
          name="description"
          content=""
        />
        <link rel="canonical" href="https://www.pareto-economics.com/in-the-news" />
        <meta name="robots" content="follow, index, all" />
      </Helmet>
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
