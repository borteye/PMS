import { createSlice } from "@reduxjs/toolkit";

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState: [],
  reducers: {
    saveInvoiceInfo: (state, { payload }) => {
      state.push(payload);
    },
  },
});

export const { saveInvoiceInfo } = invoiceSlice.actions;

export const SelectInvoiceInfo = (state) => state.invoice;
// export const SelectPhActiveToggle = (state) => state.toggle.pharmacistToggle;

export default invoiceSlice.reducer;
