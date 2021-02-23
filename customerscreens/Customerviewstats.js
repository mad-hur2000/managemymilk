import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { ListItem, navigation, navigate } from "react-native-elements";
import { globalstyles } from "../styles/Global";
import bgimage from "../assets/bgimage3.jpg";

const Customerviewstats = ({ navigation }) => {
  const [customer, setCustomer] = useState([
    {
      date: "12-12-2020",
      name: "madhur mungra",
      morningMilk: 2,
      eveningMilk: 1,
    },
    {
      date: "12-12-2020",
      name: "Nisarg mungra",
      morningMilk: 2,
      eveningMilk: 1,
    },
    { date: "12-12-2020", name: "akdjslka", morningMilk: 2, eveningMilk: 1 },
    {
      date: "12-12-2020",
      name: "Nsdklfg munskadlfgra",
      morningMilk: 2,
      eveningMilk: 1,
    },
    { date: "12-12-2020", name: "djsa mungra", morningMilk: 2, eveningMilk: 1 },
    {
      date: "12-12-2020",
      name: "Ndjsarg mungra",
      morningMilk: 2,
      eveningMilk: 1,
    },
    {
      date: "12-12-2020",
      name: "Nsdjsarg mungra",
      morningMilk: 2,
      eveningMilk: 1,
    },
    {
      date: "12-12-2020",
      name: "madhur mungra",
      morningMilk: 2,
      eveningMilk: 1,
    },
    {
      date: "12-12-2020",
      name: "Nisarg mungra",
      morningMilk: 2,
      eveningMilk: 1,
    },
    { date: "12-12-2020", name: "akdjslka", morningMilk: 2, eveningMilk: 1 },
    {
      date: "12-12-2020",
      name: "Nsdklfg munskadlfgra",
      morningMilk: 2,
      eveningMilk: 1,
    },
    { date: "12-12-2020", name: "djsa mungra", morningMilk: 2, eveningMilk: 1 },
    {
      date: "12-12-2020",
      name: "Ndjsarg mungra",
      morningMilk: 2,
      eveningMilk: 1,
    },
    {
      date: "12-12-2020",
      name: "Nsdjsarg mungra",
      morningMilk: 2,
      eveningMilk: 1,
    },
    {
      date: "12-12-2020",
      name: "Ndjsag mungra",
      morningMilk: 2,
      eveningMilk: 1,
    },
  ]);

  return (
    <ImageBackground source={bgimage} style={globalstyles.imagecontainer}>
      <View style={styles.titlecontainer}>
        <Text style={styles.nametext}>{customer[0].name}</Text>
      </View>

      <View style={styles.tablebox}>
        <FlatList
          keyExtractor={(item) => item.Email}
          data={customer}
          style={{ flex: 15 }}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.carddate}> Date : {item.date}</Text>

              <Text style={styles.milktext}>M : {item.morningMilk}</Text>
              <Text style={styles.milktext}>E : {item.eveningMilk}</Text>
              <Text style={styles.milktext}>
                Total : {(item.morningMilk + item.eveningMilk) * 70}
              </Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  nametext: {
    flex: 1,
    marginTop: 6,
    fontSize: 22,
    color: "#111",
    fontWeight:'bold',
    alignItems: "center",
    marginHorizontal: 8,
    justifyContent: "center",
  },

  milktext: {
    fontSize: 15,
    marginHorizontal: 9,
    borderBottomWidth: 0.2,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    height: 40,
    width: "98%",
    borderColor:'rgba(56,170,254,0.9)',
    borderRadius: 5,
    marginHorizontal: "1%",
    borderBottomWidth: 0.5,
    marginTop: 2,
    backgroundColor: "rgba(56,170,254,0.0)",
    opacity: 1,
    alignItems: "center",
  },

  carddate: {
    flex: 1,
    marginLeft: 5,
  },

  tabletext: {
    flexDirection: "row",
  },

  titlecontainer: {
    flex: 1,
    marginTop: 7,
    fontSize: 28,
    borderRadius: 3,
    backgroundColor: "rgba(0,150,254,0.7)",
    color: "#111",
    flexDirection: "row",
    marginHorizontal: 4,
  },

  tablebox: {
    flex: 12,
    marginHorizontal: 4,
    marginTop: 4,
    marginBottom: 8,
    
  },

 });

export default Customerviewstats;
