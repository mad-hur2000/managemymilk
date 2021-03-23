import { StatusBar } from "expo-status-bar";
import React, { Component, useState, useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import Login from "../screen/Login";
import SignUp from "../screen/SignUp";

import NavigatorManager from "../routes/Drawer";
import NavigatorCustomer from "../customerroutes/Customerdrawer";
import NavigatorDelivery from "../deliveryroutes/Deliverydrawer";

import { UserContext } from "../context/Usercontext";
import Loading from "../screen/Loading";
import { ManagerContext } from "../context/ManagerContext";

const state = "isdelivery";

export default function Handler() {
  const {
    isloggedin,
    normalnumber,
    setNormalnumber,
    setIsloggedin,
    role,
  } = useContext(UserContext);
  const { setPhone } = useContext(ManagerContext);

  const checklogin = async () => {
    if (role) {
      setIsloggedin(true);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("phone");
      console.log(value);
      if (value !== null) {
        setNormalnumber(value);
        checklogin();
      } else {
        setIsloggedin(false);
      }
    } catch (e) {
      setIsloggedin(false);
      alert(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (normalnumber) {
    setPhone(normalnumber);
  }

  if (!isloggedin) {
    return <Login />;
  } else {
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
