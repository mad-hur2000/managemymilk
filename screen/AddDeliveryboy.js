import React, { Component, useState, useContext, useEffect } from "react";
import bgimage from "../assets/bgimage3.jpg";
import {
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native";
import { TouchableWithoutFeedback, ImageBackground } from "react-native";
import { globalstyles } from "../styles/Global";
import { UserContext } from "../context/Usercontext";
import Loading from "./Loading";

const AddDeliveryboy = () => {
  const { id } = useContext(UserContext);
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState();
  const [address, setAddress] = useState();

  const [message, setMessage] = useState("");
  console.log("add delivery form");

  const delivery = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    mobileno: mobileno,
    address: address,
    _id: id,
  };

  useEffect(() => {
    setLoading(true);
    console.log(JSON.stringify(delivery));
    fetch("https://managedairy.herokuapp.com/delivery/create", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(delivery),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [submit]);

  // const handlesubmit = () => {
  //   if (
  //     name != "" &&
  //     email != "" &&
  //     mobileno != "" &&
  //     house != "" &&
  //     society != "" &&
  //     pincode != "" &&
  //     phone != ""
  //   ) {
  //     setSubmit(!submit);
  //     return;
  //   } else {
  //     setMessage("You might miss some of the details");
  //     return;
  //   }
  // };

  const handlesubmit = () => {
    console.log("handle submit");
    setSubmit(!submit);
  };

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
                Enter The Details to add New DeliveryBoy
              </Text>

              <TextInput
                style={globalstyles.stext}
                placeholder={"Enter Firstname"}
                underlineColorAndroid="transparent"
                onChangeText={(text) => setFirstname(text)}
              />

              <TextInput
                style={globalstyles.stext}
                placeholder={"Enter Lastname"}
                underlineColorAndroid="transparent"
                onChangeText={(text) => setLastname(text)}
              />

              <TextInput
                style={globalstyles.stext}
                placeholder={"Enter Mobile Number"}
                underlineColorAndroid="transparent"
                keyboardType="numeric"
                onChangeText={(text) => setMobileno(text)}
              />

              <TextInput
                style={globalstyles.stext}
                placeholder={"address"}
                underlineColorAndroid="transparent"
                onChangeText={(text) => setAddress(text)}
              />

              <TextInput
                style={globalstyles.stext}
                placeholder={"Enter Email"}
                underlineColorAndroid="transparent"
                onChangeText={(text) => setEmail(text)}
              />

              <TouchableOpacity style={styles.sbutton} onPress={handlesubmit}>
                <View>
                  <Text style={globalstyles.buttontext}>
                    Create New Deliveryboy
                  </Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

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
    backgroundColor: "rgba(0,150,254,0.0)",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  titletext: {
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#111",
    fontSize: 28,
    marginTop: 10,
    marginHorizontal: 10,
    borderBottomWidth: 0.5,
  },

  // stext: {
  //   // flex:1,
  //   marginTop: 7,
  //   height: 40,
  //   width: 300,
  //   // borderBottomWidth:1,
  //   borderRadius: 25,
  //   fontSize: 16,
  //   backgroundColor: "rgba(0,150,254,0.1)",
  //   marginHorizontal: 25,
  //   paddingLeft: 25,
  //   marginTop: 20,
  //   color: "#bbb",
  // },

  sbutton: {
    height: 34,
    width: 200,
    borderWidth: 1,
    borderRadius: 40,
    textAlign: "center",
    backgroundColor: "rgba(0,170,254,0.3)",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 25,
    color: "#111",
  },

  buttontext: {
    color: "#111",
  },
});

export default AddDeliveryboy;
