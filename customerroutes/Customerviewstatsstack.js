import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React from "react";
import Header from "../shared/Header";
import Customerviewstats from "../customerscreens/Customerviewstats";

const screens = {
  Customerviewstatsstack: {
    screen: Customerviewstats,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigtion={navigation} title="Customer data" />
        ),
      };
    },
  },
};

const Customerviewstatsstack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#0d0",
      height: 80,
    },
  },
});
export default Customerviewstatsstack;
