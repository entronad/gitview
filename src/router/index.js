import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  NavigationActions,
} from 'react-navigation';


import Splash from '../components/auth/Splash';
import Login from '../components/auth/Login';
import Main from '../components/auth/Main';

const Gitview = StackNavigator(
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
  {
    initialRouteName: 'Splash',
  }
);

export default Gitview;
