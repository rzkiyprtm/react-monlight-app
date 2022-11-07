import { combineReducers } from "redux";
import authsReducer from "./auth";

const reducers = combineReducers({
  auths: authsReducer,
});

export default reducers