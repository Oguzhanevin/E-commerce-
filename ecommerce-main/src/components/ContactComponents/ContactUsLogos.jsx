import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const ContactUsLogos = () => {
  return (
    <div>
      <div className="flex flex-row justify-center md:justify-start items-center gap-3">
        <FontAwesomeIcon icon={faTwitter} size="lg" />
        <FontAwesomeIcon icon={faFacebookF} size="lg" />
        <FontAwesomeIcon icon={faInstagram} size="lg" />
        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
      </div>
    </div>
  );
};

export default ContactUsLogos;
