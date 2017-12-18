import React from 'react';
import { AppRegistry } from 'react-native';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';

import Navigator from './src/navigator';
import store from './src/store';

console.log(' ******************************* app script');

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('**************************** app construct')
  }
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('gitview', () => App);
