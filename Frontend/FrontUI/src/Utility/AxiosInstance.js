import axios from "axios";
import { BASE_URL } from "./API_Path";

const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
});

// ✅ Add token from localStorage if available
AxiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`; // ✅ one space only
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default AxiosInstance;
