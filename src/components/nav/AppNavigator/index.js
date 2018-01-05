import React from 'react';
import { BackHandler } from 'react-native';
import PropTypes from 'prop-types';
import {
  StackNavigator,
  NavigationActions,
  addNavigationHelpers,
} from 'react-navigation';
import { connect } from 'react-redux';

import Splash from 'components/auth/Splash';
import Login from 'components/auth/Login';
import Main from 'components/main/Main';

// navigationOptions 放在screen内部
export const RootNavigator = StackNavigator(
  {
    Splash: { screen: Splash },
    Login: { screen: Login },
    Main: { screen: Main },
  },
  {
    initialRouteName: 'Splash',
  },
);

const mapStateToProps = state => ({
  nav: state.nav,
});

class AppNavigator extends React.Component {
  static propTypes = {
    nav: PropTypes.object.isRequired,

    dispatch: PropTypes.func.isRequired,
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
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
      <RootNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })}
      />
    );
  }
}

export default connect(mapStateToProps)(AppNavigator);
