import React from 'react-native';
const {
  Component,
  StyleSheet,
  Text,
} = React;

export default class Em extends Component {
  render() {
    return (
      <Text style={styles.italic}>
        {this.props.children}
      </Text>
    )
  }
}

Em.propTypes = {
  children: React.PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  italic: {
    fontStyle: 'italic',
  },
});
