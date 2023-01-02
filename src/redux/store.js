// import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import reducers from "./reducers/index";


// const persistConfig = {
//   key: "monlight",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       thunk: true,
//       serializableCheck: false,
//     }).concat(logger),
// });

// export const persistedStore = persistStore(store);
// export default store;

import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import rpm from "redux-promise-middleware";
import productsReducer from "./reducers/product";
// import logger from "redux-logger";

const middleware = applyMiddleware(rpm);
const reducers = combineReducers({
  products: productsReducer,
});
const store = createStore(reducers, middleware);

export default store;