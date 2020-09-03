const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');
const Societe = require('../models/Societe');
const Juge = require('../models/Juge');
const url = process.env.MONGO_URI;
const upload = require('../middleware/upload');
// @desc Load Profile
// @route  GET /api/profile
//@acess Privte
exports.loadProfile = asyncHandler(async (req, res, next) => {
  console.log(req.user);
  if (req.user.role === 'societe') {
    try {
      const societe = await Societe.findOne({
        user: req.user.id,
      });

      if (!societe) {
        return res.json({ msg: 'There is no profile for this user' });
      }

      // only populate from user document if profile exists
      res.json(societe);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  } else if (req.user.role === 'juge') {
    try {
      const juge = await Juge.findOne({
        user: req.user.id,
      });

      if (!juge) {
        return res.json({ msg: 'There is no profile for this user' });
      }

      // only populate from user document if profile exists
      res.json(juge);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  } else {
    return res.json({ msg: 'There is no profile for this user' });
  }
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
exports.createProfile = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  if (req.user.role === 'societe') {
    createProfileSociete(req.body, req.user.id, res);
  } else if (req.user.role === 'juge') {
    createProfileJuge(req.body, req.user.id, res);
  } else {
    return res.status(400).json({ msg: 'There is no profile for this user' });
  }
});
// @route    POST api/profile/experience
// @desc     Create user experience
// @access   Private
exports.addExperience = asyncHandler(async (req, res, next) => {
  console.log(req.user.role);
  if (req.user.role === 'juge') {
    const { title, company, location, from, to, description } = req.body;
    console.log(req.body);
    const newExp = {
      title,
      company,
      location,
      from,
      to,
      description,
    };

    try {
      const profile = await Juge.findOne({ user: req.user.id });

      profile.experience.unshift(newExp);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  } else {
    res.status(500).send('Server Error');
  }
});
// @route    POST api/profile/experience
// @desc     UPDATE user experience
// @access   Private
exports.editExperience = asyncHandler(async (req, res, next) => {
  console.log(req.user.role);
  if (req.user.role === 'juge') {
    const { _id, title, company, location, from, to, description } = req.body;
    console.log(req.body);
    const newExp = {
      title,
      company,
      location,
      from,
      to,
      description,
    };
    console.log(req.params.id);
    try {
      const profile = await Juge.findOne({ user: req.user.id });
      //Find index of specific object using findIndex method.
      objIndex = profile.experience.findIndex((obj) => obj.id == req.params.id);
      profile.experience[objIndex].title = title;
      profile.experience[objIndex].company = company;
      profile.experience[objIndex].location = location;
      profile.experience[objIndex].from = from;
      profile.experience[objIndex].to = to;
      profile.experience[objIndex].description = description;
      console.log(profile);
      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
});

// @route    DELETE api/profile/experience/:exp_id
// @desc     Delete experience from profile
// @access   Private
exports.deleteExperience = asyncHandler(async (req, res, next) => {
  console.log('haloo');
  if (req.user.role === 'juge') {
    try {
      const foundProfile = await Juge.findOne({ user: req.user.id });

      foundProfile.experience = foundProfile.experience.filter(
        (exp) => exp._id.toString() !== req.params.id
      );

      await foundProfile.save();
      return res.status(200).json(foundProfile);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: 'Server error' });
    }
  } else {
    res.status(500).send('Server Error');
  }
});

// @route    POST api/profile/experience
// @desc     Create user experience
// @access   Private
exports.addEducation = asyncHandler(async (req, res, next) => {
  console.log(req.user.role);
  if (req.user.role === 'juge') {
    const { school, degree, fieldofstudy, from, to, description } = req.body;
    console.log(req.body);
    const newEdc = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      description,
    };

    try {
      const profile = await Juge.findOne({ user: req.user.id });

      profile.education.unshift(newEdc);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  } else {
    res.status(500).send('Server Error');
  }
});
// @route    POST api/profile/experience
// @desc     UPDATE user experience
// @access   Private
exports.editEducation = asyncHandler(async (req, res, next) => {
  console.log(req.user.role);
  if (req.user.role === 'juge') {
    const { school, degree, fieldofstudy, from, to, description } = req.body;
    console.log(req.body);

    try {
      const profile = await Juge.findOne({ user: req.user.id });
      //Find index of specific object using findIndex method.
      objIndex = profile.education.findIndex((obj) => obj.id == req.params.id);
      profile.education[objIndex].school = school;
      profile.education[objIndex].degree = degree;
      profile.education[objIndex].fieldofstudy = fieldofstudy;
      profile.education[objIndex].from = from;
      profile.education[objIndex].to = to;
      profile.education[objIndex].description = description;
      console.log(profile);
      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
});

// @route    DELETE api/profile/experience/:exp_id
// @desc     Delete experience from profile
// @access   Private
exports.deleteEducation = asyncHandler(async (req, res, next) => {
  if (req.user.role === 'juge') {
    try {
      const foundProfile = await Juge.findOne({ user: req.user.id });

      foundProfile.education = foundProfile.education.filter(
        (exp) => exp._id.toString() !== req.params.id
      );

      await foundProfile.save();
      return res.status(200).json(foundProfile);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: 'Server error' });
    }
  } else {
    res.status(500).send('Server Error');
  }
});

// @route    POST api/profile/certification
// @desc     Create user certification
// @access   Private
exports.addCertification = asyncHandler(async (req, res, next) => {
  console.log(req.user.role);
  if (req.user.role === 'juge') {
    const { title, date, description } = req.body;
    console.log(req.body);
    const newCertif = {
      title,
      date,
      description,
    };

    try {
      const profile = await Juge.findOne({ user: req.user.id });

      profile.certification.unshift(newCertif);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  } else {
    res.status(500).send('Server Error');
  }
});
// @route    POST api/profile/certification
// @desc     UPDATE user certification
// @access   Private
exports.editCertification = asyncHandler(async (req, res, next) => {
  console.log(req.user.role);
  if (req.user.role === 'juge') {
    const { title, date, description } = req.body;
    console.log(req.body);

    try {
      const profile = await Juge.findOne({ user: req.user.id });
      //Find index of specific object using findIndex method.
      objIndex = profile.certification.findIndex(
        (obj) => obj.id == req.params.id
      );
      profile.certification[objIndex].title = title;
      profile.certification[objIndex].date = date;
      profile.certification[objIndex].description = description;

      console.log(profile);
      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
});

// @route    DELETE api/profile/certification/:exp_id
// @desc     Delete certification from profile
// @access   Private
exports.deleteCertification = asyncHandler(async (req, res, next) => {
  if (req.user.role === 'juge') {
    try {
      const foundProfile = await Juge.findOne({ user: req.user.id });

      foundProfile.certification = foundProfile.certification.filter(
        (exp) => exp._id.toString() !== req.params.id
      );

      await foundProfile.save();
      return res.status(200).json(foundProfile);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: 'Server error' });
    }
  } else {
    res.status(500).send('Server Error');
  }
});

// @route    POST api/profile/realisation
// @desc     Create user realisation
// @access   Private
exports.addRealisation = asyncHandler(async (req, res, next) => {
  console.log(req.user.role);
  if (req.user.role === 'juge') {
    const { title, date, description } = req.body;
    console.log(req.body);
    const newRealisation = {
      title,
      date,
      description,
    };

    try {
      const profile = await Juge.findOne({ user: req.user.id });

      profile.realisation.unshift(newRealisation);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  } else {
    res.status(500).send('Server Error');
  }
});
// @route    POST api/profile/realisation
// @desc     UPDATE user realisation
// @access   Private
exports.editRealisation = asyncHandler(async (req, res, next) => {
  console.log(req.user.role);
  if (req.user.role === 'juge') {
    const { title, date, description } = req.body;
    console.log(req.body);

    try {
      const profile = await Juge.findOne({ user: req.user.id });
      //Find index of specific object using findIndex method.
      objIndex = profile.realisation.findIndex(
        (obj) => obj.id == req.params.id
      );
      profile.realisation[objIndex].title = title;
      profile.realisation[objIndex].date = date;
      profile.realisation[objIndex].description = description;

      console.log(profile);
      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
});

// @route    DELETE api/profile/realisation/:exp_id
// @desc     Delete realisation from profile
// @access   Private
exports.deleteRealisation = asyncHandler(async (req, res, next) => {
  if (req.user.role === 'juge') {
    try {
      const foundProfile = await Juge.findOne({ user: req.user.id });

      foundProfile.realisation = foundProfile.realisation.filter(
        (exp) => exp._id.toString() !== req.params.id
      );

      await foundProfile.save();
      return res.status(200).json(foundProfile);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: 'Server error' });
    }
  } else {
    res.status(500).send('Server Error');
  }
});

function clean(obj) {
  var propNames = Object.getOwnPropertyNames(obj);
  for (var i = 0; i < propNames.length; i++) {
    var propName = propNames[i];
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
}
const createProfileSociete = async (body, id, res) => {
  const {
    raisonSociale,
    responsable,
    registreCommerce,
    ville,
    adresseUsine,
    siteWeb,
    tel,
    fax,
  } = body;
  try {
    const profileFiels = {
      user: id,
      raisonSociale,
      responsable,
      registreCommerce,
      ville,
      adresseUsine,
      siteWeb,
      tel,
      fax,
    };
    clean(profileFiels);
    let profile = await Societe.findOneAndUpdate(
      { user: id },
      { $set: profileFiels },
      { new: true, upsert: true }
    );
    const user = await User.findById(id);
    user.profile = true;
    await user.save();
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

const createProfileJuge = async (body, id, res) => {
  const { experienceAns, location, titre } = body;
  try {
    const profileFiels = {
      user: id,
      experienceAns,
      location,
      titre,
    };

    let profile = await Juge.findOneAndUpdate(
      { user: id },
      { $set: profileFiels },
      { new: true, upsert: true }
    );
    const user = await User.findById(id);
    user.profile = true;
    await user.save();
    console.log(user);
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

exports.getPhoto = asyncHandler(async (req, res, next) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

exports.addFile = asyncHandler(async (req, res, next) => {
  try {
    await upload(req, res);
    console.log(req);
    const user = await User.findById(req.user.id);
    user.photo = req.file.filename;
    await user.save();
    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    return res.send(user);
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload image: ${error}`);
  }
});

// @desc      Get single user
// @route     GET /api/v1/auth/users/:id
// @access    Private/Admin
exports.getProfileJugeId = asyncHandler(async (req, res, next) => {
  const juge = await Juge.findOne({
    user: req.params.id,
  }).populate({
    path: 'user',
    select: 'name email gsm photo',
  });
  console.log(juge);
  res.status(200).json({
    success: true,
    data: juge,
  });
});
