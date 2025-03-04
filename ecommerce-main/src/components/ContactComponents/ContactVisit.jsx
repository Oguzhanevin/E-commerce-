import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faLocationDot,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ContactButton from "./ContactButton";

const ContactVisit = () => {
  return (
    <div>
      <div className="font-sans mt-6">
        <div className="text-[#252B42] font-bold flex flex-col text-center">
          <p className="text-sm">VISIT OUR OFFICE</p>
          <p className="text-4xl mt-4">
            We help small businesses <br className="md:hidden" /> with big ideas
          </p>
        </div>
      </div>

      <div className="md:flex md:flex-row md:justify-center">
        <div className="flex flex-col justify-center mt-12">
          <div className="flex justify-center">
            <FontAwesomeIcon icon={faPhone} className="text-[#23A6F0] size-8" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-sans text-[#252B42] text-center font-bold text-xs mt-6">
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
            </div>
            <div className="font-sans text-[#252B42] text-center font-bold text-lg mt-6">
              <p>Get Support</p>
            </div>
          </div>
          <div>
            <ContactButton />
          </div>
        </div>

        <div className="flex flex-col justify-center mt-12 bg-[#252B42] py-16 mx-12 md:mx-24 md:px-6">
          <div className="flex justify-center">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-[#23A6F0] size-8"
            />
          </div>
          <div className="flex flex-col justify-center ">
            <div className="font-sans text-white text-center font-bold text-xs mt-6">
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
            </div>
            <div className="font-sans text-white text-center font-bold text-lg mt-6">
              <p>Get Support</p>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="border-2 bg-[#252B42] border-[#23A6F0] text-[#23A6F0] font-bold text-sm rounded-md h-10 w-40">
              Submit Request
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center mt-12">
          <div className="flex justify-center">
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="text-[#23A6F0] size-8"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-sans text-[#252B42] text-center font-bold text-xs mt-6">
              <p>georgia.young@example.com</p>
              <p>georgia.young@ple.com</p>
            </div>
            <div className="font-sans text-[#252B42] text-center font-bold text-lg mt-6">
              <p>Get Support</p>
            </div>
          </div>
          <div>
            <ContactButton />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center mt-12">
        <div className="flex justify-center">
          <FontAwesomeIcon
            icon={faArrowDown}
            className="text-[#23A6F0] size-8"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-sans text-[#252B42] text-center font-bold text-xs mt-6">
            <p>WE Can't WAIT TO MEET YOU</p>
          </div>
          <div className="font-sans text-[#252B42] text-center font-bold text-3xl mt-6">
            <p>Let’s Talk</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center mt-4">
            <button className="border-2 bg-[#23A6F0] border-[#23A6F0] text-white font-bold text-sm rounded-md h-10 w-40">
              Try it free now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactVisit;
