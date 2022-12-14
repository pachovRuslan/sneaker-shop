import React from 'react';
import { Link } from 'react-router-dom';
import '../app.scss';
import logo from '../assets/image/logo.png';
import cart from '../assets/image/cart1.png';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/slices/cartSlice';
function Header() {
  const { items, totalPrice } = useSelector(selectCart);
  return (
    <div className="header">
      <Link to="/sneaker-shop/">
        <div className="header_logo">
          <img width={120} height={160} src={logo} alt="logo" />
        </div>
      </Link>
      <div className="header_title">
        <div>
          <h1 className="header_name">REACT SNEAKERS</h1>
          <p className="header_discribe">best sneaker store</p>
        </div>
      </div>

      <div className="cart">
        <div className="cart_button">
          <Link to="/cart">
            <img width={80} height={80} src={cart} alt="cart"></img>
          </Link>
          <p>{totalPrice} $</p>
          <p>{items.length} шт</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
