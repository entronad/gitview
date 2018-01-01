import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Icon } from 'antd-mobile';

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => bindActionCreators(
  {

  },
  dispatch,
);

class Visual extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => (<Icon type="&#xe61a;" />),
    tabBarLabel: '数据',
  }
  render() {
    return (
      <View>
        <Text>Visual</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Visual);
