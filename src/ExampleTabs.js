/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Tabbar from "./Tabbar";
import ScreenFive from "./screen/ScreenFive";
import ScreenFour from "./screen/ScreenFour";
import ScreenOne from "./screen/ScreenOne";
import ScreenThree from "./screen/ScreenThree";
import ScreenTwo from "./screen/ScreenTwo";

export default class ExampleTabs extends Component {
  constructor() {
    super();
    this.state = {
      page: "HomeScreen"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {
          // if you are using react-navigation just pass the navigation object in your components like this:
          // {this.state.page === "HomeScreen" && <MyComp navigation={this.props.navigation}>Screen1</MyComp>}
        }
        {this.state.page === "HomeScreen" && (
          <View style={styles.wrapper}>
            <ScreenOne />
          </View>
        )}
        {this.state.page === "NotificationScreen" && (
          <View style={styles.wrapper}>
            <ScreenTwo />
          </View>
        )}
        {this.state.page === "ProfileScreen" && (
          <View style={styles.wrapper}>
            <ScreenThree />
          </View>
        )}
        {this.state.page === "ChatScreen" && (
          <View style={styles.wrapper}>
            <ScreenFour />
          </View>
        )}
        {this.state.page === "SearchScreen" && (
          <View style={styles.wrapper}>
            <ScreenFive />
          </View>
        )}

        <Tabbar
          type="ripple"
          rippleColor="#462E74"
          tabbarBgColor="#EEE"
          iconColor="#444"
          selectedIconColor="#462E74"
          labelColor="#444"
          selectedLabelColor="#462E74"
          stateFunc={tab => {
            this.setState({ page: tab.page });
            //this.props.navigation.setParams({tabTitle: tab.title})
          }}
          activePage={this.state.page}
          tabs={[
            {
              page: "HomeScreen",
              title: "HomeScreen",
              icon: "notifications"
            },
            {
              page: "NotificationScreen",
              icon: "notifications",
              badgeNumber: 10
            },
            {
              page: "ProfileScreen",
              icon: "person"
            },
            {
              page: "ChatScreen",
              icon: "chatbubbles",
              badgeNumber: 0
            },
            {
              page: "SearchScreen",
              icon: "search"
            }
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    alignItems: "center"
  }
});

AppRegistry.registerComponent("ExampleTabs", () => ExampleTabs);
