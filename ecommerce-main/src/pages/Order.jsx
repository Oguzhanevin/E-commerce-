import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import OrderForm from "../components/OrderComponents/OrderForm";
import PaymentForm from "../components/OrderComponents/PaymentForm";
import {
  addAddress,
  deleteAddress,
  fetchAddresses,
  updateAddress,
  setSelectedAddress,
} from "../store/actions/adressActions";
import {
  addPayment,
  deletePayment,
  fetchPayments,
  updatePayment,
  setSelectedPayment,
} from "../store/actions/paymentActions";
import OrderSummary from "../components/BasketComponents/OrderSummary";

Modal.setAppElement("#root");

const Order = () => {
  const [activeTab, setActiveTab] = useState("address");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isEditingPayment, setIsEditingPayment] = useState(false);
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    address: "",
  });
  const [paymentData, setPaymentData] = useState({
    id: null,
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
  });

  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.address.addresses);
  const payments = useSelector((state) => state.payment.payments);
  const selectedAddressId = useSelector(
    (state) => state.address.selectedAddressId
  );
  const selectedPaymentId = useSelector(
    (state) => state.payment.selectedPaymentId
  );

  useEffect(() => {
    dispatch(fetchAddresses());
    dispatch(fetchPayments());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditingAddress) {
      dispatch(updateAddress(formData));
    } else {
      dispatch(addAddress(formData));
    }
    setModalIsOpen(false);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log("Card data:", paymentData);
    if (isEditingPayment) {
      dispatch(updatePayment(paymentData));
    } else {
      dispatch(addPayment(paymentData));
    }
    setModalIsOpen(false);
  };

  const handleDelete = (addressId) => {
    dispatch(deleteAddress(addressId));
  };

  const handlePaymentDelete = (paymentId) => {
    dispatch(deletePayment(paymentId));
  };

  const openEditModal = (address) => {
    setFormData(address);
    setIsEditingAddress(true);
    setModalIsOpen(true);
  };

  const openPaymentEditModal = (payment) => {
    setPaymentData(payment);
    setIsEditingPayment(true);
    setModalIsOpen(true);
  };

  const handleSelectAddress = (addressId) => {
    dispatch(setSelectedAddress(addressId));
  };

  const handleSelectPayment = (paymentId) => {
    dispatch(setSelectedPayment(paymentId));
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:mx-16">
      <div className="p-4">
        <div className="border-b mb-4">
          <button
            className={`p-2 ${
              activeTab === "address" ? "border-b-2 border-[#23A6F0]" : ""
            }`}
            onClick={() => setActiveTab("address")}
          >
            Adres Bilgileri
          </button>
          <button
            className={`p-2 ml-4 ${
              activeTab === "payment" ? "border-b-2 border-[#23A6F0]" : ""
            }`}
            onClick={() => setActiveTab("payment")}
          >
            Ödeme Seçenekleri
          </button>
        </div>
        {activeTab === "address" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Teslimat Adresi</h2>
            <div className="mb-4">
              {addresses.map((address) => (
                <div key={address.id} className="relative"></div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <button
                className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold text-sm"
                onClick={() => {
                  setFormData({
                    id: null,
                    title: "",
                    name: "",
                    surname: "",
                    phone: "",
                    city: "",
                    district: "",
                    neighborhood: "",
                    address: "",
                  });
                  setIsEditingAddress(false);
                  setModalIsOpen(true);
                }}
              >
                + Yeni Adres Ekle
              </button>
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className={`bg-gray-100 text-gray-700 p-4 rounded-lg font-semibold text-sm relative ${
                    selectedAddressId === address.id
                      ? "border-2 border-[#23A6F0]"
                      : ""
                  }`}
                >
                  <div
                    className="absolute top-4 right-4 text-red-500 cursor-pointer"
                    onClick={() => handleDelete(address.id)}
                  >
                    Sil
                  </div>
                  <div
                    className="absolute top-4 right-16 text-blue-500 cursor-pointer"
                    onClick={() => openEditModal(address)}
                  >
                    Düzenle
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => handleSelectAddress(address.id)}
                  >
                    <p className="font-semibold">{address.title}</p>
                    <p className="mt-2">
                      {address.name} {address.surname}
                    </p>
                    <p>{address.address}</p>
                    <p>{address.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === "payment" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Kart ile Öde</h2>
            <div className="flex flex-col gap-4">
              <button
                className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold text-sm"
                onClick={() => {
                  setPaymentData({
                    id: null,
                    card_no: "",
                    expire_month: "",
                    expire_year: "",
                    name_on_card: "",
                  });
                  setIsEditingPayment(false);
                  setModalIsOpen(true);
                }}
              >
                + Yeni Kart Ekle
              </button>
              {payments.map((payment) => (
                <div
                  key={payment.id}
                  className={`bg-gray-100 text-gray-700 p-4 rounded-lg font-semibold text-sm relative ${
                    selectedPaymentId === payment.id
                      ? "border-2 border-[#23A6F0]"
                      : ""
                  }`}
                >
                  <div
                    className="absolute top-4 right-4 text-red-500 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePaymentDelete(payment.id);
                    }}
                  >
                    Sil
                  </div>
                  <div
                    className="absolute top-4 right-16 text-blue-500 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      openPaymentEditModal(payment);
                    }}
                  >
                    Düzenle
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => handleSelectPayment(payment.id)}
                  >
                    <p className="font-semibold">{payment.name_on_card}</p>
                    <p className="mt-2">
                      Kart Numarası: **** **** **** {payment.card_no.slice(-4)}
                    </p>
                    <p>
                      Son Kullanma Tarihi: {payment.expire_month}/
                      {payment.expire_year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="p-4">
        <OrderSummary />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel={isEditingAddress || isEditingPayment ? "Düzenle" : "Ekle"}
        className="modal"
        overlayClassName="modal-overlay"
      >
        {activeTab === "address" ? (
          <OrderForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            closeModal={() => setModalIsOpen(false)}
          />
        ) : (
          <PaymentForm
            paymentData={paymentData}
            handleInputChange={handlePaymentInputChange}
            handleSubmit={handlePaymentSubmit}
            closeModal={() => setModalIsOpen(false)}
          />
        )}
      </Modal>
    </div>
  );
};

export default Order;
