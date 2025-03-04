const initialState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "",
  language: "tr",
  token: null,
  loading: false,
  error: null,
};

import { SET_USER_ERROR, SET_USER_REQUEST } from "../actions/authActions";
import {
  SET_USER,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE,
  SET_TOKEN,
  CLEAR_USER,
  CLEAR_TOKEN,
} from "../actions/clientActions";

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case SET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SET_USER_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case SET_ROLES:
      return {
        ...state,
        roles: action.payload,
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
      };
    case CLEAR_TOKEN:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default clientReducer;
