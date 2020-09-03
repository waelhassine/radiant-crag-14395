const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  fromUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  type: {
    type: String,
  },
  message: {
    type: String,
  },
  clicked: {
    type: Boolean,
  },
  link: {
    type: String,
  },
});

module.exports = Notification = mongoose.model(
  'Notification',
  NotificationSchema
);
