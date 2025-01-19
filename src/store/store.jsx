import { combineReducers, legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";  // Doğru import şekli
import logger from "redux-logger";

// Reducers
import { clientReducer } from "./reducers/clientReducer";
import { productReducer } from "./reducers/productReducer";
import categoryReducer from "./reducers/categoryReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";

// Combine reducers
const reducers = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  categories: categoryReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk, logger));
