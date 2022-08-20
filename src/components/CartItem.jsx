import React from 'react'

function CartItem({name, imageUrl, price }) {
  return (

    <div className="cart_item">
      <img src={imageUrl} alt="cart_item" />
      <h3> {name}</h3>
      <span>{price} $</span>
      <span>delete</span>
    </div>
  )
}

export default CartItem