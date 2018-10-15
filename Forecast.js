import React, {Component} from 'react';

import {StyleSheet, Text, View } from 'react-native';

export default class Forecast extends Component {
  render(){
  return(
    <View style={styles.container}>

      <Text style = {styles.bigText}>
        {this.props.main}
      </Text>

      <Text style = {styles.mainText}>
        Current conditions: {this.props.description}
      </Text>

      <Text Style={styles.bigText}>
        {this.props.temp} F (화씨)
      </Text>


    </View>
  );
  }
}

 const styles = StyleSheet.create({
    container: {
      height: 150,
      fontSize : 60,
    },

    bigText: {
      flex: 2,
      fontSize: 40,
      textAlign : "center",
      margin : 10,
      color: "#FFFFFF"
    },

    mainText: {
      flex: 1,
      fontSize: 20,
      textAlign: "center",
      color: "#FFFFFF"
    },

 });
