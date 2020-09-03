import {
  OPEN_WEBSOCKET,
  CLOSE_WEBSOCKET,
  UPDATE_SOCKET_OBJECT,
  ADD_NOTIFICATION,
  GET_ALL_NOTIFICATION,
  GET_NOTIFI,
  ADD_NOTIFI,
} from '../actions/types';
import { getAllNotification } from '../actions/socket';
//import { addNotif } from '../actions/auth';
import { setAlert } from '../actions/alert';
import io from 'socket.io-client';

var socket;

const handleServerMessage = (data, store, clientId) => {
  // console.log('data ', data);

  // package into a variable server message data
  // dispatch action that adds new message to the state array
  store.dispatch(setAlert(data.message, 'success'));
  //console.log(data);
  store.dispatch({
    type: ADD_NOTIFICATION,
    payload: data,
  });
  //addNotif(data);
};
const handleGetAllNotification = (data, store, clientId) => {
  console.log('data ', data);

  // package into a variable server message data
  // dispatch action that adds new message to the state array
  //store.dispatch(setAlert(data.message, 'success'));
  // getAllNotification(data);
  store.dispatch({
    type: GET_ALL_NOTIFICATION,
    payload: data,
  });
};
// const chatMiddleware = (store) => (next) => (action) => {
//   const state = store.getState();
//   if (action.type === GET_ALL_NOTIFICATION) {
//     //console.log('in middle ware, adding message')
//     const socket = state.socket.socket;
//     //console.log('socket from add message middleware', socket)
//     socket.emit('initial_data');
//   }

//   next(action);
// };

const socketMiddleware = (store) => (next) => (action) => {
  if (action.type === OPEN_WEBSOCKET) {
    socket = io('http://127.0.0.1:5000', {
      query: `auth_token=${localStorage.token}`,
    });
    socket.on('connect', function () {
      console.log('connected to server', socket.io);
      // socket.emit('initial_data');
    });
    const clientId = socket.id;
    socket.on('chat', (data) => handleServerMessage(data, store, clientId));
    socket.on('get_data', (data) => {
      handleGetAllNotification(data, store, clientId);
      //getAllNotification(data);
      // store.dispatch({
      //   type: GET_ALL_NOTIFICATION,
      //   payload: data,
      // });
    });
    store.dispatch({
      type: UPDATE_SOCKET_OBJECT,
      payload: socket,
    });
  }
  if (action.type === CLOSE_WEBSOCKET) {
    if (socket !== undefined) {
      socket.close();
      console.log('close Socket');
      store.dispatch({
        type: UPDATE_SOCKET_OBJECT,
        payload: socket,
      });
    }
  }

  if (action.type === UPDATE_SOCKET_OBJECT) {
  }
  if (action.type === GET_ALL_NOTIFICATION) {
    //  getAllNotification(data);
  }

  next(action);
};

export default socketMiddleware;
