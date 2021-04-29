import React, { useContext, useState, useEffect } from "react";
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
import Loading from "./Loading";
import { ManagerContext } from "../context/ManagerContext";

const EditDeliveryboy = () => {
  const [deliveryboydata, setDeliveryboydata] = useState("");
  const { currentselecteddelivery } = useContext(ManagerContext);
  const [loading, setLoading] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState();
  const [address, setAddress] = useState();
  const [submit, setSubmit] = useState(false);

  const delivery = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    mobileno: mobileno,
    address: address,
    _id: currentselecteddelivery,
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://managedairy.herokuapp.com/delivery/${currentselecteddelivery}`,
      {
        method: "GET",
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setDeliveryboydata(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setFirstname(deliveryboydata.firstname);
    setLastname(deliveryboydata.lastname);
    setEmail(deliveryboydata.email);
    setAddress(deliveryboydata.address);
    setMobileno(deliveryboydata.mobileno);
  }, [deliveryboydata]);

  const handlesubmit = () => {
    setLoading(true);
    fetch(`https://managedairy.herokuapp.com/delivery/updatedata`, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(delivery),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  if (loading) {
    return <Loading />;
  } else {
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
                  Enter The Details to add Edit Deliveryboy
                </Text>

                <TextInput
                  style={globalstyles.stext}
                  placeholder={"Enter Firstname"}
                  underlineColorAndroid="transparent"
                  onChange={(text) => setFirstname(text)}
                  value={firstname}
                />

                <TextInput
                  style={globalstyles.stext}
                  placeholder={"Enter Lastname"}
                  underlineColorAndroid="transparent"
                  onChange={(text) => setLastname(text)}
                  value={lastname}
                />

                <TextInput
                  style={globalstyles.stext}
                  placeholder={"Enter Email"}
                  underlineColorAndroid="transparent"
                  onChange={(text) => setEmail(text)}
                  value={email}
                />

                <TextInput
                  style={globalstyles.stext}
                  placeholder={"Enter Mobile Number"}
                  underlineColorAndroid="transparent"
                  onChange={(text) => setMobileno(text)}
                  keyboardType="numeric"
                  value={mobileno}
                />

                <TextInput
                  style={globalstyles.stext}
                  placeholder={"House Number/Name"}
                  underlineColorAndroid="transparent"
                  onChange={(text) => setAddress(text)}
                  value={address}
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
  }
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

  stext: {
    // flex:1,
    marginTop: 7,
    height: 40,
    width: 300,
    // borderBottomWidth:1,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: "rgba(0,150,254,0.1)",
    marginHorizontal: 25,
    paddingLeft: 25,
    marginTop: 20,
    color: "#111",
  },
});

export default EditDeliveryboy;
