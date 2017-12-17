import React from 'react';
import {
  View,
  Text
} from 'react-native'
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  authorized: state.auth.authorized,
})

class Login extends React.Component {
  render() {
    this.props.dispatch({
      type: 'LOGIN_SUCCESS',
      payload: {
        accessToken: 'response.body.token',
      }
    });
    console.log('** login');
    return (
      <Text>Login</Text>
    );
  }
}

export default connect(mapStateToProps)(Login);
