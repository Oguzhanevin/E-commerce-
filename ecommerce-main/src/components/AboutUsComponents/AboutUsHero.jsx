import React from "react";

const AboutUsHero = () => {
  return (
    <div className="md:flex md:flex-row md:items-center md:justify-around">
      <div className="mt-6 md:mt-8 font-sans font-bold flex flex-col text-center md:text-start">
        <h2 className="text-3xl md:text-5xl text-[#252B42]">ABOUT US</h2>
        <p className="mt-6 text-sm text-[#737373]">
          We know how large <br className="md:hidden" />
          objects will act, <br className="hidden md:block" /> but things{" "}
          <br className="md:hidden" />
          on a small scale just do <br className="md:hidden" /> not act that
          way.
        </p>
        <div className="flex justify-center md:flex md:justify-start mt-6">
          <button className="border-2 border-[#23A6F0] text-white font-bold text-xs bg-[#23A6F0] rounded-md h-10 w-40">
            Get Quote Now
          </button>
        </div>
      </div>
      <div>
        <img
          src="/images/about-us.png"
          alt=""
          className="md:w-[400px] md:h-[500px] object-cover mt-6 md:mt-0"
        />
      </div>
    </div>
  );
};

export default AboutUsHero;
