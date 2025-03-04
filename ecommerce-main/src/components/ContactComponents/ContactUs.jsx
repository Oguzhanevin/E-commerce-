import React from "react";
import ContactUsLogos from "./ContactUsLogos";

const ContactUs = () => {
  return (
    <div className="md:flex md:flex-row md:items-center md:justify-around">
      <div>
        <div className="font-sans text-[#252B42] font-bold flex flex-col text-center md:text-start">
          <p className="text-sm">CONTACT US</p>
          <p className="text-2xl md:text-4xl md:mt-6">
            Get in touch <br />
            today!
          </p>
          <p className="text-[#737373] mt-6">
            We know how large <br className="md:hidden" /> objects will act,{" "}
            <br className="hidden md:block" />
            but things <br className="md:hidden" /> on a small scale just do{" "}
            <br className="md:hidden" /> not act that way.
          </p>
          <div className="text-lg mt-6">
            <p>Phone ; +451 215 215 </p>
            <p>Fax : +451 215 215</p>
          </div>
        </div>
        <div className="mt-6">
          <ContactUsLogos />
        </div>
      </div>
      <div>
        <img
          src="/images/contact-us.png"
          alt=""
          className="md:w-[400px] md:h-[500px] object-cover mt-6 md:mt-0"
        />
      </div>
    </div>
  );
};

export default ContactUs;
