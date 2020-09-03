const mongoose = require('mongoose');

const DemandeSchema = new mongoose.Schema({
  demendeur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  adverse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  jugesDemandeur: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  jugesAdverse: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  jugesAdministrateur: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  juridiction: {
    type: Boolean,
  },
  description: {
    type: String,
  },
  categorie: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  gsm: {
    type: String,
  },
  file: {
    type: String,
  },
  step: {
    type: Number,
  },
  etat: {
    type: String,
    enum: ['EnCours', 'Accepter', 'Refuser'],
    default: 'EnCours',
  },
  justification: {
    type: String,
  },
  nbrJuge: {
    type: Number,
  },
  typeDemande: {
    type: String,
    enum: ['Mediation', 'Arbitrage'],
  },
  mediationNumero: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Demande = mongoose.model('demande', DemandeSchema);
