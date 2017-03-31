import React, {Component} from 'react';

import ProductList from "../components/ProductList";
import CartList from "../components/CartList";


export default class Store extends Component {

    constructor(props) {
        super(props);
        this.selectFilter = this.selectFilter.bind(this);
    }

    selectFilter(status) {
        this.setState({filter: status});
    }

    render() {
        return (
            <div className="row">
                <ProductList products={this.props.products} selectItem={this.props.onProductClick} />
                <CartList items={this.props.items} />
            </div>
        );

    }
}
