import { ShoppingCartActions } from '../reducers/shoppingCartReducer';

const getRandomShippingDetails = () => {
    const shippingOptions = [
        { shipping: 'Aras Kargo', shippingCost: 29.99 },
        { shipping: 'MNG Kargo', shippingCost: 39.99 },
        { shipping: 'Sürat Kargo', shippingCost: 19.99 },
    ];

    return shippingOptions[Math.floor(Math.random() * shippingOptions.length)];
};

export const addToCart = (product) => (dispatch, getState) => {
    const { cart: { cart }, client: { user } } = getState();
    if (!user) {
        alert("You need to be logged in to add items to the cart.");
        return;
    }

    const existingProductIndex = cart.findIndex(item => item.product.id === product.id);

    if (existingProductIndex >= 0) {
        dispatch({
            type: ShoppingCartActions.INCREASE_QUANTITY,
            payload: product.id,
        });
    } else {
        const shippingDetails = getRandomShippingDetails();
        dispatch({
            type: ShoppingCartActions.ADD_TO_CART,
            payload: { product: { ...product, ...shippingDetails }, count: 1, checked: true },
        });
    }
};
