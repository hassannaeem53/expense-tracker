import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, CssBaseline } from '@mui/material';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

import Header from './Header';

function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <CssBaseline />
      <Header />
      <Container
        maxWidth="lg"
        sx={{ paddingTop: '20px', paddingBottom: '20px' }}
      >
        <Grid container spacing={3}>
          <Grid item sm={12} md={6}>
            <Paper elevation={6} sx={{ padding: '20px', height: '350px' }}>
              <Typography variant="h5" sx={{ paddingBottom: '20px' }}>
                Add New Expense
              </Typography>
              <ExpenseForm onAddExpense={addExpenseHandler} />
            </Paper>
          </Grid>
          <Grid item sm={12} md={6}>
            <Paper elevation={6} sx={{ padding: '20px', height: '350px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h5">Expenses</Typography>
                <Typography variant="h6">March</Typography>
              </div>
              <ExpenseList expenses={expenses} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={6} sx={{ padding: '20px' }}>
              <Typography variant="h5">Expense Insights</Typography>
              <ExpenseChart />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
