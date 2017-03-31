import React, {PropTypes} from 'react';

const ProductItem = (props) => {
    let itemClass = "";
    if (props.addedToCart) {
        itemClass = "added-to-cart";
    }

    return (
        <div className="columns small-6 medium-3" onClick={props.onClick}>
            <strong>{props.name}</strong>
            <div></div>
            <small>{props.cost} €</small>
            <img src={props.image} width="100"></img>
        </div>
    );
}

ProductItem.propTypes = {
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
}

export default ProductItem;
