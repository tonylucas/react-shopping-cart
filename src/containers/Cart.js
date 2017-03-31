import React, {Component} from 'react';

import ProductList from "../components/ProductList";
import CartList from "../components/CartList";

export default class Cart extends Component {

    constructor(props) {
        this.state = {
            items: [
                {
                    "id": "58de157e1600cc234fece3c3",
                    "name": "Calcula",
                    "cost": 72.10,
                    "image": "https://robohash.org/Calcula"
                }
            ]
        };
    }

    selectItem() {

    }

    render() {
        console.log("state.items", this.state);
        return (
            <div>
                <CartList items={this.state.items} selectItem={this.selectItem} />
            </div>
        );
    }
}
