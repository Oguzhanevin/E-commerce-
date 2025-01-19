import React, { useState, useEffect } from "react";
import { axiosInstance } from "../../store/api/axiosInstance";
import LoadingSpinner from "../../layout/LoadingSpinner";

const AddressInfo = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    id: null,
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
  });
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  // Adresleri yükleme
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axiosInstance.get("/user/address");
        if (response.data && Array.isArray(response.data)) {
          setAddresses(response.data);
          if (response.data.length > 0) {
            setSelectedAddress(response.data[0].id);
          }
        } else {
          setError("Adresler yüklenemedi veya beklenmedik format.");
        }
      } catch (error) {
        setError("Adresler alınırken bir hata oluştu.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({
      ...newAddress,
      [name]: value,
    });
  };

  const handleEditAddress = (address) => {
    setNewAddress(address);
    setEditing(true);
    setShowAddAddressForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (editing) {
        response = await axiosInstance.put(`/user/address`, newAddress);
        console.log("Adres başarıyla güncellendi:", response.data);
      } else {
        response = await axiosInstance.post("/user/address", newAddress);
        console.log("Adres başarıyla eklendi:", response.data);
      }

      // Adresleri yeniden yükle
      const fetchResponse = await axiosInstance.get("/user/address");
      if (fetchResponse.data && Array.isArray(fetchResponse.data)) {
        setAddresses(fetchResponse.data);
        if (!selectedAddress && fetchResponse.data.length > 0) {
          setSelectedAddress(fetchResponse.data[0].id);
        }
      }

      setShowAddAddressForm(false);
      setEditing(false);
      setNewAddress({
        id: null,
        title: "",
        name: "",
        surname: "",
        phone: "",
        city: "",
        district: "",
        neighborhood: "",
      });
    } catch (error) {
      setError("Adres kaydedilirken bir hata oluştu.");
      console.error("Error submitting form:", error);
    }
  };

  const handleDeleteAddress = async (addressId) => {
    try {
      await axiosInstance.delete(`/user/address/${addressId}`);
      setAddresses(addresses.filter((address) => address.id !== addressId));
      if (selectedAddress === addressId) {
        setSelectedAddress(null);
      }
    } catch (error) {
      setError("Adres silinirken bir hata oluştu.");
      console.error("Error deleting address:", error);
    }
  };

  const handleAddressClick = (addressId) => {
    setSelectedAddress(addressId);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Teslimat Adresi</h2>
      </div>

      <div className="mb-6">
        <button
          onClick={() => {
            setShowAddAddressForm(true);
            setEditing(false);
          }}
          className="w-full bg-gray-100 py-2 px-4 border border-gray-300 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-200"
        >
          <i className="fas fa-plus-circle text-xl mr-2"></i> Yeni Adres Ekle
        </button>
      </div>

      {showAddAddressForm && (
        <div className="mb-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {["title", "name", "surname", "phone", "city", "district", "neighborhood"].map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type="text"
                    id={field}
                    name={field}
                    value={newAddress[field]}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              ))}
            </div>
            <div className="text-right">
              <button
                type="button"
                onClick={() => setShowAddAddressForm(false)}
                className="mr-2 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
              >
                İptal
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Kaydet
              </button>
            </div>
          </form>
        </div>
      )}

      {error && <div className="text-red-500">{error}</div>}

      <div>
        <h2 className="text-xl font-semibold mb-4">Mevcut Adresler</h2>
        {addresses.length > 0 ? (
          addresses.map((address) => (
            <div
              key={address.id}
              className={`mb-4 p-4 border ${selectedAddress === address.id ? "border-blue-500" : ""}`}
              onClick={() => handleAddressClick(address.id)}
            >
              <h3 className="text-lg font-medium">{address.title}</h3>
              <p>{address.name} {address.surname}</p>
              <p>{address.phone}</p>
              <p>{address.city}, {address.district}, {address.neighborhood}</p>
              <div className="flex justify-end mt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditAddress(address);
                  }}
                  className="mr-2 bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded"
                >
                  Düzenle
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteAddress(address.id);
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                >
                  Sil
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Mevcut adres bulunmamaktadır.</p>
        )}
      </div>
    </div>
  );
};

export default AddressInfo;
