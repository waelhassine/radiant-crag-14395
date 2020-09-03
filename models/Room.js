const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  socket: {
    type: String,
  },
  role: {
    type: String,
  },
});

module.exports = Room = mongoose.model('room', RoomSchema);
