import React from 'react';
import axios from 'axios';
import '../app.scss';
import Categories from '../components/Categories';
import ItemBlock from '../components/ItemBlock';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App.js';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';
function Home() {
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.filterSlice.sort.sortProperty);
  const categoryId = useSelector((state) => state.filterSlice.categoryId);
  const currentPage = useSelector((state) => state.filterSlice.currentPage);
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  // const [currentPage, setCurrentPage] = React.useState(1);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number))
  }

  React.useEffect(() => {
    axios.get(`https://62ea7a82ad295463258d86d1.mockapi.io/items?page=${currentPage}&limit=8&${
      categoryId > 0 ? `category=${categoryId}` : ''
    }&sortBy=${sortType}&order=desk`)
    .then((res) => {
      setItems(res.data)
    })
  }, [categoryId, sortType, currentPage]);

  const pizzas = items
    .filter((obj) => {
      if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <ItemBlock key={obj.id} {...obj} />);
  return (
    <>
      <Categories categoryId={categoryId} onClickCategory={onChangeCategory} />
      <div className="content">{pizzas}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
}

export default Home;
