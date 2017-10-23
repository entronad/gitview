import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  Image
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator
} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', {user: 'Tom'})}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    const {params} = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}



///////////////////////////////////////////////

class RecentChatsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>List of recent chats</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', {user: 'Rec'})}
          title="Chat with Rec"
        />
      </View>
    );
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>List of all contact</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', {user: 'All'})}
          title="Chat with All"
        />
      </View>
    );
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: {screen: RecentChatsScreen},
  All: {screen: AllContactsScreen},
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

const SimpleApp = StackNavigator({
  Home: {screen: MainScreenNavigator},
  Chat: {screen: ChatScreen}
});

///////////////////// DrawerNavigation ////////////////////////////
class DrawerHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../test.png')}
        style={[DrawerStyles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class DrawerNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../test.png')}
        style={[DrawerStyles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const DrawerStyles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const DrawerApp = DrawerNavigator({
  Home: {
    screen: DrawerHomeScreen,
  },
  Notifications: {
    screen: DrawerNotificationsScreen,
  },
});

AppRegistry.registerComponent('playground', () => DrawerApp);