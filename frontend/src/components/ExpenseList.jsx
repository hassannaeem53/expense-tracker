import React, { useEffect } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import CloseOutlined from '@mui/icons-material/CloseOutlined';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { fetchExpenses, deleteExpense } from '../redux/reducers/expenseSlice';
import { useDispatch } from 'react-redux';
import { colors } from '../utils/commons';

const StyledList = styled(List)`
  max-height: 250px;
  overflow-y: auto;
  scrollbar-width: thin;
  paddingright: 10px;
  background-color: transparent;

  /* Webkit scrollbar customization */
  &::-webkit-scrollbar {
    width: 8px;
    margin-left: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }
`;

const listItemStyle = {
  background: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '10px',
  marginBottom: '10px',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#fff',
  position: 'relative',
};

function ExpenseList() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userId');
  const expenses = useSelector((state) => state.expenses?.expenses);
  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
  };
  useEffect(() => {
    if (userId) dispatch(fetchExpenses(userId));
  }, [userId, dispatch]);
  return (
    <StyledList>
      {expenses &&
        expenses?.map((expense) => (
          <ListItem key={expense._id} style={listItemStyle}>
            <Box
              sx={{
                height: '60px',
                width: '2px',
                backgroundColor: colors[expense.expenseType],
                mr: '10px',
              }}
            />
            <ListItemText>
              <div>
                <Box
                  sx={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}
                >
                  {new Date(expense.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </Box>

                <Typography variant="body1">
                  <strong>{expense.title}</strong> |{' '}
                  <span
                    style={{
                      color: 'rgba(255, 255, 255, 0.5)',
                    }}
                  >
                    {expense.expenseType}
                  </span>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: '0.2rem',
                  }}
                >{`$${expense.amount}`}</Typography>
              </div>
            </ListItemText>

            <IconButton
              aria-label="delete"
              onClick={() => handleDelete(expense._id)}
              size="large"
              sx={{
                '&:hover > *': {
                  color: '#ff0000',
                },
              }}
            >
              <CloseOutlined fontSize="small" />
            </IconButton>
          </ListItem>
        ))}
    </StyledList>
  );
}

export default ExpenseList;
