import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  customerID: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    created(state, action) {
      state.name = action.payload.name;
      state.customerID = action.payload.customerID;
    },
  },
});

export const { created } = customerSlice.actions;

export default customerSlice.reducer;
