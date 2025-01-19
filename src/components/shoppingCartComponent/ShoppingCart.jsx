
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ShoppingCartActions } from "../../store/reducers/shoppingCartReducer";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  // Ürün miktarını artırma veya azaltma
  const handleQuantityChange = (id, delta) => {
    const actionType =
      delta > 0
        ? ShoppingCartActions.INCREASE_QUANTITY
        : ShoppingCartActions.DECREASE_QUANTITY;
    dispatch({ type: actionType, payload: id });
  };

  // Ürünü sepetten kaldırma
  const handleRemoveProduct = (id) => {
    dispatch({ type: ShoppingCartActions.REMOVE_FROM_CART, payload: id });
  };

  // Ürün seçimini işleme
  const handleSelectProduct = (id) => {
    // Seçim işlemi burada uygulanabilir
    console.log(`Selected product ID: ${id}`);
  };

  // Toplam ürün fiyatı
  const productTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.count,
    0
  );

  // Kargo maliyeti hesaplama
  const shippingCostTotal =
    productTotal >= 150
      ? 0
      : cart.reduce(
          (sum, item) => sum + (parseFloat(item.product.shippingCost) || 0),
          0
        );

  // Genel toplam
  const grandTotal = productTotal + shippingCostTotal;

  return (
    <div className="container mx-auto p-4">
      {/* Sepet Ürün Listesi */}
      {cart.map((item) => (
        <div
          key={item.product.id}
          className="flex flex-col md:flex-row items-start justify-between p-4 border-b"
        >
          {/* Ürün Detayları */}
          <div className="flex items-start space-x-4 w-full md:w-1/3 mb-4 md:mb-0">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleSelectProduct(item.product.id)}
              className="form-checkbox h-5 w-5 text-purple-600"
            />
            <img
              src={item.product.images[0].url}
              alt={item.product.name}
              className="w-16 h-16 rounded"
            />
            <div className="flex flex-col">
              <h2 className="font-semibold">{item.product.name}</h2>
              <p className="text-sm text-gray-600">{item.product.description}</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange(item.product.id, -1)}
                  className="p-2 bg-gray-200 rounded"
                >
                  <i className="fas fa-minus"></i>
                </button>
                <span>{item.count}</span>
                <button
                  onClick={() => handleQuantityChange(item.product.id, 1)}
                  className="p-2 bg-gray-200 rounded"
                >
                  <i className="fas fa-plus"></i>
                </button>
                <button
                  onClick={() => handleRemoveProduct(item.product.id)}
                  className="p-2 text-neutral-700 rounded"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Kargo ve Ürün Fiyatı */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/3 mb-4 md:mb-0">
            <p className="text-sm text-gray-600">{item.product.shipping}</p>
            <p className="text-sm text-purple-600">
              {productTotal >= 150
                ? "Kargo Ücretsiz"
                : `${item.product.shippingCost} TL`}
            </p>
          </div>
          <div className="text-center w-full md:w-1/3">
            <span className="font-semibold">
              ${item.product.price.toFixed(2)}
            </span>
          </div>
        </div>
      ))}

      {/* Toplam Fiyat */}
      <div className="p-4 text-right">
        <strong>Total Price: ${grandTotal.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default ShoppingCart;
