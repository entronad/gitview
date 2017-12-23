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
import { login as loginAction } from '../action';
import { AUTH_ACCESS_TOKEN } from 'constants/storageKeys';

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
})
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    loginAction,
  },
  dispatch
);

class Login extends React.Component {
  constructor(props) {
    super(props);
    // const ast = async () => {
    //   await AsyncStorage.setItem('aaa','bbb');
    //   try {
    //     await AsyncStorage.removeItem('aaa')
    //   } catch (error) {
    //     console.log(e)
    //   }
    //   try {
    //     await AsyncStorage.removeItem('aaa')
    //   } catch (error) {
    //     console.log(e)
    //   }
    // }
    // ast()
    this.state = {
      username: null,
      password: null,
    }
  }
  componentWillUpdate() {
    if (this.props.authorized) {
      AsyncStorage.setItem(AUTH_ACCESS_TOKEN, this.props.accessToken);
      this.navigate();
    }
  }
  navigate = () => {
    this.props.navigation.navigate('Main');
  }
  login = () => {
    this.props.loginAction({
      username: this.state.username,
      password: this.state.password,
    })
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
  render() {
    return (
      <RootView>
        <Content>
          <InputList>
            <InputItem
              placeholder="GitHub账号"
              value={this.state.username}
              onChange={this.setUsername}
            >账号:</InputItem>
            <InputItem
              placeholder="GitHub登录密码"
              type="password"
              value={this.state.password}
              onChange={this.setPassword}
            >密码:</InputItem>
          </InputList>
          <WhiteSpace size="xl"/>
          <Button type="primary" onClick={this.login}>登录</Button>
        </Content>
        <ActivityIndicator
          toast
          text="登录中..."
          animating={this.props.logining}
        />
      </ RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
