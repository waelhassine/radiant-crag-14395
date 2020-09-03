const express = require('express');
const {
  login,
  forgotPassword,
  resetPassword,
  loadUser,
  register,updatePassword,
  logout
} = require('../controllers/auth');
const { protect } = require('../middleware/auth');
const router = express.Router({ mergeParams: true });
router.post('/login', login);
router.post('/logout', logout);
router.post('/register', register);
router.get('/', protect, loadUser);
router.post('/updatepassword',protect, updatePassword);
router.post('/forgotpassword', forgotPassword);
router.post('/resetpassword', resetPassword);

module.exports = router;
