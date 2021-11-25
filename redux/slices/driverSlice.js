import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";

export const getAllDriver = createAsyncThunk(
  "driver/fetchAllDriver",
  async (arg) => {
    const { data } = await AxiosConfig.get(`/v1/drivers`);
    return data;
  }
);

const driverSlice = createSlice({
  name: "driver",
  initialState: {
    loading: true,
    allDriver: [],
    driverInformation: {},
  },
  reducers: {
    driverInfo: (state, action) => {
      state.driverInformation = action.payload;
    },
  },
  extraReducers: {
    [getAllDriver.fulfilled]: (state, action) => {
      state.allDriver = action.payload;
      state.loading = false;
    },
  },
});

export const { driverInfo } = driverSlice.actions;

export default driverSlice.reducer;

export const driverSelector = (state) => state.driver;
