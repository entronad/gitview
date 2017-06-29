import React, {Component, PropTypes} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'

const NAV_BAR_HEIGHT_ANDROID = 50
const NAV_BAR_HEIGHT_IOS = 44
const STATUS_BAR_HEIGHT = 20

export default class NavigationBar extends Component {

  static propTypes = {
    style: View.propTypes.style,
    title: PropTypes.string,
    titleView: PropTypes.element,
    hide: PropTypes.bool,
    leftButton: PropTypes.element,
    rightButton: PropTypes.element
  }
  
}