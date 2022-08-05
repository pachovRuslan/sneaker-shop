import React from 'react'
import  '../app.scss';
import Categories from '../components/Categories';
import ItemBlock from '../components/ItemBlock';
function Home() {
    const [items, setItems] = React.useState([]);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({
      name: 'популярности',
      sort:'rating'
    });
    React.useEffect(() => {
      fetch(`https://62ea7a82ad295463258d86d1.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.sort}&order=desk` 
      ) 
        .then((res) => {
          return res.json();
        })
        .then((arr) => {
          setItems(arr);
        });
    }, [categoryId, sortType]);
  return (
 <>
     <Categories 
     categoryId={categoryId} 
     onClickCategory={(i)=> setCategoryId(i) } 
     sortType={sortType} 
     onClickSort={(i)=> setSortType(i) }
     />
      <div className='content'>
        {items.map((obj) => (
          <ItemBlock key={obj.id} {...obj} />
        ))}
      </div>
 </>
  )
}

export default Home