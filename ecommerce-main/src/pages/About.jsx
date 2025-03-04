import React from "react";
import AboutUsHero from "../components/AboutUsComponents/AboutUsHero";
import AboutText from "../components/AboutUsComponents/AboutText";
import AboutData from "../components/AboutUsComponents/AboutData";
import AboutVideo from "../components/AboutUsComponents/AboutVideo";
import Team from "./Team";
import AboutCompanies from "../components/AboutUsComponents/AboutCompanies";
import ShopBrands from "../components/ShopComponents/ShopBrands";
import AboutWorkWithUs from "../components/AboutUsComponents/AboutWorkWithUs";

const About = () => {
  return (
    <div>
      <div className="md:mx-8">
        <AboutUsHero />
      </div>
      <div className="md:mx-48 md:mr-50">
        <AboutText />
      </div>
      <div className="md:mx-48">
        <AboutData />
      </div>
      <div className="mx-12">
        <AboutVideo />
      </div>
      <div className="md:mt-24">
        <Team />
      </div>
      <div>
        <AboutCompanies />
      </div>
      <div className="md:mx-40 md:mt-12">
        <ShopBrands />
      </div>
      <div>
        <AboutWorkWithUs />
      </div>
    </div>
  );
};

export default About;
