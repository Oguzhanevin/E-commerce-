// clientActions.jsx
import { ClientActions } from "../reducers/clientReducer";
import axiosInstance from "../api/axiosInstance"; // axiosInstance doğru import edilmeli

// Kullanıcıyı Redux store'a set etmek için aksiyon
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

// Kullanıcıyı temizlemek için aksiyon (clearUser)
export const clearUser = () => ({
  type: ClientActions.CLEAR_USER, // CLEAR_USER aksiyonu burada kullanılıyor
});

// Kullanıcı girişi için asenkron aksiyon (login işlemi)
export const login = (email, password, rememberMe) => async (dispatch) => {
  if (!email || !password) {
    throw new Error("Email ve şifre gereklidir");
  }

  try {
    // Login isteği yapılıyor
    const response = await axiosInstance.post("/login", { email, password });

    // Eğer işlem başarılıysa (status 200), kullanıcıyı store'a ekliyoruz
    if (response?.status === 200) {
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
    } else {
      // Başarısız login işlemi
      throw new Error(
        "Giriş işlemi başarısız oldu, lütfen bilgilerinizi kontrol edin"
      );
    }
  } catch (error) {
    // Hata durumunda anlamlı bir mesaj döndürüyoruz
    console.error("Login error:", error.message);
    throw new Error(
      error.response?.data?.message ||
        error.message ||
        "Bir hata oluştu, lütfen tekrar deneyin"
    );
  }
};
