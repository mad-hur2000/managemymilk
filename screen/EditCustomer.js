
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
  const { currentselectedcustomer  } = useContext(ManagerContext);
  const [ loading , setLoading ] = useState(false);
  const [ profiledata , setProfiledata ] = useState() 

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
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://managedairy.herokuapp.com/customer/getdata", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ email : currentselectedcustomer }),
    })
      .then((response) => response.json())
      .then((data) => {
        setProfiledata(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("https://managedairy.herokuapp.com/customer/updatedata", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ customer : customer , email : currentselectedcustomer }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  } , [ update ]);

  console.log(currentselectedcustomer)
  console.log(message)

  const [ update , setUpdate ] = useState(false);

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
                  value = {profiledata.Name}
                  onChangeText={(text) => setName(text)}
                />

                <TextInput
                  style={globalstyles.stext}
                  placeholder={"Enter Email"}
                  underlineColorAndroid="transparent"
                  value = {profiledata.Email}
                  onChangeText={(text) => setEmail(text)}
                />

                <TextInput
                  style={globalstyles.stext}
                  placeholder={"Enter Mobile Number"}
                  underlineColorAndroid="transparent"
                  keyboardType="numeric"
                  value = {profiledata.MobileNo}
                  onChangeText={(text) => setMobileno(text)}
                />

                <TextInput
                  style={globalstyles.stext}
                  placeholder={"Morning Milk"}
                  underlineColorAndroid="transparent"
                  keyboardType="numeric"
                  value = {profiledata.Morningquantity}
                  onChangeText={(text) => setMorning(text)}
                />

                <TextInput
                  style={globalstyles.stext}
                  placeholder={"Evening Milk"}
                  underlineColorAndroid="transparent"
                  keyboardType="numeric"
                  value = {profiledata.Eveningquantity}
                  onChangeText={(text) => setEvening(text)}
                />

                <TextInput
                  style={globalstyles.stext}
                  placeholder={"House Number/Name"}
                  underlineColorAndroid="transparent"
                  value = {profiledata.Housedetail}
                  onChangeText={(text) => setHousenameorno(text)}
                />

                <TextInput
                  style={globalstyles.stext}
                  placeholder={"Society"}
                  underlineColorAndroid="transparent"
                  value = {profiledata.Society}
                  onChangeText={(text) => setSociety(text)}
                />

                <TextInput
                  style={globalstyles.stext}
                  placeholder={"Pincode"}
                  // underlineColorAndroid='transparent'
                  keyboardType="numeric"
                  value = {profiledata.Pincode}
                  onChangeText={(text) => setPincode(text)}
                />

                <TouchableOpacity style={globalstyles.sbutton} onPress={() => setUpdate(true)} disabled = { loading ? true : false }>
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
    borderColor:'rgba(56,170,254,0.9)',
    marginTop: 10,
    marginHorizontal: 10,
    borderBottomWidth: 0.5,
  },


});

export default EditCustomer;
