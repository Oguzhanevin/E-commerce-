import React from "react";

const FooterEmail = () => {
  return (
    <div>
      <div className="font-sans mt-12 flex flex-col">
        <h2 className="text-[#252B42] font-bold text-lg">Get In Touch</h2>
        <form className="my-4">
          <input
            type="text"
            placeholder="Your Email"
            className="px-6 py-3 bg-[#F9F9F9] border-2 rounded-l-md focus:outline-none font-base text-[#737373]"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#23A6F0] text-white rounded-r-md font-bold"
          >
            Subscribe
          </button>
        </form>
        <p className="font-base text-sm text-[#737373] font-normal">
          Write to us now
        </p>
      </div>
    </div>
  );
};

export default FooterEmail;
