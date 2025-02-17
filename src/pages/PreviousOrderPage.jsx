
import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { axiosInstance } from "../store/api/axiosInstance";
import Header from "../layout/Header";
import Footer from "../components/generalComponents/Footer";
import LoadingSpinner from "../layout/LoadingSpinner";

const PreviousOrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const user = useSelector((state) => state.client.user);

  // Fetch orders and address data
  const fetchOrdersAndAddresses = useCallback(async () => {
    if (!user) return;
    try {
      const orderResponse = await axiosInstance.get("/order");
      setOrders(orderResponse.data);

      const addressResponse = await axiosInstance.get("/user/address");
      setAddresses(addressResponse.data);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }, [user]);

  // Trigger fetch on user change
  useEffect(() => {
    fetchOrdersAndAddresses();
  }, [fetchOrdersAndAddresses]);

  // Toggle the expanded order details
  const handleToggleDetails = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  // Memoized function to find address by ID
  const getAddressById = useCallback(
    (addressId) => {
      return addresses.find((address) => address.id === addressId);
    },
    [addresses]
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Previous Orders
        </h2>
        {orders.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 border-b text-left text-gray-600">Order ID</th>
                <th className="py-3 px-4 border-b text-left text-gray-600">Date</th>
                <th className="py-3 px-4 border-b text-left text-gray-600">Total</th>
                <th className="py-3 px-4 border-b text-left text-gray-600">Details</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <React.Fragment key={order.id}>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b text-gray-800">{order.id}</td>
                    <td className="py-3 px-4 border-b text-gray-800">
                      {new Date(order.order_date).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 border-b text-gray-800">
                      ${order.price.toFixed(2)}
                    </td>
                    <td className="py-3 px-4 border-b">
                      <button
                        onClick={() => handleToggleDetails(order.id)}
                        className={`text-blue-500 hover:underline font-semibold ${expandedOrderId === order.id ? 'text-blue-700' : ''}`}
                      >
                        {expandedOrderId === order.id ? "Hide Details" : "View Details"}
                      </button>
                    </td>
                  </tr>
                  {expandedOrderId === order.id && (
                    <tr>
                      <td colSpan="4" className="py-4 px-4 border-b">
                        <OrderDetails order={order} getAddressById={getAddressById} />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-600">No previous orders found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

// OrderDetails component for better readability and separation of concerns
const OrderDetails = ({ order, getAddressById }) => {
  const address = getAddressById(order.address_id);

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Order Details</h3>
      <div className="space-y-4">
        <p className="text-gray-700">
          <strong className="font-semibold">Order ID:</strong> {order.id}
        </p>
        <p className="text-gray-700">
          <strong className="font-semibold">Date:</strong> {new Date(order.order_date).toLocaleDateString()}
        </p>
        <p className="text-gray-700">
          <strong className="font-semibold">Total:</strong> ${order.price.toFixed(2)}
        </p>
        <p className="text-gray-700">
          <strong className="font-semibold">Address ID:</strong> {order.address_id}
        </p>
        {address && (
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Address Details:</h4>
            <p className="text-gray-700"><strong className="font-semibold">Title:</strong> {address.title}</p>
            <p className="text-gray-700"><strong className="font-semibold">Name:</strong> {address.name} {address.surname}</p>
            <p className="text-gray-700"><strong className="font-semibold">Address:</strong> {address.address}</p>
            <p className="text-gray-700"><strong className="font-semibold">City:</strong> {address.city}</p>
            <p className="text-gray-700"><strong className="font-semibold">District:</strong> {address.district}</p>
            <p className="text-gray-700"><strong className="font-semibold">Neighborhood:</strong> {address.neighborhood}</p>
            <p className="text-gray-700"><strong className="font-semibold">Phone:</strong> {address.phone}</p>
          </div>
        )}
        <h4 className="text-lg font-semibold mt-4 text-gray-800">Products:</h4>
        <ul className="space-y-2">
          {order.products.map((product, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-inner">
              <p className="text-gray-700"><strong className="font-semibold">Name:</strong> {product.name}</p>
              <p className="text-gray-700"><strong className="font-semibold">Description:</strong> {product.description}</p>
              <p className="text-gray-700"><strong className="font-semibold">Price:</strong> ${product.price.toFixed(2)}</p>
              <p className="text-gray-700"><strong className="font-semibold">Quantity:</strong> {product.count}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PreviousOrderPage;
