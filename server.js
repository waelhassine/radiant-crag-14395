const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');
const path = require('path');
const bodyParser = require('body-parser');
const socket = require('socket.io');
const socketAuth = require('socketio-auth');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const Room = require('./models/Room');
const adapter = require('socket.io-redis');
var jwtAuth = require('socketio-jwt-auth');
let interval;
const path = require('path');

dotenv.config({ path: './config/config.env' });
// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Body parser
//app.use(cookieParser());
//app.use(cors());
// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// Enable CORS
app.use(cors());
app.use(errorHandler);
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;
// Upload Endpoint
// Route files
// app.use(
//   bodyParser.urlencoded({
//     limit: '50mb',
//     extended: true,
//     parameterLimit: 50000,
//   })
// );
const auth = require('./routes/auth');
const profile = require('./routes/profile');
const users = require('./routes/user');
const demande = require('./routes/demande');
const mediation = require('./routes/mediation');
const mailling = require('./routes/mailling');

const server = require('http').createServer(app);
app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/demande', demande);
app.use('/api/mediation', mediation);
app.use('/api/mailling', mailling);
app.use('/api/profile', require('./routes/profile'));
// Socket setup
var io = socket(server);

var consumer = require('./testSocket');
consumer.start(io);

server.listen(PORT);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  // server.close(() => process.exit(1));
});
