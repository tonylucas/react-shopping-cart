import React, {PropTypes} from 'react';

const ProductItem = (props) => {

    let itemClass = "";
    if (props.addedToCart) {
        itemClass = "added-to-cart";
    }

    return (
        <li className={itemClass} onClick={props.onClick}>{props.name}</li>
    );
}

ProductItem.propTypes = {
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default ProductItem;
