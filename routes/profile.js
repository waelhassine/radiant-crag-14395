const express = require('express');

const {
  loadProfile,
  createProfile,
  updateUser,
  register,
  deleteExperience,
  addExperience,
  editExperience,
  addEducation,
  editEducation,
  deleteEducation,
  addCertification,
  editCertification,
  deleteCertification,
  addRealisation,
  editRealisation,
  deleteRealisation,
  addFile,
  getProfileJugeId

} = require('../controllers/profile');

const { protect } = require('../middleware/auth');
const router = express.Router({ mergeParams: true });
router.route('/').post(protect, createProfile);
router.route('/juge/:id').get(protect, getProfileJugeId);
router.route('/experience').post(protect, addExperience);
router.route('/experience/:id').put(protect, editExperience);
router.route('/experience/:id').delete(protect, deleteExperience);
///////////////////////
router.route('/education').post(protect, addEducation);
router.route('/education/:id').put(protect, editEducation);
router.route('/education/:id').delete(protect, deleteEducation);
//////////////////////////
router.route('/certification').post(protect, addCertification);
router.route('/certification/:id').put(protect, editCertification);
router.route('/certification/:id').delete(protect, deleteCertification);
///////////////////////////
router.route('/realisation').post(protect, addRealisation);
router.route('/realisation/:id').put(protect, editRealisation);
router.route('/realisation/:id').delete(protect, deleteRealisation);
router.get('/', protect, loadProfile);
router.post('/upload',protect, addFile);

module.exports = router;
