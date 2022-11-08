import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import rpm from "redux-promise-middleware";
import productsReducer from "./reducers/product";
import logger from "redux-logger";

const middleware = applyMiddleware(rpm, logger);
const reducers = combineReducers({
  products: productsReducer,
});
const store = createStore(reducers, middleware);

export default store;