import React from 'react';
import styles from '../app.module.scss';
import add from '../assets/image/added.png';
import plus from '../assets/image/plus.png';

function ItemBlock({ imageUrl, name, price }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };
  return (
    <div className={styles.card}>
      <div className={styles.item}>
        <img src={imageUrl} alt="item" />
      </div>
      <div className={styles.item_name}>
        <span> {name}</span>
      </div>
      <div className={styles.price}>
        <div className={styles.price_property}>
          <span>Price:</span>
          <b>{price} $</b>
          <div className={styles.price_add}>
            <div onClick={onClickPlus}>{isAdded ? <img src={plus} alt='plus'/> : <img src={add} alt='add'/>}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemBlock;
