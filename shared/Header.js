import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import { openDrawer } from "@react-navigation/drawer";


export default function Header({navigation,title}) {
  const openmenu=()=>{
    navigation.openDrawer();
  }
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.iconmenu}  >
      <Entypo name={"menu"} size={26} onPress={openmenu}/>
      </TouchableOpacity>
      <View>
        <Text style={styles.headertext}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  headertext: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1,
  },
  iconmenu: {
    position: "absolute",
    left: 0,
  },
});
