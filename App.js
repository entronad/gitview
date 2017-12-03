import React from 'react';
import { AppRegistry } from 'react-native';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';

import Gitview from './src/router';
import store from './src/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Gitview />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('gitview', () => App);
