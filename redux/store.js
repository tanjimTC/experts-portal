import { configureStore } from "@reduxjs/toolkit";
import driverReducer from "./slices/driverSlice";
import expertReducer from "./slices/expertSlice";

export const store = configureStore({
  reducer: {
    driver: driverReducer,
    expert: expertReducer,
  },
});
