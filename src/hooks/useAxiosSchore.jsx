import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";
import { useEffect } from "react";
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
  //   withCredentials: true,
});

const useAxiosSchore = () => {
  const { user, userLogOut } = useAuth();
  const naviget = useNavigate();
  useEffect(() => {
    const requesId = axiosInstance.interceptors.request.use((config) => {
      if (user?.accessToken) {
        config.headers.Authorization = `Bearer ${user?.accessToken}`;
      }
      return config;
    });

    const resonSError = axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        const code = err?.status;
        if (code === 401 || code === 403) {
          userLogOut().then(() => {
            naviget("/auth/login");
          });
        }
        return Promise.reject(err);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requesId);
      axiosInstance.interceptors.response.eject(resonSError);
    };
  }, [userLogOut, naviget, user?.accessToken]);
  return axiosInstance;
};

export default useAxiosSchore;
