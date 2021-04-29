import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
  navigate,
} from "react-native";
import ViewProfile from "./Myprofilecustomer";

import { globalstyles } from "../styles/Global";
import bgimage from "../assets/bgimage3.jpg";
import ShowCustomer from "../screen/ShowCustomer";
import { StyleSheet } from "react-native";
import { UserContext } from "../context/Usercontext";

const Customer = ({ navigation }) => {
  const { id } = useContext(UserContext)
  const [ morning , setMorning ] = useState();
  const [ evening , setEvening ] = useState();
  const [ data ,setData ] = useState({});

  useEffect(() => {
    setMorning(data.morning);
    setEvening(data.evening);
  } , [data])

  const [customer, setCustomer] = useState([
    {
      date: "madhur mu",
      morningMilk: 2,
      eveningMilk: 3,
      houseName_No: "295-A",
      street: "11",
      society: "Raijibaug",
      city: "Junagadh",
      state: "Gujarat",
    },
  ]);

  useEffect(() => {
    fetch(`https://managedairy.herokuapp.com/customer/dashboard/${id}/${new Date}`, {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((output) => {
        setData(output);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  } , [])

  const handlesubmit = () => {
    setLoading(true);
    const passingobject = {
      id : id,
      date : new Date(),
      morning : morning,
      evening : evening
    }
    fetch("https://managedairy.herokuapp.com/customer/dashboard", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(passingobject),
    })
      .then((response) => response.json())
      .then((output) => {
        setData(output);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <ImageBackground source={bgimage} style={globalstyles.imagecontainer}>
      <View style={styles.titlecontainer}>
        <Text style={styles.titletext}>Today's Milk</Text>
      </View>

      <View style={styles.workingcontainer}>
        {/* <View> */}
        <Text style={styles.text}>Morning :</Text>
        <TextInput
          style={styles.entermilk}
          placeholder={`Morning milk`}
          // placeholderTextColor= { 'rgba(225,225,225,0.7)'}
          underlineColorAndroid="transparent"
          keyboardType="numeric"
          value = {morning}
          onChange={(text) => setMorning(text)}
        />
        <Text style={styles.text}>Evening :</Text>
        <TextInput
          style={styles.entermilk}
          placeholder={`Evening milk`}
          // placeholderTextColor= { 'rgba(225,225,225,0.7)'}
          underlineColorAndroid="transparent"
          keyboardType="numeric"
          value={evening}
          onChange={(text) => setEvening(text)}
        />
        {/* </View> */}
      </View>
      <TouchableOpacity style={styles.sbutton} onPress={handlesubmit}>
        <View>
          <Text style={styles.buttontext}>Submit</Text>
        </View>
      </TouchableOpacity>

      <TextInput
        style={styles.Reportcontainer}
        placeholder={`Report Here`}
        underlineColorAndroid="transparent"
        multiline
      />

      <TouchableOpacity style={styles.sbutton}>
        <View>
          <Text style={styles.buttontext}>Report</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.productcontainer}>Product Advertise</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  titlecontainer: {
    height: 40,
    width: "100%",
    marginTop: 7,
    backgroundColor: "rgba(0,150,254,0.7)",
    flexDirection: "row",
    marginHorizontal: 2,
  },
  productcontainer: {
    height: 80,
    width: "100%",
    marginTop: 150,
    borderRadius: 3,
    backgroundColor: "rgba(0,150,254,0.2)",
    color: "#111",
    flexDirection: "row",
    marginHorizontal: 2,
  },

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
    marginTop:25,
    color: "white",
  },

  buttontext: {
    color: "#333",
  },

  titletext: {
    flex: 1,
    marginTop: 6,
    fontSize: 22,
    color: "#000",
    alignItems: "center",
    marginHorizontal: 8,
    justifyContent: "center",
    fontWeight:'bold',
    textAlign: "center",
  },
  workingcontainer: {
    height: 90,
    flexDirection: "row",
    justifyContent: "center",
  },
  Reportcontainer: {
    marginTop: 80,
    height: 100,
    width: "100%",
    borderRadius: 8,
    backgroundColor: "rgba(0,150,254,0.1)",
    color: "#111",
    fontSize: 16,
  },

  text: {
    flex: 1,
    marginTop: 16,
    fontSize: 14,
    color: "#222",
    alignItems: "center",
    marginHorizontal: 8,
    justifyContent: "center",
    textAlign: "center",
  },
  entermilk: {
    height: 40,
    width: 90,
    marginTop: 7,
    borderRadius: 3,
    backgroundColor: "rgba(0,150,254,0.2)",
    color: "#111",
    flexDirection: "row",
    marginHorizontal: 4,
    textAlign: "center",
  },
});

export default Customer;
