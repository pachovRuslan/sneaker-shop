import React from 'react'
import { useDispatch } from 'react-redux';
import {  removeItem } from '../redux/slices/cartSlice'
function CartItem({name, imageUrl, price, id }) {
  const dispatch = useDispatch();
  const onClickRemove = () => {
    if(window.confirm('Are you sure you want to remove?'))
    dispatch(removeItem(id))
    
  }
  return (

    <div className="cart_item">
      <img src={imageUrl} alt="cart_item" />
      <h3> {name}</h3>
      <span>{price} $</span>
      <span onClick={onClickRemove}>delete</span>
    </div>
  )
}

export default CartItem