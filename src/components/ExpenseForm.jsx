import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/reducers/expenseSlice';

// Create an array of expense types
const expenseTypes = [
  'Utility Bills',
  'Family Support',
  'Education',
  'Fuel',
  'Other',
  // Add more options here
];

function ExpenseForm() {
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');
  const [expenseType, setExpenseType] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (expense.trim() === '' || amount <= 0 || expenseType === '') {
      return;
    }

    const newExpense = {
      id: Math.random().toString(),
      title: expense,
      amount: +amount,
      expenseType,
      createdAt: new Date().toISOString(),
    };

    // Dispatch the addExpense action with the newExpense data
    dispatch(addExpense(newExpense));

    // Reset the form fields
    setExpense('');
    setAmount('');
    setExpenseType('');
  };

  return (
    <form
      onSubmit={submitHandler}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <TextField
        label="Expense"
        variant="outlined"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
        sx={{ marginBottom: '1rem' }}
        required
      />
      <TextField
        label="Amount"
        variant="outlined"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        sx={{ marginBottom: '1rem' }}
        required
      />
      <FormControl
        variant="outlined"
        sx={{ marginBottom: '1rem', width: '233px' }}
      >
        <InputLabel>Expense Type</InputLabel>
        <Select
          label="Expense Type"
          value={expenseType}
          onChange={(e) => setExpenseType(e.target.value)}
          required
        >
          {expenseTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        type="submit"
        color="primary"
        style={{
          fontWeight: 'bold',
          borderRadius: '8px',
          width: '50%', // Set the button width
          alignSelf: 'center', // Center the button horizontally
          transition: 'background-color 0.3s', // Add hover transition
          '&:hover': {
            backgroundColor: '#FF6550', // Change background color on hover
          },
        }}
      >
        Add Expense
      </Button>
    </form>
  );
}

export default ExpenseForm;
