import axiosInstance from "../../api/axiosInstance";

export const FETCH_ADDRESSES_REQUEST = "FETCH_ADDRESSES_REQUEST";
export const FETCH_ADDRESSES_SUCCESS = "FETCH_ADDRESSES_SUCCESS";
export const FETCH_ADDRESSES_FAILURE = "FETCH_ADDRESSES_FAILURE";

export const ADD_ADDRESS_REQUEST = "ADD_ADDRESS_REQUEST";
export const ADD_ADDRESS_SUCCESS = "ADD_ADDRESS_SUCCESS";
export const ADD_ADDRESS_FAILURE = "ADD_ADDRESS_FAILURE";

export const UPDATE_ADDRESS_REQUEST = "UPDATE_ADDRESS_REQUEST";
export const UPDATE_ADDRESS_SUCCESS = "UPDATE_ADDRESS_SUCCESS";
export const UPDATE_ADDRESS_FAILURE = "UPDATE_ADDRESS_FAILURE";

export const DELETE_ADDRESS_REQUEST = "DELETE_ADDRESS_REQUEST";
export const DELETE_ADDRESS_SUCCESS = "DELETE_ADDRESS_SUCCESS";
export const DELETE_ADDRESS_FAILURE = "DELETE_ADDRESS_FAILURE";

export const SET_SELECTED_ADDRESS = "SET_SELECTED_ADDRESS";

// Fetch addresses
export const fetchAddresses = () => async (dispatch) => {
  dispatch({ type: FETCH_ADDRESSES_REQUEST });
  try {
    const response = await axiosInstance.get("/user/address");
    dispatch({ type: FETCH_ADDRESSES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_ADDRESSES_FAILURE, payload: error.message });
  }
};

// Add address
export const addAddress = (address) => async (dispatch) => {
  dispatch({ type: ADD_ADDRESS_REQUEST });
  try {
    await axiosInstance.post("/user/address", address);
    dispatch({ type: ADD_ADDRESS_SUCCESS });
    dispatch(fetchAddresses()); // Refresh the address list
  } catch (error) {
    dispatch({ type: ADD_ADDRESS_FAILURE, payload: error.message });
  }
};

// Update address
export const updateAddress = (address) => async (dispatch) => {
  dispatch({ type: UPDATE_ADDRESS_REQUEST });
  try {
    await axiosInstance.put(`/user/address`, address);
    dispatch({ type: UPDATE_ADDRESS_SUCCESS });
    dispatch(fetchAddresses()); // Refresh the address list
  } catch (error) {
    dispatch({ type: UPDATE_ADDRESS_FAILURE, payload: error.message });
  }
};

// Delete address
export const deleteAddress = (addressId) => async (dispatch) => {
  dispatch({ type: DELETE_ADDRESS_REQUEST });
  try {
    await axiosInstance.delete(`/user/address/${addressId}`);
    dispatch({ type: DELETE_ADDRESS_SUCCESS });
    dispatch(fetchAddresses()); // Refresh the address list
  } catch (error) {
    dispatch({ type: DELETE_ADDRESS_FAILURE, payload: error.message });
  }
};

export const setSelectedAddress = (addressId) => ({
  type: SET_SELECTED_ADDRESS,
  payload: addressId,
});
