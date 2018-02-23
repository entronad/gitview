import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Header from './Header';
import Dashboard from './Dashboard';
import Explore from './Explore';
import Visual from './Visual';
import Local from './Local';

const Main = TabNavigator(
  {
    Dashboard: { screen: Dashboard },
    Explore: { screen: Explore },
    Visual: { screen: Visual },
    Local: { screen: Local },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
  },
);

Main.navigationOptions = {
  header: <Header />,
};

export default Main;
