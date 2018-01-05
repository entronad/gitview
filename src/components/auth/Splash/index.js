import React from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import { resetNavigationTo } from 'utils';
import { splash, readAccessToken } from '../action';
import background from './background.png';

const mapStateToProps = state => ({
  splashFinished: state.auth.splashFinished,
  accessTokenRead: state.auth.accessTokenRead,
  authorized: state.auth.authorized,
});
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    splash,
    readAccessToken,
  },
  dispatch,
);

const RootView = styled.View`
  width: 100%;
  height: 100%;
`;

const SplashImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;

class Splash extends React.Component {
  static propTypes = {
    splashFinished: PropTypes.bool.isRequired,
    accessTokenRead: PropTypes.bool.isRequired,
    authorized: PropTypes.bool.isRequired,

    splash: PropTypes.func.isRequired,
    readAccessToken: PropTypes.func.isRequired,

    navigation: PropTypes.object.isRequired,
  }
  static navigationOptions = {
    header: null,
  }
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
      <RootView>
        <StatusBar hidden />
        <SplashImage source={background} />
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);