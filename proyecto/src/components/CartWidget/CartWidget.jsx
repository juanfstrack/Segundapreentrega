import React from 'react';
import { CartFill } from 'react-bootstrap-icons';

const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <CartFill size={24} color="blue" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
