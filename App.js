import React from 'react';
import { AppRegistry } from 'react-native';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';

import AppNavigator from 'components/nav/AppNavigator';
import store from 'store';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('gitview', () => App);
