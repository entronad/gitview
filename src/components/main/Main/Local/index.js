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

class Local extends React.Component {
  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
  }
  static navigationOptions = {
    tabBarIcon: () => (<Icon type="&#xe606;" />),
    tabBarLabel: '本地',
  }
  render() {
    return (
      <RootView style={this.props.style} >
        <Text>Local</Text>
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Local);
