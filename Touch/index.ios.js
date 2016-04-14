import React from 'react-native';
const {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

import PanDemo from './PanDemo';
import PressDemo from './PressDemo';

const Touch = React.createClass({
  render: function() {
    return (
      <PanDemo/>
    );
  }
});

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

AppRegistry.registerComponent('Touch', () => Touch);
