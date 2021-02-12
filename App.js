import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { StyleSheet, View } from "react-native";

import * as Font from "expo-font";
import { globalstyles } from "./styles/Global";

import Login from "./screen/Login";
import ProfileActivate from "./screen/ProfileActivate";
import SignUp from "./screen/SignUp";
import Manager from "./screen/Manager";

import ViewProfile from "./screen/Myprofile";
import NavigatorManager from "./routes/Drawer";
import NavigatorCustomer from "./customerroutes/Customerdrawer";
import NavigatorDelivery from "./deliveryroutes/Deliverydrawer";
import Usercontextprovider, { UserContext } from "./context/Usercontext";

const state = "iscustomer";
const isloggedin = false;

export default function App() {
  if (state == "ismanager") {
    return isloggedin ? <NavigatorManager /> : <SignUp />;
  } else if (state == "iscustomer") {
    return isloggedin ? <NavigatorCustomer /> : <Usercontextprovider><Login /></Usercontextprovider>;
  } else if (state == "isdeliveryboy") {
    return isloggedin ? <NavigatorDelivery /> : <Usercontextprovider><Login /></Usercontextprovider>;
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
