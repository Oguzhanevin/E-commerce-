import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import OrderSummaryButton from "./OrderSummaryButton";
import OrderCompleteButton from "./OrderCompleteButton";

const OrderSummary = () => {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const location = useLocation();

  const totalPrice = cart
    .filter((item) => item.checked)
    .reduce((total, item) => total + item.product.price * item.count, 0);

  return (
    <div>
      <div className="w-full p-4 border rounded-lg shadow-lg mt-6 lg:mt-0 md:h-72">
        <h2 className="text-2xl font-semibold mb-4">Sipariş Özeti</h2>
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Ürünün Toplamı</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Kargo Toplam</span>
            <span>$29.99</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>$150 ve Üzeri Kargo Bedava</span>
            <span>-$29.99</span>
          </div>
          <div className="flex justify-between text-lg font-semibold mt-2">
            <span>Toplam</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
        <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg font-semibold text-sm">
          + İNDİRİM KODU GİR
        </button>
        {location.pathname === "/basket" && <OrderSummaryButton />}
        {location.pathname === "/order" && <OrderCompleteButton />}
      </div>
    </div>
  );
};

export default OrderSummary;
