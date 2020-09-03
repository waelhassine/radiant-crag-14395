const express = require('express');
const {
  getMediation,
  createMediation,
  addFile,
  addPv,
  getMediationById,
} = require('../controllers/mediation');

//const User = require('../models/User');

const router = express.Router({ mergeParams: true });

const { protect, authorize } = require('../middleware/auth');

router.use(protect);
//router.use(authorize('auteur'));
router.route('/').get(getMediation).post(createMediation).put(addPv);
router.route('/byid').post(getMediationById);
router.post('/uploads', protect, addFile);
module.exports = router;
