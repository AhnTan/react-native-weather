/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Forecast from "./Forecast";
import OpenWeatherMap from "./open_weather_map";
import {Platform, StyleSheet, Text, TextInput, View, Image, ImageBackground } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class WeatherProject extends Component<Props> {


  constructor(props) {
    super(props);
    this.state = { zip: "", forecast:null };
  }

  _handleTextChange = event => {
    let zip = event.nativeEvent.text;
    OpenWeatherMap.fetchForecast(zip).then(forecast => {
      console.log(forecast);
      this.setState({forecast: forecast});
    });
  };

  render() {

      let content = null;
      if (this.state.forecast != null){
        content = (
          <Forecast
            main = {this.state.forecast.main}
            description = {this.state.forecast.description}
            temp = {this.state.forecast.temp}
            >
          </Forecast>
        );
      }

    return (
      <View style={(styles.container)}>

          <ImageBackground
            source={require("./flowers.png")}
            resizeMode="cover"
            style={styles.backdrop}
            >

          <View style={styles.overlay}>
            <View style={styles.row}>
              <Text style={styles.mainText}>
                  Current weather
              </Text>
              <View style={styles.zipContainer}>
                  <TextInput
                    style={[styles.zipCode]}
                    onSubmitEditing={this._handleTextChange}
                    />
              </View>

            </View>
            {content}
          </View>
</ImageBackground>
      </View>
    );
  }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backdrop : {
    flex: 1,
    flexDirection: "column",
  },
  overlay : {
    paddingTop : 5,
    backgroundColor: "#000000",
    opacity: 0.5,
    flexDirection: "column",
    alignItems : "center"
  },
  row : {
    flexDirection : "row",
    flexWrap: "nowrap",
    alignItems : "flex-start",
    padding : 30,
  },
  zipContainer : {
    height : baseFontSize,
    borderBottomColor : "#DDDDDD",
    marginLeft : 5,
    marginTop : 2,
  },
  zipCode : {
    fontSize : 16,
    borderWidth : 2,
    borderColor : "#FFFFFF",
    width: 80,
    height: 30,
    padding : 5,
  },
  mainText : {
    fontSize : baseFontSize,
    color : "#FFFFFF",
  },
  input: {
    fontSize : 18,
    color : "#000000",
    width: 80,
    height: 40,
    padding: 2,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor : '#F99999'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
