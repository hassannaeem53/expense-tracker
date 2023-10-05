import React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux'; // Import Provider
import store from './redux/store'; // Import your Redux store
import App from './App';
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

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[500],
    },
    secondary: {
      main: orange[500],
    },
    tertiary: {
      main: deepPurple[500],
    },
    quaternary: {
      main: deepOrange[500],
    },
    quinary: {
      main: yellow[500],
    },
    senary: {
      main: grey[500],
    },
    septenary: {
      main: red[500],
    },
    octonary: {
      main: pink[500],
    },
  },
});
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
);
