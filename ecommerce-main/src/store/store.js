import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import logger from "redux-logger";

const middleware = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, middleware);

export default store;
