import React from "react";
import FooterTitle from "../components/FooterComponents/FooterTitle";
import FooterLogos from "../components/FooterComponents/FooterLogos";
import FooterMenuItems from "../components/FooterComponents/FooterMenuItems";
import FooterEmail from "../components/FooterComponents/FooterEmail";
import FooterBottomText from "../components/FooterComponents/FooterBottomText";

const Footer = () => {
  return (
    <div className="mt-16 md:mx-14">
      <div>
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center md:ml-28 md:mr-28 md:mb-8">
          <FooterTitle />
          <FooterLogos />
        </div>
        <div className="flex flex-col items-center md:flex-row md:ml-28 md:mb-8">
          <FooterMenuItems />
          <div className="md:ml-8">
            <FooterEmail />
          </div>
        </div>
        <div className="flex justify-center">
          <FooterBottomText />
        </div>
      </div>
    </div>
  );
};

export default Footer;
