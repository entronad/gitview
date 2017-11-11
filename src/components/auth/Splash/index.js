import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  querySearchRepos,
  queryRepoOverview,
  queryStargazers,
} from '../../../api';

export default class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      a: 'a',
      b: 'b',
      c: 'c',
    }
  }
  componentDidMount() {
    this.require();
  }
  require = async () => {
    const aP = querySearchRepos({ query: 'vue' }, '9da45c0ed04c77c47278bb260d7c6b6c2c9b9fa8');
    const bP = queryRepoOverview({ owner: 'vuejs', name: 'vue'}, '9da45c0ed04c77c47278bb260d7c6b6c2c9b9fa8');
    const cP = queryStargazers({ owner: 'vuejs', name: 'vue'}, '9da45c0ed04c77c47278bb260d7c6b6c2c9b9fa8');
    const a = await aP;
    const b = await bP;
    const c = await cP;
    console.log(a);
    console.log(b);
    console.log(c);
  }
  render() {
    return (
      <View>
        <Text>{this.state.a}</Text>
        <Text>{this.state.b}</Text>
        <Text>{this.state.c}</Text>
      </View>
    );
  }
}