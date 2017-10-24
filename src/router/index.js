import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  NavigationActions,
} from 'react-navigation';

import Splash from '../components/Splash';
import Login from '../components/Login';
import Welcome from '../components/Welcome';

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
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null,
      },
      path: 'welcome',
    }
  }
);

export default Gitview;
