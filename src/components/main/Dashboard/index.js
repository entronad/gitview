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

class Dashboard extends React.Component {
  static navigationOptions: {
    tabBarIcon: () => (<Icon type="&#xe605;" />),
    tabBarLabel: '我的',
  }
  render() {
    return (
      <View>
        <Text>Dashboard</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);