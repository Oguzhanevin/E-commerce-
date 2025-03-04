import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const OrderSummaryButton = () => {
  const user = useSelector((state) => state.client.user);
  const history = useHistory();

  const handleCheckout = () => {
    if (!user || !user.token) {
      history.push("/login");
    } else {
      history.push("/order");
    }
  };

  return (
    <button
      className="w-full mt-2 bg-[#23A6F0] text-white py-2 rounded-lg font-semibold text-xl"
      onClick={handleCheckout}
    >
      Sepeti Onayla
    </button>
  );
};

export default OrderSummaryButton;
