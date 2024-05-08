import moment from "moment";
import AxiosConfig from "./AxiosConfig/AxiosConfig";

export const dateFormat = (date, format = "DD-MM-YYYY") => {
  return moment(new Date(date)).format(format);
};

export const verifyToken = async (accessToken) => {
  return await AxiosConfig.post("/auth/verify-token", accessToken);
};
