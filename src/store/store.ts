import { composeWithDevTools } from "redux-devtools-extension";
import {
  combineReducers,
  createStore,
  applyMiddleware,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducer";
import friendsReducer from "./reducers/friendsReducer";

const rootReducer = combineReducers({
  authReducer,
  alertReducer,
  friendsReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
