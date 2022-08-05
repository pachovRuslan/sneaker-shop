import React from 'react';
import  '../app.scss';
import Sort from './Sort';
function Categories({categoryId, onClickCategory, sortType,onClickSort}) {

  const categories = ['Все', 'New balance', 'Nike', 'Adidas', 'Puma', 'Reebok'];

  return (
    <div className='category'>
      <ul className='categories'>
        {categories.map((value, i) => (
          <li
            onClick={() => onClickCategory(i)} key={i}
            className={categoryId === i ? 'category_active' : 'category_name'}>
            {value}
          </li>
        ))}
      </ul>
      <Sort sortType={sortType} onClickSort={onClickSort}/>
    </div>
  );
}

export default Categories;
