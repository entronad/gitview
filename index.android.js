/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import NavigationBar from './NavigationBar'

export default class gitview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'home'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title={'boy'}
          style={{
            backgroundColor: 'red'
          }}
          statusBar = {
            {
              backgroundColor: 'red'
            }
          }
          leftButton = {
            <TouchableOpacity>
              <Image source={require('./res/images/ic_arrow_back_white_36pt.png')}/>
            </TouchableOpacity>
          }
        />
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_popular'}
            selectedTitleStyle={{color: 'red'}}
            title="Home"
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_popular.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('./res/images/ic_popular.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_trending'}
            title="Profile"
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_favorite'}
            selectedTitleStyle={{color: 'red'}}
            title="Home"
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_popular.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]} source={require('./res/images/ic_popular.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_my'}
            title="Profile"
            renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
            onPress={() => this.setState({ selectedTab: 'tb_my' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  page1: {
    flex: 1,
    backgroundColor: 'red'
  },
  page2: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  image: {
    height: 22,
    width: 22
  }
});

AppRegistry.registerComponent('gitview', () => gitview);
