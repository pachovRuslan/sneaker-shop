import React from 'react';
import styles from '../app.module.scss';
import Sort from './Sort';
function Categories() {
  const [activeCategory, setActiveCAtegory] = React.useState(0);
  const categories = ['Все', 'New balance', 'Nike', 'Adidas', 'Puma', 'Reebok'];
  const onClickCategory = (index) => {
    setActiveCAtegory(index);
  };
  return (
    <div className={styles.category}>
      <ul className={styles.categories}>
        {categories.map((value, index) => (
          <li
            onClick={() => onClickCategory(index)} key={index}
            className={activeCategory === index ? styles.category_active : styles.category_name}>
            {value}
          </li>
        ))}
      </ul>
      <Sort />
    </div>
  );
}

export default Categories;
