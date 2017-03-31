import React, {PropTypes} from 'react';
import CartItem from "./CartItem";

const CartList = (props) => {
    console.log("props", props);
    return (
        <div className="medium-4 columns">
            <div className="column">
                <h1>Cart</h1>
            </div>

            <ul> {
                props.products.map((item, index) => {
                    return <CartItem key={index}
                                   name={item.name}
                                   cost={item.cost}
                                   image={item.image}
                                   onClick={props.selectItem.bind(this, index)}
                    />
                })
            }</ul>

        </div>
    );
}

CartList.propTypes = {
    // items: PropTypes.array.isRequired,
    // selectItem: PropTypes.func.isRequired
}

export default CartList;
