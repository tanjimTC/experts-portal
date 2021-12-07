import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosConfig from "../../AxiosConfig/AxiosConfig";

export const getAllAppointments = createAsyncThunk(
  "/fetchAllAppointments",
  async (arg) => {
    const { data } = await AxiosConfig.get(`/appointment`);
    return data.data;
  }
);

export const addAppointment = createAsyncThunk(
  "/addAppointments",
  async (arg) => {
    const { data } = await AxiosConfig.post(`/appointment/add`, arg);
    return data;
  }
);

export const getAppointmentByEmail = createAsyncThunk(
  "/fetchAppointmentByEmail",
  async (arg) => {
    const { data } = await AxiosConfig.get(
      `/appointment/booked-appointments/${arg}`
    );
    return data.data;
  }
);

const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    loading: true,
    AppointmentInformation: {},
    allAppointment: [],
    appointmentByDate: [],
  },
  reducers: {
    appointmentInfoByDate: (state, action) => {
      state.appointmentByDate = action.payload;
    },
  },
  extraReducers: {
    [getAppointmentByEmail.fulfilled]: (state, action) => {
      state.allAppointment = action.payload;
      state.loading = false;
    },
  },
});

export const { appointmentInfoByDate } = appointmentSlice.actions;

export default appointmentSlice.reducer;

export const appointmentSelector = (state) => state.appointment;
