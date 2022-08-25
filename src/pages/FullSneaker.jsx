import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../app.scss';
import add from '../assets/image/added.png';
import plus from '../assets/image/plus.png';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/slices/cartSlice';
import Carousel from '../components/carousel/Carousel';
function FullSneaker({ imageUrl, name, price }) {
  const { id } = useParams();
  const [sneaker, setSneaker] = React.useState();
  React.useEffect(() => {
    async function fetchSneakers() {
      try {
        const { data } = await axios.get(`https://62ea7a82ad295463258d86d1.mockapi.io/items/` + id);
        setSneaker(data);
      } catch (error) {
        alert('error');
      }
    }
    fetchSneakers();
  }, []);

  const [isAdded, setIsAdded] = React.useState(false);

  const dispatch = useDispatch();
  const onClickAdd = () => {
    const item = {
      id,
      name,
      price,
      imageUrl,
    };
    dispatch(addItem(item));
    setIsAdded(!isAdded);
  };
  const onClickRemove = () => {
    if (window.confirm('Are you sure you want to remove?')) dispatch(removeItem(id));
  };
  if (!sneaker) {
    return 'Loading...';
  }
  return (
    <div className="card_full">
      <div className="item_full">
      <Carousel>
        {sneaker.images.map((image) => ( <div className='item item-2'><img src={image} alt="item_full" /></div>))}
           </Carousel>
      </div>
      <div className="item_name_full">
        <span> {sneaker.name}</span>
      </div>
      <div className="card_full_description">
        <p>
        {sneaker.description}
        </p>
      </div>
      
      
      <div className="price_full">
        <div className="price_property_full">
          <span>Price:</span>
          <b>{sneaker.price} $</b>
          <div className="price_add_full">
            <div>
              {isAdded ? (
                <img onClick={onClickRemove} src={add} alt="add_full" />
              ) : (
                <img onClick={onClickAdd} src={plus} alt="plus" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullSneaker;
