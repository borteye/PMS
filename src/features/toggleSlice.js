import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminMenuToggle: false,
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
  },
});

export const { setAdminActiveToggle, setAdminCloseToggle } =
  toggleSlice.actions;

export const SelectAdActiveToggle = (state) => state.toggle.adminMenuToggle;

export default toggleSlice.reducer;
