export const ShoppingCartActions = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    INCREASE_QUANTITY: 'INCREASE_QUANTITY',
    DECREASE_QUANTITY: 'DECREASE_QUANTITY',
    CLEAR_CART: 'CLEAR_CART'
};

const initialState = {
    cart: [],
};

// Helper function to update product quantity
const updateProductQuantity = (cart, productId, increment = true) => {
    return cart.map(item =>
        item.product.id === productId
            ? { ...item, count: increment ? item.count + 1 : item.count - 1 }
            : item
    );
};

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ShoppingCartActions.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case ShoppingCartActions.INCREASE_QUANTITY:
            return {
                ...state,
                cart: updateProductQuantity(state.cart, action.payload, true),
            };
        case ShoppingCartActions.DECREASE_QUANTITY:
            return {
                ...state,
                cart: updateProductQuantity(state.cart, action.payload, false),
            };
        case ShoppingCartActions.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.product.id !== action.payload),
            };
        case ShoppingCartActions.CLEAR_CART:
            return {
                ...state,
                cart: [],
            };
        default:
            return state;
    }
};

export default shoppingCartReducer;
