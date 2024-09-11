import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.in/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default instance;