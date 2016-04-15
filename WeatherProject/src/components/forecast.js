import React from 'react-native';
const {
  Component,
  StyleSheet,
  Text,
  View,
} = React;

import Em from './em';
import Strong from './strong';

export default class Forecast extends Component {
  render() {
    return (
      <View style={styles.bottomEdge}>
        <Text style={styles.bigText}>
          <Strong>{this.props.main}</Strong>
        </Text>
        <Text style={styles.mainText}>
          Current conditions: <Em>{this.props.description}</Em>
        </Text>
        <Text style={styles.bigText}>
          <Strong>{this.props.temp.toString()}</Strong>°C
        </Text>
      </View>
    );
  }
}

Forecast.propTypes = {
  main: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  temp: React.PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    paddingBottom: 10,
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
    paddingBottom: 10,
  },
  bottomEdge: {
    paddingBottom: 20,
    alignItems: 'center',
  },
})
