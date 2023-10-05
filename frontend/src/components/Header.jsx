import React, { useState } from 'react';
import {
  Avatar,
  Button,
  IconButton,
  Popover,
  Tooltip,
  Typography,
  AppBar,
  Toolbar,
  List,
  ListItem,
  Drawer,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AccountBalanceWallet as WalletIcon,
  History as HistoryIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    // Implement your logout logic here
    // Typically, this involves clearing authentication tokens or state
    // For example, you might remove the user's token from localStorage
    localStorage.removeItem('token');
    handleClosePopover();
    location.reload();

    // Redirect the user to the login page or perform any other necessary actions
    // You can use React Router to navigate to the login page if you're using it
    // Example: history.push('/login');
  };
  const open = Boolean(anchorEl);
  const id = open ? 'user-profile-popover' : undefined;

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
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
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
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              sx={{ bgcolor: '#2196F3', cursor: 'pointer' }}
              onClick={handleAvatarClick}
            >
              {/* {localStorage.getItem('email')?.charAt(0).toUpperCase()} */}
            </Avatar>
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClosePopover}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              sx={{
                '& .MuiPaper-root': {
                  width: '200px',
                  padding: '16px',
                  background: '#EEEEEE',
                  color: '#2196F3',
                  borderRadius: '8px',
                },
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: '#2196F3',
                    color: 'white',
                    width: '64px',
                    height: '64px',
                    fontSize: '32px',
                  }}
                >
                  {localStorage.getItem('email')?.charAt(0).toUpperCase()}
                </Avatar>
                <Typography
                  variant="h6"
                  sx={{ marginTop: '8px', fontWeight: 'bold' }}
                >
                  {localStorage.getItem('email')}
                </Typography>
                {/* <Typography variant="body2" sx={{ marginTop: '4px' }}>
                  User Type: Admin
                </Typography> */}
                <Tooltip title="Logout">
                  <Button
                    onClick={handleLogout}
                    sx={{ marginTop: '16px' }}
                    // style={{ backgroundColor: 'white' }}
                    variant="contained"
                  >
                    {'Logout '}
                    <IconButton
                      onClick={handleLogout}
                      color="inherit"
                      aria-label="logout"
                      size="small"
                      sx={{ marginLeft: '8px' }}
                    >
                      <LogoutIcon />
                    </IconButton>
                  </Button>
                </Tooltip>
              </div>
            </Popover>
          </div>
        </Toolbar>
      </AppBar>
      {sideNavbar}
    </>
  );
};

export default Header;
