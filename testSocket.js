const User = require('./models/User');
const Room = require('./models/Room');
const Notification = require('./models/Notification');
const jwt = require('jsonwebtoken');
var ioa = null;
module.exports = {
  start: function (io) {
    io.use(async function (socket, next) {
      //run++; // 0 -> 1

      try {
        // Verify token
        let token = socket.handshake.query.auth_token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);
        console.log(user);
        socket.user = user;
        //  console.log(socket.user);
        next();
      } catch (err) {
        next(new Error('not authorized'));
      }
    });
    io.on('connection', function (socket) {
      console.log('Authentication passed!');

      console.log('Client Connected: ', socket.id);
      console.log(socket.user);
      Room.create(
        {
          userId: socket.user.id,
          socket: socket.id,
          role: socket.user.role,
        },
        function (err, res) {
          if (err) throw err;
        }
      );

      socket.on('initial_data', () => {
        console.log('------------------------------------');
        Notification.find({
          userId: socket.user.id,
        })
          .sort({ date: -1 })
          .populate({
            path: 'fromUserId',
            select: 'name photo',
          })
          .then((docs) => {
            console.log('----------------- Demande from client');
            console.log(docs);
            io.sockets.to(socket.id).emit('get_data', docs);
          });
      });
      socket.on('chat', function (data) {
        io.emit('chat', data);
      });
      socket.on('disconnecting', () => {
        // socket.rooms === {}
        console.log(socket.id);
        Room.deleteOne({ socket: socket.id }, function (err, res) {
          if (err) throw err;
        });

        console.log('Client siconnected');
      });
      /*
            socket.on('typing', function(data){
              socket.broadcast.emit('typing', data)
            })
            */
    });
    ioa = io;
  },
  sendNotificationToAuteur: async function (user) {
    console.log(ioa);
    let rommsConnected = null;
    rommsConnected = await Room.find({ role: 'auteur' });
    console.log('------------- Condition------------');
    console.log(rommsConnected);
    if (rommsConnected) {
      rommsConnected.map((item) => {
        ioa.to(item.socket).emit('chat', {
          fromUserId: {
            id: user.id,
            name: user.name,
            photo: user.photo,
          },
          message: 'Demande Médiation',
          type: 'Demande',
          clicked: false,
          link: 'google.com',
        });
        console.log(item.socket);
        console.log('message Send To client');
      });
    }
    const userWithRoolAuteur = await User.find({ role: 'auteur' });
    console.log(userWithRoolAuteur);
    userWithRoolAuteur.map((item) => {
      Notification.create(
        {
          fromUserId: user.id,
          userId: item.id,
          type: 'Demande',
          message: 'Demande Médiation',
          clicked: false,
          link: 'google.com',
        },
        function (err, res) {
          if (err) throw err;
        }
      );
    });
    console.log(user);

    //.emit('chat', text);
  },
  sendNotificationToSociete: async function (option) {
    console.log(option);
    let rommsConnected = null;
    rommsConnected = await Room.find({ userId: option.demandeur });
    console.log('------------- Notification Function ------------');
    console.log(rommsConnected);
    if (rommsConnected) {
      rommsConnected.map((item) => {
        ioa.to(item.socket).emit('chat', {
          fromUserId: {
            id: option.fromUserId.id,
            name: option.fromUserId.name,
            photo: option.fromUserId.photo,
          },
          message: option.message,
          type: 'Demande',
          clicked: false,
          link: 'google.com',
        });
        console.log(item.socket);
        console.log('message Send To client');
      });
    }
    Notification.create(
      {
        fromUserId: option.fromUserId.id,
        userId: option.demandeur,
        type: 'Demande',
        message: option.message,
        clicked: false,
        link: 'google.com',
      },
      function (err, res) {
        if (err) throw err;
      }
    );

    //.emit('chat', text);
  },
};
