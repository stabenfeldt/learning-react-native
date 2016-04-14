import React from 'react-native';
const {
  Component,
  StyleSheet,
  Text,
  View,
} = React;

import PanDemo from './PanDemo';
import PressDemo from './PressDemo';

export default class Touch extends Component {
  render() {
    return (
      <PanDemo />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
