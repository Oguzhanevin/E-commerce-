import React from "react";
import ProductCard from "../HomeComponents/FeaturedProducts/ProductCard";

const ShopFilterCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 mt-12 mb-16 md:gap-8">
      <ProductCard />
    </div>
  );
};

export default ShopFilterCards;
