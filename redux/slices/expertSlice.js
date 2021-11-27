import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";

export const getAllExperts = createAsyncThunk(
  "/fetchAllExperts",
  async (arg) => {
    const { data } = await AxiosConfig.get(`/v1/experts`);
    return data;
  }
);

const expertSlice = createSlice({
  name: "expert",
  initialState: {
    loading: true,
    allExperts: [],
    expertInformation: {},
  },
  reducers: {
    expertInfo: (state, action) => {
      state.expertInformation = action.payload;
    },
  },
  extraReducers: {
    [getAllExperts.fulfilled]: (state, action) => {
      state.allExperts = action.payload;
      state.loading = false;
    },
  },
});

export const { expertInfo } = expertSlice.actions;

export default expertSlice.reducer;

export const expertSelector = (state) => state.expert;
