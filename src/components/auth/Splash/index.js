import React from 'react';
import {
  View,
  Image,
  StatusBar,
} from 'react-native';
import {
  querySearchRepos,
  queryRepoOverview,
  queryStargazers,
} from '../../../api';
import styled from 'styled-components/native';
import background from './background.png';

const SplashImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;

export default class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <SplashImage source={background} >
        <StatusBar hidden={true} />
      </ SplashImage>
    );
  }
}