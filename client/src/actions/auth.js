import axios from 'axios';
import { setAlert } from './alert';
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
  OPEN_WEBSOCKET,
  CLOSE_WEBSOCKET,
} from './types';
import { initialData } from './notification';
// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/auth');
    console.log(res.data);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};
export const addNotif = (data) => async (dispatch) => {
  console.log('------------ From Action');
  console.log(data);
};

// Update Password
export const updatePassword = (formData, history) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/auth/updatepassword', formData, config);

    dispatch({ type: CLEAR_PROFILE });
    dispatch({ type: LOGOUT });
    dispatch(setAlert('Password Updated', 'success'));
    history.push('/profile');
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(err);
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth/login', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    console.log('action from redux to put message');

    // openWebsocket('localhost:5000');
    dispatch(loadUser());
    dispatch({
      type: OPEN_WEBSOCKET,
      payload: 'localhost:5000',
    });
    dispatch(initialData());
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(err);
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

// Logout / Clear Profile
export const logout = () => async (dispatch) => {
  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // };

  // const body = JSON.stringify({ email: 'dff', password: 'ddfdf' });
  // try {
  //   const res = await axios.post('/api/auth/logout', body, config);
  // } catch (error) {
  //   console.log('errrour');
  // }
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });

  dispatch({
    type: CLOSE_WEBSOCKET,
  });
};

export const createPassword = (password, id, history) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ id, password });
  console.log('From Action react');
  console.log(body);
  try {
    const res = await axios.post('/api/auth/resetpassword', body, config);
    console.log(res);
    history.push('/login');
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};
