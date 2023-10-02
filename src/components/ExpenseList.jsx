import React from 'react';
import { List, ListItem, ListItemText, Typography, Paper } from '@mui/material';
import styled from 'styled-components';

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

const dateStyle = {
  position: 'absolute',
  top: '5px',
  right: '5px',
  fontSize: '12px',
  color: 'rgba(255, 255, 255, 0.5)',
};

function ExpenseList({ expenses }) {
  return (
    <StyledList>
      {expenses.map((expense) => (
        <ListItem key={expense.id} style={listItemStyle}>
          <ListItemText>
            <div>
              <Typography variant="body1">
                <strong>{expense.title}</strong> | {expense.expenseType}
              </Typography>

              <Typography variant="body2">{`$${expense.amount}`}</Typography>
            </div>
          </ListItemText>
          <div style={dateStyle}>
            {new Date(expense.createdAt).toLocaleDateString()}
          </div>
        </ListItem>
      ))}
    </StyledList>
  );
}

export default ExpenseList;
