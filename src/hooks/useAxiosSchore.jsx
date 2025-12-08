import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
//   withCredentials: true,
});

const useAxiosSchore = () => {
  return axiosInstance;
};

export default useAxiosSchore;
