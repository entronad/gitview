import React from 'react';
import { BackHandler } from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  NavigationActions,
  addNavigationHelpers,
} from 'react-navigation';
import { connect } from 'react-redux';


import Splash from '../components/auth/Splash';
import Login from '../components/auth/Login';
import Main from '../components/auth/Main';

export const AppNavigator = StackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    Main: {
      screen: Main,
    },
  },
  // {
  //   initialRouteName: 'Splash',
  // }
);

class AppNavigatorWithState extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppNavigatorWithState);
