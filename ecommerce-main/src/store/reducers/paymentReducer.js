import {
  FETCH_PAYMENTS_REQUEST,
  FETCH_PAYMENTS_SUCCESS,
  FETCH_PAYMENTS_FAILURE,
  ADD_PAYMENT_REQUEST,
  ADD_PAYMENT_SUCCESS,
  ADD_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_FAILURE,
  DELETE_PAYMENT_REQUEST,
  DELETE_PAYMENT_SUCCESS,
  DELETE_PAYMENT_FAILURE,
  SET_SELECTED_PAYMENT,
} from "../actions/paymentActions";

const initialState = {
  payments: [],
  loading: false,
  error: null,
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAYMENTS_REQUEST:
    case ADD_PAYMENT_REQUEST:
    case UPDATE_PAYMENT_REQUEST:
    case DELETE_PAYMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PAYMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        payments: action.payload,
      };
    case ADD_PAYMENT_SUCCESS:
    case UPDATE_PAYMENT_SUCCESS:
    case DELETE_PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case FETCH_PAYMENTS_FAILURE:
    case ADD_PAYMENT_FAILURE:
    case UPDATE_PAYMENT_FAILURE:
    case DELETE_PAYMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_SELECTED_PAYMENT:
      return {
        ...state,
        selectedPaymentId: action.payload,
      };
    default:
      return state;
  }
};

export default paymentReducer;
