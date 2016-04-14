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
  render() {
    return (
      <PanDemo />
    );
  }
}