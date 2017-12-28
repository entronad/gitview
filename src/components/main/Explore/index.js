import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Icon } from 'antd-mobile';

const mapStateToProps = state => ({
  
})
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    
  },
  dispatch
);

class Explore extends React.Component {
  static navigationOptions: {
    tabBarIcon: () => (<Icon type="&#xe7cf;" />),
    tabBarLabel: '探索',
  }
  render() {
    return (
      <View>
        <Text>Explore</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore);