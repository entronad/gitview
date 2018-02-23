import React from 'react';
import {
  StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { Icon } from 'antd-mobile';

import styles from 'config/styles';

import { getViewer } from '../../action';

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
  viewer: state.main.viewer,
  module: state.main.module,
});
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getViewer,
  },
  dispatch,
);

class Header extends React.Component {
  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),

    viewer: PropTypes.object,
    module: PropTypes.string.isRequired,

    getViewer: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.props.getViewer();
  }
  getTitle = () => {
    switch (this.props.module) {
      case 'Dashboard':
        return '我的';
      case 'Explore':
        return '探索';
      case 'Visual':
        return '数据';
      case 'Local':
        return '本地';
      default:
        return '';
    }
  }
  render() {
    return (
      <RootView style={this.props.style} >
        <StatusBar backgroundColor={styles.brand_dark} />
        <Avatar source={this.props.viewer && { uri: this.props.viewer.avatarUrl }} resizeMode="cover" />
        <Title>{this.getTitle()}</Title>
        <MenuEntry type="&#xe652;" color={styles.color_text_base_inverse} />
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
