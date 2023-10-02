// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './reducers/expenseSlice'; // Import the updated reducer

const store = configureStore({
  reducer: {
    expenses: expenseReducer,
  },
});

export default store;
