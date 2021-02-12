import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const globalstyles = StyleSheet.create({
  imagecontainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: "rgba(255,255,255,0.4)",
    opacity: 0.7,
  },

  card: {
    height: 70,
    width: "98%",
    borderRadius: 5,
    marginHorizontal: "1%",
    borderBottomWidth: 0.5,
    marginTop: 2,
    backgroundColor: "rgba(255,255,255,0.8)",
    opacity: 1,
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
    color: "#bbb",
  },

  stext: {
    marginTop: 7,
    height: 40,
    width: 270,
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: "rgba(0,0,0,0.2)",
    marginHorizontal: 25,
    paddingLeft: 45,
    marginTop: 20,
    color: "#eee",
  },

  headcontainer: {
    flex: 1,
  },
  headertitle: {},
});
