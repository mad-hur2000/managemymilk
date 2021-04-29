import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Button,
} from "react-native";

import { globalstyles } from "../styles/Global";
import bgimage from "../assets/bgimage3.jpg";
import { StyleSheet } from "react-native";
import { ManagerContext } from "../context/ManagerContext";
import Loading from "./Loading";
import { UserContext } from "../context/Usercontext";

const Manager = ({ navigation }) => {
  const { id } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [customer, setCustomer] = useState();
  const [product, setProduct] = useState();
  const [delivery, setDelivery] = useState();

  const {
    setCurrentselectedcustomer,
    setCurrentselectedproduct,
    setCurrentselecteddelivery,
    managerid,
  } = useContext(ManagerContext);

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://managedairy.herokuapp.com/manager/dashboarddata", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ _id: id }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCustomer(data.customers);
        setProduct(data.product);
        setDelivery(data.delivery);
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("https://managedairy.herokuapp.com/manager/dashboarddata", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ _id: id }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCustomer(data.customers);
        setProduct(data.product);
        setDelivery(data.delivery);
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, [refresh]);

  const Refreshbutton = () => {
    setRefresh(!refresh);
  };

  console.log(refresh);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <ImageBackground source={bgimage} style={globalstyles.imagecontainer}>
        <TouchableOpacity style={styles.button} onPress={Refreshbutton}>
          <Text>Refresh</Text>
        </TouchableOpacity>
        <ScrollView>
          <Text
            style={{
              backgroundColor: "rgba(0,150,254,0.8)",
              fontWeight: "bold",
            }}
          >
            {" "}
            Customers
          </Text>

          <FlatList
            keyExtractor={(item) => item._id}
            data={customer}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setCurrentselectedcustomer(item._id);
                  navigation.navigate("ShowCustomer", item);
                }}
              >
                <View style={styles.card}>
                  <Text style={styles.cardtextname}> Name : {item.name}</Text>
                  <View style={styles.milktext}>
                    <Text style={styles.cardtextmilk}>
                      {" "}
                      Morning : {item.morning}
                    </Text>
                    <Text style={{ flex: 3 }}>Evening : {item.evening}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />

          <Text
            style={{
              backgroundColor: "rgba(0,150,254,0.8)",
              fontWeight: "bold",
            }}
          >
            {" "}
            Delivery Men
          </Text>

          <FlatList
            keyExtractor={(item) => item._id}
            data={delivery}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setCurrentselecteddelivery(item._id);
                  navigation.navigate("ShowDeliveryboy", item);
                }}
              >
                <View style={styles.card}>
                  <Text style={styles.cardtextname}>
                    {" "}
                    Name : {`${item.firstname} ${item.lastname}`}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />

          <Text
            style={{
              backgroundColor: "rgba(0,150,254,0.8)",
              fontWeight: "bold",
            }}
          >
            {" "}
            Products
          </Text>

          <FlatList
            keyExtractor={(item) => item._id}
            data={product}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setCurrentselectedproduct(item._id);
                  navigation.navigate("ShowProduct", item);
                }}
              >
                <View style={styles.card}>
                  <Text style={styles.cardtextname}>
                    {" "}
                    Product Name : {item.productname}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  cardtextname: {
    fontSize: 20,
    borderBottomWidth: 0.2,
    borderColor: "rgba(0,150,254,0.8)",
  },

  card: {
    height: 70,
    width: "100%",
    borderRadius: 5,
    // marginHorizontal: "1%",
    borderColor: "rgba(56,170,254,0.9)",
    borderBottomWidth: 2,
    marginTop: 2,
    backgroundColor: "rgba(0,150,254,0.0)",
    opacity: 1,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },

  cardtextmilk: {
    flex: 1,
    marginLeft: 5,
  },

  milktext: {
    flexDirection: "row",
  },
});

export default Manager;
