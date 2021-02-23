import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
} from "react-native";
import { ListItem, navigation, navigate } from "react-native-elements";
import { globalstyles } from "../styles/Global";
import bgimage from "../assets/bgimage3.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TabRouter } from "react-navigation";
import Entypo from "react-native-vector-icons/Entypo";

const ShowCustomer = ({ navigation }) => {
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
        <Text style={styles.nametext}> Statistics</Text>
        <TouchableOpacity>
        <Entypo 
          name={"cup"} 
          size={26} 
          style={styles.editprofilebutton}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Entypo 
          name={"edit"} 
          size={26} 
          onPress={() => navigation.navigate("EditCustomer")} 
          style={styles.editprofilebutton}
        />
        </TouchableOpacity>
        
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
    marginTop: 10,
    fontSize: 22,
    color: "#111",
    alignItems: "center",
    marginHorizontal: 8,
    justifyContent: "center",
  },

  milktext: {
    fontSize: 15,
    marginHorizontal: 7,
    borderBottomWidth: 0.2,
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
    marginTop: 5,
    fontSize: 28,
    borderRadius: 3,
    backgroundColor: "rgba(0,150,254,0.7)",
    color: "#fff",
    flexDirection: "row",
    marginHorizontal: 4,
  },

  editprofilebutton: {
    height: 34,
    width: 50,
    marginRight:10,
    
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
    // backgroundColor: "rgba(0,0,0,0.1)",
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
});

export default ShowCustomer;
