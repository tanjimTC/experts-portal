import { configureStore } from "@reduxjs/toolkit";
import expertReducer from "./slices/expertSlice";
import appointmentReducer from "./slices/appointmentSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    expert: expertReducer,
    appointment: appointmentReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
