import { useState } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Box,
} from '@mui/material';

import { setExpenses } from '../redux/reducers/expenseSlice';
import { useDispatch, useSelector } from 'react-redux';
import { colors, categories } from '../utils/commons';
// Create an array of expense types

function ExpenseForm() {
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');
  const [expenseType, setExpenseType] = useState('');
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const submitHandler = (e) => {
    e.preventDefault();
    if (expense.trim() === '' || amount <= 0 || expenseType === '') {
      return;
    }

    const newExpense = {
      title: expense,
      amount: +amount,
      expenseType,
      userId,
    };
    console.log(newExpense);
    dispatch(setExpenses(newExpense));

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
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={expenseType}
          onChange={(e) => setExpenseType(e.target.value)}
          label="Expense Type"
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              <Box
                sx={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: colors[category],
                  borderRadius: '50%',
                  marginRight: '0.5rem',
                }}
              ></Box>
              {category}
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
