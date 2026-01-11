import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true, // 쿠키에 무조건
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("access_token");
    console.log("🔥 axios token:", token);

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
