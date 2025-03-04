import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Neural = () => {
  const history = useHistory();

  const navigateToBuyNow = () => history.push("/shop/kadin/ceket/3");
  const navigateToLearnMore = () => history.push("/shop/kadin/ceket/3");

  return (
    <div className="md:flex md:flex-row-reverse md:items-center">
      {/* Başlık ve açıklama */}
      <div>
        <div className="p-4 md:p-0 mt-16 md:mr-72 text-center font-sans text-[#252B42] md:text-left">
          <h3 className="text-sm font-semibold text-[#BDBDBD]">WINTER 2024</h3>
          <h2 className="my-4 p-4 md:p-0 mx-28 md:mx-0 text-3xl font-bold">
            Winter fashion is <br className="hidden md:block" /> with you
          </h2>
          <p className="mx-32 md:mx-0 text-base text-[#737373] font-semibold">
            Explore our exclusive collection to stay stylish and warm this
            season.
          </p>
        </div>

        <div className="flex items-center mt-3 md:mt-6 flex-col md:flex md:flex-row md:flex-start ">
          <button
            className="bg-[#23A6F0] text-white md:bg-[#2DC071] md:text-white h-[50px] w-[140px] rounded-md font-sans font-bold text-sm md:mr-2"
            onClick={navigateToBuyNow}
          >
            BUY NOW
          </button>
          <button
            className="bg-white text-[#23A6F0] md:bg-white md:text-[#2DC071] border-2 border-[#23A6F0] md:border-[#2DC071] h-[50px] w-[160px] rounded-md font-sans font-bold text-sm mt-3 md:mt-0"
            onClick={navigateToLearnMore}
          >
            LEARN MORE
          </button>
        </div>
      </div>

      <div className="flex items-center md:flex-grow">
        <img src="/images/neural.png" alt="" className="w-full md:w-[1000px]" />
      </div>
    </div>
  );
};

export default Neural;
