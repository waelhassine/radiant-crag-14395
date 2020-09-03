import axios from 'axios';
import { setAlert } from './alert';
import { GET_USERS, ERROR_GET_USERS, CREATE_USER_JUGE } from './types';
// Get current users profile Juge or societe
export const getUsersJuge = (page, role) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/users/${role}?page=${page}`);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: ERROR_GET_USERS,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
// Get current users profile Juge or societe
export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/users');
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: ERROR_GET_USERS,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create Juge User
export const createUserJuge = (formData, history, userRole) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    formData.role = userRole;
    console.log(formData);
    const res = await axios.post('/api/users', formData, config);

    dispatch(setAlert('User Added', 'success'));

    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch(setAlert('Error Add User', 'danger'));
  }
};
// Create Juge User
export const createUserSociete = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    formData.role = 'societe';
    console.log(formData);
    const res = await axios.post('/api/users', formData, config);

    dispatch(setAlert('User Added', 'success'));

    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch(setAlert('Error Add User', 'danger'));
  }
};

// Block Juge User
export const blockUser = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/users/block/${userId}`);
    dispatch(setAlert('User Blocked', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch(setAlert('Error Block User', 'danger'));
  }
};
