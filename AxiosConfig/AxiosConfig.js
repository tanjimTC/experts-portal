import axios from "axios";
const url = "http://localhost:4000";

const instance = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
    "Acess-Control-Allow-Origin": "*",
  },
});

export default instance;
