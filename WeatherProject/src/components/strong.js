import React from 'react-native';
const {
  Component,
  StyleSheet,
  Text,
} = React;

export default class Strong extends Component {
  render() {
    return (
      <Text style={styles.bold}>
        {this.props.children}
      </Text>
    )
  }
}

Strong.propTypes = {
  children: React.PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
});
