// import React from 'react';
// import {
//   View,
//   Text,
// } from 'react-native';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { Icon, TabBar } from 'antd-mobile';

// import Dashboard from './Dashboard';
// import Explore from './Explore';
// import Visual from './Visual';
// import Local from './Local';

// const TabItem = TabBar.Item;

// const mapStateToProps = state => ({

// });
// const mapDispatchToProps = dispatch => bindActionCreators(
//   {

//   },
//   dispatch,
// );

// class Main extends React.Component {
//   static navigationOptions = {
//     tabBarIcon: () => (<Icon type="&#xe61a;" />),
//     tabBarLabel: '数据',
//   }
//   render() {
//     return (
//       <View>
//         <TabBar>
//           <TabItem icon={<Icon type="&#xe605;" />} title="我的" key="Dashboard">
//             <Dashboard />
//           </TabItem>
//           <TabItem icon={<Icon type="&#xe7cf;" />} title="探索" key="Explore">
//             <Explore />
//           </TabItem>
//           <TabItem icon={<Icon type="&#xe61a;" />} title="数据" key="Visual">
//             <Visual />
//           </TabItem>
//           <TabItem icon={<Icon type="&#xe606;" />} title="本地" key="Local">
//             <Local />
//           </TabItem>
//         </TabBar>
//       </View>
//     );
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Main);

import { TabNavigator, TabBarBottom } from 'react-navigation';

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

export default Main;
