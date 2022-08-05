import React from 'react';
import { Link } from 'react-router-dom';
import '../app.scss';
function Cart() {
  return (
    <div className="cart_content">
      <div className="cart_header">
        <h1>Корзина</h1>
        <span>Очистить корзину</span>
      </div>
      <div className="cart_items">
        <div className="cart_item">
          <img src="https://psv4.userapi.com/c237331/u24625912/docs/d48/681d2433a319/new_balance_3.png?extra=JhG4N9BirrUDBZOYx__5bAWWuJmdButHemAi890Z8E_yhCe451oLULVW0DJIrRMjRORihj-g8m_wTbuX2365LyV36Anp6qyz7NJVqpqevq3yi_FaEBSForXD6Ypt0z_fBLvnTI4p6cbsIeUNByez0Q" />
          <h3> name</h3>
          <span>size</span>
          <span>delete</span>
        </div>
      </div>
      <div class="cart_bottom">
        <div class="cart_bottom-details">
          <span>
            {' '}
            Всего шт: <b>1 шт.</b>{' '}
          </span>
          <span>
            {' '}
            Сумма заказа: <b>900 ₽</b>{' '}
          </span>
        </div>
        <div class="cart__bottom-buttons">
          <span>Вернуться назад</span>

          <div class="button pay-btn">
            <span>Оплатить сейчас</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
