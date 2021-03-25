import React, { Component, useState, useContext, useEffect } from "react";
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
  Button,
} from "react-native";
import { TouchableWithoutFeedback, ImageBackground } from "react-native";
import { globalstyles } from "../styles/Global";
import { ManagerContext } from "../context/ManagerContext";
import Loading from "./Loading";
import { sub } from "react-native-reanimated";
import { FlatList } from "react-native-gesture-handler";

const AddCustomer = () => {
  const { phone } = useContext(ManagerContext);
  const [submit, setSubmit] = useState(false);
  const [ loading , setLoading ] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [morning, setMorning] = useState(0);
  const [evening, setEvening] = useState(0);
  const [housenameorno, setHousenameorno] = useState("");
  const [society, setSociety] = useState("");
  const [pincode, setPincode] = useState("");

  const [message, setMessage] = useState([]);

  const customer = {
    name: name,
    email: email,
    mobileno: mobileno,
    morning: morning,
    evening: evening,
    house: housenameorno,
    society: society,
    pincode: pincode,
    managerno: phone,
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://managedairy.herokuapp.com/customer/create", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(customer),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [submit]);
  console.log(message);

  // const handlesubmit = () => {
  //   const emailregx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //   const mobileregx = /^[6-9]\d{9}$/;
  //   if (name == "") {
  //     setMessage([...message, "enter name"]);
  //   } else if (!emailregx.test(email)) {
  //     setMessage([...message, "enter valid email"]);
  //   } else if (!mobileregx.test(mobileno)) {
  //     setMessage([...message, "enter valid mobile number"]);
  //   } else if (housenameorno == "") {
  //     setMessage([...message, "enter valid house number or name"]);
  //   } else if (society == "") {
  //     setMessage([...message, "enter valid society name"]);
  //   } else if (pincode.length > 6 || pincode.length < 6) {
  //     setMessage([...message, "enter valid pincode"]);
  //   } else {
  //     setSubmit(!submit);
  //   }
  // };

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
                Enter The Details to add New Customer
              </Text>                

              <TextInput
                style={globalstyles.stext}
                placeholder={"Enter Name"}
                underlineColorAndroid="transparent"
                onChangeText={(text) => setName(text)}
              />

              <TextInput
                style={globalstyles.stext}
                placeholder={"Enter Email"}
                underlineColorAndroid="transparent"
                onChangeText={(text) => setEmail(text)}
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
                placeholder={"Morning Milk"}
                underlineColorAndroid="transparent"
                keyboardType="numeric"
                onChangeText={(text) => setMorning(text)}
              />

              <TextInput
                style={globalstyles.stext}
                placeholder={"Evening Milk"}
                underlineColorAndroid="transparent"
                keyboardType="numeric"
                onChangeText={(text) => setEvening(text)}
              />

              <TextInput
                style={globalstyles.stext}
                placeholder={"House Number/Name"}
                underlineColorAndroid="transparent"
                onChangeText={(text) => setHousenameorno(text)}
              />

              <TextInput
                style={globalstyles.stext}
                placeholder={"Society"}
                underlineColorAndroid="transparent"
                onChangeText={(text) => setSociety(text)}
              />

              <TextInput
                style={globalstyles.stext}
                placeholder={"Pincode"}
                // underlineColorAndroid='transparent'
                onChangeText={(text) => setPincode(text)}
              />

              <TouchableOpacity
                style={globalstyles.sbutton}
                onPress={() => setSubmit(true)}
                title="Create New Customer"
                disabled = { loading ? true : false }
              >
                <View>
                  <Text style={globalstyles.buttontext}>
                    Create New Customer
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
    borderColor: "rgba(0,150,254,0.9)",
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

export default AddCustomer;
