import React from 'react-native';
const {
  Component,
  StyleSheet,
  Text,
  View,
} = React;

import Em from './Em';
import Strong from './Strong';

export default class Forecast extends Component {
  render() {
    return (
      <View>
        <Text style={styles.bigText}>
          <Strong>{this.props.main}</Strong>
        </Text>
        <Text style={styles.mainText}>
          Current conditions: <Em>{this.props.description}</Em>
        </Text>
        <Text style={styles.bigText}>
          <Strong>{this.props.temp}</Strong>°C
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF'
  }
})
