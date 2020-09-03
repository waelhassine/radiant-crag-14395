const mongoose = require('mongoose');

const MaillingSchema = new mongoose.Schema({
  juges: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  title: {
    type: String,
  },
  subject: {
    type: String,
  },
  status: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mailling = mongoose.model('mailling', MaillingSchema);
