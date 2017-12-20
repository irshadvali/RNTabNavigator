//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
class ScreenThree extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ScreenThree</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default ScreenThree;
