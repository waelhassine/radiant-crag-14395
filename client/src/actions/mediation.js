import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_MEDIATIONS_SOCIETE,
  ERROR_GET_MEDIATIONS_SOCIETE,
  CREATED_DEMANDE,
  UPDATEUPDATEETAT,
  GET_ALL_JUGE,
  ERROR_GET_USERS,
  GET_JUGE_PROFILE,
} from './types';
import FormData from 'form-data';
// Get mediation by societe
export const getMediationBySociete = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/demande/societe');
    dispatch({
      type: GET_MEDIATIONS_SOCIETE,
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
export const getJugeProfile = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/profile/juge/${id}`);
    console.log(res.data);
    dispatch({
      type: GET_JUGE_PROFILE,
      payload: res.data.data,
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
export const getMediation = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/demande');
    dispatch({
      type: GET_MEDIATIONS_SOCIETE,
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
// Update Profile Photo
export const addMediation = (formData, form, history) => async (dispatch) => {
  try {
    let data = new FormData();
    data.append('file', formData, formData.fileName);
    console.log(data);
    const res = await axios.post('/api/demande/uploads', data, {
      headers: {
        accept: 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      },
    });
    let result = res;
    console.log(result);
    console.log(result);
    form.file = result.data;
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const resa = await axios.post('/api/demande/societe', form, config);
    dispatch({
      type: CREATED_DEMANDE,
      payload: resa.data,
    });
    dispatch(setAlert('Demande Added', 'success'));
    // dispatch(setAlert('Profile Updated', 'success'));
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;
    dispatch({
      type: ERROR_GET_MEDIATIONS_SOCIETE,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    // dispatch({
    //   type: PROFILE_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};

// Update Profile Photo
export const updateEtatDemande = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/demande', formData, config);
    console.log(res);
    console.log(res.data);
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
// Update Profile Photo
export const updateEtatDemandeJuge = (formData, history) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(
      '/api/demande/updatedemande',
      formData,
      config
    );
    //
    // const resa = await axios.get('/api/demande');

    // dispatch({
    //   type: UPDATEUPDATEETAT,
    //   payload: { id: res.data._id, mediation: res.data },
    // });

    dispatch(setAlert('Update Etat Demande', 'success'));
    history.push('/dashboard');
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

export const getAllJuges = (owner, mediationa) => async (dispatch) => {
  console.log(owner);
  try {
    if (owner === 'administrateur') {
      console.log('Waaaaaaaaaaaaaaaaaa');
      console.log(mediationa);
      const jugea = [...mediationa.jugesAdverse, ...mediationa.jugesDemandeur];
      console.log(jugea);
      let jugeab = getUnique(jugea, '_id');
      console.log(jugeab);
      const juges = { juges: jugeab };
      console.log(juges);
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.post('/api/users/choixjuge', juges, config);
      console.log(res.data);
      dispatch({
        type: GET_ALL_JUGE,
        payload: res.data,
      });
    } else {
      const res = await axios.get(`/api/users/choixjuge`);
      console.log(res.data);
      dispatch({
        type: GET_ALL_JUGE,
        payload: res.data,
      });
    }
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
function getUnique(arr, comp) {
  // store the comparison  values in array
  const unique = arr
    .map((e) => e[comp])

    // store the indexes of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the false indexes & return unique objects
    .filter((e) => arr[e])
    .map((e) => arr[e]);

  return unique;
}
