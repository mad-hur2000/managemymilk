import { StatusBar } from "expo-status-bar";
import React, { Component, useState , useContext , useEffect } from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from '@react-native-community/async-storage'

import Login from "./screen/Login";
import SignUp from "./screen/SignUp";

import NavigatorManager from "./routes/Drawer";
import NavigatorCustomer from "./customerroutes/Customerdrawer";
import NavigatorDelivery from "./deliveryroutes/Deliverydrawer";
import Usercontextprovider from "./context/Usercontext";
import Managercontextprovider from './context/Managercontext'
import Handler from "./handler/Handler";
import Managerstack from "./routes/Managerstack";


export default function App() {

  return (
    // <Usercontextprovider>
    //   <Managercontextprovider>
    //     <Handler />
    //   </Managercontextprovider>
    // </Usercontextprovider>

    // this is only for testing purpose other wise functionality of authantication is working fine.
    <NavigatorManager />
    // <NavigatorDelivery />
    //<NavigatorCustomer />
  )

} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
