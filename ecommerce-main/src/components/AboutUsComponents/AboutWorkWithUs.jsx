import React from "react";

const AboutWorkWithUs = () => {
  return (
    <div className="md:flex md:flex-row md:items-center bg-[#2A7CC7] py-20 mt-16 md:py-0 md:pl-40 md:justify-between">
      <div className="mt-0 md:mt-6 font-sans font-bold flex flex-col text-center md:text-left ">
        <h2 className="text-sm text-white">WORK WITH US</h2>
        <p className="mt-8 md:mt-6 text-2xl text-white">
          Now Let’s <br className="md:hidden" />
          grow Yours
        </p>
        <p className="mt-8 text-sm text-white font-thin">
          The gradual accumulation of <br className="md:hidden" />
          information about atomic and <br />
          small-scale behavior during the <br className="md:hidden" />
          first quarter of the 20th{" "}
        </p>
        <div className="flex justify-center md:justify-start mt-4">
          <button className="border-2 border-white text-white font-bold text-sm bg-[#2A7CC7] rounded-md h-10 w-32">
            Button
          </button>
        </div>
      </div>
      <div>
        <img
          src="/images/about-us-work.jpg"
          alt=""
          className="hidden md:block md:w-full md:h-[590px] object-cover"
        />
      </div>
    </div>
  );
};

export default AboutWorkWithUs;
