const express = require('express');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  filterUsersByVille,
  blockUser,
  getUsersSociete,
  getUsersa,
  getUsersJuge,
  confirmJugeDemande,
} = require('../controllers/user');

const User = require('../models/User');

const router = express.Router({ mergeParams: true });

const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

router.use(protect);
router.use(authorize('auteur', 'societe'));
router.post('/filter', filterUsersByVille);
router.get('/block/:id', blockUser);
router.route('/choixjuge').get(getUsersJuge).post(confirmJugeDemande);
router.route('/juge').get(advancedResults(User, 'juge'), getUsers);
router.route('/societe').get(advancedResults(User, 'societe'), getUsersSociete);
router.route('/').post(createUser).get(getUsersa);
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
