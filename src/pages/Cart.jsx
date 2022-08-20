import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../app.scss';
import CartItem from '../components/CartItem';
function Cart() {
 const dispatch = useDispatch();
 const items = useSelector((state)=> state.cartSlice.items)
  return (
    <div className="cart_content">
      <div className="cart_header">
        <h1>Корзина</h1>

      </div>
      <div className="cart_items">
      {
        items.map((item)=>(<CartItem {...item}/>))
      }
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
            <span>Очистить корзину</span>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
