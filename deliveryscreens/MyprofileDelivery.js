import React from "react";
import bgimage from "../assets/bgimage3.jpg";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  useState,
  Keyboard,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import globalstyles from "../styles/Global";
import logo from "../assets/logo.png";

const customer = [
  {
    name: "Nisarg mungra",
    mobileNo: "9988d998859",
    Email: "mafdfaad@gmail.com",
    morningMilk: 2,
    eveningMilk: 1,
    houseName_No: "295-A",
    street: "11",
    society: "Raijibaug",
    city: "Junagadh",
    state: "Gujarat",
  },
];

const Myprofiledelivery = () => {
  return (
    <ImageBackground source={bgimage} style={styles.imagecontainer}>
      <View style={styles.box}>
        <Image source={logo} style={styles.profilepic} />
        <Text style={styles.titletext}>{customer[0].name}</Text>
        <View style={styles.detailbox}>
          <Text style={styles.text}>Email: {customer[0].Email}</Text>
          <Text style={styles.text}>Mobile No: {customer[0].mobileNo}</Text>
          <Text style={styles.text1} multiline>
            Address:{" "}
            {`${customer[0].houseName_No},${customer[0].street},${customer[0].society}`+`            
                ${customer[0].city},${customer[0].state}`}
          </Text>
    
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  box: {
    height: "100%",
    width: "100%",
    fontSize: 16,
    backgroundColor: "rgba(0,170,254,0.0)",
    borderRadius: 25,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imagecontainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: "rgba(0,170,254,0.0)",
    opacity: 1,
  },

  text: {
    marginTop: 14,
    fontSize: 22,
    height: 40,
    width:'100%',
    color: "#111",
    marginHorizontal: 0,
    // borderBottomWidth:0.5,
    // borderColor: "rgba(0,170,254,0.5)",
    backgroundColor: "rgba(0,170,254,0.1)",
    textAlign:'left',
  },

  text1: {
    marginTop: 14,
    fontSize: 22,
    height: 80,
    width:'100%',
    color: "#111",
    marginHorizontal: 0,
    // borderBottomWidth:0.5,
    // borderColor: "rgba(0,170,254,0.5)",
    backgroundColor: "rgba(0,170,254,0.1)",
    textAlign:'left',
  },

  titletext: {
    alignContent: "center",
    justifyContent: "center",
    color: "#111",
    fontSize: 28,
    marginTop: 10,
    // marginLeft:12,
  },

  profilepic: {
    backgroundColor: "rgba(0,170,254,0.1)",
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 120,
    marginTop: 100,
    borderRadius: 150,
  },
  detailbox: {
    backgroundColor: "rgba(0,150,254,0.0)",
    borderTopWidth:0.5,
    borderColor:"rgba(0,170,254,0.4)",
    width: 340,
    height: 300,
    marginTop: 5,

    alignItems: "flex-start",
  },


});
export default Myprofiledelivery;
