import React, {PropTypes} from 'react';
import ProductItem from "./ProductItem";

const ProductList = (props) => {
    return (
        <div className="medium-8 columns">
            <div className="column">
                <h1>Products</h1>
            </div>
            <div>
                <ul> {
                    props.products.map((item, index) => {
                        return <ProductItem key={index}
                                       name={item.name}
                                       cost={item.cost}
                                       image={item.image}
                                       onClick={props.selectItem.bind(this, index)}
                        />
                    })
                }</ul>
            </div>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    selectItem: PropTypes.func.isRequired
}

export default ProductList;
