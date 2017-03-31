import React, {Component} from 'react';
import {Provider} from 'react-redux';

import Products from "./containers/Products";
import "./App.css";

import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Products/>
            </Provider>
        );
    }
}

export default App;
