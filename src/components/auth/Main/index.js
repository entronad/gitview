import React from 'react';
import {
  View,
  Text
} from 'react-native'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    console.log('**************************** main construct')
  }
  render() {
    return (
      <Text>Main</Text>
    );
  }
}
