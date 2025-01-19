// rootReducer.js
import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import shoppingCartReducer from './shoppingCartReducer';
import clientReducer from './clientReducer';

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

export default rootReducer;
