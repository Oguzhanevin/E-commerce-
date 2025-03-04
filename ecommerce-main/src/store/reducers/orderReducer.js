import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  FETCH_ORDERS_REQUEST,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE,
} from "../actions/orderActions";

const initialState = {
  loading: false,
  order: null,
  error: null,
  previousOrders: [], // New state for previous orders
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
    case FETCH_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    case FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        previousOrders: action.payload,
      };
    case CREATE_ORDER_FAILURE:
    case FETCH_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
