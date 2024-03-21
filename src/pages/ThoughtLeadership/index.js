import React, { useEffect, useState } from "react";
import ThoughtLeadershipImg from "../../assets/images/thought-leadership.png";
import HeroSection from "../../components/HeroSection";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import CommonTab from "../../components/CommonTab";
import LadershipArticles from "../../components/LadershipArticles";

const ThoughtLeadership = () => {
  const [option,setOption]=useState([]);
  const [searchText, setSearchText] = useState('');

  const handleOption = (val) => {
    const index = option.findIndex(obj => obj['value'] === val);
    if (index !== -1) {
      const newOption = option.map((obj, i) => i === index ? { ...obj, isActive: true } : { ...obj, isActive: false });
      setOption(newOption);
      console.log('newOption', newOption);
    }
  }

  useEffect(()=>{
    setOption([
      {  value: "INSIGHTS",isActive:true },
      { value: "PODCAST", isActive:true},
      {  value: "KEYNOTES",isActive:true },
      {  value: "PRESS RELEASE", isActive:true },
    ]);
  },[])

  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection
        title="Original Thinking, Sharp Analysis"
        image={ThoughtLeadershipImg}
        h1width="max-w-[700px]"
      />
      <CommonTab title="Choose Content Type" options={option} handleOption={handleOption} setSearchText={setSearchText}/>
      <LadershipArticles option={option} searchText={searchText}/>
      <Footer />
    </div>
  );
};

export default ThoughtLeadership;
