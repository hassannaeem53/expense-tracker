// src/redux/reducers/expenseSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from '../../axiosConfig';
import { setAlert } from './alert';

const initialState = {
  expenses: null,
  loading: false,
  error: null,
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      if (!state.expenses) {
        state.expenses = action.payload;
        return;
      }
      state.expenses.push(action.payload[action.payload.length - 1]);
    },
    getExpenses: (state, action) => {
      console.log('action.payload', action.payload);
      state.expenses = action.payload;
    },
  },
});

export const setExpenses = (expense) => async (dispatch) => {
  const userId = localStorage.getItem('userId');
  try {
    const res = await axios.post(`/api/expenses/${userId}`, expense);
    dispatch(fetchExpenses(userId));
    setAlert({ msg: 'Expense succesfully added!', alertType: 'info' });
  } catch (err) {
    setAlert({ msg: err.response.data.message, alertType: 'error' });
  }
};

export const fetchExpenses = (userId) => async (dispatch) => {
  console.log(userId);
  try {
    console.log('fetching expenses');
    const res = await axios.get(`/api/expenses/${userId}`);
    if (res.data.length === 0) {
      setAlert({ msg: 'No expenses found', alertType: 'info' });
      return;
    }
    dispatch(getExpenses(res.data));
  } catch (err) {
    console.log(err);
    setAlert({ msg: err.response.data.message, alertType: 'error' });
  }
};

export const deleteExpense = (expenseId) => async (dispatch) => {
  const userId = localStorage.getItem('userId');
  try {
    const res = await axios.delete(`/api/expenses/${userId}/${expenseId}`);
    dispatch(fetchExpenses(userId));
    dispatch(setAlert({ msg: res.data.message, alertType: 'info' }));
  } catch (err) {
    setAlert({ msg: err.response.data.message, alertType: 'error' });
  }
};

export const { addExpense, getExpenses, setInitialExpenses } =
  expenseSlice.actions;
export default expenseSlice.reducer;
