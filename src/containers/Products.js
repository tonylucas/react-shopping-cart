import { connect } from 'react-redux';
import Store from './Store';
import React, {Component} from 'react';


function mapDispatchToProps(dispatch) {
    return {
        fetchComplete: (products) => {
            console.log(products);
            dispatch({
                type: 'FETCH_PRODUCTS_SUCCESS',
                products
            });
        },
        fetchError: (products) => {
            dispatch({
                type: 'FETCH_PRODUCTS_ERROR',
                products
            });
        },
        onProductClick: (index) => {
            dispatch({
                type: 'TOGGLE_PRODUCT',
                index
            });
        },
        onAddProduct: (name) => {
            dispatch({
                type: 'ADD_PRODUCT',
                name
            });
        },
        filterProduct: (value) => {
            dispatch({
                type: 'SET_VISIBILITY_FILTER',
                value
            });
        }
    }
}

// High Order Component
function fetchProducts(WrappedComponent) {
    return class extends Component {
        componentDidMount() {
            fetch('api/products.json')
                .then((response) => {
                    return response.json();
                }).then((results) => {
                    this.props.fetchComplete(results);
                }).catch((err) => {
                    this.props.fetchError(err);
                });
        }
        render() {
            return ( <WrappedComponent {...this.props}/>);
        }
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
        filter: state.filter
    }
}

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(fetchProducts(Store));

export default ProductsContainer;
