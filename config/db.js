const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const GridFsStorage = require('multer-gridfs-storage');
const crypto = require('crypto');

const connectDB = async () => {
  console.log('qsaz');
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });


  console.log(`MongoDB Connected: ${conn.connection.host}`);
  // Create storage engine
  
  
};

module.exports = connectDB;
