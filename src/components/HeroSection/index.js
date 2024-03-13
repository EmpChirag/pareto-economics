import React from "react";

const HeroSection = ({ className, title, image, h1width }) => {
  return (
    <section
      className={`hero ${className} mt-10 pb-10 border-black border-b`}
    >
      <h1
        className={`text-4xl leading-[1.2] lg:text-6xl  mb-6 ${
          h1width ? h1width : "max-w-[500px]"
        }`}
      >
        {title}
      </h1>
      <img src={image} alt="Hero Section" height="1480" width="492" />
    </section>
  );
};

export default HeroSection;
