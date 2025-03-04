import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemCount,
  increaseItemCount,
  removeFromCart,
  toggleItemChecked,
} from "../store/actions/shoppingCartActions";
import OrderSummary from "../components/BasketComponents/OrderSummary";

const Basket = () => {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  const handleIncrease = (productId) => {
    dispatch(increaseItemCount(productId));
  };

  const handleDecrease = (productId) => {
    dispatch(decreaseItemCount(productId));
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleToggleChecked = (productId) => {
    dispatch(toggleItemChecked(productId));
  };

  const totalPrice = cart
    .filter((item) => item.checked)
    .reduce((total, item) => total + item.product.price * item.count, 0);

  return (
    <div className="md:mx-36 md:mt-10 mt-10 mx-2 flex flex-col md:flex-row md:justify-between md:gap-8">
      <div className="w-full lg:w-2/3">
        <h1 className="text-3xl font-semibold mb-6">
          Sepetim ({cart.length} Ürün)
        </h1>
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.product.id}
              className="flex flex-row items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex flex-row items-center gap-4 w-1/2">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleToggleChecked(item.product.id)}
                />
                <img
                  src={item.product.images[0].url}
                  alt={item.product.name}
                  className="w-20 h-20 object-contain"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">{item.product.name}</p>
                  <p className="text-sm text-gray-600">Adet: {item.count}</p>
                  <p className="text-sm text-gray-600">
                    Fiyat: ${item.product.price}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <button
                  className="bg-gray-200 px-3 py-1 rounded"
                  onClick={() => handleDecrease(item.product.id)}
                >
                  -
                </button>
                <span>{item.count}</span>
                <button
                  className="bg-gray-200 px-3 py-1 rounded"
                  onClick={() => handleIncrease(item.product.id)}
                >
                  +
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleRemove(item.product.id)}
                >
                  Sil
                </button>
              </div>
              <div className="font-semibold text-lg">
                ${item.product.price * item.count}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Basket;
