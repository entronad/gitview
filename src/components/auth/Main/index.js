import React from 'react';
import {
  AsyncStorage,
  View,
  Text,
} from 'react-native'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, WhiteSpace, WingBlank, InputItem, List, ActivityIndicator } from 'antd-mobile';
import styled from 'styled-components/native';
import { logout } from '../action';
import { AUTH_ACCESS_TOKEN } from 'constants/storageKeys';

const mapStateToProps = state => ({
  authorized: state.auth.authorized,
  accessToken: state.auth.accessToken,
  logining: state.auth.logining,
})
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    logout,
  },
  dispatch
);

class Main extends React.Component {
  constructor(props) {
    super(props);
    console.log('**************************** main construct')
    this.props.logout();
  }
  render() {
    return (
      <Text>Main+++{this.props.accessToken}</Text>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
