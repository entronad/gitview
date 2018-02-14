import React from 'react';
import {
  StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { Icon, Popover } from 'antd-mobile';

import styles from 'config/styles';

const headerItemSize = 32;

const RootView = styled.View`
  width: 100%;
  height: ${styles.nav_bar_height};
  background-color: ${styles.brand_dark};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: ${styles.h_spacing_lg};
  padding-right: ${styles.h_spacing_lg};
`;

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

class Header extends React.Component {
  static propTypes = {
  }
  render() {
    return (
      <RootView>
        <StatusBar backgroundColor={styles.brand_dark} />
        <Avatar source={{ uri: 'https://www.baidu.com/img/baidu_jgylogo3.gif' }} resizeMode="cover" />
        <Title>dddd</Title>
        <MenuEntry type="&#xe652;" color={styles.color_text_base_inverse} />
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
