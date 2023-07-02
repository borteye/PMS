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
    updateCart: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload) {
          item.quantity += 1;
          item.total_price = item.price * item.quantity;
        }
      });
    },
    increaseQuantity: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload) {
          item.quantity += 1;
          item.total_price = item.price * item.quantity;
        }
      });
    },
    decreaseQuantity: (state, action) => {
      state.map((item) => {
        if (item.id === action.payload) {
          item.quantity -= 1;
          item.total_price = item.price * item.quantity;
        }
      });
    },
    defaultCart: (state) => {
      return (state = []);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCart,
  increaseQuantity,
  decreaseQuantity,
  defaultCart,
} = addCartSlice.actions;
export const SelectCartItems = (state) => state.addCart;

export default addCartSlice.reducer;
