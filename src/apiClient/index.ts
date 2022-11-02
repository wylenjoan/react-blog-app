import axios from "axios";

axios.defaults.withCredentials = true;

const axiosClient = axios.create({
    withCredentials: true,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
});

axiosClient.defaults.baseURL =
    process.env.NODE_ENV === 'production'
        ? process.env.REACT_APP_API_URL
        : process.env.REACT_APP_DEV_API_URL;

export default axiosClient;
