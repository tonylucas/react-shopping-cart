import {combineReducers, createStore} from 'redux';
import products from './reducers/products';

let reducer = combineReducers({
    products: products
});
let store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
