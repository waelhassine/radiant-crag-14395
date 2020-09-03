import io from 'socket.io-client';
const socketUrl = 'http://127.0.0.1:5000';
// The Header creates links that can be used to navigate
// between routes.
let socket;
export default {
  init: () => {
    let error = null;
    let socket;
    // if (socket) {
    //   socket.destroy();
    //   socket = null;
    // }
    if (!socket) {
      socket = io.connect(socketUrl, {
        reconnection: true,
        query: {
          token: localStorage.token,
        },
      });
    }

    return socket;
  },
  getSocket: () => {
    if (!socket) return null;
    console.log(socket);
    return socket;
  },
  disconnect: () => {
    // socket.disconnect();
  },
  message: () => {
    socket.emit('message', 'Vous êtes bien connecté !');
  },
  movePlayer: () => {
    socket.emit('login_register', 'Vous êtes bien connecté !');
  },
  getData: () => {
    let dataa = socket.on('get_data', (data) => {
      return data;
    });
    console.log(dataa);
    return dataa;
  },
};
