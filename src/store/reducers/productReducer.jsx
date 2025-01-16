export const ProductActions = {
    SET_CATEGORIES: "SET_CATEGORIES",
    SET_PRODUCT_LIST: "SET_PRODUCT_LIST",
    SET_TOTAL: "SET_TOTAL",
    SET_FETCH_STATE: "SET_FETCH_STATE",
    SET_LIMIT: "SET_LIMIT",
    SET_OFFSET: "SET_OFFSET",
    SET_FILTER: "SET_FILTER",
    SET_PRODUCT_DETAIL: "SET_PRODUCT_DETAIL"
};

const initialState = {
    categories: [],
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: "",
    fetchState: "NOT_FETCHED",
    productDetail: null,
};

// Helper function to update state
const updateState = (state, action, field) => ({ ...state, [field]: action.payload });

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ProductActions.SET_CATEGORIES:
            return updateState(state, action, 'categories');
        case ProductActions.SET_PRODUCT_LIST:
            return updateState(state, action, 'productList');
        case ProductActions.SET_TOTAL:
            return updateState(state, action, 'total');
        case ProductActions.SET_FETCH_STATE:
            return updateState(state, action, 'fetchState');
        case ProductActions.SET_LIMIT:
            return updateState(state, action, 'limit');
        case ProductActions.SET_OFFSET:
            return updateState(state, action, 'offset');
        case ProductActions.SET_FILTER:
            return updateState(state, action, 'filter');
        case ProductActions.SET_PRODUCT_DETAIL:
            return updateState(state, action, 'productDetail');
        default:
            return state;
    }
};



 

