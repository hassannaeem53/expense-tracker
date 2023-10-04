import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../redux/reducers/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TextField, Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { createTheme } from '@mui/material/styles'; // Import ThemeProvider and createTheme
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
const theme = createTheme({
  overrides: {
    MuiInputLabel: {
      root: {
        color: 'white', // Change label color to white
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: 'transparent', // Make the input background transparent
        '&:hover': {
          backgroundColor: 'transparent', // Make the input background transparent on hover
        },
      },
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottomColor: 'white', // Change underline color to white
        },
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      padding: '10px',
      width: '100%',
    },
  },
}));

const schema = z.object({
  email: z
    .string()
    .nonempty({ message: 'Email is required' })
    .min(5, { message: 'Email must be at least 5 characters long' })
    .max(50, { message: 'Email must be at most 50 characters long' })
    .email({ message: 'Email is not valid' }),
  password: z
    .string()
    .nonempty({ message: 'Password is required' })
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(50, { message: 'Password must be at most 50 characters long' }),
});

const Login = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    await dispatch(login(data?.username, data?.password));
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5} sx={{ width: '100%' }}>
        <Typography variant="h3" align="center" fontWeight="bold">
          Login
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <FormProvider {...register}>
            <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}
              >
                <TextField
                  margin="normal"
                  label="Email"
                  variant="filled"
                  {...register('email')}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
                <TextField
                  margin="normal"
                  label="Password"
                  variant="filled"
                  type="password"
                  {...register('password')}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
                <Box mt={2} />
                <Button variant="contained" color="primary" type="submit">
                  Login
                </Button>
              </Box>
            </form>
          </FormProvider>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
