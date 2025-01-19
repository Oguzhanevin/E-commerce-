import React from "react";
import Header from "../layout/Header";
import Footer from "../components/generalComponents/Footer";
import ShoppingCart from "../components/shoppingCartComponent/ShoppingCart";
import OrderSummary from "../components/OrderComponents/OrderSummary";

function ShoppingCartPages() {
  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
      <main className="flex flex-col lg:flex-row lg:space-x-4 px-4 justify-between w-[92%] mx-auto my-8">
        {/* Shopping Cart */}
        <ShoppingCart />

        {/* Order Summary */}
        <OrderSummary />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default ShoppingCartPages;
