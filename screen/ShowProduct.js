import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Entypo from "react-native-vector-icons/Entypo";
import bgimage from "../assets/bgimage3.jpg";
import logo from "../assets/logo.png";
import { ManagerContext } from "../context/ManagerContext";
import { globalstyles } from "../styles/Global";
import Loading from "./Loading";

const ShowProduct = ({ navigation }) => {
  const { currentselectedproduct } = useContext(ManagerContext);
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://managedairy.herokuapp.com/product/${currentselectedproduct}`,
      {
        method: "GET",
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);

  const handledeletion = () => {
    axios
      .delete(
        `https://managedairy.herokuapp.com/product/delete/${currentselectedproduct}`
      )
      .then((response) => response.json())
      .then((data) => {
        setMessage(data);
      })
      .catch((err) => console.log(err));
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <ImageBackground source={bgimage} style={globalstyles.imagecontainer}>
        <View style={styles.titlecontainer}>
          <Text style={styles.nametext}>{product.productname}</Text>
          <TouchableOpacity>
            <Entypo
              name={"cup"}
              size={26}
              style={styles.editprofilebutton}
              onPress={handledeletion}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo
              name={"edit"}
              size={26}
              onPress={() => navigation.navigate("EditProduct")}
              style={styles.editprofilebutton}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.tablebox}>
          <Image source={logo} style={styles.profilepic} />
          <View style={styles.detailbox}>
            <Text style={styles.milktext}>Discription</Text>
            <Text style={styles.milktext1}>{product.description}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  nametext: {
    flex: 1,
    marginTop: 10,
    fontSize: 22,
    color: "#111",
    alignItems: "center",
    marginHorizontal: 8,
    justifyContent: "center",
  },

  profilepic: {
    backgroundColor: "rgba(0,170,254,0.1)",
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    borderRadius: 150,
  },

  detailbox: {
    marginTop: 7,
    height: 320,
    width: 320,
    fontSize: 16,
    backgroundColor: "rgba(0,150,254,0.2)",
    marginTop: 40,
    borderRadius: 25,
    alignItems: "flex-start",
  },

  milktext: {
    fontSize: 17,
    marginHorizontal: 7,
    marginTop: 12,
    alignSelf: "center",
  },

  milktext1: {
    fontSize: 17,
    marginHorizontal: 7,
    marginTop: 12,
  },

  titlecontainer: {
    flex: 1,
    marginTop: 5,
    fontSize: 28,
    borderRadius: 3,
    backgroundColor: "rgba(0,150,254,0.7)",
    color: "#111",
    flexDirection: "row",
    marginHorizontal: 4,
  },

  editprofilebutton: {
    height: 34,
    width: 50,
    marginRight: 10,

    borderRadius: 140,
    textAlign: "center",
    backgroundColor: "rgba(0,150,254,0.7)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    color: "#000",
  },

  tablebox: {
    flex: 12,
    borderRadius: 3,
    marginHorizontal: 4,
    marginTop: 4,
    marginBottom: 8,
    alignItems: "center",
  },
});

export default ShowProduct;
