import moment from "moment";

export const dateFormat = (date, format = "DD-MM-YYYY") => {
  return moment(new Date(date)).format(format);
};
