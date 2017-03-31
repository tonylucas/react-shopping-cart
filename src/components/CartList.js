import React, {PropTypes} from 'react';
import CartItem from "./CartItem";

const CartList = (props) => {
    console.log(props.items);
    return <ul>
    {
        props.items.map((item, index) => {

        return <CartItem key={index}
                       name={item.name}
                       onClick={props.selectItem.bind(this,index)}
        />
        })
    }</ul>;
}

CartList.propTypes = {
    items: PropTypes.array.isRequired,
    // selectItem: PropTypes.func.isRequired
}

export default CartList;
