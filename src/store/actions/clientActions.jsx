import axiosInstance from '../utils/axiosInstance';  // axiosInstance doğru import edilmeli
import { ClientActions } from "../reducers/clientReducer";

// User'ı Redux store'a set etmek için aksiyon
export const setUser = (user) => ({
  type: ClientActions.SET_USER,
  payload: user,
});

// Roles'ü Redux store'a set etmek için aksiyon
export const setRoles = (roles) => ({
  type: ClientActions.SET_ROLES,
  payload: roles,
});

// Theme bilgisini Redux store'a set etmek için aksiyon
export const setTheme = (theme) => ({
  type: ClientActions.SET_THEME,
  payload: theme,
});

// Language bilgisini Redux store'a set etmek için aksiyon
export const setLanguage = (language) => ({
  type: ClientActions.SET_LANGUAGE,
  payload: language,
});

// Kullanıcı girişi için asenkron aksiyon (login işlemi)
export const login = (email, password, rememberMe) => async (dispatch) => {
  try {
    // Login isteği yapılıyor
    const response = await axiosInstance.post("/login", { email, password });

    // Eğer işlem başarılıysa (status 200), kullanıcıyı store'a ekliyoruz
    if (response.status === 200) {
      const user = response.data;
      dispatch(setUser(user));

      // Eğer 'rememberMe' true ise, token'ı localStorage'a kaydediyoruz
      if (rememberMe) {
        localStorage.setItem("token", user.token);
      }

      // Default olarak Authorization header'ına token'ı ekliyoruz
      axiosInstance.defaults.headers.common["Authorization"] = user.token;

      // Kullanıcıyı geri döndürüyoruz
      return user;
    }
  } catch (error) {
    // Hata durumunda hata mesajını fırlatıyoruz
    console.error('Login error:', error.message);
    throw new Error(error.message || 'An error occurred during login');
  }
};
