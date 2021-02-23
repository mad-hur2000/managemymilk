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
    borderColor:'rgba(56,170,254,0.9)',
    borderBottomWidth: 0.5,
    marginTop: 2,
    backgroundColor: "rgba(0,150,254,0.0)",
    opacity: 1,
  },


  sbutton: {
    height: 34,
    width: 200,
    borderWidth: 1,
    borderRadius: 40,
    textAlign: "center",
    backgroundColor: "rgba(0,170,254,0.3)",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 25,
    color: "#111",
  },

  menubutton:{
    marginTop:10
  },

  buttontext: {
    color: "#111",
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

  headcontainer: {
    flex: 1,
  },
 
});
