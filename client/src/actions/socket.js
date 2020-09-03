import {
  INCREMENT_COUNTER,
  ADD_NOTIFICATION,
  OPEN_WEBSOCKET,
  UPDATE_SOCKET_OBJECT,
  GET_ALL_NOTIFICATION,
  ADD_NOTIFI
} from './types';

// // count reducer
// export const incrementCounter = () => (dispatch) => {
//   dispatch({
//     type: INCREMENT_COUNTER,
//     payload: 'Incrementing counter',
//   });
// };

// // // chat reducer
// // export const sendMessage = (data) => (dispatch) => {
// //   dispatch({
// //     type: SEND_MESSAGE,
// //     payload: data,
// //   });
// // };

// export const addMessage = (data) => (dispatch) => {
//   dispatch({
//     type: ADD_NOTIFI,
//     payload: data.message,
//   });
// };
// export const getAllNotification = (data) => (dispatch) => {
//   dispatch({
//     type: GET_ALL_NOTIFICATION,
//     payload: data,
//   });
// };

//socket reducer
export const openWebsocket = (endpoint) => (dispatch) => {
  dispatch({
    type: OPEN_WEBSOCKET,
    payload: endpoint,
  });
};

export const updateSocketObject = (socket) => (dispatch) => {
  dispatch({
    type: UPDATE_SOCKET_OBJECT,
    payload: socket,
  });
};
