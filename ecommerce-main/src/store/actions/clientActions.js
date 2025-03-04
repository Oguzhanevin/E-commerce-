export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_TOKEN = "SET_TOKEN"; // yeni
export const CLEAR_USER = "CLEAR_USER";
export const CLEAR_TOKEN = "CLEAR_TOKEN";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const setRoles = (roles) => ({
  type: SET_ROLES,
  payload: roles,
});

export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

export const clearUser = () => ({
  type: CLEAR_USER,
});

export const clearToken = () => ({
  type: CLEAR_TOKEN,
});
