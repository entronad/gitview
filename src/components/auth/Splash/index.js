import React from 'react';
import {
  View,
  Image,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { resetNavigationTo, ensureDelay } from '../../../utils'
import {
  querySearchRepos,
  queryRepoOverview,
  queryStargazers,
} from '../../../api';
import styled from 'styled-components/native';
import background from './background.png';

const mapStateToProps = state => ({
  authorized: state.auth.authorized,
})

const SplashImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;

class Splash extends React.Component {
  componentDidMount() {
    console.log(this.props);
    setTimeout(this.navigate, 2000);
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

export default connect(mapStateToProps)(Splash);