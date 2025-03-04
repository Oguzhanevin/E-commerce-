import React from "react";

const FooterMenuItems = () => {
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="md:flex md:flex-row md:justify-center md:items-start">
        <div className="font-sans flex flex-col items-center md:items-start md:mr-16">
          <h2 className="text-[#252B42] font-bold text-lg mb-4">
            Company Info
          </h2>
          <a href="#" className="font-bold my-1 text-[#777676] text-base">
            About Us
          </a>
          <a href="#" className="font-bold my-1 text-[#777676] text-base">
            Carrier
          </a>
          <a href="#" className="font-bold my-1 text-[#777676] text-base">
            We are hiring
          </a>
          <a href="#" className="font-bold my-1 text-[#777676] text-base mb-2">
            Blog
          </a>
        </div>
        <div className="font-sans flex flex-col items-center md:items-start md:mr-16 mt-4 md:mt-0">
          <h2 className="text-[#252B42] font-bold text-lg mb-4">Legal</h2>
          <a href="#" className="font-bold my-1 text-[#777676] text-base">
            About Us
          </a>
          <a href="#" className="font-bold my-1 text-[#777676] text-base">
            Carrier
          </a>
          <a href="#" className="font-bold my-1 text-[#777676] text-base">
            We are hiring
          </a>
          <a href="#" className="font-bold my-1 text-[#777676] text-base mb-2">
            Blog
          </a>
        </div>
        <div className="font-sans flex flex-col items-center md:items-start md:mr-16 mt-4 md:mt-0">
          <h2 className="text-[#252B42] font-bold text-lg mb-4">Features</h2>
          <a href="#" className="font-bold my-1 text-[#777676] text-base">
            Business Marketing
          </a>
          <a href="#" className="font-bold my-1 text-[#777676] text-base">
            User Analytic
          </a>
          <a href="#" className="font-bold my-1 text-[#777676] text-base">
            Live Chat
          </a>
          <a href="#" className="font-bold my-1 text-[#777676] text-base">
            Unlimited Support
          </a>
        </div>
        <div className="font-sans flex flex-col items-center md:items-start md:mr-16 mt-4 md:mt-0">
          <h2 className="text-[#252B42] font-bold text-lg mb-4">Resources</h2>
          <a href="#" className="font-bold my-1 text-[#777676] text-base">
            IOS & Android
          </a>
          <a href="#" className="font-bold my-1 text-[#777676] text-base">
            Watch a Demo
          </a>
          <a href="#" className="font-bold my-1 text-[#777676] text-base">
            Customers
          </a>
          <a href="#" className="font-bold my-1 text-[#777676] text-base">
            API
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterMenuItems;
