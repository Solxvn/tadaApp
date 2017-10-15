/**
 * Airbnb Clone App
 *@author: Andy
 *@Url: http://imandy.ie
 */

import * as types from './types';
import qs from 'qs';
// import user from '../../data/user.json';

export function logIn(email, password) {
  return (dispatch, getState) => {

  fetch('https://api-dev.tadacorp.net/userapps/login/v1', {
  method: 'POST',
  headers: {
  "Content-Type": 'application/x-www-form-urlencoded'
  },
  body: qs.stringify({
    email: email,
    password: password,
    })
  }).then((response) => response.json())
  .then((responseJson) => {
    if (responseJson.code === 200) {
      console.log("login success");
      dispatch(setLoggedInState(true));
      return true;
    } else {
      console.log("login false");
      dispatch(setLoggedInState(false));
      return false;
    }
  })
  .catch((error) => {
    console.error(error);
  });

  }
}

export function setLoggedInState(loggedInState) {
  return {
    type: types.SET_LOGGED_IN_STATE,
    loggedInState,
  }
}
