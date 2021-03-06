import { StatusBar } from "expo-status-bar";
import React, { Component, useState, useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import Login from "./screen/Login";
import SignUp from "./screen/SignUp";

import NavigatorManager from "./routes/Drawer";
import NavigatorCustomer from "./customerroutes/Customerdrawer";
import NavigatorDelivery from "./deliveryroutes/Deliverydrawer";
import Usercontextprovider from "./context/Usercontext";
import Managercontextprovider from "./context/ManagerContext";
import Handler from "./handler/Handler";
import Managerstack from "./routes/Managerstack";
import { NavigationContainer } from "@react-navigation/native";
import Myprofile from './screen/Myprofile'
import Addcustomer from './screen/AddCustomer'


export default function App() {
  return (
   
      <Usercontextprovider>
        <Managercontextprovider>
          <Handler />
        </Managercontextprovider>
      </Usercontextprovider>
   
   
      // <NavigatorCustomer></NavigatorCustomer>
      // <NavigatorDelivery></NavigatorDelivery>
      // <NavigatorManager></NavigatorManager>
    
    // <Myprofile />
    // <Addcustomer></Addcustomer>
    // <Login></Login>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
