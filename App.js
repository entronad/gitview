import React from 'react';
import { AppRegistry } from 'react-native';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Gitview from './src/router'

class App extends React.Component {
  render() {
    return (
      <Gitview />
    );
  }
}

AppRegistry.registerComponent('gitview', () => App);
