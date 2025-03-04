import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const FooterLogos = () => {
  return (
    <div className="text-[#23A6F0] flex justify-center items-center space-x-5 mt-4">
      <FontAwesomeIcon icon={faFacebook} className="w-[24px] h-[24px]" />
      <FontAwesomeIcon icon={faInstagram} className="w-[24px] h-[24px]" />
      <FontAwesomeIcon icon={faTwitter} className="w-[24px] h-[24px]" />
    </div>
  );
};

export default FooterLogos;
