// Action Types Constants
export const ClientActions = {
    SET_USER: "SET_USER",
    SET_ROLES: "SET_ROLES",
    SET_THEME: "SET_THEME",
    SET_LANGUAGE: "SET_LANGUAGE"
};

// Initial State
const initialClientState = {
    user: null,
    addressList: [],
    creditCards: [],
    roles: [],
    theme: "light", // Default theme is light
    language: "en" // Default language is English
};

// Reducer Function
export const clientReducer = (state = initialClientState, action) => {
    switch (action.type) {
        case ClientActions.SET_USER:
            return { 
                ...state, 
                user: action.payload // Update user information from the payload
            };
        case ClientActions.SET_ROLES:
            return { 
                ...state, 
                roles: action.payload // Set roles from the payload
            };
        case ClientActions.SET_THEME:
            return { 
                ...state, 
                theme: action.payload // Update theme based on payload
            };
        case ClientActions.SET_LANGUAGE:
            return { 
                ...state, 
                language: action.payload // Update language based on payload
            };
        default:
            return state; // Return the current state if no matching action type
    }
};
