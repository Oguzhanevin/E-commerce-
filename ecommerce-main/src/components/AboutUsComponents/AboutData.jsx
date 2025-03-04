import React from "react";

const AboutData = () => {
  return (
    <div className="md:flex md:flex-row md:gap-64">
      <div className="mt-16 font-sans font-bold text-center">
        <h2 className="text-[#252B42] text-4xl">15K</h2>
        <p className="text-[#737373]">Happy Customers</p>
      </div>
      <div className="mt-16 font-sans font-bold text-center">
        <h2 className="text-[#252B42] text-4xl">150K</h2>
        <p className="text-[#737373]">Monthly Visitors</p>
      </div>
      <div className="mt-16 font-sans font-bold text-center">
        <h2 className="text-[#252B42] text-4xl">15</h2>
        <p className="text-[#737373]">Countries Worldwide</p>
      </div>
      <div className="mt-16 font-sans font-bold text-center">
        <h2 className="text-[#252B42] text-4xl">100+</h2>
        <p className="text-[#737373]">Top Partners</p>
      </div>
    </div>
  );
};

export default AboutData;
