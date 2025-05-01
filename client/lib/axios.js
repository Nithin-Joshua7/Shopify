import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:"https://shopify-server-6vzj.onrender.com/api",
  withCredentials: true,
});
