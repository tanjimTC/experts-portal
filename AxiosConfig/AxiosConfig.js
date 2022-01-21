import axios from "axios";
const url = "https://expert-portal-server.herokuapp.com";

const instance = axios.create({
  baseURL: url,
});

export default instance;
