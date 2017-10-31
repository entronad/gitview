import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  NavigationActions,
} from 'react-navigation';

import Welcome from '../components/Welcome';
import Splash from '../components/Splash';
import Login from '../components/Login';
import Main from '../components/Main';

const Gitview = StackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null,
      }
    },
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null,
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      }
    },
    Main: {
      screen: Main
    }
  }
);

export default Gitview;
