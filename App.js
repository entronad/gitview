import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Gitview from './src/router'

export default class App extends React.Component {
  render() {
    return (
      <Gitview />
    );
  }
}
