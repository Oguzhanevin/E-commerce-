import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ShopTitle = () => {
  return (
    <div className="font-sans font-semibold flex flex-col md:flex md:flex-row md:justify-between md:mx-4">
      <div className="text-[#252B42] text-lg flex justify-center mt-6 md:mt-6">
        <h2>Shop</h2>
      </div>
      <div className="text-xs flex flex-row items-center gap-2 justify-center mt-12 md:mt-6">
        <h3 className="text-[#252B42]">Home</h3>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-[#737373] text-[12px]"
        />
        <h3 className="text-[#737373]">Shop</h3>
      </div>
    </div>
  );
};

export default ShopTitle;
