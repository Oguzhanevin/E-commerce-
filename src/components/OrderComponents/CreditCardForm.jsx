import React, { useState, useEffect } from "react";
import {
  fetchSavedCards,
  addNewCard,
  updateCard,
  deleteCard,
  createOrder,
} from "../../store/api/axiosInstance";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { ShoppingCartActions } from "../../store/reducers/shoppingCartReducer";
import "react-toastify/dist/ReactToastify.css";

const CreditCardForm = () => {
  const [showNewCardForm, setShowNewCardForm] = useState(false);
  const [showUpdateCardForm, setShowUpdateCardForm] = useState(false);
  const [showCVVInput, setShowCVVInput] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [cvv, setCvv] = useState("");
  const [formData, setFormData] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
  });
  const [filteredAddresses, setFilteredAddresses] = useState([]);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const totalAmount = cart.reduce((sum, item) => sum + item.product.price * item.count, 0);
  const shippingCost = totalAmount >= 150 ? 0 : cart.reduce((sum, item) => sum + (item.product.shippingCost || 0), 0);
  const discount = shippingCost === 0 ? shippingCost : 0;
  const grandTotal = totalAmount + shippingCost - discount;

  useEffect(() => {
    const addresses = localStorage.getItem("filteredAddresses");
    if (addresses) {
      setFilteredAddresses(JSON.parse(addresses));
    }
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const cards = await fetchSavedCards();
      setSavedCards(cards || []);
    } catch (error) {
      console.error("Error fetching saved cards:", error);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (showUpdateCardForm) {
        await updateCard(formData);
      } else {
        await addNewCard(formData);
      }
      fetchCards();
      setFormData({ card_no: "", expire_month: "", expire_year: "", name_on_card: "" });
      setShowNewCardForm(false);
      setShowUpdateCardForm(false);
    } catch (error) {
      console.error("Error submitting card:", error);
    }
  };

  const handleUpdateClick = (card) => {
    setFormData(card);
    setShowUpdateCardForm(true);
  };

  const handleDeleteClick = async (cardId) => {
    try {
      await deleteCard(cardId);
      fetchCards();
    } catch (error) {
      console.error("Error deleting card:", error);
    }
  };

  const handleOrderClick = () => {
    if (selectedCardId) {
      setShowCVVInput(true);
    } else {
      alert("Lütfen bir kart seçin.");
    }
  };

  const selectedCard = savedCards.find((card) => card.id === selectedCardId);

  const getAddressInfo = () => {
    const address = filteredAddresses[0];
    return address ? `${address.id}` : -1;
  };

  const handleCVVSubmit = async () => {
    const addressId = getAddressInfo();
    try {
      await createOrder({
        address_id: addressId,
        order_date: new Date().toISOString(),
        card_no: selectedCard.card_no,
        card_name: selectedCard.name_on_card,
        card_expire_month: selectedCard.expire_month,
        card_expire_year: selectedCard.expire_year,
        card_ccv: cvv,
        price: grandTotal,
        products: cart.map((item) => ({
          product_id: item.product.id,
          count: item.count,
          detail: item.product.description,
        })),
      });

      toast.success("Sipariş başarılı!", {
        position: "top-right",
        className: "z-[9999]",
        bodyClassName: "font-medium",
      });
      toast.info("Siparişiniz başarılı bir şekilde oluşturuldu!");
      dispatch({ type: ShoppingCartActions.CLEAR_CART });
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error("Sipariş oluşturulurken bir hata oluştu.");
    }
  };

  const monthOptions = Array.from({ length: 12 }, (_, index) => ({
    value: index + 1,
    label: `${index + 1}`,
  }));

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 10 }, (_, index) => ({
    value: currentYear + index,
    label: `${currentYear + index}`,
  }));

  return (
    <div className="bg-white">
      <div className="flex items-center border mr-6 rounded-lg">
        <div className="flex-col ml-5">
          <i className="fa-regular fa-circle-check fa-2xl text-[#FFD43B]" />
        </div>
        <div className="flex-col ml-5">
          <h1 className="text-2xl font-bold">Kart İle Öde</h1>
          <h3 className="font-bolder">
            Kart ile ödemeyi seçtiniz. Banka veya kredi kartı kullanarak
            ödemenizi güvenle yapabilirsiniz.
          </h3>
        </div>
      </div>
      <div className="flex flex-wrap border mr-6 rounded-lg">
        <div className="w-full md:w-1/2 p-4 border-r border-gray-300">
          <div className="mb-4 flex-row justify-between">
            <h1 className="font-bold text-xl">Kart Bilgileri</h1>
            <h1
              className="font-bolder text-textColorLightGray underline cursor-pointer"
              onClick={() => setShowNewCardForm(true)}
            >
              Başka kart ile ödeme yap
            </h1>
          </div>
          {savedCards.map((card) => (
            <div key={card.id} className="mb-4 max-w-sm">
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id={`card-${card.id}`}
                  name="card"
                  className="mr-2"
                  onChange={() => setSelectedCardId(card.id)}
                />
                <label
                  htmlFor={`card-${card.id}`}
                  className="text-orange-600 font-bold"
                >
                  {card.bank} kartım
                </label>
              </div>
              <div
                className={`border rounded-xl p-4 ${
                  selectedCardId === card.id
                    ? "border-orange-500"
                    : "border-black"
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">Logo</div>
                  <img
                    src="https://cdn.prod.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98397dfdff2889_mastercard-p-500.webp"
                    alt="MasterCard"
                    className="h-8"
                  />
                </div>
                <div className="text-md text-end">
                  {card.card_no.replace(/.(?=.{4})/g, "*")}
                </div>
                <div className="text-right mt-4">
                  {card.expire_month}/{card.expire_year}
                </div>
                <div className="flex justify-between mt-2">
                  <button
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => handleUpdateClick(card)}
                  >
                    Kartı Güncelle
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => handleDeleteClick(card.id)}
                  >
                    Kartı Sil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="mb-4 font-bold text-xl">Taksit Seçenekleri</h1>
          <h1 className="mb-4">Kartınıza uygun taksit seçeneğini seçiniz</h1>
          <div className="border rounded-lg shadow-md max-w-md">
            <div className="flex justify-between p-4">
              <div className="font-semibold">Taksit Sayısı</div>
              <div className="font-semibold">Aylık Ödeme</div>
            </div>
            <div className="border-t">
              <div className="flex justify-between p-4 items-center">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="single"
                    name="payment"
                    className="mr-2"
                  />
                  <label
                    htmlFor="single"
                    className="text-orange-600 font-semibold"
                  >
                    Tek Çekim
                  </label>
                </div>
                <div className="text-orange-600 font-semibold">
                  ${grandTotal.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {(showNewCardForm || showUpdateCardForm) && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg mt-6">
          <h3 className="text-gray-800 font-medium mb-2">
            {showUpdateCardForm ? "Kartı Güncelle" : "Yeni Kart Ekle"}
          </h3>
          <div className="mb-4">
            <label htmlFor="card_no" className="block text-gray-600 mb-1">
              Kart Numarası
            </label>
            <input
              type="text"
              id="card_no"
              value={formData.card_no}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expire_month" className="block text-gray-600 mb-1">
              Son Kullanma Tarihi
            </label>
            <div className="flex">
              <select
                id="expire_month"
                value={formData.expire_month}
                onChange={handleInputChange}
                className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 mr-2"
              >
                {monthOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <select
                id="expire_year"
                value={formData.expire_year}
                onChange={handleInputChange}
                className="w-1/2 border border-gray-300 rounded-lg px-3 py-2"
              >
                {yearOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="name_on_card" className="block text-gray-600 mb-1">
              Kart Üzerindeki İsim
            </label>
            <input
              type="text"
              id="name_on_card"
              value={formData.name_on_card}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg"
          >
            {showUpdateCardForm ? "Kartı Güncelle" : "Yeni Kart Ekle"}
          </button>
        </form>
      )}
      {showCVVInput && (
        <div className="mt-6 bg-white p-6 rounded-lg">
          <h3 className="font-semibold text-lg mb-4">CVV Kodunu Girin</h3>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
          <button
            onClick={handleCVVSubmit}
            className="w-full bg-orange-500 text-white py-2 mt-4 rounded-lg"
          >
            Siparişi Onayla
          </button>
        </div>
      )}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleOrderClick}
          className="bg-green-500 text-white py-2 px-6 rounded-lg"
        >
          Siparişi Onayla
        </button>
      </div>
    </div>
  );
};

export default CreditCardForm;
