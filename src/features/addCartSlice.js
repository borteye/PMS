import { createSlice } from "@reduxjs/toolkit";

const addCartSlice = createSlice({
  name: "addCart",
  initialState: [],
  reducers: {
    addToCart: (state, { payload }) => {
      state.push(payload);
    },
    removeFromCart: (state, action) => {
      return (state = state.filter((doc) => doc.id !== action.payload));
    },
    defaultCart: (state) => {
      return state;
    },
  },
});

export const { addToCart, removeFromCart, defaultCart } = addCartSlice.actions;
export const SelectCartItems = (state) => state.addCart;

export default addCartSlice.reducer;
