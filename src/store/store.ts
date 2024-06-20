import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducer";
import friendsReducer from "./reducers/friendsReducer";
import chatReducer from "./reducers/chatReducer";

const rootReducer = combineReducers({
  authReducer,
  alertReducer,
  friendsReducer,
  chatReducer,
});
//@ts-ignore
const store = configureStore({ reducer: rootReducer, middleware: thunk });

export default store;
