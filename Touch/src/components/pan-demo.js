// Adapted from https://github.com/facebook/react-native/blob/master/Examples/UIExplorer/PanResponderExample.js
import React from 'react-native';

const {
  Component,
  StyleSheet,
  PanResponder,
  View,
  Text
} = React;

const CIRCLE_SIZE = 90;
const CIRCLE_COLOR = '#002266';
const CIRCLE_HIGHLIGHT_COLOR = '#ff9900';

export default class PanResponderExample extends Component {

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder.bind(this),
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder.bind(this),
      onPanResponderGrant: this._handlePanResponderGrant.bind(this),
      onPanResponderMove: this._handlePanResponderMove.bind(this),
      onPanResponderRelease: this._handlePanResponderEnd.bind(this),
      onPanResponderTerminate: this._handlePanResponderEnd.bind(this),
    });
    this._previousLeft = 160;
    this._previousTop = 350;
    this._circleStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop,
      }
    };
    
    this.setState({
        numberActiveTouches: 0,
    });
  }

  componentDidMount() {
    this._updatePosition();
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          ref={(circle) => {
            this.circle = circle;
          }}
          style={styles.circle}
          {...this._panResponder.panHandlers}/>
        <Text style={styles.info}>{this.state.numberActiveTouches} touch(es)</Text>
        <Text style={styles.info}>position x: {this.state.dx}</Text>
        <Text style={styles.info}>position y: {this.state.dy}</Text>
        <Text style={styles.info}>velocity x: {this.state.vx}</Text>
        <Text style={styles.info}>velocity y: {this.state.vy}</Text>
      </View>
    );
  }

  // _highlight and _unHighlight get called by PanResponder methods,
  // providing visual feedback to the user.
  _highlight() {
    this.circle && this.circle.setNativeProps({
      style: {
        backgroundColor: CIRCLE_HIGHLIGHT_COLOR 
      }
    });
  }

  _unHighlight() {
    this.circle && this.circle.setNativeProps({
      style: {
        backgroundColor: CIRCLE_COLOR
      }
    });
  }

  // We're controlling the circle's position directly with setNativeProps.
  _updatePosition() {
    this.circle && this.circle.setNativeProps(this._circleStyles);
  }

  _handleStartShouldSetPanResponder(e, gestureState) {
    // Should we become active when the user presses down on the circle?
    return true;
  }

  _handleMoveShouldSetPanResponder(e, gestureState) {
    // Should we become active when the user moves a touch over the circle?
    return true;
  }

  _handlePanResponderGrant(e, gestureState) {
    this._highlight();
  }

  _handlePanResponderMove(e, gestureState) {
    this.setState({
      stateID: gestureState.stateID,
      moveX: gestureState.moveX,
      moveY: gestureState.moveY,
      x0: gestureState.x0,
      y0: gestureState.y0,
      dx: gestureState.dx,
      dy: gestureState.dy,
      vx: gestureState.vx,
      vy: gestureState.vy,
      numberActiveTouches: gestureState.numberActiveTouches
    });

    // Calculate current position using deltas
    this._circleStyles.style.left = this._previousLeft + gestureState.dx;
    this._circleStyles.style.top = this._previousTop + gestureState.dy;
    this._updatePosition();
  }

  _handlePanResponderEnd(e, gestureState) {
    this._unHighlight();
    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;
  }
}

const styles = StyleSheet.create({
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: CIRCLE_COLOR,
    position: 'absolute',
  },
  container: {
    flex: 1,
    paddingTop: 30,
  },
  info: {
    backgroundColor: '#cccccc',
    paddingTop: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
});
