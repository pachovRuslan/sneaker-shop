import React from 'react';
import '../app.scss';
import Categories from '../components/Categories';
import ItemBlock from '../components/ItemBlock';
import Pagination from '../components/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategoryId, selectCurrentPage, selectSearchValue, selectType, setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';
import { fetchSneakers, selectSneakers } from '../redux/slices/sneakerSlice';
function Home() {
  const dispatch = useDispatch();
  const sortType = useSelector(selectType);
  const categoryId = useSelector(selectCategoryId);
  const currentPage = useSelector(selectCurrentPage);
  const items = useSelector(selectSneakers);
  const searchValue = useSelector(selectSearchValue );

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  React.useEffect(() => {
    getSneakers();
  }, [categoryId, sortType, currentPage]);

  const getSneakers = async () => {
    dispatch(fetchSneakers({ categoryId, sortType, currentPage }));
  };

  const sneakers = items
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
      <div className="content">{sneakers}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
}

export default Home;
