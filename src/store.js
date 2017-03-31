import {combineReducers, createStore} from 'redux';
import products from './reducers/products';
import filter from './reducers/filter';

let reducer = combineReducers({
    products: products,
    filter: filter
});
let store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
