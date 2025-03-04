import axiosInstance from "../../api/axiosInstance";

export const CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST";
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS";
export const CREATE_ORDER_FAILURE = "CREATE_ORDER_FAILURE";

export const FETCH_ORDERS_REQUEST = "FETCH_ORDERS_REQUEST";
export const FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS";
export const FETCH_ORDERS_FAILURE = "FETCH_ORDERS_FAILURE";

export const createOrder = (orderData) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST });
  try {
    const response = await axiosInstance.post("/order", orderData);
    dispatch({ type: CREATE_ORDER_SUCCESS, payload: response.data });
    dispatch(setCart([])); // Sepeti temizle
  } catch (error) {
    dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });
  }
};

// Sepeti temizleme aksiyonu
export const setCart = (cart) => ({
  type: "SET_CART",
  payload: cart,
});

// Fetch previous orders
export const fetchOrders = () => async (dispatch) => {
  dispatch({ type: FETCH_ORDERS_REQUEST });
  try {
    const response = await axiosInstance.get("/order");
    dispatch({ type: FETCH_ORDERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_ORDERS_FAILURE, payload: error.message });
  }
};
