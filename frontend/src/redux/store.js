// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './reducers/expenseSlice';
import authReducer from './reducers/auth.js';

const store = configureStore({
  reducer: {
    expenses: expenseReducer,
    authReducer: authReducer,
  },
});

export default store;
