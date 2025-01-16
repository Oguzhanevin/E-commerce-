import { setUser } from "../actions/clientActions";
import { axiosInstance } from "../api/axiosInstance";

export const login = (email, password, rememberMe) => async (dispatch) => {
  try {
    // API isteği ile giriş işlemi
    const response = await axiosInstance.post("/login", { email, password });

    // Başarılı bir cevap alındığında
    if (response.status === 200) {
      const user = response.data;

      // Kullanıcı bilgilerini Redux'a dispatch et
      dispatch(setUser(user));

      // Eğer kullanıcı "Beni Hatırla" seçeneğini işaretlediyse, token'ı localStorage'a kaydet
      if (rememberMe && user.token) {
        try {
          localStorage.setItem("token", user.token);
        } catch (error) {
          console.error("localStorage'e token kaydedilirken bir hata oluştu:", error);
        }
      }

      return user;
    } else {
      throw new Error("Giriş işlemi başarısız.");
    }
  } catch (error) {
    // Hata durumunu işleme
    console.error("Login hatası:", error);
    throw error;
  }
};

