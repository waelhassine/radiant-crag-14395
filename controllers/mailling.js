const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Mailling = require('../models/Mailling');
const User = require('../models/User');

exports.getJuges = asyncHandler(async (req, res, next) => {
  const users = await User.find({ role: 'juge' }).sort({ date: -1 });
  console.log(users);
  res.status(200).json({ success: true, data: users });
});

exports.getMilling = asyncHandler(async (req, res, next) => {
  const mailling = await Mailling.find({}).sort({ date: -1 });
  res.status(200).json({ success: true, data: mailling });
});

exports.createMailling = asyncHandler(async (req, res, next) => {
  // Create user
  const { title, subject, juges } = req.body;

  const mailling = await Mailling.create({
    title,
    subject,
    juges,
    status: 'send',
  });

  await mailling.save();
  // try {
  //   await sendEmail({
  //     email: 'wael.hassine0@gmail.com',
  //     subject: 'Password reset token',
  //     message,
  //   });
  // } catch (err) {
  //   console.log(err);
  // }

  res.status(200).json({ success: true, data: mailling });
});
