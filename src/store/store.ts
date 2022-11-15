import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
    authReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;