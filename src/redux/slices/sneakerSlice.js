import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSneakers = createAsyncThunk(
  'sneaker/fetchSneakersStatus',
  async (params, thunkAPI) => {
    const { categoryId, sortType, currentPage }  = params
    const { data } = await axios.get(
      `https://62ea7a82ad295463258d86d1.mockapi.io/items?page=${currentPage}&limit=8&${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType}&order=desk`,
    );
    return data;
  },
);

const initialState = {
  items: [],
  status: 'loading'
};

const sneakerSlice = createSlice({
  name: 'sneaker',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchSneakers.pending]: (state) => {
      state.status = 'loading';
      state.items = []
    },
    [fetchSneakers.fulfilled]: (state, action) => {
        state.items = action.payload;
        state.status = 'success';
    },
    [fetchSneakers.rejected]: (state) => {
        state.status = 'error';
        state.items = []
     
    },
  },
});
export const selectSneakers = (state) => state.sneakerSlice.items;
export const { setItems } = sneakerSlice.actions;
export default sneakerSlice.reducer;
