import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalBalance: 0,
  loan: 0,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.totalBalance += action.payload;
    },
    withdraw(state, action) {
      state.totalBalance -= action.payload;
    },
    reqLoan(state, action) {
      state.totalBalance += action.payload;
      state.loan += action.payload;
    },
    payLoan(state, action) {
      state.totalBalance -= action.payload;
      state.loan -= action.payload;
    },
  },
});

export const { deposit, withdraw, payLoan, reqLoan } = accountSlice.actions;

export default accountSlice.reducer;
