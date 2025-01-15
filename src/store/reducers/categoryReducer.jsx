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
        loading: true,
      };

    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,  // Updating categories with the data from payload
        error: null,  // Reset error when request is successful
      };

    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,  // Store the error message from payload
      };

    default:
      return state;
  }
};

export default categoryReducer;
