import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createOrder } from "../../store/actions/orderActions";
import { setCart } from "../../store/actions/shoppingCartActions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const OrderCompleteButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const selectedAddressId = useSelector(
    (state) => state.address.selectedAddressId
  );
  const selectedPaymentId = useSelector(
    (state) => state.payment.selectedPaymentId
  );
  const cart = useSelector((state) => state.shoppingCart.cart);
  const addresses = useSelector((state) => state.address.addresses);
  const payments = useSelector((state) => state.payment.payments);

  const isOrderButtonDisabled = !selectedAddressId || !selectedPaymentId;

  const handleComplete = () => {
    if (!isOrderButtonDisabled) {
      const selectedAddress = addresses.find(
        (address) => address.id === selectedAddressId
      );
      const selectedPayment = payments.find(
        (payment) => payment.id === selectedPaymentId
      );
      const orderData = {
        address_id: selectedAddress.id,
        order_date: new Date().toISOString(),
        card_no: selectedPayment.card_no,
        card_name: selectedPayment.name_on_card,
        card_expire_month: selectedPayment.expire_month,
        card_expire_year: selectedPayment.expire_year,
        card_ccv: 123,
        price: cart.reduce(
          (total, item) => total + item.product.price * item.count,
          0
        ),
        products: cart.map((item) => ({
          product_id: item.product.id,
          count: item.count,
          detail: item.product.detail || "",
        })),
      };

      console.log("Payload gönderiliyor:", orderData);

      dispatch(createOrder(orderData)).then(() => {
        toast.success("Siparişiniz başarıyla oluşturuldu!");
        dispatch(setCart([])); // kartı temizle
        history.push("/PreviousOrders");
      });
    }
  };

  return (
    <button
      className={`w-full mt-2 ${
        isOrderButtonDisabled ? "bg-gray-400" : "bg-red-700"
      } text-white py-2 rounded-lg font-semibold text-xl`}
      onClick={handleComplete}
      disabled={isOrderButtonDisabled}
    >
      Siparişi Onayla
    </button>
  );
};

export default OrderCompleteButton;
