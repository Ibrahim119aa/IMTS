// _redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemSlice'; // Ensure this path is correct

const store = configureStore({
  reducer: {
    items:itemsReducer
  },
});

export default store; 
