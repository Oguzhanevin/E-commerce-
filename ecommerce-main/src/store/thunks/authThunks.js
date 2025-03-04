import { setUser, clearUser, clearToken } from "../actions/clientActions";
import axiosInstance from "../../api/axiosInstance";
import {
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  setUserRequest,
  setUserError,
} from "../actions/authActions";
import { toast } from "react-toastify";

export const handleLogin = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setUserRequest());
      const response = await axiosInstance.post("/login", {
        email: data.email,
        password: data.password,
      });
      const user = await response.data;
      dispatch(setUser(user));
      toast.success("Successfully logged in.");
    } catch (error) {
      console.log(error, "User Login Error");
      dispatch(setUserError(error));
    }
  };
};

export const logoutUser = () => async (dispatch) => {
  dispatch(logoutRequest());
  try {
    localStorage.removeItem("token"); // localStorage'dan tokeni kaldır
    dispatch(clearUser()); // Redux'tan kullanıcı bilgilerini temizle
    dispatch(clearToken()); // Redux'tan tokeni temizle
    dispatch(logoutSuccess());
    toast.success("Successfully logged out.");
  } catch (error) {
    console.error("Logout error:", error);
    dispatch(logoutFailure(error.message));
    toast.error("Logout failed. Please try again.");
  }
};

export const verifyToken = () => {
  return async (dispatch) => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      try {
        axiosInstance.defaults.headers.common["Authorization"] = token;
        const response = await axiosInstance.get("/verify");
        const user = await response.data;
        dispatch(setUser(user));
        if (user.token) {
          localStorage.removeItem("token");
          localStorage.setItem("token", JSON.stringify(user.token));
        }
      } catch (error) {
        if (error) {
          localStorage.removeItem("token");
          delete axiosInstance.defaults.headers.common["Authorization"];
          dispatch(clearUser());
        }
        console.error("Token verification error:", error);
      }
    }
  };
};
