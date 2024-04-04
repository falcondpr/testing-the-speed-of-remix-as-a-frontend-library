import axiosPackage from "axios";

const axios = axiosPackage.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axios;
