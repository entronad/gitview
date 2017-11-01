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
    splash: {
      screen: Splash,
      navigationOptions: {
        header: null,
      },
    },
    login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    main: {
      screen: Main,
    },
  },
  {
    initialRouteName: 'splash',
  }
);

export default Gitview;
