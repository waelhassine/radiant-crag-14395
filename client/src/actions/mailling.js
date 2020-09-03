import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_ALL_JUGE_MES,
  GET_ALL_MAILLING,
  ADD_MAILLING,
  EROOR_MAILLING,
} from './types';
import FormData from 'form-data';
// Get mediation by societe
export const getJuges = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/mailling/users');
    console.log(res);
    dispatch({
      type: GET_ALL_JUGE_MES,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: EROOR_MAILLING,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
// Get mediation by societe
export const getMilling = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/mailling');
    dispatch({
      type: GET_ALL_MAILLING,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: EROOR_MAILLING,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
// Create Juge User
export const createMailling = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log(formData);
    const res = await axios.post('/api/mailling', formData, config);

    dispatch({
      type: ADD_MAILLING,
      payload: res.data.data,
    });
    dispatch(setAlert('Mailling Send', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch(setAlert('Error Send mailling', 'danger'));
  }
};
