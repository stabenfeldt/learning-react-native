import React from 'react-native';
const {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} = React;

const Forecast = require('./Forecast');

const WeatherProject = React.createClass({
  getInitialState: function() {
    return {
      zip: '',
      forecast: null
    };
  },

  _handleTextChange: function(event) {
    const zip = event.nativeEvent.text;
    this.setState({zip: zip});
    fetch('http://api.openweathermap.org/data/2.5/weather?q='
      + zip + '&units=metric&APPID=245b784becb9d7ad326e947a25eef839')
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          forecast: {
            main: responseJSON.weather[0].main,
            description: responseJSON.weather[0].description,
            temp: responseJSON.main.temp
          }
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  },

  render: function() {
    let content = null;
    if (this.state.forecast !== null) {
      content = <Forecast 
                  main={this.state.forecast.main}
                  description={this.state.forecast.description}
                  temp={this.state.forecast.temp}/>;
    }
    return (
      <View style={styles.container}>
        <Image source={require('image!flowers')}
               resizeMode='cover'
               style={styles.backdrop}>
          <View style={styles.overlay}>
           <View style={styles.row}>
             <Text style={styles.mainText}>
               Current weather 
             </Text>
           </View>
           <View style={styles.rowZipCode}>
              <TextInput
                style={styles.zipCode}
                placeholder='Name of a city'
                onSubmitEditing={this._handleTextChange}/>
           </View>
           {content}
         </View>
        </Image>
      </View>
    );
  }
});

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column',
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    paddingTop: 30,
    paddingBottom: 10,
  },
  rowZipCode: {
    paddingBottom: 30,
  },
  zipContainer: {
    flex: 1,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3,
  },
  zipCode: {
    width: 375,
    height: baseFontSize * 3,
    borderBottomColor: '#DDDDDD',
    backgroundColor: '#ffffff',
    color: '#000000',
    textAlign: 'center',
    fontSize: baseFontSize * 2,
    padding: 5,
  },
  mainText: {
    flex: 1,
    fontSize: baseFontSize,
    color: '#FFFFFF',
  }
});

module.exports = WeatherProject;
