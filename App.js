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
  constructor(props) {
    super(props);
    console.log(' **** app construct');
  }
  componentDidMount() {
    console.log(' **** app mount');
  }
  render() {
    console.log(' **** app render');
    return (
      <Provider store={store}>
        <Gitview />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('gitview', () => App);
