import React, { useEffect } from 'react';
import {
  PieChart,
  ResponsiveContainer,
  Pie,
  Label,
  Cell,
  Tooltip,
} from 'recharts';
import { Grid, Paper, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../utils/commons';
import { fetchExpenses } from '../redux/reducers/expenseSlice';

function ExpenseChart() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userId');
  useEffect(() => {
    dispatch(fetchExpenses(userId));
  }, [dispatch, userId]);
  const expenses = useSelector((state) => state.expenses.expenses);

  const data1 = expenses?.map((expense) => ({
    name: expense.expenseType,
    value: expense.amount,
  }));

  const expenseInsight = {
    monthlyBudget: 1500,
    remainingBudget: 900,
    expenses: 600,
  };
  if (!data1) {
    return (
      <>
        <div> Loading... </div>
      </>
    );
  }
  if (data1) {
    return (
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: '0.5rem',
        }}
      >
        {/* Left column for the chart */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px', height: '100%' }}>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  dataKey="value"
                  data={data1}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  fill="#8884d8"
                  labelLine={false}
                  animationBegin={0}
                  isAnimationActive={true}
                >
                  {data1.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[entry.name]} />
                  ))}
                  <Label
                    position="center"
                    fill="#ffffff"
                    fontSize={20}
                    fontWeight="bold"
                  >
                    Expenses
                  </Label>
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Right column for expense insight */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '20px', height: '100%' }}>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <div
                style={{
                  backgroundColor: '#2196F3',
                  color: 'white',
                  padding: '10px',
                  borderRadius: '5px',
                  marginTop: '80px',
                }}
              >
                <Typography>
                  Monthly Budget:{' '}
                  <strong>${expenseInsight.monthlyBudget}</strong>
                </Typography>
              </div>
              <div
                style={{
                  backgroundColor: '#F44336',
                  color: 'white',
                  padding: '10px',
                  borderRadius: '5px',
                }}
              >
                <Typography>
                  Remaining Budget:{' '}
                  <strong>${expenseInsight.remainingBudget}</strong>
                </Typography>
              </div>
              <div
                style={{
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  padding: '10px',
                  borderRadius: '5px',
                }}
              >
                <Typography>
                  Total Expenses: <strong>${expenseInsight.expenses}</strong>
                </Typography>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default ExpenseChart;
