//write a component that has a form with two inputs (username and password) and a submit button
// use zod to validate the form and use react hook form to handle the form submission
// if the form is valid, dispatch the login action to the store using the auth slice from auth.js file
// if the login is successful, redirect the user to the dashboard page
// if the login is unsuccessful, display an error message
// use material ui for styling the form

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/auth';
import { useHistory } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { setAlert } from '../redux/alertSlice';
import AlertComponent from './Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      padding: '10px',
      width: '25ch',
    },
  },
}));

const schema = z.object({
  username: z.string().nonempty({ message: 'Username is required' }),
  password: z.string().nonempty({ message: 'Password is required' }),
});

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const auth = useSelector((state) => state.auth); // Access the auth state

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data)); // Dispatch the login action
      // If login is successful, redirect to the dashboard
      if (auth.isAuthenticated) {
        history.push('/dashboard');
      } else {
        dispatch(setAlert({ message: 'Invalid credentials', type: 'error' }));
      }
    } catch (error) {
      // If login fails, display an error message to the user
      dispatch(setAlert({ message: error.message, type: 'error' }));
    }
  };
  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" align="center">
          Login
        </Typography>
        <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Username"
            variant="outlined"
            {...register('username')}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            label="Password"
            variant="outlined"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </form>
        <AlertComponent />
      </Box>
    </Container>
  );
};

export default Login;
