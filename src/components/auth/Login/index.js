import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  authorized: state.auth.authorized,
})

class Login extends React.Component {
  nav = () => {
    this.props.navigation.navigate('Main');
  }
  render() {
    // this.props.dispatch({
    //   type: 'LOGIN_SUCCESS',
    //   payload: {
    //     accessToken: 'response.body.token',
    //   }
    // });
    return (
      <View>
        <Text>Login</Text>
        <Button onPress={this.nav} title={'nav'}/>
      </ View>
    );
  }
}

export default connect(mapStateToProps)(Login);
