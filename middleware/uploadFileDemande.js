const util = require('util');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './client/public/uploads/filedemande');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const filename = uniqueSuffix + path.extname(file.originalname);
    // console.log(filename);

    cb(null, filename);
  },
});

const uploadFile = multer({
  storage: storage,
  limits: { fileSize: 52428800 },
  fileFilter: function (req, file, cb) {
    if (file.mimetype !== 'application/pdf') {
      return cb(null, false, new Error("I don't have a clue!"));
    }
    cb(null, true);
  },
}).single('file');
const uploadFileDemande = util.promisify(uploadFile);
module.exports = uploadFileDemande;
