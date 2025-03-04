import axiosInstance from "../../api/axiosInstance";

export const FETCH_PAYMENTS_REQUEST = "FETCH_PAYMENTS_REQUEST";
export const FETCH_PAYMENTS_SUCCESS = "FETCH_PAYMENTS_SUCCESS";
export const FETCH_PAYMENTS_FAILURE = "FETCH_PAYMENTS_FAILURE";

export const ADD_PAYMENT_REQUEST = "ADD_PAYMENT_REQUEST";
export const ADD_PAYMENT_SUCCESS = "ADD_PAYMENT_SUCCESS";
export const ADD_PAYMENT_FAILURE = "ADD_PAYMENT_FAILURE";

export const UPDATE_PAYMENT_REQUEST = "UPDATE_PAYMENT_REQUEST";
export const UPDATE_PAYMENT_SUCCESS = "UPDATE_PAYMENT_SUCCESS";
export const UPDATE_PAYMENT_FAILURE = "UPDATE_PAYMENT_FAILURE";

export const DELETE_PAYMENT_REQUEST = "DELETE_PAYMENT_REQUEST";
export const DELETE_PAYMENT_SUCCESS = "DELETE_PAYMENT_SUCCESS";
export const DELETE_PAYMENT_FAILURE = "DELETE_PAYMENT_FAILURE";

export const SET_SELECTED_PAYMENT = "SET_SELECTED_PAYMENT";

// Fetch payments
export const fetchPayments = () => async (dispatch) => {
  dispatch({ type: FETCH_PAYMENTS_REQUEST });
  try {
    const response = await axiosInstance.get("/user/card");
    dispatch({ type: FETCH_PAYMENTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PAYMENTS_FAILURE, payload: error.message });
  }
};

// Add payment
export const addPayment = (payment) => async (dispatch) => {
  dispatch({ type: ADD_PAYMENT_REQUEST });
  try {
    await axiosInstance.post("/user/card", payment);
    dispatch({ type: ADD_PAYMENT_SUCCESS });
    dispatch(fetchPayments());
  } catch (error) {
    dispatch({ type: ADD_PAYMENT_FAILURE, payload: error.message });
  }
};

// Update payment
export const updatePayment = (payment) => async (dispatch) => {
  dispatch({ type: UPDATE_PAYMENT_REQUEST });
  try {
    await axiosInstance.put(`/user/card`, payment);
    dispatch({ type: UPDATE_PAYMENT_SUCCESS });
    dispatch(fetchPayments());
  } catch (error) {
    dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: error.message });
  }
};

// Delete payment
export const deletePayment = (paymentId) => async (dispatch) => {
  dispatch({ type: DELETE_PAYMENT_REQUEST });
  try {
    await axiosInstance.delete(`/user/card/${paymentId}`);
    dispatch({ type: DELETE_PAYMENT_SUCCESS });
    dispatch(fetchPayments());
  } catch (error) {
    dispatch({ type: DELETE_PAYMENT_FAILURE, payload: error.message });
  }
};

export const setSelectedPayment = (paymentId) => ({
  type: SET_SELECTED_PAYMENT,
  payload: paymentId,
});
