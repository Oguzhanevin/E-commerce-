import React, { useState } from "react";
import AddressInfo from "../components/OrderComponents/AddressInfo";
import OrderInfoTypeCart from "../components/OrderComponents/OrderInfoTypeCart";
import CreditCardForm from "../components/OrderComponents/CreditCardForm";
import Header from "../layout/Header";
import Footer from "../components/generalComponents/Footer";
import OrderSummary from "../components/OrderComponents/OrderSummary";

function CreateOrder() {
  const [currentStep, setCurrentStep] = useState("address");
  const [grandTotal, setGrandTotal] = useState(0);
  const [filteredAddresses, setFilteredAddresses] = useState([]);

  // Adres verisini işleme fonksiyonu
  const handleAddressData = (addresses) => {
    setFilteredAddresses(addresses);
  };

  return (
    <div>
      <Header />
      
      <div className="px-4 py-2 w-[92%] mx-auto flex flex-col md:flex-row">
        {/* Sol Panel */}
        <div className="flex flex-col w-full md:w-2/3">
          <OrderInfoTypeCart
            setCurrentStep={setCurrentStep}
            filteredAddresses={filteredAddresses}
          />
          
          {/* Adres ve Ödeme adımlarını dinamik olarak render et */}
          {currentStep === "address" && (
            <AddressInfo handleAddressData={handleAddressData} />
          )}
          {currentStep === "payment" && (
            <CreditCardForm grandTotal={grandTotal} />
          )}
        </div>

        {/* Sağ Panel: Sipariş Özeti */}
        <div className="flex flex-col w-full md:w-1/3 mt-4 md:mt-0">
          <OrderSummary
            setGrandTotal={setGrandTotal}
            isCreateOrderContext={true}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CreateOrder;
