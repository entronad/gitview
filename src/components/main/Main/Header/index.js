import React from 'react';
import {
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import { SIZE, COLOR } from 'constants/styles';

const RootView = styled.View`
  width: 100%;
  height: 45;
  background-color: ${COLOR.PRIMARY};
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
        <Text>Header</Text>
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
