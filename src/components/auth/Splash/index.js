import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { splash, readAccessToken } from '../action';
import { resetNavigationTo } from 'utils';
import background from './background.png';

const mapStateToProps = state => ({
  splashFinished: state.auth.splashFinished,
  accessTokenRead: state.auth.accessTokenRead,

  authorized: state.auth.authorized,
})
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    splash,
    readAccessToken,
  },
  dispatch
);

const SplashImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;

class Splash extends React.Component {
  constructor(props) {
    super(props);
    // Splash 一被构造就开始读取 accessToken
    this.props.readAccessToken();
  }
  componentDidMount() {
    // 组件渲染完毕后延时2s
    this.props.splash(2000);
  }
  componentWillUpdate(nextProps, nextState) {
    // 在每次state变化后监听是否要跳转了
    if (nextProps.splashFinished && nextProps.accessTokenRead) {
      this.navigate();
    }
  }
  navigate = () => {
    if (this.props.authorized) {
      resetNavigationTo('Main', this.props.navigation);
    } else {
      resetNavigationTo('Login', this.props.navigation);
    }
  }
  render() {
    return (
      <SplashImage source={background} >
        <StatusBar hidden={true} />
      </ SplashImage>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);