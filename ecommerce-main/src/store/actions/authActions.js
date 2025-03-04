export const SET_USER = "SET_USER";
export const SET_USER_REQUEST = "SET_USER_REQUEST";
export const SET_USER_ERROR = "SET_USER_ERROR";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFailure = (error) => ({
  type: LOGOUT_FAILURE,
  payload: error,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setUserError = (error) => ({
  type: SET_USER_ERROR,
  error,
});

export const setUserRequest = () => ({
  type: SET_USER_REQUEST,
});
