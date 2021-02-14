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

  titlecontainer: {
    flex: 1,
    marginTop: 7,
    fontSize: 28,
    borderRadius: 3,
    backgroundColor: "rgba(0,0,0,0.2)",
    color: "#fff",
    flexDirection: "row",
    marginHorizontal: 4,
  },

  editprofilebutton: {
    height: 34,
    width: 60,
    borderWidth: 1,
    borderRadius: 4,
    textAlign: "center",
    backgroundColor: "rgba(40,40,40,0.6)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    color: "white",
  },

  tablebox: {
    flex: 12,
    borderRadius: 3,
    marginHorizontal: 4,
    marginTop: 4,
    marginBottom: 8,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
});
export default About;
