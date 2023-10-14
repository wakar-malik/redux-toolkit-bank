import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./accountSlice";
import customerReducer from "./customerSlice";

// import { combineReducers, createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
