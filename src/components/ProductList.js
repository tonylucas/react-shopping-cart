import React, {PropTypes} from 'react';
import ProductItem from "./ProductItem";

const ProductList = (props) => {
    return (
        <div>
            <div className="column">
                <h1>Products</h1>
            </div>
            <div className="medium-6 columns end">
                <ul> {
                    props.products.map((item, index) => {

                    const isProductFiltered = (props.filter === "product" && item.complete === true);
                    const isCompleteFiltered = (props.filter === "complete" && item.complete === false);
                    if (isProductFiltered || isCompleteFiltered)
                        return null;

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
