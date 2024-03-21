import React, { useEffect, useState } from "react";
import HeroSection from "../../components/HeroSection";
import InTheNewsImg from "../../assets/images/In-the-news.png";
import Header from "../../Layouts/Header";
import CommonTab from "../../components/CommonTab";
import Footer from "../../Layouts/Footer";
import Articles from "../../components/Articles";

const InTheNews = () => {
  const [option, setOption] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const handleOption = (val)=>{
  //   const index = option.findIndex(obj => obj['value'] === val);
  //   let newOption = option;
  //   newOption[index].isActive = !newOption[index].isActive;
  //   setOption(newOption);
  //   console.log('newOption',newOption);
  // }

  // const handleOption = (val) => {
  //   const index = option.findIndex(obj => obj['value'] === val);
  //   if (index !== -1) {
  //     const newOption = option.map((obj, i) => i === index ? { ...obj, isActive: !obj.isActive } : obj);
  //     setOption(newOption);
  //     console.log('newOption', newOption);
  //   }
  // }
  const handleOption = (val) => {
    const index = option.findIndex((obj) => obj["value"] === val);
    if (index !== -1) {
      const newOption = option.map((obj, i) =>
        i === index ? { ...obj, isActive: true } : { ...obj, isActive: false }
      );
      setOption(newOption);
      console.log("newOption", newOption);
    }
  };

  // const handleOption = (val) => {
  //   const index = option.findIndex(obj => obj['value'] === val);
  //   if (index !== -1) {
  //     const newOption = option.map((obj, i) => {
  //       if (i === index) {
  //         return { ...obj, isActive: true };
  //       } else {
  //         return { ...obj, isActive: false };
  //       }
  //     });
  //     setOption(newOption);
  //     console.log('newOption', newOption);
  //   }
  // }

  useEffect(() => {
    setOption([
      { value: "ARTICLES", isActive: true },
      { value: "TV/RADIO", isActive: true },
      { value: "PODCAST", isActive: true },
    ]);
  }, []);

  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection title="In the News" image={InTheNewsImg} />
      <CommonTab
        title="Filter Media Content"
        options={option}
        handleOption={handleOption}
        setSearchText={setSearchText}
      />
      <Articles option={option} searchText={searchText} />
      <Footer />
    </div>
  );
};

export default InTheNews;
