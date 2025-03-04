import React from "react";

const OrderForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  closeModal,
}) => {
  return (
    <div className="overflow-y-auto max-h-[75vh] p-4">
      {" "}
      {/* Scrollable form container */}
      <h2 className="text-2xl font-semibold mb-4">Adres Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Adres Başlığı
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Ad</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Soyad
          </label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Telefon
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">İl</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            İlçe
          </label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Mahalle
          </label>
          <input
            type="text"
            name="neighborhood"
            value={formData.neighborhood}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Adres
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          ></textarea>
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

export default OrderForm;
