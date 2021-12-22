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

export const reqAppointment = createAsyncThunk(
  "/reqAppointments",
  async (arg) => {
    const { data } = await AxiosConfig.post(`/appointment/req`, arg);
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

export const getRequstedAppointmentByEmail = createAsyncThunk(
  "/fetchRequstedAppointmentByEmail",
  async (arg) => {
    const { data } = await AxiosConfig.get(
      `/appointment/requested-appointments/${arg}`
    );
    return data.data;
  }
);

export const getRequstedAppointmentByClientEmail = createAsyncThunk(
  "/fetchRequstedAppointmentByClientEmail",
  async (arg) => {
    const { data } = await AxiosConfig.get(
      `/appointment/requested-appointments/client/${arg}`
    );
    return data.data;
  }
);

export const getAppointmentByClientEmail = createAsyncThunk(
  "/fetchAppointmentByClientEmail",
  async (arg) => {
    const { data } = await AxiosConfig.get(
      `/appointment/booked-appointments/client/${arg}`
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
    allPhysicalAppointment: [],
    allPhysicalAppointmentClient: [],
    allAppointmentCleint: [],
    appointmentByDate: [],
    physicalAppointmentByDate: [],
    physicalAppointmentByClientDate: [],
  },
  reducers: {
    appointmentInfoByDate: (state, action) => {
      state.appointmentByDate = action.payload;
    },
    physcialAppointmentInfoByDate: (state, action) => {
      state.physicalAppointmentByDate = action.payload;
    },
    physicalAppointmentInfoByClientDate: (state, action) => {
      state.physicalAppointmentByClientDate = action.payload;
    },
  },
  extraReducers: {
    [getAppointmentByEmail.fulfilled]: (state, action) => {
      state.allAppointment = action.payload;
      state.loading = false;
    },
    [getAppointmentByClientEmail.fulfilled]: (state, action) => {
      state.allAppointmentCleint = action.payload;
      state.loading = false;
    },
    [getRequstedAppointmentByEmail.fulfilled]: (state, action) => {
      state.allPhysicalAppointment = action.payload;
      state.loading = false;
    },
    [getRequstedAppointmentByClientEmail.fulfilled]: (state, action) => {
      state.allPhysicalAppointmentClient = action.payload;
      state.loading = false;
    },
  },
});

export const {
  appointmentInfoByDate,
  physcialAppointmentInfoByDate,
  physicalAppointmentInfoByClientDate,
} = appointmentSlice.actions;

export default appointmentSlice.reducer;

export const appointmentSelector = (state) => state.appointment;
