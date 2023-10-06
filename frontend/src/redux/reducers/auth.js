import { createSlice } from '@reduxjs/toolkit';
import axios from '../../axiosConfig';
import { setAlert } from './alert';
import { setInitialExpenses } from './expenseSlice';
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  userId: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerSuccess: (state, action) => {
      localStorage.setItem('token', action.payload.token);
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
    },
    registerFail: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    userLoaded: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.userId = action.payload;
    },
    authError: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    loginSuccess: (state, action) => {
      localStorage.setItem('token', action.payload.token);
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
    },
    loginFail: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    logout: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
});

export const {
  registerSuccess,
  registerFail,
  userLoaded,
  authError,
  loginSuccess,
  loginFail,
  logout,
} = authSlice.actions;

export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const body = JSON.stringify({ name, email, password });
    try {
      const res = await axios.post('/api/users/register', body);
      dispatch(registerSuccess(res.data));
      console.log('this is the token ', res.data.token);
      localStorage.setItem('token', res.data.token);
      dispatch(loadUser());
    } catch (err) {
      const error = err.response.data?.message;
      const reason = err.response.data?.reason;
      console.log(reason, error);
      if (error) {
        dispatch(
          setAlert({ msg: `Error! ${reason} : ${error}`, alertType: 'error' }),
        );
      }
      dispatch(registerFail());
    }
  };

export const loadUser = () => async (dispatch) => {
  console.log(localStorage.token);
  if (localStorage.token) {
    axios.defaults.headers.common['x-auth-token'] = localStorage.token;
  }
  try {
    const res = await axios.get('/api/users/me');
    dispatch(userLoaded(res.data._id));
    console.log(res.data);
    const expensesRes = await axios.get(`/api/expenses/${res.data._id}`);
    //dispatch(setInitialExpenses(expensesRes.data));
  } catch (err) {
    console.log(err);
    dispatch(authError());
  }
};

export const login = (email, password) => async (dispatch) => {
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post('/api/auth/login', body);
    dispatch(loginSuccess(res.data));
    localStorage.setItem('token', res.data);
    dispatch(loadUser());
  } catch (err) {
    const error = err.response.data?.error;
    const reason = err.response.data?.reason;
    if (error) {
      dispatch(
        setAlert({ msg: `Error! ${reason} : ${error}`, alertType: 'error' }),
      );
    }
    dispatch(loginFail());
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch(logout());
};

export default authSlice.reducer;
