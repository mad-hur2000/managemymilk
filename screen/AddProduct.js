import React, { useState, useContext, useEffect } from "react";
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
import { UserContext } from "../context/Usercontext";

const AddProduct = () => {
  const { id } = useContext(UserContext);
  const [submit, setSubmit] = useState(false);

  const [productname, setProductname] = useState("");
  const [description, setDescription] = useState("");

  const [message, setMessage] = useState([]);
  console.log("this is addproduct", id);
  const product = {
    productname: productname,
    description: description,
    _id: id,
  };

  useEffect(() => {
    fetch("https://managedairy.herokuapp.com/product/create", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data);
      })
      .catch((err) => console.log(err));
  }, [submit]);

  const handlesubmit = () => {
    if (productname == "") {
      setMessage([...message, "enter valid name"]);
    } else if (description == "") {
      setMessage([...message, "enter valid description"]);
    } else {
      setSubmit(!submit);
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
                Enter The Details to add New Product
              </Text>

              <TextInput
                style={styles.stext}
                placeholder={"Enter Name"}
                underlineColorAndroid="transparent"
                onChangeText={(text) => setProductname(text)}
              />

              <Image placeholder="add Image"></Image>

              <TextInput
                style={styles.stext1}
                placeholder={"Add Description"}
                underlineColorAndroid="transparent"
                multiline
                onChangeText={(text) => setDescription(text)}
              />

              <TouchableOpacity style={globalstyles.sbutton}>
                <View>
                  <Text style={globalstyles.buttontext}>Upload Image</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={globalstyles.sbutton}
                onPress={handlesubmit}
              >
                <View>
                  <Text style={globalstyles.buttontext}>
                    Create New Product
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
    borderColor: "rgba(56,170,254,0.9)",
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

  stext1: {
    marginTop: 7,
    height: 80,
    width: 300,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: "rgba(0,150,254,0.1)",
    marginHorizontal: 25,
    paddingLeft: 25,
    marginTop: 20,
    color: "#111",
  },
});

export default AddProduct;
