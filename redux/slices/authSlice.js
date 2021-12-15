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

export const setLoggedInExpert = createAsyncThunk("setLoggedInExpert", () => {
  return localStorage.getItem("expertInfoLocal")
    ? JSON.parse(localStorage.getItem("expertInfoLocal"))
    : {};
});

export const setLoggedInUser = createAsyncThunk("setLoggedInUser", () => {
  return localStorage.getItem("userInfoLocal")
    ? JSON.parse(localStorage.getItem("userInfoLocal"))
    : {};
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: true,
    loggedInExpert: {},
    loggedInUser: {},
  },
  reducers: {
    loggedInExpertInfo: (state, action) => {
      state.loggedInExpert = action.payload;
      localStorage.setItem("expertInfoLocal", JSON.stringify(action.payload));
    },
    loggedInUserInfo: (state, action) => {
      state.loggedInUser = action.payload;
      localStorage.setItem("userInfoLocal", JSON.stringify(action.payload));
    },
  },
  extraReducers: {
    [loginExpert.fulfilled]: (state, action) => {
      state.loggedInExpert = action.payload;
      state.loading = false;
    },
    [setLoggedInExpert.fulfilled]: (state, action) => {
      state.loggedInExpert = action.payload;
      state.loading = false;
    },
    [setLoggedInUser.fulfilled]: (state, action) => {
      state.loggedInUser = action.payload;
      state.loading = false;
    },
  },
});

export const { loggedInExpertInfo, loggedInUserInfo } = authSlice.actions;

export default authSlice.reducer;

export const authSelector = (state) => state.auth;
