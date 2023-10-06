// src/redux/reducers/expenseSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from '../../axiosConfig';
import { setAlert } from './alert';
import { useSelector } from 'react-redux';
const initialState = {
  expenses: [],
  loading: false,
  error: null,
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses = [...state.expenses, action.payload];
    },
    getExpenses: (state, action) => {
      state.expenses = action.payload;
    },
  },
});

export const setExpenses = (expense) => async (dispatch) => {
  const userId = expense.userId;
  delete expense.userId;
  try {
    const res = await axios.post(`/api/expenses/${userId}`, expense);
    console.log(res);
    dispatch(addExpense(expense));
    dispatch(fetchExpenses(userId));
  } catch (err) {
    console.log(err);
    setAlert({ msg: err.response.data.message, alertType: 'error' });
  }
};

export const fetchExpenses = (userId) => async (dispatch) => {
  console.log('fetching expenses...');
  try {
    const res = await axios.get(`/api/expenses/${userId}`);
    if (res.data.length === 0) {
      setAlert({ msg: 'No expenses found', alertType: 'info' });
      return;
    }

    dispatch(addExpense(res.data));
  } catch (err) {
    setAlert({ msg: err.response.data.message, alertType: 'error' });
  }
};

export const { addExpense, getExpenses, setInitialExpenses } =
  expenseSlice.actions;
export default expenseSlice.reducer;
