import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlices";

export const store = configureStore({
  reducer: {
    userData: userReducer,
  },
});

export default store;
