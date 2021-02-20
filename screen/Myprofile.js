import React, { useEffect , useContext , useState } from "react";
import bgimage from "../assets/bgimage3.jpg";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  Keyboard,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import globalstyles from "../styles/Global";
import logo from "../assets/logo.png";
import {ManagerContext} from '../context/ManagerContext'
import Loading from "./Loading";


const Myprofilemanager = () => {
  const { phone , profile , setProfile } = useContext(ManagerContext);
  const [ loading , setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://managedairy.herokuapp.com/manager/profile", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ phone : phone }),
    })
      .then((response) => response.json())
      .then((data) => { setProfile(data) ; setLoading(false); console.log(profile); })
      .catch((err) => console.log(err));
  }, []);

  if(profile)
  {
    const { firstname , lastname , Email , MobileNo , Address  } = profile;
    return (
      <ImageBackground source={bgimage} style={styles.imagecontainer}>
        <View style={styles.box}>
          <Image source={logo} style={styles.profilepic} />
          <Text style={styles.titletext}>{firstname}</Text>
          <Text style={styles.titletext}>{lastname}</Text>

          <View style={styles.detailbox}>
            <Text style={styles.text}>Email: {Email}</Text>
            <Text style={styles.text}>Mobile No: {MobileNo}</Text>
            <Text style={styles.text} multiline>
              Address:{Address}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
  else{
    return <Loading />
  }
};

const styles = StyleSheet.create({
  box: {
    height: "100%",
    width: "100%",
    fontSize: 16,
    backgroundColor: "rgba(0,0,0,0.2)",
    marginTop: 10,
    borderRadius: 25,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imagecontainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: "rgba(255,255,255,0.4)",
    opacity: 0.7,
  },

  text: {
    marginTop: 14,
    fontSize: 20,
    height: 30,
    color: "#fff",
    alignItems: "center",
    marginHorizontal: 8,
    justifyContent: "center",
    // borderBottomWidth:0.5,

    textAlign: "center",
  },

  titletext: {
    alignContent: "center",
    justifyContent: "center",
    color: "#eee",
    fontSize: 28,
    marginTop: 10,
    // marginLeft:12,
  },

  profilepic: {
    backgroundColor: "blue",
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 120,
    marginTop: 20,
    borderRadius: 150,
  },
  detailbox: {
    backgroundColor: "rgba(255,255,255,0.4)",
    width: 340,
    height: 300,
    marginTop: 5,

    alignItems: "flex-start",
  },

  buttontext: {
    color: "#bbb",
  },

  lasttext: {
    color: "#ccc",
    marginTop: 15,
    alignItems: "center",
    alignSelf: "center",
  },
});

export default Myprofilemanager;
