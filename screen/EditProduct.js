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
import { ManagerContext } from "../context/ManagerContext";
import Loading from "./Loading";
import axios from "axios";

const EditProduct = () => {
  const { currentselectedproduct } = useContext(ManagerContext);
  console.log(currentselectedproduct);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState("");

  const [submit, setSubmit] = useState(false);
  const [productname, setProductname] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  console.log(product);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://managedairy.herokuapp.com/product/${currentselectedproduct}`,
      {
        method: "GET",
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProduct(data);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    setProductname(product.productname);
    setDescription(product.description);
  }, [product]);

  const latestproduct = {
    productname: productname,
    description: description,
    _id: currentselectedproduct,
  };

  console.log(latestproduct);

  useEffect(() => {
    setLoading(true);
    fetch("https://managedairy.herokuapp.com/product/updatedata", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(latestproduct),
    })
      .then((response) => {
        response.json();
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [submit]);

  const handlesubmit = () => {
    setSubmit(true);
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
                  Enter The Details to add Edit Product
                </Text>

                <TextInput
                  style={styles.stext}
                  placeholder={"Enter Name"}
                  underlineColorAndroid="transparent"
                  onChangeText={(text) => setProductname(text)}
                  value={productname}
                />

                <Image placeholder="add Image"></Image>

                <TextInput
                  style={styles.stext1}
                  placeholder={"Add Description"}
                  underlineColorAndroid="transparent"
                  multiline
                  onChangeText={(text) => setDescription(text)}
                  value={description}
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
    borderColor: "rgba(0,150,254,0.2)",
  },

  stext: {
    // flex:1,
    marginTop: 7,
    height: 40,
    width: 300,
    // borderBottomWidth:1,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: "rgba(0,150,254,0.2)",
    marginHorizontal: 25,
    paddingLeft: 25,
    marginTop: 20,
    color: "#bbb",
  },

  stext1: {
    marginTop: 7,
    height: 60,
    width: 300,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: "rgba(0,150,254,0.2)",
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

export default EditProduct;
