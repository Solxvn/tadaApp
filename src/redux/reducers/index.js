


import {combineReducers} from 'redux';
import * as Navigation from './navigation';
import * as LoggedOut from './loggedOut';

export default combineReducers(Object.assign(
  Navigation,
  LoggedOut,
));
