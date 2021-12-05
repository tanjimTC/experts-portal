import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";

export const loginExpert = createAsyncThunk("/loginExperts", async (arg) => {
  const { data } = await AxiosConfig.post(`/auth/login`, arg);
  return data;
});

export const makePayment = createAsyncThunk("/makePayment", async (arg) => {
  const data = await AxiosConfig.post(`/billing/stripe/charge`, arg);
  return data;
});

export const verifyToken = createAsyncThunk("/verifyToken", async (arg) => {
  console.log("arg i was called", arg);
  const data = await AxiosConfig.post(`/auth/verify-token`, arg);
  return data;
});

export const setLogedinuser = createAsyncThunk("setLogedinuser", () => {
  return localStorage.getItem("expertInfoLocal")
    ? JSON.parse(localStorage.getItem("expertInfoLocal"))
    : {};
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: true,
    loggedInExpert: {},
  },
  reducers: {
    loggedInExpertInfo: (state, action) => {
      state.loggedInExpert = action.payload;
      localStorage.setItem("expertInfoLocal", JSON.stringify(action.payload));
    },
  },
  extraReducers: {
    [loginExpert.fulfilled]: (state, action) => {
      state.loggedInExpert = action.payload;
      state.loading = false;
    },
    [setLogedinuser.fulfilled]: (state, action) => {
      state.loggedInExpert = action.payload;
      state.loading = false;
    },
  },
});

export const { loggedInExpertInfo } = authSlice.actions;

export default authSlice.reducer;

export const authSelector = (state) => state.auth;
