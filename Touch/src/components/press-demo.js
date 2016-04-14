import React from 'react-native';

const {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

export default class Button extends Component {
  componentWillMount() {
    this.setState({
      pressing: false
    });
  }

  _onPressIn() {
    this.setState({
      pressing: true
    });
  }

  _onPressOut() {
    this.setState({
      pressing: false
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPressIn={this._onPressIn.bind(this)}
          onPressOut={this._onPressOut.bind(this)}
          style={styles.touchable}>

          <View style={styles.button}>
            <Text style={styles.welcome}>
              {this.state.pressing ? 'EEK!' : 'TOUCH'}
            </Text>
          </View>

        </TouchableHighlight>
      </View>
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
    color: '#FFFFFF',
  },
  touchable: {
    borderRadius: 50,
  },
  button: {
    backgroundColor: '#FF0000',
    borderRadius: 50,
    height: 100,
    width: 100,
    justifyContent: 'center',
  },
});
