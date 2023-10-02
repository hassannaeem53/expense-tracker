// src/redux/reducers/expenseSlice.js
import { createSlice } from '@reduxjs/toolkit';

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
      state.expenses.push(action.payload);
    },
    // Add other cases as needed
  },
});

export const { addExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
