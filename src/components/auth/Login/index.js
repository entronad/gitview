import React from 'react';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Button,
  WhiteSpace,
  WingBlank,
  InputItem,
  List,
  ActivityIndicator,
} from 'antd-mobile';
import styled from 'styled-components/native';

import { AUTH_ACCESS_TOKEN } from 'constants/storageKeys';
import { resetNavigationTo } from 'utils';
import { login as loginAction } from '../action';

const RootView = styled.View`
  background: white;
  width: 100%;
  height: 100%;
`;

const Content = styled(WingBlank)`
  height: 100%;
`;
const InputList = styled(List)`
  margin-top: 50%;
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
    accessToken: PropTypes.string.isRequired,
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
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.authorized) {
      AsyncStorage.setItem(AUTH_ACCESS_TOKEN, nextProps.accessToken);
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
        <Content>
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
          <WhiteSpace size="xl" />
          <Button type="primary" onClick={this.login}>登录</Button>
        </Content>
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
