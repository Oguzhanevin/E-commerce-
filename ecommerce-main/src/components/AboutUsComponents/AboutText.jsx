import React from "react";

const AboutText = () => {
  return (
    <div>
      <div className="mt-6 md:mt-8 font-sans font-bold flex flex-col text-center md:text-start md:flex md:flex-row md:items-center md:justify-between">
        <div className="md:flex md:flex-col md:text-left">
          <p className="mt-6 text-sm text-[#E74040]">Problems trying</p>
          <h2 className="mt-6 text-xl text-[#252B42]">
            Met minim Mollie non <br className="md:hidden" />
            desert <br className="hidden md:block" /> Alamo est sit{" "}
            <br className="md:hidden" /> cliquey dolor do{" "}
            <br className="hidden md:block" /> met <br className="md:hidden" />{" "}
            sent.
          </h2>
        </div>
        <div>
          <p className="mt-6 text-sm text-[#737373]">
            Problems trying to resolve the conflict <br className="md:hidden" />
            between the two major realms of <br className="hidden md:block" />
            Classical physics: <br className="md:hidden" /> Newtonian mechanics
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
