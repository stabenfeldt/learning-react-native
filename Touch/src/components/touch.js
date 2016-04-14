import React from 'react-native';

const {
  Component,
  StyleSheet,
  Text,
  View,
} = React;

import PanDemo from './pan-demo';
import PressDemo from './press-demo';

export default class Touch extends Component {
  // Place PressDemo instead of PanDemo to see it, and vice-versa.
  render() {
    return (
      <View>
        <PanDemo />
      </View>
    );
  }
}