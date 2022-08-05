import React from 'react';
import  '../app.scss';
import add from '../assets/image/added.png';
import plus from '../assets/image/plus.png';

function ItemBlock({ imageUrl, name, price }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };
  return (
    <div className='card'>
      <div className='item'>
        <img src={imageUrl} alt="item" />
      </div>
      <div className='item_name'>
        <span> {name}</span>
      </div>
      <div className='price'>
        <div className='price_property'>
          <span>Price:</span>
          <b>{price} $</b>
          <div className='price_add'>
            <div onClick={onClickPlus}>{isAdded ? <img src={plus} alt='plus'/> : <img src={add} alt='add'/>}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemBlock;
