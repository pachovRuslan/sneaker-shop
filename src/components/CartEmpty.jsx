import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../assets/image/cart1.png';
function CartEmpty() {
  return (
    <div className="cart_content">
      <div class="cart_empty">
        <h2>
          Cart Empty <icon>😕</icon>
        </h2>
        <p>You have not selected any product, please return to the main page</p>
        <img src={cart} alt="Empty cart" />
        <Link to="/sneaker-shop/">
          <span>return back</span>
        </Link>
      </div>
    </div>
  );
}

export default CartEmpty;
