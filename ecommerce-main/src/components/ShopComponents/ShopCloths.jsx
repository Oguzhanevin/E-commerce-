import React from "react";
import ShopClothsCard from "./ShopClothsCard";

const ShopCloths = () => {
  return (
    <div className="mt-12 flex flex-col gap-5 md:flex-row md:flex-wrap justify-center">
      <ShopClothsCard />
    </div>
  );
};

export default ShopCloths;
