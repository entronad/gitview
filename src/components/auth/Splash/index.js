import React from 'react';
import {
  View,
  Image,
  StatusBar,
} from 'react-native';
import { resetNavigationTo } from '../../../utils'
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

export default class Splash extends React.Component {
  componentDidMount() {
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