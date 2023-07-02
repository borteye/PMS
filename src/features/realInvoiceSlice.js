import { createSlice } from "@reduxjs/toolkit";

export const realInvoiceSlice = createSlice({
  name: "realInvoice",
  initialState: {},
  reducers: {
    realInvoiceInfo: (state, action) => {
      return (state = action.payload);
    },
    defaultInvoiceInfo: (state) => {
      return (state = {});
    },
  },
});

export const { realInvoiceInfo, defaultInvoiceInfo } = realInvoiceSlice.actions;

export const SelectRealInvoiceInfo = (state) => state.realInvoice;

export default realInvoiceSlice.reducer;
