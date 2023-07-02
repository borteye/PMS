import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminMenuToggle: false,
  pharmacistToggle: true,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setAdminActiveToggle: (state, action) => {
      state.adminMenuToggle = action.payload.adminMenuToggle;
    },

    setAdminCloseToggle: (state) => {
      state.adminMenuToggle = false;
    },
    setPharmacistActiveToggle: (state, action) => {
      state.pharmacistToggle = action.payload.pharmacistToggle;
    },

    setPharmacistCloseToggle: (state) => {
      state.pharmacistToggle = false;
    },
  },
});

export const {
  setAdminActiveToggle,
  setAdminCloseToggle,
  setPharmacistActiveToggle,
  setPharmacistCloseToggle,
} = toggleSlice.actions;

export const SelectAdActiveToggle = (state) => state.toggle.adminMenuToggle;
export const SelectPhActiveToggle = (state) => state.toggle.pharmacistToggle;

export default toggleSlice.reducer;
