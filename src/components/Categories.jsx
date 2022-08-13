import React from 'react';
import '../app.scss';
import Search from './Search';
import Sort from './Sort';
function Categories({ categoryId, onClickCategory }) {
  const categories = ['Все', 'New balance', 'Nike', 'Adidas', 'Puma', 'Reebok'];

  return (
    <div className="category">
      <ul className="categories">
        {categories.map((value, i) => (
          <li
            onClick={() => onClickCategory(i)}
            key={i}
            className={categoryId === i ? 'category_active' : 'category_name'}>
            {value}
          </li>
        ))}
      </ul>
      <Search />
      <Sort />
    </div>
  );
}

export default Categories;
