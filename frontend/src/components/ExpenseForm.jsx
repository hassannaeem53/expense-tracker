import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { setExpenses } from '../redux/reducers/expenseSlice';

// Create an array of expense types

function ExpenseForm() {
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');
  const [expenseType, setExpenseType] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (expense.trim() === '' || amount <= 0 || expenseType === '') {
      return;
    }

    const newExpense = {
      title: expense,
      amount: +amount,
      expenseType,
    };
    setExpenses(newExpense);

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
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Food'}>Food</MenuItem>
          <MenuItem value={'Transport'}>Transport</MenuItem>
          <MenuItem value={'Shopping'}>Shopping</MenuItem>
          <MenuItem value={'Health'}>Health</MenuItem>
          <MenuItem value={'Entertainment'}>Entertainment</MenuItem>
          <MenuItem value={'Education'}>Education</MenuItem>
          <MenuItem value={'Travel'}>Travel</MenuItem>
          <MenuItem value={'Other'}>Other</MenuItem>
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
