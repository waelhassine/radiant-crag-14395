import { GET_ALL_NOTIFICATION, ADD_NOTIFICATION ,INITIAL_DATA} from './types';

export const initialData = () => (dispatch) => {
    dispatch({
      type: INITIAL_DATA,
    });
  };
export const addNotification = (data) => (dispatch) => {
  dispatch({
    type: ADD_NOTIFICATION,
    payload: data,
  });
};
export const getAllNotification = (data) => (dispatch) => {
  dispatch({
    type: GET_ALL_NOTIFICATION,
    payload: data,
  });
};
