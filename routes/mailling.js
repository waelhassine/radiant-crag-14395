const express = require('express');
const {
    getJuges,
    getMilling,
    createMailling
} = require('../controllers/mailling');

//const User = require('../models/User');

const router = express.Router({ mergeParams: true });

const { protect, authorize } = require('../middleware/auth');

router.use(protect);
//router.use(authorize('auteur'));
router
  .route('/')
  .get(getMilling)
  .post(createMailling);

router
  .route('/users')
  .get(getJuges);
module.exports = router;