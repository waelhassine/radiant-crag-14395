const express = require('express');
const {
  getDemande,
  createDemandeBySociete,
  getDemandeByUserId,
  addFile,
  updateEtatDemande,
  updateEtatDemandeJugeAccept,
} = require('../controllers/demande');

//const User = require('../models/User');

const router = express.Router({ mergeParams: true });

const { protect, authorize } = require('../middleware/auth');

router.use(protect);
//router.use(authorize('auteur'));
router
  .route('/')
  .get(authorize('auteur', 'administrateur'), getDemande)
  .post(updateEtatDemande);
router
  .route('/updatedemande')
  .post(authorize('societe','auteur', 'administrateur'), updateEtatDemandeJugeAccept);
router
  .route('/societe')
  .post(authorize('societe'), createDemandeBySociete)
  .get(authorize('societe'), getDemandeByUserId);
router.post('/uploads', protect, addFile);
module.exports = router;
