import { createStackNavigator } from "react-navigation-stack";
import About from "../screen/About";
import React from "react";
import Header from "../shared/Header";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigtion={navigation} title="About" />,
      };
    },
  },
};


const Aboutstack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#0d0",
      height: 80,
    },
  },
});

export default Aboutstack;
