// Action Types
const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

// Initial State
const initialState = {
  categories: [],
  loading: false,
  error: null,
};

// Category Reducer
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,  // Request başladığında loading true
        error: null,    // Error'ı sıfırla, çünkü yeni bir istek başlatılıyor
      };

    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,             // Request tamamlandığında loading false
        categories: action.payload, // Veriler başarıyla geldi, categories güncelleniyor
        error: null,                // Başarılı olduğunda error'ı sıfırlıyoruz
      };

    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,            // Hata durumunda loading false
        error: action.payload,     // Hata mesajını action'dan al
        categories: [],            // Eğer hata varsa, categories boş olmalı
      };

    default:
      return state; // Bilinmeyen action türleri için mevcut state'i döndür
  }
};

export default categoryReducer;
