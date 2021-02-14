import { StatusBar } from "expo-status-bar";
import React, { Component, useState, useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import Login from "../screen/Login";
import SignUp from "../screen/SignUp";

import NavigatorManager from "../routes/Drawer";
import NavigatorCustomer from "../customerroutes/Customerdrawer";
import NavigatorDelivery from "../deliveryroutes/Deliverydrawer";

import Usercontextprovider, { UserContext } from "../context/Usercontext";
import { ManagerContext } from '../context/Managercontext';

import Loading from "../screen/Loading";

const state = "isdelivery";

export default function Handler() {
  const { isloggedin, normalnumber , role , loading } = useContext(UserContext);
  const { setPhone  } = useContext(ManagerContext);
  
  if(normalnumber)
  {
      setPhone(normalnumber);
  }
 
  if(!isloggedin) {
    return <Login />
  }
  else{
    if (role.ismanager) {
      return isloggedin ? <NavigatorManager /> : <SignUp />;
    } else if (role.iscustomer) {
      return isloggedin ? <NavigatorCustomer /> : <Login />;
    } else if (role.isdelivery) {
      return isloggedin ? <NavigatorDelivery /> : <Login />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
