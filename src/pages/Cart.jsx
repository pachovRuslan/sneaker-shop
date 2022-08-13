import React from 'react';

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
          <img src='' alt='cart_item' />
          <h3> name</h3>
          <span>size</span>
          <span>delete</span>
        </div>
      </div>
      <div class="cart_bottom">
        <div class="cart_bottom-details">
          <span>
            Всего шт: <b>1 шт.</b>
          </span>
          <span>
            Сумма заказа: <b>900 ₽</b>
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
