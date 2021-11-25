import { configureStore } from "@reduxjs/toolkit";
import driverReducer from "./slices/driverSlice";

export const store = configureStore({
  reducer: {
    driver: driverReducer,
  },
});
