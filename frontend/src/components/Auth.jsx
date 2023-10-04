import { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp.jsx';
import { Typography, Box, Link, CssBaseline } from '@material-ui/core';
import AlertComponent from './Alert';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box
        sx={{
          backgroundImage:
            'linear-gradient(to right top, #00060f, #00091b, #000a26, #000b30, #000a39)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100vw',
        }}
      >
        <CssBaseline />
        <Box sx={{ display: 'flex', marginBottom: '1rem' }}>
          <AccountBalanceWalletOutlinedIcon sx={{ fontSize: '5rem' }} />{' '}
          <Typography variant="h2" fontWeight="bold" display="inline">
            Expense Tracker
          </Typography>
        </Box>
        <Box
          sx={{
            //add a linear gradient background
            backgroundColor: 'rgba(0, 0, 0, 0.5)',

            width: '30%',
            height: '50%',
            borderRadius: '10px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isLogin ? <Login /> : <SignUp />}
          <Typography>
            {isLogin ? (
              <>
                Dont have an account?{' '}
                <Link
                  onClick={() => setIsLogin(!isLogin)}
                  sx={{ cursor: 'pointer', color: '#90caf9' }}
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Link
                  onClick={() => setIsLogin(!isLogin)}
                  sx={{ cursor: 'pointer', color: '#90caf9' }}
                >
                  Log In
                </Link>
              </>
            )}
          </Typography>
        </Box>
        <AlertComponent />
      </Box>
    </>
  );
};

export default Auth;
