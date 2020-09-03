const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');
// @desc      Get all users
// @route     GET /api/v1/auth/users
// @access    Private/Admin
exports.getUsers = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});
exports.getUsersa = asyncHandler(async (req, res, next) => {
  const users = await User.find().sort({ date: -1 });
  res.json(users);
});
exports.getUsersSociete = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

exports.getUsersJuge = asyncHandler(async (req, res, next) => {
  const users = await User.find({ role: 'juge', profile: true }).sort({
    date: -1,
  });
  console.log(users);
  let total = users.length;
  let nbrPage = total / 6;
  const nbrPagea = Math.ceil(nbrPage);
  res.status(200).json({
    success: true,
    count: total,
    nbrPagea,
    data: users,
  });
});

exports.confirmJugeDemande = asyncHandler(async (req, res, next) => {
  const { juges } = req.body;

  const users = juges;
  console.log(users);
  let total = users.length;
  let nbrPage = total / 6;
  const nbrPagea = Math.ceil(nbrPage);
  res.status(200).json({
    success: true,
    count: total,
    nbrPagea,
    data: users,
  });
});

// @desc      Get single user
// @route     GET /api/v1/auth/users/:id
// @access    Private/Admin
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc      Create user
// @route     POST /api/v1/auth/users
// @access    Private/Admin
exports.createUser = asyncHandler(async (req, res, next) => {
  // Create user
  const { name, email, password, role, gsm, photo } = req.body;

  const user = await User.create({
    name,
    email,
    password: 'wazwaqwas12344',
    gsm,
    photo: 'avatar-anonyme.png',
    role,
  });
  // Get reset token
  const resetToken = user.getResetPasswordToken();
  console.log(resetToken);
  const resetUrl = `http://localhost:3000/resetpassword/${resetToken}`;

  const message = `Dear ${name},<br/>Congratulations! Welcome to be a member of ZKTeco website! You are now free to log in and enjoy our services. \n\n ${resetUrl}`;
  await user.save({ validateBeforeSave: false });
  try {
    await sendEmail({
      email: 'wael.hassine0@gmail.com',
      subject: 'Password reset token',
      message,
    });
  } catch (err) {
    console.log(err);
  }

  res.status(200).json({ success: true, data: 'Email sent' });
});

// @desc      Update user
// @route     PUT /api/v1/auth/users/:id
// @access    Private/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc      Delete user
// @route     DELETE /api/v1/auth/users/:id
// @access    Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc      Filter user
// @route     POST /api/users/filter
// @access    Private/Admin
exports.filterUsersByVille = asyncHandler(async (req, res, next) => {
  const users = await User.find({
    ville: req.body.ville,
  });

  res.status(200).json({
    success: true,
    data: users,
  });
});

// @desc      Delete user
// @route     DELETE /api/v1/auth/users/:id
// @access    Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    data: {},
  });
});

exports.blockUser = asyncHandler(async (req, res, next) => {
  try {
    console.log(req.params.id);
    const user = await User.findById(req.params.id);
    let blocka = user.block;
    user.block = !blocka;
    await user.save();

    console.log(user);

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send('Server Error');
  }
});
