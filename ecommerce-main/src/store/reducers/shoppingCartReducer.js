import {
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
  ADD_TO_CART,
  SET_SHOW_CART,
  INCREASE_ITEM_COUNT,
  DECREASE_ITEM_COUNT,
  REMOVE_FROM_CART,
  TOGGLE_ITEM_CHECKED,
} from "../actions/shoppingCartActions";

const initialState = {
  cart: [],
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case SET_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case ADD_TO_CART:
      const existingProductIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        const newCart = [...state.cart];
        newCart[existingProductIndex].count += 1;
        return {
          ...state,
          cart: newCart,
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            { count: 1, checked: true, product: action.payload },
          ],
        };
      }
    case SET_SHOW_CART:
      return {
        ...state,
        showCart: action.payload,
      };
    case INCREASE_ITEM_COUNT:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, count: item.count + 1 }
            : item
        ),
      };
    case DECREASE_ITEM_COUNT:
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.product.id === action.payload
              ? { ...item, count: item.count - 1 }
              : item
          )
          .filter((item) => item.count > 0),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
    case TOGGLE_ITEM_CHECKED:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, checked: !item.checked }
            : item
        ),
      };
    default:
      return state;
  }
};

export default shoppingCartReducer;
