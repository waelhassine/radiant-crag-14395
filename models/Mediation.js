const mongoose = require('mongoose');

const MediationSchema = new mongoose.Schema({
  numeroMediation: {
    type: String,
  },
  demendeur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  adverse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  details: {
    description: {
      type: String,
    },
    categorie: {
      type: String,
    },
    file: {
      type: String,
    },
  },
  juges: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  pvRenion: [
    {
      ajouterPar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      date: {
        type: Date,
        default: Date.now,
      },
      description: {
        type: String,
      },
      file: { type: String },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mediation = mongoose.model('Mediation', MediationSchema);
