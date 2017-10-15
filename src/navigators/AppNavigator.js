/**
 * Tada App
 *@author: Tada
 *@Url: http://w.tadabox.vn
 */

import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Platform ,Animated,View} from 'react-native'
import { connect } from 'react-redux';
import {
    StackNavigator,
    Transitioner,
    StackRouter,
    createNavigationContainer,
    addNavigationHelpers,
    createNavigator
} from 'react-navigation';
import colors from '../styles/colors';

import LoggedOut from '../screens/LoggedOut';
import LoggedIn from '../screens/LoggedIn';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import TurnOnNotifications from '../screens/TurnOnNotifications'

  export const AppNavigator = StackNavigator({
  LoggedOut : {screen: LoggedOut},
  LoggedIn : {screen: LoggedIn},
  Login : {screen: Login},
  ForgotPassword : {screen : ForgotPassword},
  TurnOnNotifications : {screen : TurnOnNotifications}
  },
    {
      cardStyle: {
        opacity: 1
      }
    })


const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});


export default connect(mapStateToProps)(AppWithNavigationState);
