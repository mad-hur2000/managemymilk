import React, { useContext, useEffect, useState } from "react";
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
import { ManagerContext } from "../context/ManagerContext";

const EditCustomer = () => {
  const { currentselectedcustomer } = useContext(ManagerContext);
  const [loading, setLoading] = useState(false);
  const [customerdata, setCustomerdata] = useState();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [morning, setMorning] = useState(0);
  const [evening, setEvening] = useState(0);
  const [housenameorno, setHousenameorno] = useState("");
  const [society, setSociety] = useState("");
  const [pincode, setPincode] = useState("");

  const [message, setMessage] = useState([]);
  const [submit, setSubmit] = useState(false);

  const customer = {
    name: name,
    email: email,
    mobileno: mobileno,
    morning: morning,
    evening: evening,
    house: housenameorno,
    society: society,
    pincode: pincode,
    _id: currentselectedcustomer,
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://managedairy.herokuapp.com/customer/getdata", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ _id: currentselectedcustomer }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCustomerdata(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setName(customerdata.name);
    setEmail(customerdata.email);
    setMobileno(customerdata.mobileno);
    setMorning(customerdata.morning);
    setEvening(customerdata.evening);
    setHousenameorno(customerdata.house);
    setSociety(customerdata.society);
    setPincode(customerdata.pincode);
  }, [customerdata]);

  useEffect(() => {
    setLoading(true);
    fetch("https://managedairy.herokuapp.com/customer/updatedata", {
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

  console.log(currentselectedcustomer);
  console.log(message);

  const handlesubmit = () => {
    setSubmit(true);
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
                Enter Details to Edit Customer
              </Text>

              <TextInput
                style={globalstyles.stext}
                placeholder={"Enter Name"}
                underlineColorAndroid="transparent"
                onChangeText={(text) => setName(text)}
                value={name}
              />

              <TextInput
                style={globalstyles.stext}
                placeholder={"Enter Email"}
                underlineColorAndroid="transparent"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />

              <TextInput
                style={globalstyles.stext}
                placeholder={"Enter Mobile Number"}
                underlineColorAndroid="transparent"
                keyboardType="numeric"
                value={mobileno}
                onChangeText={(text) => setMobileno(text)}
              />

              <TextInput
                style={globalstyles.stext}
                placeholder={"Morning Milk"}
                underlineColorAndroid="transparent"
                keyboardType="numeric"
                value={morning}
                onChangeText={(text) => setMorning(text)}
              />

              <TextInput
                style={globalstyles.stext}
                placeholder={"Evening Milk"}
                underlineColorAndroid="transparent"
                keyboardType="numeric"
                value={evening}
                onChangeText={(text) => setEvening(text)}
              />

              <TextInput
                style={globalstyles.stext}
                placeholder={"House Number/Name"}
                underlineColorAndroid="transparent"
                value={house}
                onChangeText={(text) => setHousenameorno(text)}
              />

              <TextInput
                style={globalstyles.stext}
                placeholder={"Society"}
                underlineColorAndroid="transparent"
                value={society}
                onChangeText={(text) => setSociety(text)}
              />

              <TextInput
                style={globalstyles.stext}
                placeholder={"Pincode"}
                // underlineColorAndroid='transparent'
                keyboardType="numeric"
                value={pincode}
                onChangeText={(text) => setPincode(text)}
              />

              <TouchableOpacity
                style={globalstyles.sbutton}
                onPress={handlesubmit}
              >
                <View>
                  <Text style={globalstyles.buttontext}>Save Changes</Text>
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
    backgroundColor: "rgba(0,170,254,0.0)",
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
    borderColor: "rgba(56,170,254,0.9)",
    marginTop: 10,
    marginHorizontal: 10,
    borderBottomWidth: 0.5,
  },
});

export default EditCustomer;
