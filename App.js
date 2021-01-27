import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import Login from './Login';



export default function App() {
  return (
      <View style={styles.container}>
        <Login />

      </View>

      



  );
}


const styles = StyleSheet.create({
  container: {
    marginTop:100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // sbutton:{
  //   height:34,
  //   width:200,
  //   borderWidth:1,
  //   borderRadius:40,
  //   textAlign:"center",
  //   backgroundColor:"green",
  //   alignItems:"center",
  //   alignSelf:"center",
  //   justifyContent:"center",
  //   marginTop:"15%",
  //   alignContent:"center",
  //   alignItems:"center",
  //   alignSelf:"center",
  // },

  // stext:{
  //   marginTop:"4%",
  //   height:40,
  //   width:"80%",
  //   borderBottomWidth:1
  // },

  // logo:{
  //   backgroundColor:"red",
  //   height:40,
  //   width:40,
  //   position: 'relative',
  //   borderWidth:1,
  //   flex: 1,
  //   alignItems: 'center'

  // }


});
