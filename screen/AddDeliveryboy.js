import React, { Component, useState, useContext } from "react";
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

const AddDeliveryboy = () => {
  const { phone } = useContext(ManagerContext);
  const [submit, setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [morning, setMorning] = useState(0);
  const [evening, setEvening] = useState(0);
  const [house, setHouse] = useState("");
  const [society, setSociety] = useState("");
  const [pincode, setPincode] = useState("");

  const [message, setMessage] = useState("");

  const customer = {
    name: { name },
    email: { email },
    mobileno: { mobileno },
    morning: { morning },
    evening: { evening },
    house: { house },
    society: { society },
    pincode: { pincode },
    phone: { phone },
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://managedairy.herokuapp.com/delivery/create", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(customer),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [submit]);

  const handlesubmit = () => {
    if (
      name != "" &&
      email != "" &&
      mobileno != "" &&
      house != "" &&
      society != "" &&
      pincode != "" &&
      phone != ""
    ) {
      setSubmit(!submit);
      return;
    } else {
      setMessage("You might miss some of the details");
      return;
    }
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
                style={styles.stext}
                placeholder={"Enter Name"}
                underlineColorAndroid="transparent"
                onChangeText={(text) => setName(text)}
              />

              <TextInput
                style={styles.stext}
                placeholder={"Enter Email"}
                underlineColorAndroid="transparent"
                onChangeText={(text) => setEmail(text)}
              />

              <TextInput
                style={styles.stext}
                placeholder={"Enter Mobile Number"}
                underlineColorAndroid="transparent"
                keyboardType="numeric"
                onChangeText={(text) => setMobileno(text)}
              />

              <TextInput
                style={styles.stext}
                placeholder={"Morning Milk"}
                underlineColorAndroid="transparent"
                keyboardType="numeric"
                onChangeText={(text) => setMorning(text)}
              />

              <TextInput
                style={styles.stext}
                placeholder={"Evening Milk"}
                underlineColorAndroid="transparent"
                keyboardType="numeric"
                onChangeText={(text) => setEvening(text)}
              />

              <TextInput
                style={styles.stext}
                placeholder={"House Number/Name"}
                underlineColorAndroid="transparent"
                onChangeText={(text) => setHouse(text)}
              />

              <TextInput
                style={styles.stext}
                placeholder={"Society"}
                underlineColorAndroid="transparent"
                onChangeText={(text) => setSociety(text)}
              />

              <TextInput
                style={styles.stext}
                placeholder={"Pincode"}
                // underlineColorAndroid='transparent'
                onChangeText={(text) => setPincode(text)}
              />

              <TouchableOpacity style={styles.sbutton}>
                <View>
                  <Button
                    style={styles.buttontext}
                    onPress={handlesubmit}
                    title="Create New DeliveryBoy"
                  />
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

export default AddDeliveryboy;
