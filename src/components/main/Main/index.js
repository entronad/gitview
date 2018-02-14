import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { Icon, Popover } from 'antd-mobile';

import styles from 'config/styles';

import Header from './Header';
import Dashboard from './Dashboard';
import Explore from './Explore';
import Visual from './Visual';
import Local from './Local';

const headerItemSize = 32;

const headerStyle = {
  height: styles.nav_bar_height,
  backgroundColor: styles.brand_dark,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: styles.h_spacing_lg,
  paddingRight: styles.h_spacing_lg,
};

const Avatar = styled.Image`
  width: ${headerItemSize};
  height: ${headerItemSize};
  border-radius: ${styles.icon_size_lg / 2};
`;

const Title = styled.Text`
  font-size: ${styles.font_size_heading};
  color: ${styles.color_text_base_inverse};
`;

const MenuEntry = styled(Icon)`
  width: ${headerItemSize};
  height: ${headerItemSize};
`;

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => bindActionCreators(
  {

  },
  dispatch,
);

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
  // header: <Header />,
  headerStyle,
  headerLeft: (<Avatar source={{ uri: 'https://www.baidu.com/img/baidu_jgylogo3.gif' }} resizeMode="cover" />),
  headerTitle: (<Title>dddd</Title>),
  headerRight: (<MenuEntry type="&#xe652;" color={styles.color_text_base_inverse} />),
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
