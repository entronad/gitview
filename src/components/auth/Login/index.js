import React from 'react';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Button,
  InputItem,
  List,
  ActivityIndicator,
} from 'antd-mobile';
import styled from 'styled-components/native';

import styles from 'config/styles';

import { AUTH_ACCESS_TOKEN } from 'config/storageKeys';
import { resetNavigationTo } from 'utils';
import { login as loginAction } from '../action';

// for dev
import { devAccount } from '../../../../secret';

const RootView = styled.View`
  background: white;
  width: 100%;
  height: 100%;
  padding-top: ${styles.v_spacing_lg};
  padding-bottom: ${styles.v_spacing_lg};
  padding-left: ${styles.h_spacing_lg};
  padding-right: ${styles.h_spacing_lg};
`;

const InputList = styled(List)`
  margin-top: 200;
`;

const LoginButton = styled(Button)`
  margin-top: ${styles.v_spacing_xl};
`;

const mapStateToProps = state => ({
  authorized: state.auth.authorized,
  accessToken: state.auth.accessToken,
  logining: state.auth.logining,
});
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    loginAction,
  },
  dispatch,
);

class Login extends React.Component {
  static propTypes = {
    authorized: PropTypes.bool.isRequired,
    accessToken: PropTypes.string,
    logining: PropTypes.bool.isRequired,

    loginAction: PropTypes.func.isRequired,

    navigation: PropTypes.object.isRequired,
  }
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    };
    // for dev
    this.props.loginAction({
      username: devAccount.username,
      password: devAccount.password,
    });
  }
  componentDidUpdate() {
    if (this.props.authorized) {
      AsyncStorage.setItem(AUTH_ACCESS_TOKEN, this.props.accessToken);
      this.navigate();
    }
  }
  setUsername = (username) => {
    this.setState({
      username,
    });
  }
  setPassword = (password) => {
    this.setState({
      password,
    });
  }
  login = () => {
    this.props.loginAction({
      username: this.state.username,
      password: this.state.password,
    });
  }
  navigate = () => {
    resetNavigationTo('Main', this.props.navigation);
  }
  render() {
    return (
      <RootView>
        <InputList>
          <InputItem
            placeholder="GitHub账号"
            value={this.state.username}
            onChange={this.setUsername}
          >
            账号:
          </InputItem>
          <InputItem
            placeholder="GitHub登录密码"
            type="password"
            value={this.state.password}
            onChange={this.setPassword}
          >
            密码:
          </InputItem>
        </InputList>
        <LoginButton type="primary" onClick={this.login}>登录</LoginButton>
        <ActivityIndicator
          toast
          text="登录中..."
          animating={this.props.logining}
        />
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
