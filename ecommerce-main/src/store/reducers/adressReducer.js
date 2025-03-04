import {
  FETCH_ADDRESSES_REQUEST,
  FETCH_ADDRESSES_SUCCESS,
  FETCH_ADDRESSES_FAILURE,
  ADD_ADDRESS_REQUEST,
  ADD_ADDRESS_SUCCESS,
  ADD_ADDRESS_FAILURE,
  UPDATE_ADDRESS_REQUEST,
  UPDATE_ADDRESS_SUCCESS,
  UPDATE_ADDRESS_FAILURE,
  DELETE_ADDRESS_REQUEST,
  DELETE_ADDRESS_SUCCESS,
  DELETE_ADDRESS_FAILURE,
  SET_SELECTED_ADDRESS,
} from "../actions/adressActions";

const initialState = {
  addresses: [],
  loading: false,
  error: null,
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADDRESSES_REQUEST:
    case ADD_ADDRESS_REQUEST:
    case UPDATE_ADDRESS_REQUEST:
    case DELETE_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ADDRESSES_SUCCESS:
      return {
        ...state,
        loading: false,
        addresses: action.payload,
      };
    case ADD_ADDRESS_SUCCESS:
    case UPDATE_ADDRESS_SUCCESS:
    case DELETE_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case FETCH_ADDRESSES_FAILURE:
    case ADD_ADDRESS_FAILURE:
    case UPDATE_ADDRESS_FAILURE:
    case DELETE_ADDRESS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_SELECTED_ADDRESS:
      return {
        ...state,
        selectedAddressId: action.payload,
      };
    default:
      return state;
  }
};

export default addressReducer;
