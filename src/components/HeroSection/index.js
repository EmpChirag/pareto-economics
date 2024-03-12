import React from "react";

const HeroSection = ({ className, title, image }) => {
  return (
    <section
      className={`hero ${className} mt-10 pb-10 border-black border-b-2`}
    >
      <h1 className="text-4xl leading-[1.2] lg:text-6xl font-semibold mb-6 max-w-[500px]">
        {title}
      </h1>
      <img src={image} alt="Hero Section" height="1480" width="492" />
    </section>
  );
};

export default HeroSection;
