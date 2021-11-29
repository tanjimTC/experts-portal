import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";

export const getAllExperts = createAsyncThunk(
  "/fetchAllExperts",
  async (arg) => {
    const { data } = await AxiosConfig.get(`/auth/experts`);
    return data.data;
  }
);

export const getExpertsByCategory = createAsyncThunk(
  "/fetchExpertsByCategory",
  async (arg) => {
    console.log("arg", arg);
    const { data } = await AxiosConfig.get(`/auth/experts/${arg}`);
    return data.data;
  }
);

export const makePayment = createAsyncThunk("/makePayment", async (arg) => {
  const { data } = await AxiosConfig.post(`/billing/stripe/charge`, arg);
  return data;
});

const expertSlice = createSlice({
  name: "expert",
  initialState: {
    loading: true,
    allExperts: [],
    expertInformation: {},
    bookingInformation: {},
  },
  reducers: {
    expertInfo: (state, action) => {
      state.expertInformation = action.payload;
    },
    filteredExperts: (state, action) => {
      state.allExperts = action.payload;
    },
    confirmBooking: (state, action) => {
      state.bookingInformation = action.payload;
    },
  },
  extraReducers: {
    [getAllExperts.fulfilled]: (state, action) => {
      state.allExperts = action.payload;
      state.loading = false;
    },
    [getExpertsByCategory.fulfilled]: (state, action) => {
      state.allExperts = action.payload;
      state.loading = false;
    },
  },
});

export const { expertInfo, filteredExperts, confirmBooking } =
  expertSlice.actions;

export default expertSlice.reducer;

export const expertSelector = (state) => state.expert;
