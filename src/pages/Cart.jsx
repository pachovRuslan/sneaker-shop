import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearItems, selectCart } from '../redux/slices/cartSlice';
import '../app.scss';
import CartItem from '../components/CartItem';
import CartEmpty from '../components/CartEmpty';
function Cart() {
  const { items, totalPrice } = useSelector(selectCart);
  const dispatch = useDispatch();
  const onClickClear = () => {
    if (window.confirm('Are you sure you want clear cart?')) dispatch(clearItems());
  };
  if (!totalPrice) {
    return <CartEmpty />;
  }
  return (
    <div className="cart_content">
      <div className="cart_header">
        <h1>Корзина</h1>
      </div>
      <div className="cart_items">
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <div class="cart_bottom">
        <div class="cart_bottom-details">
          <span>
            Всего шт: <b> {items.length} шт.</b>
          </span>
          <span>
            Сумма заказа: <b>{totalPrice} $</b>
          </span>
        </div>
        <div class="cart__bottom-buttons">
          <div class="button pay-btn">
            <span>Оплатить сейчас</span>
            <span onClick={onClickClear}>Очистить корзину</span>
            <Link to="/sneaker-shop/">
              <span>Вернуться назад</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
