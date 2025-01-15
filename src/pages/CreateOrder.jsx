import React, { useState } from "react";

// Import Components
import AddressInfo from "../components/OrderComponents/AddressInfo";
import OrderInfoTypeCart from "../components/OrderComponents/OrderInfoTypeCart";
import CreditCardForm from "../components/OrderComponents/CreditCardForm";
import Header from "../layout/Header";
import Footer from "../components/generalComponents/Footer";
import OrderSummary from "../components/OrderComponents/OrderSummary";

function CreateOrder() {
  // State hooks
  const [currentStep, setCurrentStep] = useState("address");
  const [grandTotal, setGrandTotal] = useState(0);
  const [filteredAddresses, setFilteredAddresses] = useState([]);

  // Handle address data to filter addresses
  const handleAddressData = (addresses) => {
    setFilteredAddresses(addresses);
  };

  return (
    <div>
      {/* Header Section */}
      <Header />

      {/* Order Information and Summary Layout */}
      <div className="px-4 py-2 w-[92%] mx-auto flex flex-col md:flex-row gap-8">
        {/* Left Column: Order Details and Address */}
        <div className="flex flex-col w-full md:w-2/3">
          <OrderInfoTypeCart
            setCurrentStep={setCurrentStep}
            filteredAddresses={filteredAddresses}
          />

          {/* Conditional rendering based on the current step */}
          {currentStep === "address" && <AddressInfo onAddressData={handleAddressData} />}
          {currentStep === "payment" && <CreditCardForm grandTotal={grandTotal} />}
        </div>

        {/* Right Column: Order Summary */}
        <div className="w-full md:w-1/3">
          <OrderSummary
            setGrandTotal={setGrandTotal}
            isCreateOrderContext={true}
          />
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default CreateOrder;
