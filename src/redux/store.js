import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';
import sneakerSlice from './slices/sneakerSlice';
export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    sneakerSlice
  },
});
