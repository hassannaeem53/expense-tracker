//create material ui modal for get started page which will have form asking buser background like monthly budget, income, currency etc and then will redirect to dashboard
//https://mui.com/components/modal/
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/reducers/expenseSlice';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/system';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import { orange } from '@mui/material/colors';
import { deepPurple } from '@mui/material/colors';
import { deepOrange } from '@mui/material/colors';
import { yellow } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { pink } from '@mui/material/colors';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: blue[500],
//     },
//     secondary: {
//       main: orange[500],
//     },
//     tertiary: {
//       main: deepPurple[500],
//     },
//     quaternary: {
//       main: deepOrange[500],
//     },
//     quinary: {
//       main: yellow[500],
//     },
//     senary: {
//       main: grey[500],
//     },
//     septenary: {
//       main: red[500],
//     },
//     octonary: {
//       main: pink[500],
//     },
//   },
// });

const useStyles = makeStyles({
  root: {
    '& .MuiTextField-root': {
      margin: '1rem',
      width: '25ch',
    },
  },
});

const GetStarted = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  //   const history = useHistory();
  const [open, setOpen] = useState(true);
  const [budget, setBudget] = useState('');
  const [income, setIncome] = useState('');
  const [currency, setCurrency] = useState('');
  const [currencySymbol, setCurrencySymbol] = useState('');
  //   const [expenseTypes, setExpenseTypes] = useState([]);
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');
  const [expenseType, setExpenseType] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    // Create a new expense object
    const newExpense = {
      expense,
      amount,
      expenseType,
    };

    // Dispatch the addExpense action with the newExpense data
    dispatch(addExpense(newExpense));

    // Reset the form fields
    setExpense('');
    setAmount('');
    setExpenseType('');
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Get Started
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form
            onSubmit={submitHandler}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TextField
              label="Monthly Budget"
              variant="outlined"
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              sx={{ marginBottom: '1rem' }}
              required
            />
            <TextField
              label="Monthly Income"
              variant="outlined"
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              sx={{ marginBottom: '1  rem' }}
              required
            />
            <FormControl
              variant="outlined"
              sx={{ marginBottom: '1rem', width: '233px' }}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Currency
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={currency}
                onChange={(e) => {
                  setCurrency(e.target.value);
                  setCurrencySymbol(e.target.value);
                }}
                label="Currency"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'USD'}>USD</MenuItem>
                <MenuItem value={'EUR'}>EUR</MenuItem>
                <MenuItem value={'GBP'}>GBP</MenuItem>
                <MenuItem value={'INR'}>INR</MenuItem>
                <MenuItem value={'AUD'}>AUD</MenuItem>
                <MenuItem value={'CAD'}>CAD</MenuItem>
                <MenuItem value={'SGD'}>SGD</MenuItem>
                <MenuItem value={'CHF'}>CHF</MenuItem>
                <MenuItem value={'MYR'}>MYR</MenuItem>
                <MenuItem value={'JPY'}>JPY</MenuItem>
                <MenuItem value={'CNY'}>CNY</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="outlined"
              sx={{ marginBottom: '1rem', width: '233px' }}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Expense Type
              </InputLabel>
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
              sx={{ marginBottom: '1rem' }}
              color="primary"
            >
              Submit
            </Button>
          </form>
        </Typography>
      </Box>
    </Modal>
  );
};

export default GetStarted;
