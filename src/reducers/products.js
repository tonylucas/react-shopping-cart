const initialState = [];

function products(state = initialState, action) {
    switch (action && action.type) {
        case 'TOGGLE_PRODUCT':
            const newState = state.concat();
            newState[action.index].complete = !newState[action.index].complete;
            return newState;
        case 'FETCH_PRODUCTS_SUCCESS':
            return action.products;
        default:
            return state;
    }
}

export default products;
