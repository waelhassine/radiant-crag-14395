import { INITIAL_DATA, ADD_MESSAGE } from '../actions/types';
import { sendMessage } from '../actions/socket';
import io from 'socket.io-client';

const chatMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  if (action.type === INITIAL_DATA) {
    //console.log('in middle ware, adding message')
    const socket = state.socket.socket;
    //console.log('socket from add message middleware', socket)
    socket.emit('initial_data');
  }
  //   if (action.type === ADD_MESSAGE) {

  //   }

  next(action);
};

export default chatMiddleware;
