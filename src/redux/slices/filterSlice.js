import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    }
  },
});
export const selectFilterSort = (state) => state.filterSlice.sort
export const selectType = (state) => state.filterSlice.sort.sortProperty
export const selectCategoryId= (state) => state.filterSlice.categoryId
export const selectCurrentPage = (state) => state.filterSlice.currentPage
export const selectSearchValue = (state) => state.filterSlice.searchValue
export const { setCategoryId, setSort, setCurrentPage, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
