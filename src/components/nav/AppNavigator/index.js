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


import Splash from 'components/auth/Splash';
import Login from 'components/auth/Login';

import Dashboard from 'components/main/Dashboard';
import Explore from 'components/main/Explore';
import Visual from 'components/main/Visual';
import Local from 'components/main/Local';

const MainNavigator = TabNavigator(
  {
    Dashboard: { screen: Dashboard },
    Explore: { screen: Explore },
    Visual: { screen: Visual },
    Local: { screen: Local },
  },
  {
    tabBarComponent: TabBarBottom,
  }
);

// navigationOptions 放在screen内部
export const RootNavigator = StackNavigator(
  {
    Splash: { screen: Splash },
    Login: { screen: Login },
    Main: { screen: MainNavigator },
  },
  {
    initialRouteName: 'Splash',
  }
);

class AppNavigator extends React.Component {
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
      <RootNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppNavigator);
