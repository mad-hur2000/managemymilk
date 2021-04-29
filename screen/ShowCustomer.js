import React, { useState, useEffect, useContext } from "react";
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
import Entypo from "react-native-vector-icons/Entypo";
import { ManagerContext } from "../context/ManagerContext";
import Loading from "./Loading";

const ShowCustomer = ({ navigation }) => {
  const [shoulddelete, setShoulddelete] = useState(false);
  const { currentselectedcustomer } = useContext(ManagerContext);
  const [message, setMessage] = useState("");
  console.log(currentselectedcustomer, "selected customer");
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://managedairy.herokuapp.com/customer/${currentselectedcustomer}`,
      {
        method: "DELETE",
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    )
      .then((res) => res.json())
      .then((done) => {
        setRecords(done);
        setMessage(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`https://managedairy.herokuapp.com/customer/delete`, {
      method: "DELETE",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ _id: currentselectedcustomer }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [shoulddelete]);

  const handledelete = () => {
    setShoulddelete(true);
  };

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

  if (loading) {
    return <Loading />;
  } else {
    return (
      <ImageBackground source={bgimage} style={globalstyles.imagecontainer}>
        <View style={styles.titlecontainer}>
          <Text style={styles.nametext}> Statistics</Text>
          <TouchableOpacity>
            <Entypo
              name={"cup"}
              size={26}
              style={styles.editprofilebutton}
              onPress={handledelete}
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
            keyExtractor={(records) => records._id}
            data={records}
            style={{ flex: 15 }}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.carddate}> Date : {item.date}</Text>

                <Text style={styles.milktext}>M : {item.morning}</Text>
                <Text style={styles.milktext}>E : {item.evening}</Text>
                <Text style={styles.milktext}>
                  Total : {(item.morning + item.evening) * 70}
                </Text>
              </View>
            )}
          />
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
    // backgroundColor: "rgba(0,0,0,0.1)",
  },

  card: {
    flex: 1,
    flexDirection: "row",
    height: 40,
    width: "98%",
    borderColor: "rgba(56,170,254,0.9)",
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
