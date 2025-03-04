import React from "react";

const PaymentForm = ({
  paymentData,
  handleInputChange,
  handleSubmit,
  closeModal,
}) => {
  return (
    <div className="overflow-y-auto max-h-[75vh] p-4">
      <h2 className="text-2xl font-semibold mb-4">
        {paymentData.id ? "Kartı Düzenle" : "Yeni Kart Ekle"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Kart Numarası
          </label>
          <input
            type="text"
            name="card_no"
            value={paymentData.card_no || ""}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Kart Üzerindeki İsim
          </label>
          <input
            type="text"
            name="name_on_card"
            value={paymentData.name_on_card || ""}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Son Kullanma Tarihi
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              name="expire_month"
              value={paymentData.expire_month || ""}
              onChange={handleInputChange}
              placeholder="Ay"
              className="mt-1 block w-16 p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="text"
              name="expire_year"
              value={paymentData.expire_year || ""}
              onChange={handleInputChange}
              placeholder="Yıl"
              className="mt-1 block w-16 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-semibold text-sm mr-2"
            onClick={closeModal}
          >
            İptal
          </button>
          <button
            type="submit"
            className="bg-[#23A6F0] text-white py-2 px-4 rounded-lg font-semibold text-sm"
          >
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
