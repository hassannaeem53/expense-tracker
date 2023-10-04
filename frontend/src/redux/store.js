// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './reducers/expenseSlice';
import authReducer from './reducers/auth.js';
import alertReducer from './reducers/alert.js';

const store = configureStore({
  reducer: {
    expenses: expenseReducer,
    auth: authReducer,
    alert: alertReducer,
  },
});

export default store;
