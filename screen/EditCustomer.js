
import React, { Component, useState } from "react";
import bgimage from "../assets/bgimage3.jpg";
import {
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Keyboard,
} from "react-native";
import { TouchableWithoutFeedback, ImageBackground } from "react-native";
import { globalstyles } from "../styles/Global";

class EditCustomer extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <ImageBackground
          source={bgimage}
          style={globalstyles.imagecontainer}
          style={{ flex: 1 }}
        >
          <View style={styles.tocenter}>
            <View style={styles.box}>
              <ScrollView>
                <Text style={styles.titletext}>
                  Enter The Details to add Edit Customer
                </Text>

                <TextInput
                  style={styles.stext}
                  placeholder={"Enter Name"}
                  underlineColorAndroid="transparent"
                />

                <TextInput
                  style={styles.stext}
                  placeholder={"Enter Email"}
                  underlineColorAndroid="transparent"
                />

                <TextInput
                  style={styles.stext}
                  placeholder={"Enter Mobile Number"}
                  underlineColorAndroid="transparent"
                  keyboardType="numeric"
                />

                <TextInput
                  style={styles.stext}
                  placeholder={"Morning Milk"}
                  underlineColorAndroid="transparent"
                  keyboardType="numeric"
                />

                <TextInput
                  style={styles.stext}
                  placeholder={"Evening Milk"}
                  underlineColorAndroid="transparent"
                  keyboardType="numeric"
                />

                <TextInput
                  style={styles.stext}
                  placeholder={"House Number/Name"}
                  underlineColorAndroid="transparent"
                />

                <TextInput
                  style={styles.stext}
                  placeholder={"Society"}
                  underlineColorAndroid="transparent"
                />

                <TextInput
                  style={styles.stext}
                  placeholder={"Pincode"}
                  // underlineColorAndroid='transparent'
                  keyboardType="numeric"
                />

                <TouchableOpacity style={styles.sbutton}>
                  <View>
                    <Text style={styles.buttontext}>Save Changes</Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }

}

const styles = StyleSheet.create({
  tocenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    // marginTop:7,
    height: "100%",
    width: "100%",
    fontSize: 16,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  titletext: {
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#eee",
    fontSize: 28,
    marginTop: 10,
    marginHorizontal: 10,
    borderBottomWidth: 0.5,
  },

  stext: {
    // flex:1,
    marginTop: 7,
    height: 40,
    width: 300,
    // borderBottomWidth:1,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: "rgba(0,0,0,0.2)",
    marginHorizontal: 25,
    paddingLeft: 25,
    marginTop: 20,
    color: "#bbb",
  },

  sbutton: {
    height: 34,
    width: 200,
    borderWidth: 1,
    borderRadius: 40,
    textAlign: "center",
    backgroundColor: "rgba(40,40,40,0.4)",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 25,
    color: "white",
  },

  buttontext: {
    color: "#ddd",
  },

  lasttext: {
    color: "#fff",
    marginTop: 15,
    alignItems: "center",
    alignSelf: "center",
  },
});

export default EditCustomer;
