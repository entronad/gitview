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

class Local extends React.Component {
  static navigationOptions: {
    tabBarIcon: () => (<Icon type="&#xe606;" />),
    tabBarLabel: '本地',
  }
  render() {
    return (
      <View>
        <Text>Local</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Local);