import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      axiosInstance.defaults.headers.common["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
