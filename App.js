/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Provider} from 'react-redux';
import store from './src/redux/store'
import CustomTransitioner from './src/navigators/AppNavigator';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store = {store}>
      <CustomTransitioner />
    </Provider>
    );
  }
}
