import {
  OPEN_WEBSOCKET,
  CLOSE_WEBSOCKET,
  UPDATE_SOCKET_OBJECT,
} from '../actions/types';
import io from 'socket.io-client';

handleServerMessage = (data, store, clientId) => {
  console.log('data ', data);
};

const socketMiddleware = (store) => (next) => (action) => {
  if (action.type === OPEN_WEBSOCKET) {
    console.log(localStorage.token);
    var socket = io('http://127.0.0.1:5000', {
      query: `auth_token=${localStorage.token}`,
    });
    socket.on('connect', function () {
      console.log('connected to server', socket.id);
    });
    const clientId = socket.id;
    socket.on('chat', (data) => handleServerMessage(data, store, clientId));

    store.dispatch({
      type: UPDATE_SOCKET_OBJECT,
      payload: socket,
    });
  }
  if (action.type === CLOSE_WEBSOCKET) {
    socket.close();
    console.log('close Socket');
    store.dispatch({
      type: UPDATE_SOCKET_OBJECT,
      payload: socket,
    });
  }
  next(action);
};

export default socketMiddleware;
