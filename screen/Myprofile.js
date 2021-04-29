import React, { useEffect, useContext, useState } from "react";
import bgimage from "../assets/bgimage3.jpg";
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native";
import logo from "../assets/logo.png";
import Loading from "./Loading";
import { UserContext } from "../context/Usercontext";

const Myprofilemanager = () => {
  const { id } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [profiledata, setProfiledata] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://managedairy.herokuapp.com/manager/profile", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ _id: id }),
    })
      .then((response) => response.json())
      .then((data) => {
        setProfiledata(data);
        console.log(profiledata);
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <ImageBackground source={bgimage} style={styles.imagecontainer}>
        <View style={styles.box}>
          <Image source={logo} style={styles.profilepic} />
          <Text style={styles.titletext}>{profiledata.firstname}</Text>
          <Text style={styles.titletext}>{profiledata.lastname}</Text>

          <View style={styles.detailbox}>
            <Text style={styles.text}> Email: {profiledata.email}</Text>
            <Text style={styles.text}> Mobile No: {profiledata.mobileno}</Text>
            <Text style={styles.text1} multiline>
              Address: {profiledata.address}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  box: {
    height: "100%",
    width: "100%",
    fontSize: 16,
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
    width: "100%",
    color: "#111",
    marginHorizontal: 0,
    // borderBottomWidth:0.5,
    // borderColor: "rgba(0,170,254,0.5)",
    backgroundColor: "rgba(0,170,254,0.1)",
    textAlign: "left",
  },
  text1: {
    marginTop: 14,
    fontSize: 22,
    height: 80,
    width: "100%",
    color: "#111",
    marginHorizontal: 0,
    // borderBottomWidth:0.5,
    // borderColor: "rgba(0,170,254,0.5)",
    backgroundColor: "rgba(0,170,254,0.1)",
    textAlign: "left",
  },

  titletext: {
    alignContent: "center",
    justifyContent: "center",
    color: "black",
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
    borderTopWidth: 0.5,
    borderColor: "rgba(0,170,254,0.4)",
    width: 340,
    height: 300,
    marginTop: 5,

    alignItems: "flex-start",
  },
});

export default Myprofilemanager;
