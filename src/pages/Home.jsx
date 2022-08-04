import React from 'react'
import styles from '../app.module.scss';
import Categories from '../components/Categories';
import ItemBlock from '../components/ItemBlock';
function Home() {
    const [items, setItems] = React.useState([]);
    React.useEffect(() => {
      fetch('https://62ea7a82ad295463258d86d1.mockapi.io/items')
        .then((res) => {
          return res.json();
        })
        .then((arr) => {
          setItems(arr);
        });
    }, []);
  return (
 <>
     <Categories />
      <div className={styles.wrapper}>
        {items.map((obj) => (
          <ItemBlock key={obj.id} {...obj} />
        ))}
      </div>
 </>
  )
}

export default Home