import {
  OPEN_WEBSOCKET,
  CLOSE_WEBSOCKET,
  UPDATE_SOCKET_OBJECT,
  INCREMENT_COUNTER,
  SEND_MESSAGE,
  ADD_NOTIFICATION,
  GET_ALL_NOTIFICATION,
} from '../actions/types';

const initialState = {
  socket: null,
  socketConnected: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OPEN_WEBSOCKET:
      return {
        ...state,
        socketConnected: true,
      };
    case CLOSE_WEBSOCKET:
      return {
        ...state,
        socketConnected: false,
        socket: null,
      };
    case UPDATE_SOCKET_OBJECT:
      return {
        ...state,
        socket: action.payload,
      };
    default:
      return state;
  }
}
