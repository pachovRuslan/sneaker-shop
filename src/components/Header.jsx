import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../app.module.scss';
import logo from '../assets/image/logo.png';
import cart from '../assets/image/cart1.png';
function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <div className={styles.header_logo}>
          <img width={120} height={160} src={logo} alt="logo" />
        </div>
      </Link>
      <div className={styles.header_title}>
        <div>
          <h1 className={styles.header_name}>REACT SNEAKERS</h1>
          <p className={styles.header_discribe}>best sneaker store</p>
        </div>
      </div>

      <div className={styles.cart}>
        <div className={styles.cart_button}>
        <Link to="/cart">
          <img width={80} height={80} src={cart} alt="cart"></img>
          <span>totalPrice $</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
