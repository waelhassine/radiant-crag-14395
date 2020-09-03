import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_ALL_MODI,
  CREATE_MEDI,
  ERROR_GET_MEDIATIONS_SOCIETE,
  GET_MEDIATIONS_SOCIETE,
  ADD_PV,
  GET_MEDI_BYID,
} from './types';
import FormData from 'form-data';
export const createMedi = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/mediation', formData, config);
    console.log(res);
    console.log(res.data);
    // const resa = await axios.get('/api/mediation');
    dispatch({
      type: CREATE_MEDI,
      payload: res.data,
    });
    const resa = await axios.get('/api/demande');
    dispatch({
      type: GET_MEDIATIONS_SOCIETE,
      payload: resa.data,
    });
    // dispatch({
    //   type: UPDATEUPDATEETAT,
    //   payload: { id:res.data._id, mediation: res.data }
    // });

    dispatch(setAlert('Update Etat Demande', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: ERROR_GET_MEDIATIONS_SOCIETE,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get mediation by societe
export const getMediaById = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ id });
    const res = await axios.post('/api/mediation/byid', body, config);
    console.log(res.data);
    dispatch({
      type: GET_MEDI_BYID,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: ERROR_GET_MEDIATIONS_SOCIETE,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get mediation by societe
export const getMedia = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/mediation');
    console.log(res.data);
    dispatch({
      type: GET_ALL_MODI,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: ERROR_GET_MEDIATIONS_SOCIETE,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
export const addPv = (idMediation, formData, form, history) => async (
  dispatch
) => {
  try {
    let data = new FormData();
    data.append('file', formData, formData.fileName);
    console.log(data);
    const res = await axios.post('/api/mediation/uploads', data, {
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      },
    });
    let result = res;
    console.log(idMediation);
    console.log(result);
    let fora = {
      id: idMediation,
      description: form.description,
      file: result.data,
    };
    console.log('-----------------------------------------');
    console.log(fora);
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const resa = await axios.put('/api/mediation', fora, config);
    console.log(resa);
    console.log(resa.data);
    dispatch({
      type: ADD_PV,
      payload: resa.data,
    });

    dispatch(setAlert('Update Etat Demande', 'success'));
    history.push(`/mediationdetails/${idMediation}`);
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: ERROR_GET_MEDIATIONS_SOCIETE,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
