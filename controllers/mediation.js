const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Medaition = require('../models/Mediation');
const Demande = require('../models/Demande');
const User = require('../models/User');
const uploadFileDemande = require('../middleware/uploadFileDemande');
exports.getMediation = asyncHandler(async (req, res, next) => {
  if (req.user.role == 'auteur') {
    try {
      const mediation = await Mediation.find({})
        .populate('demendeur')
        .populate('juges')
        .populate('adverse')
        .populate('pvRenion.ajouterPar')
        .sort({ date: -1 });
      console.log(mediation);
      res.json(mediation);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  } else {
    try {
      const query = {
        $or: [
          { demendeur: req.user },
          { adverse: req.user },
          { juges: req.user },
        ],
      };
      // console.log(query);
      const mediation = await Mediation.find(query)
        .populate('demendeur')
        .populate('juges')
        .populate('adverse')
        .populate('pvRenion.ajouterPar')
        .sort({ date: -1 });
      console.log(mediation);
      res.json(mediation);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
});

exports.getMediationById = asyncHandler(async (req, res, next) => {
  const { id } = req.body;
  console.log('-------------llll-------------');
  console.log(id);
  try {
    const mediation = await Mediation.findById(id)
      .populate('demendeur')
      .populate('juges')
      .populate('adverse')
      .populate('pvRenion.ajouterPar')
      .sort({ date: -1 });
    console.log(mediation);
    res.json(mediation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

exports.createMediation = asyncHandler(async (req, res, next) => {
  // Create user
  console.log(req.body);
  const demande = await Demande.findOneAndUpdate(req.body._id);

  const mediation = await Medaition.create({
    numeroMediation: '17-08-456M',
    demendeur: req.body.demendeur._id,
    adverse: req.body.adverse,
    juges: req.body.juges,
    details: {
      description: req.body.description,
      categorie: req.body.categorie,
      file: req.body.file,
    },
  });
  await mediation.save();
  demande.step = 3;
  demande.mediationNumero = mediation.numeroMediation;
  await demande.save();

  res.status(200).json({ success: true, data: demande });
});
exports.addPv = asyncHandler(async (req, res, next) => {
  // Create user
  console.log(req.body);
  const { id, description, file } = req.body;
  let pv = {
    ajouterPar: req.user.id,
    description: description,
    file: file,
  };
  console.log(pv);
  Medaition.updateOne(
    { _id: id }, // query matching , refId should be "ObjectId" type
    {
      $push: { pvRenion: pv },
    }, // arr will be array of objects
    function (err, result) {
      if (err) {
        console.error(err.message);

        res.status(500).send('Server Error');
      } else {
      }
    }
  );
  const mediation = await Medaition.findById(id)
    .populate('demendeur')
    .populate('juges')
    .populate('adverse')
    .populate('pvRenion.ajouterPar')
    .sort({ date: -1 });
  console.log(mediation);
  res.json(mediation);
});
exports.addFile = asyncHandler(async (req, res, next) => {
  try {
    await uploadFileDemande(req, res);
    if (req.file == undefined) {
      return res
        .status(500)
        .json({ msg: `Error when trying upload image: ${error}` });
    }
    return res.status(200).json(req.file.filename);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: `Error when trying upload image: ${error}` });
  }
});
