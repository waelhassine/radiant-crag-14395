const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
//const Mediation = require('../models/Mediation');
const Demande = require('../models/Demande');
const sendEmail = require('../utils/sendEmail');
const sendSms = require('../utils/sendSms');
const uploadFileDemande = require('../middleware/uploadFileDemande');
const User = require('../models/User');
const Medaition = require('../models/Mediation');
var consumer = require('../testSocket');
// @desc      Get all mediation
// @route     GET /api/v1/mediation
// @access    Private/Admin
exports.getDemande = asyncHandler(async (req, res, next) => {
  try {
    const demande = await Demande.find({})
      .populate('demendeur')
      .populate('adverse')
      .populate('juges')
      .populate('jugesDemandeur')
      .populate('jugesAdverse')
      .sort({ date: -1 });
    console.log(demande);
    res.json(demande);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @desc      Get single user
// @route     GET /api/v1/auth/users/:id
// @access    Private/Admin
exports.updateEtatDemande = asyncHandler(async (req, res, next) => {
  try {
    // Create user
    console.log('--------------------------------dddd');
    const { id, etat, justification, nbrJuge } = req.body;
    const demande = await Demande.findByIdAndUpdate(id);
    demande.etat = etat;
    demande.justification = justification;
    demande.nbrJuge = nbrJuge;

    if (demande.etat === 'Accepter') {
      demande.etat = 'EnCours';
      demande.step = 1;
    }
    if (demande.etat === 'Refuser') {
      demande.step = 5;
    }

    const user = await User.create({
      name: demande.name,
      email: demande.email,
      password: 'wazwaqwas12344',
      gsm: demande.gsm,
      photo: 'avatar-anonyme.png',
      role: 'societe',
    });
    // Get reset token
    const resetToken = user.getResetPasswordToken();
    console.log(resetToken);
    demande.adverse = user.id;

    const resetUrl = `http://localhost:3000/resetpassword/${resetToken}`;
    await user.save({ validateBeforeSave: false });
    console.log('---------------------- Creaction User ---------');
    console.log(user);
    console.log('---------------------- Creaction Demande ---------');
    await demande.save();
    console.log(demande);

    try {
      await sendEmail({
        email: 'wael.hassine0@gmail.com',
        subject: 'Create Account',
        message: `Dear ${user.name},<br/>Congratulations! Welcome to be a member of Alpha website! You are now free to log in and enjoy our services. \n\n ${resetUrl}`,
      });
    } catch (err) {
      console.log(err);
    }

    // try {
    //   await sendSms({
    //     number: '21658406264',
    //     text:
    //       'Bonjour , Alpha partner Informez-vous qu il y a une demande de mediation, enregistrer à notre Centre merci de connecter sur notre site web',
    //   });
    // } catch (error) {
    //   console.log(err);
    // }
    // try {
    //   await sendEmail({
    //     email: 'wael.hassine0@gmail.com',
    //     subject: 'Demande Médiation',
    //     message: `Dear ${user.name},<br/>'Bonjour , Alpha partner Informez-vous qu il y a une demande de mediation, enregistrer à notre Centre merci de connecter sur notre site web \n\n ${resetUrl}`,
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
    // console.log('--------------------- Envoyer Notification --------');
    // consumer.sendNotificationToSociete({
    //   demandeur: demande.demendeur,
    //   fromUserId: req.user,
    //   message: 'Acceptation Demande',
    // });
    res.json(demande);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});
// @desc      Get single user
// @route     GET /api/v1/auth/users/:id
// @access    Private/Admin
exports.updateEtatDemandeJugeAccept = asyncHandler(async (req, res, next) => {
  try {
    // Create usera
    console.log('--------------------------------dddd');
    const { id, juge, owner } = req.body;
    console.log(req.body);

    if (owner === 'demendeur') {
      console.log('waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      Demande.updateOne(
        { _id: id }, // query matching , refId should be "ObjectId" type
        {
          $push: { jugesDemandeur: { $each: juge } },
          $set: {
            step: 1,
          },
        }, // arr will be array of objects
        function (err, result) {
          if (err) {
            console.error(err.message);

            res.status(500).send('Server Error');
          } else {
          }
        }
      );
      const demande = await Demande.findById(id);
      res.json(demande);
    } else if (owner === 'adverse') {
      console.log('Taaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      Demande.updateOne(
        { _id: id }, // query matching , refId should be "ObjectId" type
        {
          $push: { jugesAdverse: { $each: juge } },
          $set: {
            step: 1,
          },
        }, // arr will be array of objects
        function (err, result) {
          if (err) {
            console.error(err.message);

            res.status(500).send('Server Error');
          } else {
          }
        }
      );
      const demande = await Demande.findById(id);
      res.json(demande);
    } else {
      console.log('XXXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      console.log(juge);
      Demande.updateOne(
        { _id: id }, // query matching , refId should be "ObjectId" type
        {
          $push: { jugesAdministrateur: juge },
          $set: {
            step: 3,
          },
        }, // arr will be array of objects
        function (err, result) {
          if (err) {
            console.error(err.message);

            res.status(500).send('Server Error');
          } else {
          }
        }
      );
      const demande = await Demande.findById(id);

      const mediation = await Medaition.create({
        numeroMediation: '17-08-456M',
        demendeur: demande.demendeur,
        adverse: demande.adverse,
        juges: juge,
        details: {
          description: demande.description,
          categorie: demande.categorie,
          file: demande.file,
        },
      });

      await mediation.save();
      console.log(mediation);
      demande.mediationNumero = mediation.numeroMediation;
      await demande.save();

      res.json(demande);
    }

    // demande.etat = etat;
    // demande.justification = justification;
    // demande.nbrJuge = nbrJuge;
    // await demande.save();
    // console.log(demande);
    // try {
    //   await sendEmail({
    //     email: 'wael.hassine0@gmail.com',
    //     subject: 'Create Account',
    //     message: `Dear ${user.name},<br/>Congratulations! Welcome to be a member of Alpha website! You are now free to log in and enjoy our services. \n\n ${resetUrl}`,
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
    // res.json('demande');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @desc      Get single user
// @route     GET /api/v1/auth/users/:id
// @access    Private/Admin
exports.getDemandeByUserId = asyncHandler(async (req, res, next) => {
  try {
    const query = {
      $or: [{ demendeur: req.user }, { adverse: req.user }],
    };
    const demande = await Demande.find(query)
      .populate('adverse')
      .sort({ date: -1 });
    console.log(demande);
    res.json(demande);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @desc      Create Mediation By Societe
// @route     POST /api/mediation/societe
// @access    Private/Societe
exports.createDemandeBySociete = asyncHandler(async (req, res, next) => {
  // Create user
  const {
    juridiction,
    categorie,
    description,
    name,
    gsm,
    email,
    file,
    typeDemande,
  } = req.body;
  try {
    const demande = await Demande.create({
      demendeur: req.user.id,
      juridiction,
      categorie,
      description,
      name,
      gsm,
      email,
      file,
      typeDemande,
      etat: 'EnCours',
      step: 0,
    });
    consumer.sendNotificationToAuteur(req.user);
    res.json(demande);
  } catch (error) {
    console.log(error);
  }
});

// @desc      Create Mediation By Admin
// @route     POST /api/mediation/admin
// @access    Private/Societe
exports.createMediationByAdmin = asyncHandler(async (req, res, next) => {
  // Create user
  const {
    demendeur,
    adverse,
    juridiction,
    categorie,
    mediateur,
    validation,
  } = req.body;
  try {
    const mediaiton = await Mediation.create({
      demendeur,
      adverse,
      juridiction,
      categorie,
      mediateur,
      validation,
    });
    //   consumer.sendNotificationToSociete('waaaaaaaaaaaaaaaaaaaaaa');
    res.json(mediaiton);
  } catch (error) {
    console.log(error);
  }
});

exports.addFile = asyncHandler(async (req, res, next) => {
  try {
    await uploadFileDemande(req, res);
    console.log(req.file);
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
