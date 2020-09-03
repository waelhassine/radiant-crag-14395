const mongoose = require('mongoose');

const SocieteSchema = new mongoose.Schema({
  raisonSociale: {
    type: String,
    required: [true, 'Please add a name'],
  },
  responsable: {
    type: String,
    required: [true, 'Please add an responsable'],
  },
  registreCommerce: {
    type: String,
    required: [true, 'Please add an registre de commerce'],
  },
  ville: {
    type: String,
    required: [true, 'Please add an ville'],
  },
  adresseUsine: {
    type: String,
    required: [true, 'Please add an ville'],
  },
  siteWeb: {
    type: String,
    required: [true, 'Please add an site web'],
  },
  tel: {
    type: String,
    required: [true, 'Please add an Tel'],
  },
  fax: {
    type: String,
    required: [true, 'Please add an Fax'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// // Encrypt password using bcrypt
// UserSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     next();
//   }

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

module.exports = mongoose.model('Societe', SocieteSchema);
