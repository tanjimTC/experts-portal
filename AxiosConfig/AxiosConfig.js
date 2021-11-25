import axios from "axios";
const url = "https://fleetapi.zetech.us/api";

const instance = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    "Acess-Control-Allow-Origin": "*",
  },
});

export default instance;
