// src/store/auth.js
import { setUser, clearUser } from "../store/actions/clientActions";  // Assuming you have a clearUser action for logging out the user
import { axiosInstance } from "../store/api/axiosInstance";

export const verifyToken = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // If no token, we do nothing and can optionally dispatch a logout action
    dispatch(clearUser());
    return;
  }

  axiosInstance.defaults.headers.common["Authorization"] = token;

  try {
    const response = await axiosInstance.get("/verify");

    if (response.status === 200) {
      const user = response.data;
      // Set the user and update token if necessary
      dispatch(setUser(user));
      localStorage.setItem("token", user.token);
      axiosInstance.defaults.headers.common["Authorization"] = user.token;
    } else {
      // If the response status is not 200, handle the logout logic
      handleLogout(dispatch);
    }
  } catch (error) {
    console.error("Token verification failed:", error);
    handleLogout(dispatch);
  }
};

// Helper function to handle logout (removes token and clears user state)
const handleLogout = (dispatch) => {
  localStorage.removeItem("token");
  delete axiosInstance.defaults.headers.common["Authorization"];
  dispatch(clearUser());  // Assuming you have a clearUser action for logging out the user
};
