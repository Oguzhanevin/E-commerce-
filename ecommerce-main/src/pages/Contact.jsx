import React from "react";
import ContactUs from "../components/ContactComponents/ContactUs";
import ContactVisit from "../components/ContactComponents/ContactVisit";

const Contact = () => {
  return (
    <div>
      <div className="mt-6 md:mt-0 md:mx-12">
        <ContactUs />
        <ContactVisit />
      </div>
    </div>
  );
};

export default Contact;
