import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton, // Add IconButton for sidebar toggle
} from '@mui/material';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
import {
  AccountBalanceWallet as WalletIcon,
  History as HistoryIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu'; // Menu icon

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  const sideNavbar = (
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={toggleDrawer}
      sx={{
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
      }}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <WalletIcon />
          </ListItemIcon>
          <ListItemText primary="Wallet" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="History" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer} // Add toggleDrawer function here
            edge="start"
            sx={{ marginRight: '36px' }} // Add margin to separate from title
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Expense Tracker
          </Typography>
        </Toolbar>
      </AppBar>

      {sideNavbar}

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
