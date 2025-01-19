// categoryActions.js
import { axiosInstance } from '../../store/api/axiosInstance';  

// Aksiyon türlerini sabitler dosyasından yönetmek iyi bir uygulama olabilir
// actionTypes.js
export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

// Kategorileri almak için asenkron aksiyon
export const fetchCategories = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesRequest()); // Kategori isteği başlatıldığında
    try {
      const response = await axiosInstance.get('/categories'); // API'den kategorileri çekiyoruz
      dispatch(fetchCategoriesSuccess(response.data)); // Kategori başarıyla alındığında
    } catch (error) {
      console.error('Error fetching categories:', error); // Hata mesajını daha ayrıntılı yazdırın
      dispatch(fetchCategoriesFailure(error.response ? error.response.data : error.message || 'An error occurred.'));
    }
  };
};

// Kategori istek başlatma aksiyonu
const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST,
});

// Kategori başarıyla alındığında aksiyon
const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories, // Alınan kategoriler payload olarak gönderiliyor
});

// Kategori isteği sırasında hata oluştuğunda aksiyon
const fetchCategoriesFailure = (error) => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: error, // Hata mesajı payload olarak gönderiliyor
});
