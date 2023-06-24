import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./features/toggleSlice";
import addCartReducer from "./features/addCartSlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    addCart: addCartReducer,
  },
});
