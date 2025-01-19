import axios from "axios";

// Axios instance oluşturuluyor
export const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// İstek öncesi interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Token alınması
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Bearer token ekleniyor
    } else {
      console.warn("No token found! Request will be unauthorized.");
    }
    console.log("Request config:", config);
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Yanıt sonrası interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  },
  (error) => {
    if (error.response) {
      // 401 Unauthorized hatasını yakalamak
      if (error.response.status === 401) {
        console.error("Unauthorized access - Token may have expired.");
        // Burada kullanıcıyı log out edebilir veya login sayfasına yönlendirebilirsiniz.
        localStorage.removeItem("token"); // Token'ı kaldır
        window.location.href = "/login";  // Kullanıcıyı login sayfasına yönlendir
      } else {
        console.error("Response error:", error.response);
      }
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up the request:", error.message);
    }
    return Promise.reject(error);
  }
);

// Kartları almak için
export const fetchSavedCards = async () => {
  try {
    const response = await axiosInstance.get("/user/card");
    return response.data;
  } catch (error) {
    console.error("Error fetching saved cards:", error);
    throw error;
  }
};

// Yeni kart eklemek için
export const addNewCard = async (cardData) => {
  try {
    const response = await axiosInstance.post("/user/card", cardData);
    return response.data;
  } catch (error) {
    console.error("Error adding new card:", error);
    throw error;
  }
};

// Kart güncellemek için
export const updateCard = async (cardId, cardData) => {
  try {
    const response = await axiosInstance.put(`/user/card/${cardId}`, cardData);
    return response.data;
  } catch (error) {
    console.error("Error updating card:", error);
    throw error;
  }
};

// Kart silmek için
export const deleteCard = async (cardId) => {
  try {
    const response = await axiosInstance.delete(`/user/card/${cardId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting card:", error);
    throw error;
  }
};

// Sipariş oluşturmak için
export const createOrder = async (orderData) => {
  try {
    const response = await axiosInstance.post("/order", orderData);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

// Default export
export default axiosInstance;
