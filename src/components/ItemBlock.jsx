import React from 'react';
import '../app.scss';
import { Link } from 'react-router-dom';
import add from '../assets/image/added.png';
import plus from '../assets/image/plus.png';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/slices/cartSlice'
function ItemBlock({ imageUrl, name, price, id }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const dispatch = useDispatch()
  const onClickAdd = () => {
    const item = {
      id, name, price, imageUrl,
    };
    dispatch(addItem(item))
    setIsAdded(!isAdded);
  }
  const onClickRemove = () => {
    if(window.confirm('Are you sure you want to remove?'))
    dispatch(removeItem(id))
    
  }
  return (
    <div className="card">
      <div className="item">
       <Link to={`/sneaker/${id}`}> <img src={imageUrl} alt="item" /></Link>
      </div>
      <div className="item_name">
        <span> {name}</span>
      </div>
      <div className="price">
        <div className="price_property">
          <span>Price:</span>
          <b>{price} $</b>
          <div className="price_add">
            <div >
              {isAdded ? <img  onClick={onClickRemove} src={add} alt="add" /> : <img onClick={onClickAdd}  src={plus} alt="plus" /> }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemBlock;
