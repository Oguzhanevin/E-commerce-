import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../store/actions/orderActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const PreviousOrders = () => {
  const dispatch = useDispatch();
  const previousOrders = useSelector((state) => state.order.previousOrders);
  const loading = useSelector((state) => state.order.loading);

  const [openOrders, setOpenOrders] = useState({});

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  // Son sipariş en yukarda görünsün
  const sortedOrders = [...previousOrders].reverse();

  const toggleOrderDetails = (orderId) => {
    setOpenOrders((prevOpenOrders) => ({
      ...prevOpenOrders,
      [orderId]: !prevOpenOrders[orderId],
    }));
  };

  return (
    <div className="previous-orders p-4">
      <h1 className="text-2xl font-semibold mb-4">Önceki Siparişler</h1>
      {sortedOrders.length === 0 ? (
        <p>Hiç siparişiniz bulunmamaktadır.</p>
      ) : (
        sortedOrders.map((order) => (
          <div
            key={order.id}
            className="order-item mb-4 p-4 border rounded-lg shadow-md cursor-pointer"
            onClick={() => toggleOrderDetails(order.id)}
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">
                  Sipariş ID: {order.id}
                </h2>
                <p>Tarih: {new Date(order.order_date).toLocaleString()}</p>
                <p>Fiyat: ${order.price}</p>
              </div>
              <FontAwesomeIcon
                icon={openOrders[order.id] ? faChevronUp : faChevronDown}
              />
            </div>
            {openOrders[order.id] && (
              <div className="order-details mt-4">
                {order.products.map((product) => (
                  <div
                    key={product.product_id}
                    className="product-item flex items-center mb-4"
                  >
                    <img
                      src={product.images[0].url}
                      alt={product.detail}
                      className="w-20 h-20 object-contain mr-4"
                    />
                    <div>
                      <p className="font-semibold">Ürün Adı: {product.name}</p>
                      <p>Adet: {product.count}</p>
                      <p>Fiyat: ${product.price}</p>
                      <p>Detay: {product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default PreviousOrders;
