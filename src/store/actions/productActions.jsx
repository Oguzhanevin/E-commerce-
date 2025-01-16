import { ProductActions } from '../reducers/productReducer';
import { axiosInstance } from '../api/axiosInstance';

// Helper function for dispatching state updates
const dispatchFetchState = (dispatch, state) => {
  dispatch({ type: ProductActions.SET_FETCH_STATE, payload: state });
};

// Fetch products with optional sort and filter
export const fetchProducts = (sortOption = 'price:asc', filterText = '') => async (dispatch) => {
  try {
    dispatchFetchState(dispatch, "FETCHING");
    const response = await axiosInstance.get(`/products?sort=${sortOption}&filter=${filterText}`);

    const { total, products } = response.data;

    dispatch({ type: ProductActions.SET_TOTAL, payload: total });
    dispatch({ type: ProductActions.SET_PRODUCT_LIST, payload: products });

    dispatchFetchState(dispatch, "FETCHED");
  } catch (error) {
    console.error('Error fetching products:', error);
    dispatchFetchState(dispatch, "FETCH_ERROR");
  }
};

// Fetch products by category ID
export const fetchProductsByCategoryId = (categoryId, sortOption = 'price:asc', filterText = '') => async (dispatch) => {
  try {
    dispatchFetchState(dispatch, "FETCHING");
    const response = await axiosInstance.get(`/products?category=${categoryId}&sort=${sortOption}&filter=${filterText}`);

    const { total, products } = response.data;

    dispatch({ type: ProductActions.SET_TOTAL, payload: total });
    dispatch({ type: ProductActions.SET_PRODUCT_LIST, payload: products });

    dispatchFetchState(dispatch, "FETCHED");
  } catch (error) {
    console.error('Error fetching products by category:', error);
    dispatchFetchState(dispatch, "FETCH_ERROR");
  }
};

// Fetch product details by ID
export const fetchProductById = (productId) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/products/${productId}`);
    const productDetail = response.data;

    dispatch({ type: ProductActions.SET_PRODUCT_DETAIL, payload: productDetail });
  } catch (error) {
    console.error('Error fetching product details:', error);
  }
};

// Action creators for setting various product-related data
export const setCategories = (categories) => ({
  type: ProductActions.SET_CATEGORIES,
  payload: categories,
});

export const setProductList = (productList) => ({
  type: ProductActions.SET_PRODUCT_LIST,
  payload: productList,
});

export const setTotal = (total) => ({
  type: ProductActions.SET_TOTAL,
  payload: total,
});

export const setFetchState = (fetchState) => ({
  type: ProductActions.SET_FETCH_STATE,
  payload: fetchState,
});

export const setLimit = (limit) => ({
  type: ProductActions.SET_LIMIT,
  payload: limit,
});

export const setOffset = (offset) => ({
  type: ProductActions.SET_OFFSET,
  payload: offset,
});

export const setFilter = (filter) => ({
  type: ProductActions.SET_FILTER,
  payload: filter,
});
