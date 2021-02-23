import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { globalstyles } from "../styles/Global";
import bgimage from "../assets/bgimage3.jpg";

const About = ({ navigation }) => {
  return (
    <ImageBackground source={bgimage} style={globalstyles.imagecontainer}>
      <View>
        <Text style={styles.nametext}> Hello!!. ..</Text>
        <Text style={styles.nametext}>
          This is the application to handle daily milk requirments of the
          customers and also to track the records of Milk and Other Products
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  nametext: {
    marginTop: 60,
    fontSize: 22,
    color: "#23d",
    alignItems: "center",
    marginHorizontal: 8,
    justifyContent: "center",
  },

  
});
export default About;
