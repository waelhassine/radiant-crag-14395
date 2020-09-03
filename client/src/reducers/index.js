import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import user from './user';
import mediation from './mediation';
import socket from './socket';
import notification from './notification';
import medi from './medi';
import mailling from './mailling';
export default combineReducers({
  alert,
  auth,
  profile,
  user,
  mediation,
  socket,
  notification,
  medi,
  mailling,
});
