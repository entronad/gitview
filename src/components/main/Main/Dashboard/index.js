import React from 'react';
import {
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { Icon } from 'antd-mobile';

const RootView = styled.View`

`;

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => bindActionCreators(
  {

  },
  dispatch,
);

class Dashboard extends React.Component {
  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
  }
  static navigationOptions = {
    tabBarIcon: () => (<Icon type="&#xe605;" />),
    tabBarLabel: '我的',
  }
  render() {
    return (
      <RootView style={this.props.style} >
        <Text>Dashboard</Text>
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
