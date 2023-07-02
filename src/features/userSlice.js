import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  name: null,
  email: null,
  id: null,
  role: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.role = action.payload.role;
    },
    setUserLogoutState: (state) => {
      state.token = null;
      state.name = null;
      state.email = null;
      state.id = null;
      state.role = null;
    },
  },
});

export const { setActiveUser, setUserLogoutState } = userSlice.actions;
// export const { saveInvoiceInfo } = invoiceSlice.actions;

// export const SelectPhActiveToggle = (state) => state.toggle.pharmacistToggle;
export const SelectUserToken = (state) => state.user.token;
export const SelectUserName = (state) => state.user.name;
export const SelectUserEmail = (state) => state.user.email;
export const SelectUserId = (state) => state.user.id;
export const SelectUserRole = (state) => state.user.role;

export default userSlice.reducer;
