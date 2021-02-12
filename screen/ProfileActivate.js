import React, { Component, useState } from "react";
import { ImageBackground } from "react-native";

import bgimage from "../assets/bgimage3.jpg";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { globalstyles } from "../styles/Global";

class ProfileActivate extends Component {
  render() {
    return (
      <ImageBackground source={bgimage} style={styles.imagecontainer}>
        <View style={styles.box}>
          <Text style={styles.heading}>
            Complete your Profile to Activate Your Account
          </Text>
          {/*             
                <View style={styles.logo}>
                <Image source={require('./assets/logo.png')} resizeMode='contain' />
                </View> */}

          <TextInput
            placeholder="Enter First Name"
            style={globalstyles.stext}
          />
          <TextInput placeholder="Enter Last Name" style={globalstyles.stext} />
          <TextInput
            placeholder="Mobile Number"
            style={globalstyles.stext}
            keyboardType="numeric"
          />
          <TextInput placeholder="Address" style={globalstyles.stext} />
          <TextInput placeholder="Location" style={globalstyles.stext} />

          <TouchableOpacity style={globalstyles.sbutton}>
            <View>
              <Text style={globalstyles.buttontext}>Activate Profile</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imagecontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.4)",
  },

  heading: {
    fontSize: 25,
    textAlign: "center",
    textShadowColor: "#eee",
    textShadowRadius: 10,
    fontWeight: "100",
    marginTop: 5,
    marginBottom: 100,
    color: "#eee",
  },

  box: {
    marginTop: 7,
    height: "100%",
    width: "100%",
    fontSize: 16,
    backgroundColor: "rgba(0,0,0,0.2)",
    marginTop: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProfileActivate;
